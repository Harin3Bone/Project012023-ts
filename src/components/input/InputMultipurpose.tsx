import { ComponentPropsWithoutRef } from "react";

type InputMultipurposePropTypes = ComponentPropsWithoutRef<"input">&{
  label:string
  text:string
  addition?: string;
}

function InputMultipurpose({label, text, addition, ...props}:InputMultipurposePropTypes) {
  return (
    <label htmlFor={label}>
      <span className=' block mb-1 text-lg'>{text}</span>
      <input
        {...props}
        className={`w-full h-10 p-2 border-2 border-[#5e5959]/80 rounded-md drop-shadow-lg focus:border-black focus:border-3 ${addition ? addition : ""}`}
      />
    </label>
  );
}

export default InputMultipurpose;
