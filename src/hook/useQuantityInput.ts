import { useState, useCallback, useEffect, useRef } from "react";

type useQuantityInputPropsType = {
  maxStock: number;
};

function useQuantityInput({ maxStock }: useQuantityInputPropsType) {
  const [quantity, setQuantity] = useState<number | undefined>(1);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuantity = parseInt(event.target.value);

    if (inputQuantity > maxStock) {
      setQuantity(maxStock);
    } else {
      setQuantity(inputQuantity);
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputQuantity = parseInt(event.target.value);
    if (isNaN(inputQuantity) || inputQuantity < 1) {
      setQuantity(1);
    }
  };

  //useCallback
  const increaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => {
      const currentQuantity = prevQuantity === undefined ? 0 : prevQuantity;
      if (currentQuantity < maxStock) {
        return currentQuantity + 1;
      } else {
        return prevQuantity;
      }
    });
  }, [quantity, maxStock]);

  const decreaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => {
      const currentQuantity = prevQuantity === undefined ? 0 : prevQuantity;
      if (currentQuantity > 1) {
        return currentQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
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

  return {
    quantity,
    handleInputChange,
    handleInputBlur,
    startIncreasing,
    startDecreasing,
    stopChanging,
    increaseQuantity,
    decreaseQuantity,
  };
}

export default useQuantityInput;
//parseInt(event.target.value) เพื่อที่จะเปรียบเทียบ string ซึ่งอาจนำไปสู่ผลลัพธ์ที่ไม่คาดคิด เช่น การเปรียบเทียบ "10" กับ "2" ในรูปแบบของ string จะมี "10" น้อยกว่า "2" ซึ่งไม่ถูกต้อง การใช้ parseInt() แปลงค่าเป็นตัวเลขจำนวนเต็มจะช่วยให้การเปรียบเทียบนั้นถูกต้อง
//ReturnType<typeof setTimeout> จะคืนค่าชนิดของผลลัพธ์ที่ setTimeout ส่งกลับ ซึ่งเป็น number | undefined โดยที่ number คือ ID ของ timeout ที่สร้างขึ้นและ undefined คือค่าที่ส่งกลับถ้ามีข้อผิดพลาด
//setTimeout ใช้สำหรับการเรียกใช้ฟังก์ชันหรือโค้ดอื่นๆ ในขณะที่ระบบกำลังทำงาน โดยจะมีการเลื่อนเวลาก่อนเรียกใช้งานฟังก์ชันหรือโค้ดนั้น ๆ ตามจำนวนเวลาที่กำหนดไว้ในพารามิเตอร์ที่ส่งเข้าไป
//useRef การเปลี่ยนแปลงค่าใน useRef จะไม่ทำให้เกิดการเรียกใช้งานฟังก์ชัน useEffect และจะไม่เกิดการ re-render component นั้น ๆ เพราะว่าการเปลี่ยนค่าใน useRef ไม่ได้ส่งผลต่อ UI หรือ DOM
//.current ของ object ref เป็นการเก็บค่าปัจจุบันของ reference ที่ ref ตัวนั้นชี้ไปยัง object อื่น ๆ ภายใน component ตามขอบเขตของ ref นั้น ๆ
//setInterval เป็นฟังก์ชันที่ใช้สร้างการเรียกฟังก์ชันอื่นๆ ให้ทำงานทุกๆ ช่วงเวลาที่กำหนด โดยเรียกว่า interval