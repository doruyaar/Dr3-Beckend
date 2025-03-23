import axios from 'axios';
import { 
  buildMessagesPayload,
  buildResponse,
  getConfig,
  validateConversation
} from './lib';

const {
  apiEndpoint,
  apiKey,
  model
} = getConfig()

export class ApiUtil {
  constructor(){}
  
  async postPrompt (req: any, res: any) {
    const { message, conversation } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Invalid conversation content' });
    }
  
    const validateHash = validateConversation(conversation);
  
    if (!validateHash) {
      return res.status(400).json({ error: 'Invalid conversation content' });
    }
  
    const messages = buildMessagesPayload(conversation, message);
  
    try {
      const apiResponse = await axios.post(
        apiEndpoint,
        {
          model,
          messages,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      const response = buildResponse(apiResponse.data)
      res.json(response);
    } catch (error: any) {
      console.log('Error Occurred:', error.message);
      res.status(500).json({ error: 'Error processing request.' });
    }
  }
}