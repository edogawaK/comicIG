import { SigningOptions } from 'crypto';

type JWTConfig = {
  secret: string;
  expire: any;
};
export const jwtConfig: JWTConfig = {
  secret: 'my-secret-token-to-change-in-production',
  expire: '1d',
};
