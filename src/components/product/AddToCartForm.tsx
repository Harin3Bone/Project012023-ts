import formatPrice from "helpers/*";

import QuantityInput from "components/input/QuantityInput";
import ButtonMultipurpose from "components/button/ButtonMultipurpose";

type AddToCartFormPropsType = {
  price: number;
  maxStock: number;
};

function AddToCartForm({ price, maxStock = 100 }: AddToCartFormPropsType) {
  return (
    <div>
      <div className=' flex justify-between mt-6 mb-8'>
        <div>
          <p className=' text-xl mb-1'>Price : </p>
          <p className='text-2xl'>{price && formatPrice(price)}</p>
        </div>
        <QuantityInput maxStock={maxStock} />
      </div>
      <div>
        <ButtonMultipurpose addition='px-4 py-2 rounded-lg bg-black text-white'>
          Add to Cart
        </ButtonMultipurpose>
      </div>
    </div>
  );
}

export default AddToCartForm;
