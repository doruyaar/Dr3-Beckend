import crypto from 'crypto';
import { getConfig } from './config';

const { cryptoSignKey } = getConfig()

export function signMessage(message: string): string {
  return crypto.createHmac('sha512', cryptoSignKey).update(message).digest('hex');
}

export function verifyMessage(message: string, signature: string): boolean {
  const expectedSignature = signMessage(message);
  return expectedSignature === signature;
}