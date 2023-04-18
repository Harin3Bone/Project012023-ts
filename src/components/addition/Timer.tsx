import { useState, useEffect, memo } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const timeString = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
  return <h1>{timeString}</h1>;
}

export default memo(Timer);
//memo เป็น Higher-Order Component ที่จะช่วยเพิ่มประสิทธิภาพในการ rendering ของ component โดยจะเป็นการเก็บ cache ผลลัพธ์การ rendering ของ component ไว้ 
//และเมื่อมีการเรียกใช้งาน component ด้วย prop ที่เหมือนเดิม ก็จะใช้ค่า cache ที่เก็บไว้เดิมไปเลย ไม่ต้องทำการ rendering ใหม่ซ้ำๆ ทำให้เวลา rendering ลดลงและประหยัดเวลา