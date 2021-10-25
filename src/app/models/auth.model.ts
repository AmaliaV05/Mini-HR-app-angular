export class LoginResponse {
  username: string;
  token: string;
  expiration: string;
}

export class RegisterResponse {
  confirmationToken: string;
}

export const AUTH_TOKEN_LOCAL_STORAGE_KEY = 'token';