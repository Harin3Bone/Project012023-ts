import React, { ComponentPropsWithoutRef } from "react";
//Omit ไม่เอา type ไหนบ้าง
type ButtonDefaultPropTypes = Omit<ComponentPropsWithoutRef<"button">, "className" | "style">;

function ButtonDefault({ children, ...props }: ButtonDefaultPropTypes) {
  return (
    <button
      {...props}
      className='w-[6rem] h-[2rem] rounded-2xl outline-2 outline-black mx-auto mb-[10rem]
    hover:bg-black hover:text-white hover:drop-shadow-2xl hover:translate-y-[-1px] active:translate-y-0 lg:text-2xl'
    >
      {children}
    </button>
  );
}

export default ButtonDefault;
