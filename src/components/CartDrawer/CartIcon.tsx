import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//type
import { ProfileType } from "store/profile/profile.type";

type CartIconPropsType = {
  user: ProfileType | null;
  itemCount?: number;
  isOver99Items: boolean;
  handleOpen: () => void;
};

function CartIcon({ user, itemCount, isOver99Items, handleOpen }: CartIconPropsType) {
  return (
    <div className='relative w-12'>
      {user ? (
        <button type='button' onClick={handleOpen}>
          <div className={itemCount && user ? " block" : "hidden"}>
            <div className='absolute right-3 -top-3 flex justify-center items-center w-5 h-5 rounded-full bg-[#E76161] -z-10'>
              <span className={`text-white ${isOver99Items ? "text-xs" : "text-sm"}`}>
                {isOver99Items ? "99+" : itemCount}
              </span>
            </div>
          </div>
          <FontAwesomeIcon icon={faCartShopping} size='lg' />
        </button>
      ) : (
        <NavLink to={"sign-in"}>
          <FontAwesomeIcon icon={faCartShopping} size='lg' />
        </NavLink>
      )}
    </div>
  );
}

export default CartIcon;
