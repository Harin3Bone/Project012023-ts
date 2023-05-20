//ref https://keychronthailand.com/

import { useCallback, useEffect, useState } from "react";

import formatPrice from "helpers/*";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//hook
import useCatalogData from "hook/useCatalog/useCatalogData";

//components
import CartItem from "./CartItem";

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
  const [products] = useCatalogData();

  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    if (currentUserCart && products?.data) {
      const total = currentUserCart.items.reduce((acc, item) => {
        const product = products.data?.find((product) => product.id === item.id);
        const price: number = product?.price ?? 0;
        const itemTotal = product ? price * item.quantity : 0;
        return acc + itemTotal;
      }, 0);
      setTotalAmount(total);
    }
  }, [currentUserCart, products]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLElement>) => {
      event.preventDefault();

      if (itemCount && currentUserCart?.items) {
        if (window.confirm("Are you sure you want to confirm your purchase?")) {
          const orderDetails = currentUserCart.items.map((item) => {
            return {
              id: item.id,
              quantity: item.quantity,
              timestamp: Date.now(),
            };
          });
          console.log(orderDetails);
        }
      }
    },
    [itemCount, currentUserCart],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`absolute top-0 bottom-0 right-0 z-50  ${
        isOpen
          ? "w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 h-screen transform translate-x-0 transition-transform duration-500 ease-in-out "
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
        <div className={`flex-grow py-4 text-black ${itemCount > 3 ? "overflow-y-scroll" : ""}`}>
          {itemCount && currentUserCart
            ? currentUserCart.items.map((item, index) => {
                const product =
                  products?.data && products.data.find((product) => product.id === item.id);
                return <CartItem key={index} product={product} quantity={item.quantity} />;
              })
            : "You have no items in your shopping cart."}
        </div>
        <div className='mt-4 pt-8 pb-4 border-t-[1px] border-black/40'>
          <div className='flex justify-between px-2 text-black text-xl'>
            <div>Total Amount</div>
            <div className='pr-2'>{formatPrice(totalAmount)}</div>
          </div>
          <button
            type='submit'
            className='w-full mt-12 py-2 rounded-sm  bg-gradient-to-r from-cyan-400 to-blue-400  text-xl active:translate-y-[0.5px]'
            disabled={itemCount === 0}
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </form>
  );
}

export default CartDrawerForm;
//reduce เป็น JavaScript Array ที่ใช้สำหรับการลดลงค่าในอาร์เรย์ให้กลายเป็นค่าเดียว การทำงานของมันเกี่ยวกับการรวมทั้งหมดค่าในอาร์เรย์ตามฟังก์ชั่น reduce จะรับค่าสองอย่างคือ accumulator  และ currentValue
//accumulator ค่าที่ถูกสะสมขึ้นในแต่ละการวนซ้ำของ reduce คุณสามารถจัดการกับค่านี้ได้
//currentValue ค่าปัจจุบันที่ reduce กำลังจัดการ จะเป็นสมาชิกแรกของอาร์เรย์ และในการเรียกถัดๆ ไปจะเป็นสมาชิกถัดไปของอาร์เรย์

//"timing function CSS transitions ซึ่งควบคุมความเร็วของการเคลื่อนไหวในระยะเวลาที่กำหนดไว้ของการเปลี่ยนแปลง style มี
//ease-in: การเริ่มการเคลื่อนไหวจะช้า แล้วค่อยๆเร็วขึ้น
//ease-out: การเริ่มการเคลื่อนไหวจะเร็ว แล้วค่อยๆช้าลง
//ease-in-out: การเริ่มการเคลื่อนไหวจะช้า แล้วเร็วขึ้นที่ตรงกลาง แล้วช้าลงที่สุดท้าย
