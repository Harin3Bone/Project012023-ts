import axios from "axios"
import { APIResponseErrorType } from "src/types/Api.type"

export function onHandleErrorFromApi(error:unknown):[null, string] {
  if(axios.isAxiosError<APIResponseErrorType>(error)){
    return [null,error.response?.data?.error?.message ?? "Error"]
  }
  return [null, (error as Error).message]
}

export function definedStore(storeName:string) {
  return{
    name: "",
    store:storeName,
    enabled: import.meta.env.MODE === "development" ? true : false
  }
}

//process.env.NODE_ENV === import.meta.env.MODE