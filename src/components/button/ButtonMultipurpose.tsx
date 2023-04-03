import { ComponentPropsWithoutRef } from "react";
import "style/App.css";

type AdditionButton = {
  addition?: string;
};

type ButtonMultipurposePropTypes = ComponentPropsWithoutRef<"button"> & AdditionButton;

function ButtonMultipurpose({
  addition = undefined,
  children,
  ...props
}: ButtonMultipurposePropTypes) {
  return (
    <button
      {...props}
      className={`
        filterCheckbox border-2 cursor-pointer select-none hover:shadow-lg hover:-translate-y-0.5  active:shadow-none active:translate-y-0
        ${addition ? addition : "px-4 py-2 border-neutral-600 rounded-full hover:bg-black hover:text-white"}
      `}
    >
      {children}
    </button>
  );
}

export default ButtonMultipurpose;
