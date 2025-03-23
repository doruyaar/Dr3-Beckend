import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const env = process.env as Record<string, string>;

const defaultModel = 'qwen/qwq-32b:free';
const apiEndpoint = "https://openrouter.ai/api/v1/chat/completions"

const configSchema = z.object({
  apiEndpoint: z.string(),
  apiKey: z.string(),
  cryptoSignKey: z.string(),
  model: z.string(),
  port: z.number(),
});

export const getConfig = () =>
  configSchema.parse({
    apiEndpoint: env.API_ENDPOINT || apiEndpoint,
    apiKey: env.API_KEY,
    cryptoSignKey: env.CRYPTO_SIGN_KEY,
    model: env.MODEL || defaultModel,
    port: Number(env.PORT || 5000),
  });
