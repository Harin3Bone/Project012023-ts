import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import formatPrice from "helpers/*";

//store
import useProfileStore from "store/profile/profile.store";
import useManageCartDataStore from "store/manageCartData.store";

//component
import QuantityInput from "components/input/QuantityInput";
import ButtonMultipurpose from "components/button/ButtonMultipurpose";

//toast
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { toastSuccess } from "style/toast";

type AddToCartFormPropsType = {
  productId: number;
  price: number;
  maxStock: number;
};

function AddToCartForm({ productId, price, maxStock = 100 }: AddToCartFormPropsType) {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useProfileStore((state) => state.user);
  const addItemToCart = useManageCartDataStore((state) => state.addItemToCart);

  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    setSelectedQuantity(newQuantity);
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLElement>) => {
      event.preventDefault();

      if (user) {
        const cartItem = {
          id: productId,
          timestamp: Date.now(),
          quantity: selectedQuantity,
        };
    
        addItemToCart(user.email,cartItem);
        toast.success(`Product added to cart successfully!`, toastSuccess);
      } else {
        navigate("/sign-in", { state: { from: location } });
      }
    },
    [productId, price, selectedQuantity],
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className=' flex justify-between mt-6 mb-8'>
        <div>
          <p className=' text-xl mb-1'>Price : </p>
          <p className='text-2xl'>{price && formatPrice(price)}</p>
        </div>
        <QuantityInput maxStock={maxStock} onQuantityChange={handleQuantityChange} />
      </div>
      <div>
        <ButtonMultipurpose type='submit' addition='px-4 py-2 rounded-lg bg-black text-white'>
          Add to Cart
        </ButtonMultipurpose>
      </div>
    </form>
  );
}

export default AddToCartForm;
