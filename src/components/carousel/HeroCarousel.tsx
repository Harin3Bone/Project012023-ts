import "style/App.css";

//constraint
import { HERO_IMAGES_DATA } from "src/constraint/HERO_IMAGES_DATA";

//component
import HeroImage from "./HeroImage";

function HeroCarousel() {
  return (
    <div className='relative min-h-[22rem] sm:min-h-[26rem] md:min-h-[30rem] lg:min-h-[36rem] overflow-hidden'>
      <div className='hero-carousel-container'>
        {HERO_IMAGES_DATA.map((data, index) => (
          <div key={index} className='hero-carousel-item'>
            <HeroImage imageUrl={data.imageUrl} title={data.title} subtitle={data.subtitle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
//css flex คือ Flexbox ซึ่งเป็นโมเดลการกำหนดเค้าโครงที่มีความยืดหยุ่น และใช้ในการจัดวางองค์ประกอบภายใน container ที่มีคุณสมบัติ display: flex หรือ display: inline-flex คุณสมบัติ flex เป็นคุณสมบัติสั้น (shorthand) สำหรับ flex-grow, flex-shrink, และ flex-basis ซึ่งควบคุมวิธีการยืดหยุ่นขององค์ประกอบใน container นี้
//css scroll-snap-type กำหนดวิธีการที่องค์ประกอบหลัก (scroll container) จะเข้ากับองค์ประกอบย่อย (scroll items) ขณะเลื่อน ค่าที่เป็นไปได้คือ none, mandatory, และ proximity โดยค่าเริ่มต้นคือ none ซึ่งไม่มีการปรับตัวเลื่อนเข้ากันใดๆ
//css scroll-behavior กำหนดวิธีการเลื่อนขององค์ประกอบหลัก ค่าที่เป็นไปได้คือ auto และ smooth ค่าเริ่มต้นคือ auto ซึ่งจะให้การเลื่อนปกติ ส่วน smooth จะให้การเลื่อนที่มีการเฉือน (smooth scrolling)
//css scroll-snap-align กำหนดตำแหน่งที่องค์ประกอบย่อยจะเข้ากันกับองค์ประกอบหลักขณะเลื่อน ค่าที่เป็นไปได้คือ none, start, end, และ center ค่าเริ่มต้นคือ none ซึ่งไม่มีการปรับตัวเลื่อนเข้ากันใดๆ
