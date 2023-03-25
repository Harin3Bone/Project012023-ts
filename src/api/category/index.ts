import client from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers/*";

//type
import { AxiosReturn } from "types/Api.type";
import { CategoriesType } from "./categories.type";

export async function onGetCategories(): AxiosReturn<CategoriesType> {
  try {
    const response = await client.get<CategoriesType>("/categories");
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}