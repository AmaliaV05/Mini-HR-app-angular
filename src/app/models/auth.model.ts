export interface RegisterUserRequest {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface RegisterResponse {
  confirmationToken: string;
}

export interface ConfirmUserRequest {
  email: string;
  phoneNumber: string;
  confirmationToken: string;
}

export interface LoginResponse {
  username: string;
  token: string;
  expiration: string;
  roles: string[];
}

export interface LoginRequest {
  username: string;
  password: string;
}