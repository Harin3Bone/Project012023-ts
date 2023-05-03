type UserDetailList = {
  label: string;
  value: string;
};

export const USER_DETAIL_LIST: Readonly<UserDetailList[]> = [
  { label: "Username", value: "user?.username" },
  { label: "Email", value: "user?.email" },
  { label: "Address", value: "" },
];
