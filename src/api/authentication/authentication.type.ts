export type UserType = {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type SignUpResponseType = {
  user?: UserType;
}

export type SignInResponseType = {
  jwt?: string;
  user?: Required<UserType>;
}

export type JwtType = {
  id: number;
  iat: number;
  exp: number;
};

//Required นำ ? ออก