//reference https://keychronthailand.com/checkouts/c/72c2609f5eb614429b4f59993bddc504/information

//component
import InputField from "components/input/InputField";

//type
import { addressDataType } from "types/address.type";

type AddressPropsType = {
  addressData: addressDataType;
  setAddressData: React.Dispatch<React.SetStateAction<addressDataType>>;
};

function Address({ addressData, setAddressData }: AddressPropsType) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressData({ ...addressData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <span className='block mb-1 text-lg'>Shipping address</span>
      <div className='mt-4 mb-6'>
        <InputField
          id='country'
          name='country'
          type='text'
          placeholder='country'
          value={addressData.country}
          onChange={handleInputChange}
          required
          text='country'
        />
      </div>
      <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between lg:mb-6'>
        <div className='mb-6 lg:mb-0'>
          <InputField
            id='firstName'
            name='firstName'
            type='text'
            placeholder='first name'
            value={addressData.firstName}
            onChange={handleInputChange}
            required
            text='first name'
            addition='w-full sm:w-64 md:w-full lg:w-60 h-14 p-2 pt-4'
          />
        </div>
        <div className='mb-6 lg:mb-0'>
          <InputField
            id='lastName'
            name='lastName'
            type='text'
            placeholder='last name'
            value={addressData.lastName}
            onChange={handleInputChange}
            required
            text='last name'
            addition='w-full sm:w-64 md:w-full lg:w-60 h-14 p-2 pt-4'
          />
        </div>
      </div>
      <div className='mb-6'>
        <InputField
          id='address'
          name='address'
          type='text'
          placeholder='address'
          value={addressData.address}
          onChange={handleInputChange}
          required
          text='address'
        />
      </div>
      <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between lg:mb-6'>
        <div className='mb-6 lg:mb-0'>
          <InputField
            id='subDistrict'
            name='subDistrict'
            type='text'
            placeholder='sub district'
            value={addressData.subDistrict}
            onChange={handleInputChange}
            required
            text='sub district'
            addition='w-full sm:w-64 md:w-full lg:w-60 h-14 p-2 pt-4'
          />
        </div>
        <div className='mb-6 lg:mb-0'>
          <InputField
            id='district'
            name='district'
            type='text'
            placeholder='district'
            value={addressData.district}
            onChange={handleInputChange}
            required
            text='district'
            addition='w-full sm:w-64 md:w-full lg:w-60 h-14 p-2 pt-4'
          />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between lg:mb-6'>
        <div className='mb-6 lg:mb-0'>
          <InputField
            id='province'
            name='province'
            type='text'
            placeholder='province'
            value={addressData.province}
            onChange={handleInputChange}
            required
            text='province'
            addition='w-full sm:w-64 md:w-full lg:w-60 h-14 p-2 pt-4'
          />
        </div>
        <div className='mb-6 lg:mb-0'>
          <InputField
            id='postalCode'
            name='postalCode'
            type='text'
            placeholder='postal code'
            value={addressData.postalCode}
            onChange={handleInputChange}
            required
            text='postal code'
            addition='w-full sm:w-64 md:w-full lg:w-60 h-14 p-2 pt-4'
          />
        </div>
      </div>
      <div className='mt-4 mb-6'>
        <InputField
          id='phone'
          name='phone'
          type='text'
          placeholder='phone number'
          value={addressData.phone}
          onChange={handleInputChange}
          required
          text='phone number'
        />
      </div>
    </div>
  );
}

export default Address;
