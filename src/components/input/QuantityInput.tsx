import { useState, useCallback } from "react";
import "style/App.css";
import ButtonMultipurpose from "../button/ButtonMultipurpose";

type QuantityInputPropsType = {
  maxStock: number;
};

function QuantityInput({maxStock}:QuantityInputPropsType) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuantity = parseInt(event.target.value);
    if (inputQuantity >= 1 && inputQuantity <= maxStock) {
      setQuantity(inputQuantity);
    }
  };

  //useCallback
  const increaseQuantity = useCallback(() => {
    if (quantity < maxStock) {
      setQuantity(quantity + 1);
    }
  }, [quantity, maxStock]);

  const decreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);

  return (
    <div className='flex justify-between items-end w-28 mr-2'>
      <ButtonMultipurpose 
        onClick={increaseQuantity}
        addition=" px-2 rounded-md bg-black text-white text-lg"
      >
        +
      </ButtonMultipurpose>
      <input 
        type='number' 
        value={quantity} 
        min={1} 
        max={maxStock} 
        onChange={handleInputChange} 
        className=" w-12 border-2 rounded-md text-center text-lg"
      />
      <ButtonMultipurpose 
        onClick={decreaseQuantity}
        addition=" px-2 rounded-md bg-black text-white text-lg"
      >
        -
      </ButtonMultipurpose>
    </div>
  );
}

export default QuantityInput;
//parseInt(event.target.value) เพื่อที่จะเปรียบเทียบ string ซึ่งอาจนำไปสู่ผลลัพธ์ที่ไม่คาดคิด เช่น การเปรียบเทียบ "10" กับ "2" ในรูปแบบของ string จะมี "10" น้อยกว่า "2" ซึ่งไม่ถูกต้อง การใช้ parseInt() แปลงค่าเป็นตัวเลขจำนวนเต็มจะช่วยให้การเปรียบเทียบนั้นถูกต้อง
