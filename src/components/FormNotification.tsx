import ButtonDefault from "./ButtonDefault";

type FormNotificationPropTypes = {
  formHeader: string;
  formContent: string;
  buttonLabel: string;
  onClickButton: () => void;
};

function FormNotification({
  formHeader,
  formContent,
  buttonLabel,
  onClickButton,
}: FormNotificationPropTypes) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white mx-8 md:mr-[25%] 2xl:mr-[32%] md:ml-[25%] 2xl:ml-[32%] p-8 md:p-12 border-4 rounded-lg'>
        <div className='flex flex-col justify-center items-center text-center'>
          <p className='mx-5 my-5 text-2xl sm:text-3xl'>{formHeader}</p>
          <p className='mx-2 text-lg sm:text-xl'>{formContent}</p>
          <div className='mt-5'>
            <ButtonDefault onClick={onClickButton}>{buttonLabel}</ButtonDefault>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormNotification;
