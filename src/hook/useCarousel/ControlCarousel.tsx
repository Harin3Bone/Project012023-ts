import { useState, useRef, useCallback, useEffect } from "react";

function ControlCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const updateActiveIndex = () => {
    if (carouselRef.current) {
      const newActiveIndex = Math.round(
        carouselRef.current.scrollLeft / carouselRef.current.clientWidth,
      );
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      updateActiveIndex();
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const prevSlide = useCallback(() => {
    if (carouselRef.current) {
      const isFirstSlide = carouselRef.current.scrollLeft === 0;
      if (isFirstSlide) {
        const lastSlidePosition = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        carouselRef.current.scrollTo({ left: lastSlidePosition, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({
          left: -carouselRef.current.clientWidth,
          behavior: "smooth",
        });
      }
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (carouselRef.current) {
      const isLastSlide =
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
        carouselRef.current.scrollWidth;
      if (isLastSlide) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: "smooth" });
      }
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (carouselRef.current) {
      const targetPosition = carouselRef.current.clientWidth * index;
      carouselRef.current.scrollTo({ left: targetPosition, behavior: "smooth" });
    }
  }, []);

  return {
    activeIndex,
    carouselRef,
    prevSlide,
    nextSlide,
    goToSlide,
  };
}

export default ControlCarousel;
//Math.round() จะทำให้ค่าที่คำนวณได้ปัดเศษขึ้นหรือลงให้เป็นจำนวนเต็มที่ใกล้เคียงที่สุด
//carouselRef.current.scrollLeft คือความกว้างของเส้นที่เลื่อนแล้วในแกน X ของ carouselRef.current (ความกว้างที่เลื่อนไปแล้วจากขอบซ้ายของ Carousel)
//carouselRef.current.clientWidth คือความกว้างของ viewport (พื้นที่แสดงผล) ของ carouselRef.current (ความกว้างของหน้าที่แสดงอยู่ในขณะนั้น)
//carouselRef.current.scrollWidth คือความกว้างทั้งหมดของข้อมูลภายในเชิงเส้นของ carouselRef.current (ความกว้างของ Carousel ทั้งหมดรวมทุกหน้า)