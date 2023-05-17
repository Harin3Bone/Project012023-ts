import { useState, useEffect } from "react";

//store
import useProfileStore from "store/profile/profile.store";
import useManageCartDataStore from "store/manageCartData.store";

import CartDrawerForm from "components/CartDrawer/CartDrawerForm";
import CartIcon from "./CartIcon";

function CartModal() {
  const user = useProfileStore((state) => state.user);
  const userCarts = useManageCartDataStore((state) => state.userCarts);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  const currentUserCart = userCarts.find((userCart) => userCart.email === user?.email);
  const itemCount = currentUserCart ? currentUserCart.items.length : 0;
  const isOver99Items = itemCount > 99;

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <CartIcon
        user={user}
        itemCount={itemCount}
        isOver99Items={isOver99Items}
        handleOpen={handleOpen}
      />
      <div className={isOpen ? "block" : "hidden"}>
        <div className='absolute inset-0 h-screen bg-black/50 z-40' onClick={handleOpen} />
      </div>
      <CartDrawerForm
        currentUserCart={currentUserCart}
        itemCount={itemCount}
        isOpen={isOpen}
        handleClose={handleOpen}
      />
    </div>
  );
}

export default CartModal;
