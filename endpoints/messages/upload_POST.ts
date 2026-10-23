// endpoints/messages/upload_POST.ts
//
// Presign an attachment upload for the owner surface. The client PUTs the bytes
// directly to presignedUrl (bytes never transit this endpoint), then references
// { storageFilename, contentType } in messages/send.
import { schema, OutputType } from "./upload_POST.schema";
import superjson from "superjson";
import { getServerUserSession } from "../../helpers/getServerUserSession";
import { mintAttachmentUpload, OWNER_ATTACHMENT_PRINCIPAL } from "../../helpers/agentAttachments";

export async function handle(request: Request): Promise<Response> {
  try {
    await getServerUserSession(request);
    const input = schema.parse(superjson.parse(await request.text()));
    const minted = await mintAttachmentUpload({
      principal: OWNER_ATTACHMENT_PRINCIPAL,
      filename: input.filename,
      contentType: input.contentType,
      sizeBytes: input.sizeBytes,
    });
    if (!minted.ok) {
      return new Response(superjson.stringify({ error: minted.error }), { status: 400 });
    }
    const output: OutputType = {
      presignedUrl: minted.presignedUrl,
      url: minted.url,
      storageFilename: minted.storageFilename,
      expiresAt: new Date(minted.expiresAt),
    };
    return new Response(superjson.stringify(output satisfies OutputType));
  } catch (error) {
    return new Response(
      superjson.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 400 },
    );
  }
}
