import { ComponentPropsWithoutRef } from "react";

type ButtonDefaultPropTypes = Omit<ComponentPropsWithoutRef<"button">, "className" | "style">;

function ButtonDefault({ children, ...props }: ButtonDefaultPropTypes) {
  return (
    <button
      {...props}
      className='flex items-center justify-center w-28 h-8 rounded-full mx-auto py-6 outline-1 outline-black
    hover:bg-black hover:text-white hover:drop-shadow-2xl hover:translate-y-[-1px] active:translate-y-0 
      text-lg sm:text-2xl lg:text-3xl'
    >
      {children}
    </button>
  );
}

export default ButtonDefault;
//Omit ไม่เอา type ไหนบ้าง