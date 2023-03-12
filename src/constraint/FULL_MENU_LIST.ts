type FullMenuListType = {
  name: string
  path: string
  private: boolean
}

export const FULL_MENU_LIST: Readonly<FullMenuListType[]> = [
  {
    name: "about",
    path: "/about",
    private: true,
  },
  {
    name: "sign in",
    path: "/sign-in",
    private: false,
  },
  {
    name: "sign up",
    path: "/sign-up",
    private: false,
  },
]