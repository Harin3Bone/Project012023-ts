//ref https://keychronthailand.com/
import formatPrice from "helpers/*";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//type
import { UserCart } from "store/manageCartData.store";

type CartDrawerFormPropsTypes = {
  currentUserCart: UserCart | undefined;
  itemCount: number;
  isOpen: boolean;
  handleClose: () => void;
};

function CartDrawerForm({
  currentUserCart,
  itemCount,
  isOpen,
  handleClose,
}: CartDrawerFormPropsTypes) {
  return (
    <div
      className={`absolute top-0 bottom-0 right-0 z-50  ${
        isOpen
          ? "w-full sm:w-1/2 md:w-1/3 xl:w-1/4 h-screen transform translate-x-0 transition-transform duration-500 ease-in-out "
          : "max-h-0 overflow-hidden transform translate-x-full transition-transform duration-500 ease-in-out"
      }`}
    >
      <div className={`flex flex-col w-full h-full px-8  bg-white `}>
        <div className='flex justify-between items-center pt-8 mb-4 pb-2 border-b-[1px] border-black/40 text-black/80'>
          <span className='text-2xl font-semibold'>Cart</span>
          <button type='button' className='w-10 h-10' onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} size='xl' />
          </button>
        </div>
        <div className='flex-grow py-4 text-black overflow-y-scroll'>
          {currentUserCart
            ? currentUserCart.items.map((item,index) => (
                <div key={index} className=' flex justify-between pr-10 pb-4'>
                  <span>{index + 1}</span>
                  <span>{item.id}</span>
                  <span>name</span>
                  <span>{item.quantity}</span>
                </div>
              ))
            : "You have no items in your shopping cart."}
        </div>
        <div className='mt-4 pt-8 pb-4 border-t-[1px] border-black/40'>
          <div className='flex justify-between px-2 text-black text-xl'>
            <div>Total Amount</div>
            <div>{formatPrice(1000)}</div>
          </div>
          <button className='w-full mt-12 py-2 rounded-sm  bg-gradient-to-r from-cyan-400 to-blue-400  text-xl active:translate-y-[0.5px]'>
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawerForm;
//"timing function CSS transitions ซึ่งควบคุมความเร็วของการเคลื่อนไหวในระยะเวลาที่กำหนดไว้ของการเปลี่ยนแปลง style มี
//ease-in: การเริ่มการเคลื่อนไหวจะช้า แล้วค่อยๆเร็วขึ้น
//ease-out: การเริ่มการเคลื่อนไหวจะเร็ว แล้วค่อยๆช้าลง
//ease-in-out: การเริ่มการเคลื่อนไหวจะช้า แล้วเร็วขึ้นที่ตรงกลาง แล้วช้าลงที่สุดท้าย
