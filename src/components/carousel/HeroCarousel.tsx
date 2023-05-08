import "style/App.css";

//constraint
import { HERO_IMAGES_DATA } from "src/constraint/HERO_IMAGES_DATA";

//hook
import ControlCarousel from "hook/useCarousel/ControlCarousel";

//component
import HeroImage from "./HeroImage";
import CarouselPagination from "./CarouselPagination";

function HeroCarousel() {
  const { activeIndex, carouselRef, prevSlide, nextSlide, goToSlide } = ControlCarousel();

  return (
    <div className='relative min-h-[22rem] sm:min-h-[26rem] md:min-h-[30rem] lg:min-h-[36rem] overflow-hidden'>
      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-0 flex justify-center items-center w-8 h-24 rounded-sm bg-black/20 transform -translate-y-1/2 z-20'
      >
        <span className='text-white text-5xl mb-2'>&#8249;</span>
      </button>
      <div className='hero-carousel-container' ref={carouselRef}>
        {HERO_IMAGES_DATA.map((data, index) => (
          <div key={index} className='hero-carousel-item'>
            <HeroImage imageUrl={data.imageUrl} title={data.title} subtitle={data.subtitle} />
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-0 flex justify-center items-center w-8 h-24 rounded-sm bg-black/20 transform -translate-y-1/2 z-20'
      >
        <span className='text-white text-5xl mb-2'>&#8250;</span>
      </button>
      <CarouselPagination
        itemCount={HERO_IMAGES_DATA.length}
        activeIndex={activeIndex}
        onPaginationItemClick={goToSlide}
      />
    </div>
  );
}

export default HeroCarousel;
//css flex คือ Flexbox ซึ่งเป็นโมเดลการกำหนดเค้าโครงที่มีความยืดหยุ่น และใช้ในการจัดวางองค์ประกอบภายใน container ที่มีคุณสมบัติ display: flex หรือ display: inline-flex คุณสมบัติ flex เป็นคุณสมบัติสั้น (shorthand) สำหรับ flex-grow, flex-shrink, และ flex-basis ซึ่งควบคุมวิธีการยืดหยุ่นขององค์ประกอบใน container นี้
//css scroll-snap-type กำหนดวิธีการที่องค์ประกอบหลัก (scroll container) จะเข้ากับองค์ประกอบย่อย (scroll items) ขณะเลื่อน ค่าที่เป็นไปได้คือ none, mandatory, และ proximity โดยค่าเริ่มต้นคือ none ซึ่งไม่มีการปรับตัวเลื่อนเข้ากันใดๆ
//css scroll-behavior กำหนดวิธีการเลื่อนขององค์ประกอบหลัก ค่าที่เป็นไปได้คือ auto และ smooth ค่าเริ่มต้นคือ auto ซึ่งจะให้การเลื่อนปกติ ส่วน smooth จะให้การเลื่อนที่มีการเฉือน (smooth scrolling)
//css scroll-snap-align กำหนดตำแหน่งที่องค์ประกอบย่อยจะเข้ากันกับองค์ประกอบหลักขณะเลื่อน ค่าที่เป็นไปได้คือ none, start, end, และ center ค่าเริ่มต้นคือ none ซึ่งไม่มีการปรับตัวเลื่อนเข้ากันใดๆ
