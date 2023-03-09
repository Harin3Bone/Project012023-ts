import { useId } from "react";

//components
import InputDefault from "components/InputDefault";
import ButtonDefault from "components/ButtonDefault";

//reference  https://dribbble.com/shots/19771040-Sign-up-page-Untitled-UI

//type
type FormSignPropTypes = {
  formHeader: string;
  formDescription: string;
  onSubmit: (email: string, password: string) => void;
  emailValue: string;
  passwordValue: string;
  onChangeValue: (value: string, type: "email" | "password") => void;
  buttonLabel: string;
};

function FormSign({
  formHeader,
  formDescription,
  onSubmit,
  emailValue,
  passwordValue,
  onChangeValue,
  buttonLabel,
}: FormSignPropTypes) {
  //useId
  const inputEmailId = useId();
  const inputPasswordId = useId();

  return (
    <div
      className='h-[36rem] lg:h-[40rem] mx-[10%] sm:mx-[15%] md:mx-[15%] my-[25%] sm:my-[20%] md:my-[15%] lg:my-[7.5%] border-4 rounded-2xl bg-black 
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
        <form
          className='flex justify-center flex-col mt-[3rem]'
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(emailValue, passwordValue);
          }}
        >
          <InputDefault
            label='Email'
            type='email'
            id={inputEmailId}
            value={emailValue}
            placeholder='Email'
            minLength={6}
            required
            onChange={(e) => {
              onChangeValue(e.target.value, "email");
            }}
          />
          <InputDefault
            label='Password'
            type='password'
            id={inputPasswordId}
            value={passwordValue}
            placeholder='Password'
            minLength={6}
            required
            onChange={(e) => {
              onChangeValue(e.target.value, "password");
            }}
          />
          <div className='flex justify-center mb-[10rem]'>
            <ButtonDefault type={"submit"}>{buttonLabel}</ButtonDefault>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSign;

// Pick<ComponentPropsWithoutRef<"form">, "onSubmit"> เลือก
