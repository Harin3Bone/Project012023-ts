import { useEffect } from "react";

type LoaderPropsType = {
  isOpen: boolean;
};

export function Loader({ isOpen = false }: LoaderPropsType) {
  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove("body-scroll-lock");
    } else {
      document.body.classList.add("body-scroll-lock");
    }
    return () => {
      document.body.classList.remove("body-scroll-lock");
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center w-screen h-screen bg-black/50 z-[998] overflow-hidden'>
      <span className='animate-spin w-12 h-12 border-8 border-white border-r-transparent rounded-full z-[999]' />
    </div>
  );
}
