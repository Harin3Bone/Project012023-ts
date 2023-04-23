import { ComponentPropsWithoutRef } from "react";
import "style/App.css";

type InputFieldPropTypes = ComponentPropsWithoutRef<"input"> & {
  text: string;
  addition?: string;
};

function InputField({ text, addition, ...props }: InputFieldPropTypes) {
  return (
    <div>
      <label htmlFor={props.id}>
        <input
          {...props}
          className={`inputA ${
            addition ? addition : "w-full h-14 p-2 pt-4"
          } border-2 border-[#5e5959] rounded-md drop-shadow-lg focus:border-black focus:border-3 placeholder:text-transparent placeholder:select-none`}
        />
        <p className='address__p'>{text}</p>
      </label>
    </div>
  );
}

export default InputField;
