import { verifyMessage } from "./signMessage";

export const validateConversation = (conversation: any) => {
  if (conversation.length == 1) {
    return true;
  }

  const assistantReplies = conversation.filter(
    (c: { role: string }) => c.role === "assistant"
  );
  return assistantReplies.every((r: { id: string; content: string }) =>
    verifyMessage(r.content, r.id)
  );
};
