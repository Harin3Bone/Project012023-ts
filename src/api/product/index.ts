//https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering

import client from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers/*";

//type
import { AxiosReturn } from "types/Api.type";
import { ProductType } from "./product.type";

export type onGetProductPropType = {
  IdProduct?: number;
  item?: string;
};

export async function onGetProduct({
  IdProduct,
  item,
}: onGetProductPropType): AxiosReturn<ProductType> {
  try {
    const queryUrl = IdProduct
      ? `/products/${IdProduct}?populate=*`
      : `/products?filters[name][$eq]=${item}&populate=*`;
    const response = await client.get<ProductType>(queryUrl);
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}

// filters[การระบุ field ที่เราต้องการกรอง ][เงื่อนไข] = คือเปรียบเทียบข้อมูลที่ต้องการหา /คือคำสั่งสำหรับระบุว่าเราต้องการกรองข้อมูล
// [$eq] คือเงื่อนไขการกรองที่ต้องการ ในที่นี้คือการเช็คว่าค่าที่ต้องการให้ตรงกัน (equal)
