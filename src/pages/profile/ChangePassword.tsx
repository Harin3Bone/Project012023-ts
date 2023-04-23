//component
import InputMultipurpose from "components/input/InputMultipurpose";
import ButtonMultipurpose from "components/button/ButtonMultipurpose";

function ChangePassword() {
  return (
    <div className="min-h-screen">
      <h1 className='text-4xl mb-12'>Change password</h1>
      <form action=''>
        <div className='mb-6'>
          <InputMultipurpose
            label='currentPassword'
            text={"Current password"}
            id='currentPassword'
            type='password'
          />
        </div>
        <div className='mb-6'>
          <InputMultipurpose
            label='newPassword'
            text={"New password"}
            id='newPassword'
            type='password'
          />
        </div>
        <div className='mb-6'>
          <InputMultipurpose
            label='confirmPassword'
            text={"Confirm new password"}
            id='confirmPassword'
            type='password'
          />
        </div>
        <div className=' flex justify-end mt-10'>
          <ButtonMultipurpose
            type='reset'
            addition='w-20 px-4 py-2 rounded-full hover:bg-black hover:text-white mr-2'
          >
            Reset
          </ButtonMultipurpose>
          <ButtonMultipurpose
            type='submit'
            addition='w-20 px-4 py-2 rounded-full border-none bg-[#BFDB38] '
          >
            Submit
          </ButtonMultipurpose>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
