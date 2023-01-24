import React, { ComponentPropsWithoutRef } from "react";
import "../style/App.css";

type InputDefaultPropTypes = ComponentPropsWithoutRef<"input"> & {
  label: string;
};
function InputDefault({ label, ...props }: InputDefaultPropTypes) {
  return (
    <div className='mx-auto'>
      <label htmlFor={props.id}>
        <input
          {...props}
          className='inputA w-[9.6rem] mb-[3rem] border-b-2 border-[#5e5959] outline-0 
          bg-transparent placeholder:text-transparent placeholder:select-none focus:border-[#111727]'
        />
        <p className='form__p'>{label}</p>
      </label>
    </div>
  );
}

export default InputDefault;
