import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

//store
import useAuthenticationStore from "src/store/authentication/authentication.store";

//components
// import OnCreateLi from "./navbar/OnCreateLi";
// import HamburgerMenu from "./navbar/HamburgerMenu";
// import DropdownProfile from "./navbar/DropdownProfile";
import Footer from "components/Footer";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website
//จะทำ https://www.ingrid.com/blog/order-confirmation-page

function Layout() {
  //store
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  //useState
  const [scrollY, setScrollY] = useState(window.scrollY || 0);
  const [visible, setVisible] = useState(true);

  //useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  //function
  const handleScroll = () => {
    const currentYOffset = window.scrollY;
    const checkVisible = scrollY > currentYOffset;

    setScrollY(currentYOffset);
    setVisible(checkVisible);
  };

  return (
    <div className='flex flex-col min-h-[100vh]'>
      <div
        className={
          visible
            ? "sticky top-0 inset-x-0 block h-[4.6rem] " +
              (scrollY > 300 ? "bg-black/95" : "bg-black/80") +
              " z-40 duration-500 ease-out "
            : "-top-[101%] ease-in duration-1000 transition-all "
        }
      >
        <div className='flex justify-between items-center h-[4.6rem] lg:mx-[3%] px-[2%] py-2.5 text-white'>
          <Link to='/'>
            <h1 className='m-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer select-none '>
              Test
            </h1>
          </Link>
          <div className='flex justify-between items-center'>
            <ul className='hidden md:flex justify-between items-center'>
              {/* <OnCreateLi showStyleState={true} /> */}
            </ul>
            {/* {jwtToken ? <></> : <HamburgerMenu />} */}
            {/* <DropdownProfile/> */}
          </div>
        </div>
      </div>
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
