import client from "src/config/axiosConfig";
import { AxiosReturn } from "src/types/Api.type";

import { onHandleErrorFromApi } from "src/helpers";

import { ProfileType } from "src/store/profile/profile.type";

export async function onGetProfileWithUserId(): AxiosReturn<ProfileType> {
  try {
    const { data } = await client.get<ProfileType>(`/users/me`);
    return [data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}

//?populate=* หาข้อมูลที่ซ่อนอยู่(* ทั้งหมด)
