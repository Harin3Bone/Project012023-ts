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

  console.log(activeIndex);

  return {
    activeIndex,
    carouselRef,
    prevSlide,
    nextSlide,
    goToSlide,
  };
}

export default ControlCarousel;
