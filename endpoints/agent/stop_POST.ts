import { schema, OutputType } from "./stop_POST.schema";
import superjson from "superjson";
import { sql } from "../../helpers/agentSql";
import { getServerUserSession } from "../../helpers/getServerUserSession";

export async function handle(request: Request): Promise<Response> {
  try {
    await getServerUserSession(request);

    const json = superjson.parse(await request.text());
    const { conversationId } = schema.parse(json);

    const convRows = await sql`SELECT id FROM agent_conversations WHERE id = ${conversationId}`;
    if (!convRows[0]) throw new Error("Conversation not found.");

    // Cancel running children (tables added by sub-skills; ignore if absent).
    try {
      await sql`
        UPDATE agent_subagent_runs SET status = 'error', error = 'Stopped by user', completed_at = NOW()
        WHERE conversation_id = ${conversationId} AND status = 'running'
      `;
    } catch { /* subagents skill not loaded */ }

    // CLEAR the staging queue so nothing gets injected after stop.
    await sql`DELETE FROM agent_message_queue WHERE conversation_id = ${conversationId}`;

    // Drop a dangling trailing model row that has tool_calls but no results.
    const lastRows = await sql`
      SELECT id, role, tool_calls FROM agent_messages
      WHERE conversation_id = ${conversationId} ORDER BY id DESC LIMIT 1
    `;
    const last = lastRows[0];
    if (last?.role === "model" && Array.isArray(last.tool_calls) && last.tool_calls.length > 0) {
      await sql`DELETE FROM agent_messages WHERE id = ${last.id}`;
    }

    // The abort signal: flip status away from 'processing'. An in-flight turn
    // aborts at its next status re-check (cooperative cancel).
    await sql`
      UPDATE agent_conversations SET status = 'idle', error_message = NULL, updated_at = NOW()
      WHERE id = ${conversationId}
    `;

    return new Response(superjson.stringify({ success: true } satisfies OutputType));
  } catch (error) {
    return new Response(
      superjson.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 400 },
    );
  }
}
