import { useNavigate } from "react-router-dom";

import ButtonDefault from "components/ButtonDefault";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <div className='flex flex-col justify-center items-center
        sm:w-[26rem] lg:w-[29rem] sm:h-[26rem] lg:h-[29rem] sm:border-8 sm:rounded-full overflow-hidden'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-3xl sm:text-4xl lg:text-6xl '>404 OOPS!</p>
          <p className='my-2.5 md:my-7 text-lg sm:text-xl lg:text-2xl leading-10'>
            We can&apos;t find the page you are looking for.
          </p>
        </div>
        <div className='mt-4'>
          <ButtonDefault onClick={()=>navigate("/")}>home</ButtonDefault>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
