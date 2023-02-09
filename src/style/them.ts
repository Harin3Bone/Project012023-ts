const theme = {
  setPage: "px-[7.5%] py-[5%] lg:py-[2.5%]",
  setStyleMenuUi: {
    setContainerButton: `relative mr-1 sm:mr-2 md:mr-4 lg:mr-5 px-[0.5rem] py-[0.5rem] border-2 border-transparent rounded cursor-pointer
    before:absolute before:inset-0 before:opacity-0 before:ease-in before:duration-300 before:-z-49
    after:absolute after:inset-0 after:top-[100%] after:bg-[#252525] after:ease-in after:duration-300 after:-z-50
    hover:after:top-0`,
    setStyleButton: `relative text-lg md:text-xl px-[0.5rem] py-[0.5rem] border-2 border-transparent rounded select-none z-[99]
    focus:px-[0.5rem] focus:py-[0.5rem]`,
  },
} as const;

export type ThemType = typeof theme;

export default theme;
