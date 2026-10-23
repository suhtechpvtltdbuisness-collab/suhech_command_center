import { schema, OutputType } from "./send_POST.schema";
import superjson from "superjson";
import { sql } from "../../helpers/agentSql";
import { agentCore } from "../../helpers/agentCore";
import { getServerUserSession } from "../../helpers/getServerUserSession";
import { notifyConversation } from "../../helpers/realtimePublish";
import { resolveAttachmentRefs, appendPdfLines, OWNER_ATTACHMENT_PRINCIPAL } from "../../helpers/agentAttachments";

// Internal endpoint: superjson on the wire. Returns IMMEDIATELY — the agent runs
// entirely in background tasks; the browser learns the result over realtime.
export async function handle(request: Request): Promise<Response> {
  try {
    await getServerUserSession(request);

    const json = superjson.parse(await request.text());
    const valid = schema.parse(json);

    let conversationId = valid.conversationId;
    if (!conversationId) {
      const created = await sql`
        INSERT INTO agent_conversations (status) VALUES ('idle') RETURNING id
      `;
      conversationId = Number(created[0].id);
    }

    // Attachments: refs from messages/upload (presigned PUT — bytes never transit
    // this endpoint). Read URLs derived server-side; PDFs become [PDF n: url]
    // lines for the view_pdf tool; images ride imageUrls ([Image n: url] lines
    // for view_image). metadata.privateFiles is tracked so a history-replay
    // refresh pass can re-presign (see floot-agents-loop-internals).
    let text = valid.text;
    let imageUrls: string[] | undefined;
    let metadata: Record<string, unknown> | undefined;
    if (valid.attachments?.length) {
      const r = await resolveAttachmentRefs(OWNER_ATTACHMENT_PRINCIPAL, valid.attachments);
      if (!r.ok) {
        return new Response(superjson.stringify({ error: r.error }), { status: 400 });
      }
      text = appendPdfLines(text, r.resolved.pdfUrls);
      imageUrls = r.resolved.imageUrls.length ? r.resolved.imageUrls : undefined;
      metadata = { privateFiles: r.resolved.privateFiles };
    }

    await agentCore.enqueueUserMessage(conversationId, text, { imageUrls, metadata });

    await notifyConversation(conversationId);
    return new Response(superjson.stringify({ conversationId } satisfies OutputType));
  } catch (error) {
    return new Response(
      superjson.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 400 },
    );
  }
}
