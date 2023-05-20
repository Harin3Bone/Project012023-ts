import { useCallback } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import formatPrice from "helpers/*";

//store
import useManageCartDataStore from "store/manageCartData.store";

//type
import useProfileStore from "store/profile/profile.store";
import { ProductsDataType } from "api/products/products.type";

type CartItemPropsType = {
  product: ProductsDataType | undefined;
  quantity: number;
};

function CartItem({ product, quantity }: CartItemPropsType) {
  const user = useProfileStore((state) => state.user);
  const { removeFromCart } = useManageCartDataStore((state) => ({
    removeFromCart: state.removeFromCart,
  }));

  const price: number = product?.price ?? 0;
  const productId: number = product?.id ?? 0;
  const email: string = user?.email ?? "";

  const handleRemoveFromCart = useCallback(() => {
    if(window.confirm("Are you sure you want to remove this item from your cart?")){
      removeFromCart(email,productId)
    }
  },[email,productId])

  return (
    <div className=' flex justify-center'>
      <div className='grid grid-flow-col gap-4 w-96 mb-4 pb-4 '>
        <img src={product?.img?.formats?.small?.url} alt={product?.name} className='w-24' />
        <div className='grid grid-flow-row gap-y-2 w-48'>
          <div className='grid grid-flow-col gap-4'>
            <NavLink to={`products?name=${product?.name}`}>
              <span className='text-lg font-semibold'>{product?.name}</span>
            </NavLink>
            <button type='button' className='mb-6' onClick={handleRemoveFromCart}>
              <FontAwesomeIcon icon={faXmark} size='lg' />
            </button>
          </div>
          <div className='grid grid-flow-row gap-y-2'>
            <div className=' flex justify-between items-center ml-2'>
              <span>Price per item</span>
              <span>{formatPrice(price)}</span>
            </div>
            <div className=' flex justify-between items-center ml-2'>
              <span>Quantity</span>
              <span>{quantity}</span>
            </div>
            <div className=' flex justify-between items-center ml-2'>
              <span>Subtotal</span>
              <span>{formatPrice(quantity * price)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;