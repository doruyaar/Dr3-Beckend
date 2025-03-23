export const removeIdsFromConversation = (messages: Record<string, any>) => {
  return messages.map((m: { role: string; id?: string }) => {
      if (m.role === "assistant") {
        const { id, ...rest } = m;
        return rest;
      }
      return m;
  });
};