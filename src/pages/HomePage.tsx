//components
import ProductsList from "components/productlist/ProductsList";
import HeroCarousel from "components/carousel/HeroCarousel";

//reference https://www.pexels.com/
//Products https://css-tricks.com/practical-css-scroll-snapping/

function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <ProductsList />
    </div>
  );
}

export default HomePage;
//object-cover กำหนดพฤติกรรมของรูปภาพ กรณีที่ขนาดของมันไม่ตรงกับพื้นที่ที่จัดสรรให้ มันจะทำให้รูปภาพ ปรับขนาดเพื่อเติมเต็มพื้นที่ที่มองเห็นได้โดยรักษารัดส่วนของรูปภาพม่เบี้ยวหรือแตกต่างจากต้นฉบับ ข้อเสียของการใช้ object-cover คือบางส่วนของเนื้อหาอาจถูกครอบคลุมหากขนาดของพื้นที่ที่จัดสรรให้ไม่ตรงกัน
//object-center กำหนดการจัดวางของรูปภาพ ในพื้นที่ที่จัดสรรให้ ในกรณีที่ขนาดของมันไม่ตรงกัน มันจะทำให้เนื้อหาอยู่ตรงกลางของพื้นที่ที่จัดสรรให้ ทั้งแนวนอนและแนวตั้ง
