import client from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers/*";

//type
import { AxiosReturn } from "types/Api.type";
import { ProductType } from "./product.type";

export type onGetProductPropType = {
  item: string;
};

export async function onGetProduct({ item }: onGetProductPropType): AxiosReturn<ProductType> {
  try {
    const response = await client.get<ProductType>(`/products/${item}?populate=*`);
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
