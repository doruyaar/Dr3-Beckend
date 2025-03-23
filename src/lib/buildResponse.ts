import { signMessage } from "./signMessage"

export const buildResponse = (data: any) => {
  const responseContent = data.choices[0].message.content
  const hash = signMessage(responseContent)

  return { message: responseContent, id: hash }
}