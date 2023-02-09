import client from "config/axiosConfig";

import { informationFormType } from "hook/useUserAuth";
import { SignInResponseType } from "./SignIn.type";
import { SignUpResponseType } from "./SignUp.type";

//type
export interface SingUpParamType {
  username?: string;
  email?: string;
  password?: string;
}

export interface SingInParamType {
  identifier?: string;
  password?: string;
}


export async function onSingUp({ email, password }: informationFormType) {
  try {
    const response = await client.post<SignUpResponseType, SignUpResponseType, SingUpParamType>(
      "/auth/local/register",
      {
        username: email,
        email,
        password,
      },
    );
    console.log("response : ",response);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error : ${error.message}`);
    }
  }
}

export async function onSingIn({ email, password }: informationFormType) {
  try {
    const response = await client.post<SignInResponseType, SignInResponseType, SingInParamType>(
      "/auth/local",
      {
        identifier: email,
        password,
      },
    );
    console.log("response : ",response);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error : ${error.message}`);
    }
  }
}