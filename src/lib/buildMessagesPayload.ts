import { buildPrompt } from "./buildPrompt"
import { removeIdsFromConversation } from "./removeIdsFromConversation";

const buildFirstMessage = (message: string) => [{
  role: 'user',
  content: buildPrompt(message),
}]


const addNewMessageToConversation = (conversation: any, message: string) => {
  conversation = removeIdsFromConversation(conversation);
    const firstElement = conversation.shift();
    conversation.unshift({
        role: 'user',
        content: buildPrompt(firstElement.content),
    })
    return conversation;
}

export const buildMessagesPayload = (conversation: any, message: string) => {
  return conversation.length === 1 ?
    buildFirstMessage(message)
    : addNewMessageToConversation(conversation, message);
}