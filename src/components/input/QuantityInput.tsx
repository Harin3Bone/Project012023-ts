import { useState, useCallback, useEffect, useRef } from "react";
import "style/App.css";

import ButtonMultipurpose from "../button/ButtonMultipurpose";

type QuantityInputPropsType = {
  maxStock: number;
};

function QuantityInput({ maxStock }: QuantityInputPropsType) {
  const [quantity, setQuantity] = useState<number>(1);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuantity = parseInt(event.target.value);
    if (inputQuantity >= 1 && inputQuantity <= maxStock) {
      setQuantity(inputQuantity);
    }
  };

  //useCallback
  const increaseQuantity = useCallback(() => {
    if (quantity < maxStock) {
      setQuantity((prevQuantity) => {
        if (prevQuantity < maxStock) {
          return prevQuantity + 1;
        }
        return prevQuantity;
      });
    }
  }, [quantity, maxStock]);

  const decreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        if (prevQuantity > 1) {
          return prevQuantity - 1;
        }
        return prevQuantity;
      });
    }
  }, [quantity]);

  const startIncreasing = () => {
    intervalRef.current = setInterval(increaseQuantity, 150);
  };
  const startDecreasing = () => {
    intervalRef.current = setInterval(decreaseQuantity, 150);
  };
  const stopChanging = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  //useEffect
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className='flex justify-between items-end w-28 mr-2'>
      <ButtonMultipurpose
        onMouseDown={startIncreasing}
        onMouseUp={stopChanging}
        onMouseLeave={stopChanging}
        onClick={increaseQuantity}
        addition=' px-2 rounded-md bg-black text-white text-lg'
      >
        +
      </ButtonMultipurpose>
      <input
        type='number'
        value={quantity}
        min={1}
        max={maxStock}
        onChange={handleInputChange}
        className=' w-12 border-2 rounded-md text-center text-lg'
      />
      <ButtonMultipurpose
        onMouseDown={startDecreasing}
        onMouseUp={stopChanging}
        onMouseLeave={stopChanging}
        onClick={decreaseQuantity}
        addition=' px-2 rounded-md bg-black text-white text-lg'
      >
        -
      </ButtonMultipurpose>
    </div>
  );
}

export default QuantityInput;
//parseInt(event.target.value) เพื่อที่จะเปรียบเทียบ string ซึ่งอาจนำไปสู่ผลลัพธ์ที่ไม่คาดคิด เช่น การเปรียบเทียบ "10" กับ "2" ในรูปแบบของ string จะมี "10" น้อยกว่า "2" ซึ่งไม่ถูกต้อง การใช้ parseInt() แปลงค่าเป็นตัวเลขจำนวนเต็มจะช่วยให้การเปรียบเทียบนั้นถูกต้อง
