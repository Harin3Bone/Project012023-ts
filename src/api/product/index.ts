import client from "src/config/axiosConfig";
import { onHandleErrorFromApi } from "src/helpers";

//type
import { AxiosReturn } from "src/types/Api.type";
import { ProductsType } from "./product.type";

export async function onGetProduct(): AxiosReturn<ProductsType> {
  try {
    const response = await client.get<ProductsType>("/products?populate=*");
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
//?populate=* คือการขอข้อมูลทั้งหมดและข้อมูลที่ BackEnd ซ่อนไว้แต่ขนาดจะใหญ่กว่าปกติ