import React, { useId, ComponentPropsWithoutRef } from "react";

//components
import InputDefault from "components/InputDefault";
import ButtonDefault from "components/ButtonDefault";

//reference  https://dribbble.com/shots/19771040-Sign-up-page-Untitled-UI

//type
type FormSignPropTypes = {
  formHeader: string;
  formDescription: string;
  emailValue: string;
  onSetEmailValue: (arg: string) => void;
  passwordValue: string;
  onSetPasswordValue: (arg: string) => void;
  buttonLabel: string;
};
type onSubmitForm = Pick<ComponentPropsWithoutRef<"form">, "onSubmit">;

function FormSign({
  formHeader,
  formDescription,
  emailValue,
  onSetEmailValue,
  passwordValue,
  onSetPasswordValue,
  buttonLabel,
  ...props
}: FormSignPropTypes & onSubmitForm) {
  //useId
  const inputEmailId = useId();
  const inputPasswordId = useId();

  return (
    <div
      className='h-[36rem] lg:h-[40rem] mx-[10%] sm:mx-[15%] md:mx-[10%] mt-[15%] sm:mt-[8%] lg:mt-[5%] border-4 rounded-2xl bg-black 
    drop-shadow-2xl overflow-hidden'
    >
      <img
        className='relative w-full sm:h-full'
        src='https://images.pexels.com/photos/1070345/pexels-photo-1070345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      />
      <div
        className='absolute top-[6rem] flex justify-between flex-col w-full 
      p-4 border-t-[4px] rounded-tl-[8rem] rounded-tr-lg bg-zinc-50 z-10
      sm:top-0 sm:right-0 sm:w-[20rem] sm:h-full sm:border-t-0 sm:border-l-[4px]'
      >
        <div className='flex justify-center flex-col text-center mt-[2.5rem]'>
          <p className='text-3xl mb-[1rem] sm:mt-[2rem] lg:text-4xl cursor-pointer'>{formHeader}</p>
          <p className='text-xl cursor-pointer lg:text-2xl'>{formDescription}</p>
        </div>
        <form {...props} className='flex justify-center flex-col mt-[3rem]'>
          <InputDefault
            label='Email'
            type='text'
            id={inputEmailId}
            value={emailValue}
            placeholder='Email'
            minLength={6}
            onChange={(e) => {
              onSetEmailValue(e.target.value);
            }}
          />
          <InputDefault
            label='Password'
            type='Password'
            id={inputPasswordId}
            value={passwordValue}
            placeholder='Password'
            minLength={6}
            onChange={(e) => {
              onSetPasswordValue(e.target.value);
            }}
          />
          <ButtonDefault type={"submit"}>{buttonLabel}</ButtonDefault>
        </form>
      </div>
    </div>
  );
}

export default FormSign;

// onSubmit={(e) => {
//   e.preventDefault();
//   onSubmit();
// }}
