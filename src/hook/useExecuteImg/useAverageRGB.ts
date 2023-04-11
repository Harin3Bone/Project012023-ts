import { useState, useEffect } from "react";

import getAverageRGB from "./getAverageRGB";

type useAverageRGBPropsType = {
  imageUrl: string;
};

function useAverageRGB({ imageUrl }: useAverageRGBPropsType) {
  const [averageColor, setAverageColor] = useState({ r: 0, g: 0, b: 0 });

  useEffect(() => {
    if (!imageUrl) {
      console.warn("imageUrl useAverageRGB is not available.");
      return;
    }

    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const color = getAverageRGB({ imgEl: img });
      setAverageColor(color);
    };
  }, [imageUrl]);

  return averageColor;
}

export default useAverageRGB;
//img.crossOrigin = 'Anonymous' เพื่อระบุว่าการเข้าถึงข้อมูลของรูปภาพที่โหลดจากแหล่งอื่น (cross-origin) สามารถทำได้โดยไม่มีข้อจำกัดทางด้านความปลอดภัย (same-origin policy)
//img.onload เป็น event handler สำหรับอีเว้นต์ load ของออบเจกต์ Image. หมายความว่าเมื่อรูปภาพที่อยู่ในออบเจกต์ Image โหลดเสร็จสมบูรณ์แล้ว, ฟังก์ชันที่กำหนดให้กับ img.onload จะถูกเรียกใช้งาน
