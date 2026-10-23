import { schema, OutputType } from "./reactivate_POST.schema";
import superjson from "superjson";
import { agentCore } from "../../helpers/agentCore";
import { getServerUserSession } from "../../helpers/getServerUserSession";
import { notifyConversation } from "../../helpers/realtimePublish";

export async function handle(request: Request): Promise<Response> {
  try {
    await getServerUserSession(request);

    const json = superjson.parse(await request.text());
    const valid = schema.parse(json);

    await agentCore.reactivateStalledAgent(valid.conversationId);

    await notifyConversation(valid.conversationId);
    return new Response(superjson.stringify({ success: true } satisfies OutputType));
  } catch (error) {
    return new Response(
      superjson.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 400 },
    );
  }
}
