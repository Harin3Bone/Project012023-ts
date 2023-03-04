import axios from "axios";
import client from "config/axiosConfig";

//Api.type
import { APIResponseErrorType } from "types/Api.type";

//type
import { ProductsType } from "./products.type";

export async function getProducts() {
  try {
    const response = await client.get<ProductsType>("/products");
    return [response.data, null];
  } catch (error) {
    if (axios.isAxiosError<APIResponseErrorType>(error)) {
      return [null, error.request?.data?.error?.message ?? "Error"];
    }
    return [null, (error as Error).message];
  }
}
