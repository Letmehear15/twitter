import crypto from 'crypto';

export const cryptoHash = (value: string) =>
  crypto.createHash('md5').update(value).digest('hex');
