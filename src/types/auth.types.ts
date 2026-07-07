export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  avatar?: string | null;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}