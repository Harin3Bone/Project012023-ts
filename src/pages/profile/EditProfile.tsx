import ButtonMultipurpose from "components/button/ButtonMultipurpose";

//component
import InputMultipurpose from "components/InputX/InputMultipurpose";

function EditProfile() {
  return (
    <div>
      <h1 className='text-4xl mb-12'>Edit profile</h1>
      <form action="">
        <div className='mb-6'>
          <InputMultipurpose
            label="emailEditProfile"
            text={"Username"}
            id='emailEditProfile'
            type="email"
          />
        </div>
        <div className='mb-6'>
          <InputMultipurpose
            label="passwordEditProfile"
            text={"Password"}
            id='passwordEditProfile'
            type="password"
            disabled
            addition="cursor-not-allowed"
          />
        </div>
        <div className='mb-6'>
          <InputMultipurpose
            label="dateEditProfile"
            text={"Birth Date"}
            id='dateEditProfile'
            type="date"
          />
        </div>
        <hr className="mt-10 mb-6" />
        <div className=" flex justify-end">
          <ButtonMultipurpose
            type="reset"
            addition="w-20 px-4 py-2 rounded-full hover:bg-black hover:text-white mr-2"
          >
            Reset
          </ButtonMultipurpose>
          <ButtonMultipurpose
            type="submit"
            addition="w-20 px-4 py-2 rounded-full border-none bg-[#BFDB38] "
          >
            Submit
          </ButtonMultipurpose>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
