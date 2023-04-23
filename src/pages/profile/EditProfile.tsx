import { useState } from "react";
import { NavLink } from "react-router-dom";

//type
import { addressDataType } from "types/address.type";

//component
import InputMultipurpose from "components/input/InputMultipurpose";
import ButtonMultipurpose from "components/button/ButtonMultipurpose";
import Address from "components/addition/Address";

function EditProfile() {
  const [addressData, setAddressData] = useState<addressDataType>({
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    subDistrict: "",
    district: "",
    province: "",
    postalCode: "",
    phone: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formattedAddress = `Country: ${addressData.country}, First Name: ${addressData.firstName}, Last Name: ${addressData.lastName}, Address: ${addressData.address}, Sub District: ${addressData.subDistrict}, District: ${addressData.district}, Province: ${addressData.province}, Postal Code: ${addressData.postalCode}, Phone: ${addressData.phone}`;
    console.log(formattedAddress);
  };
  return (
    <div className=' w-full md:w-96 lg:w-full min-h-screen  '>
      <h1 className='text-4xl mb-12'>Edit profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-6'>
          <InputMultipurpose
            label='emailEditProfile'
            text={"Username"}
            id='usernameEditProfile'
            type='email'
          />
        </div>
        <div className='mb-6'>
          <InputMultipurpose
            label='emailEditProfile'
            text={"Email"}
            id='emailEditProfile'
            type='email'
            disabled
            addition='cursor-not-allowed'
          />
        </div>
        <div className='mb-6'>
          <InputMultipurpose
            label='passwordEditProfile'
            text={"Password"}
            id='passwordEditProfile'
            type='password'
            disabled
            addition='cursor-not-allowed'
          />
          <NavLink to='/account/change-password' className='flex justify-end'>
            <span className='ml-4'>Change password</span>
          </NavLink>
        </div>
        <div className='mb-6'>
          <Address addressData={addressData} setAddressData={setAddressData} />
        </div>
        <hr className='mt-10 mb-6' />
        <div className='flex justify-end'>
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

export default EditProfile;
