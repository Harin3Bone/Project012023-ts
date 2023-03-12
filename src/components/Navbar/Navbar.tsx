import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

//components
import OnCreateLi from "./OnCreateLi";
import ProfileDropdown from "./ProfileDropdown";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website

//จะทำ https://www.ingrid.com/blog/order-confirmation-page

function Navbar() {
  //store

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
    <div>
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
              <OnCreateLi showStyleState={true} />
            </ul>
            <ProfileDropdown/>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
