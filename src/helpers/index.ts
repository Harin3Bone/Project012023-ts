import axios from "axios";
import { APIResponseErrorType } from "types/Api.type";

export function onHandleErrorFromApi(error: unknown): [null, string] {
  if (axios.isAxiosError<APIResponseErrorType>(error)) {
    return [null, error.response?.data?.error?.message ?? "Error"];
  }
  return [null, (error as Error).message];
}

export function definedStore(storeName: string) {
  return {
    name: "",
    store: storeName,
    enabled: import.meta.env.MODE === "development" ? true : false,
  };
}
//process.env.NODE_ENV === import.meta.env.MODE

export default function formatPrice(price: number) {
  const formattedPrice = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return formattedPrice.replace("฿", "฿ ");
}
//maximumSignificantDigits: 5 ปัดเศษทศนิยม
//minimumFractionDigits กำหนดจำนวนขั้นต่ำของทศนิยมที่จะแสดงผล
//maximumFractionDigits กำหนดจำนวนสูงสุดของทศนิยมที่จะแสดงผล

//ข้อความที่เป็น string.replace(searchValue, newValue) earchValue - ค่าที่ต้องการค้นหาในสตริง ซึ่งสามารถเป็นข้อความหรือ RegExp,  newValue - ข้อความที่จะใช้แทนที่ searchValue
