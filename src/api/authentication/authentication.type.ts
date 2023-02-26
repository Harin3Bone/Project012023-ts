export interface UserType {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SignInResponseType {
  jwt?: string;
  user?: UserType;
}

export interface SignUpResponseType {
  user?: UserType;
}

export type JwtType = {
  id: number;
  iat: number;
  exp: number;
};
