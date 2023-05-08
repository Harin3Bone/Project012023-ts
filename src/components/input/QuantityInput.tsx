import { useEffect } from "react";
import "style/App.css";

import ButtonMultipurpose from "../button/ButtonMultipurpose";
import useQuantityInput from "hook/useQuantityInput";

type QuantityInputPropsType = {
  maxStock: number;
  onQuantityChange: (quantity: number) => void;
};

function QuantityInput({ maxStock, onQuantityChange }: QuantityInputPropsType) {
  const {
    quantity,
    handleInputChange,
    handleInputBlur,
    startIncreasing,
    startDecreasing,
    stopChanging,
    increaseQuantity,
    decreaseQuantity,
  } = useQuantityInput({ maxStock });

  useEffect(() => {
    if (quantity) {
      onQuantityChange(quantity);
    }
  }, [quantity]);

  return (
    <div className='flex justify-between items-end w-28 mr-2'>
      <ButtonMultipurpose
        type="button"
        onMouseDown={startDecreasing}
        onMouseUp={stopChanging}
        onMouseLeave={stopChanging}
        onClick={decreaseQuantity}
        addition=' px-2 rounded-md bg-black text-white text-lg'
      >
        -
      </ButtonMultipurpose>
      <input
        type='number'
        value={quantity}
        max={maxStock}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className=' w-12 border-2 rounded-md text-center text-lg'
      />
      <ButtonMultipurpose
        type="button"
        onMouseDown={startIncreasing}
        onMouseUp={stopChanging}
        onMouseLeave={stopChanging}
        onClick={increaseQuantity}
        addition=' px-2 rounded-md bg-black text-white text-lg'
      >
        +
      </ButtonMultipurpose>
    </div>
  );
}

export default QuantityInput;
//onBlur เป็นเหตุการณ์ (event) ที่เกิดขึ้นเมื่ออินพุต input button slider หรืออีเลเมนต์ที่สามารถรับค่าข้อมูล (focusable elements) สูญเสียความสนใจ (lose focus) ความสนใจนั้นอาจสูญเสียเนื่องจากผู้ใช้เลือกอีเลเมนต์อื่น หรือกดที่พื้นที่อื่นของหน้าจอ
