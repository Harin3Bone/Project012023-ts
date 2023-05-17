import { Outlet } from "react-router-dom";

//components
import NavigationBar from "./navigation/NavigationBar";
import Footer from "components/Footer";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website
//จะทำ https://www.ingrid.com/blog/order-confirmation-page

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavigationBar />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
//flex-grow ใช้กำหนดว่าขนาดของ item ใน flex container ควรขยายตัวเต็มพื้นที่ว่างหรือไม่ ค่าเริ่มต้นคือ 0 ซึ่งหมายความว่า item จะไม่ขยายตัวเต็มพื้นที่ว่าง ถ้าคุณกำหนดค่า flex-grow ให้มากกว่า 0 item จะขยายตัวเต็มพื้นที่ว่างที่มีอยู่ ถ้าหากมีหลาย item แต่ละ item จะมีส่วนแบ่งของพื้นที่ว่างตามค่า flex-grow ที่กำหนด
//flex-wrap ใช้กำหนดว่า item ใน flex container ควรพับ (wrap) หรือไม่เมื่อพื้นที่ใน container ไม่เพียงพอสำหรับ item ทั้งหมด ค่าเริ่มต้นคือ nowrap ซึ่งหมายความว่า item จะไม่พับ แต่จะอยู่ในแนวเดียวกัน ถ้าคุณกำหนดค่าเป็น wrap หรือ wrap-reverse item จะพับลงมาในบรรทัดถัดไปเมื่อพื้นที่ใน container ไม่เพียงพอ
