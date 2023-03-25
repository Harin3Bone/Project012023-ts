import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

//store
import useAuthenticationStore from "store/authentication/authentication.store";

//components
import Footer from "./Footer";
import HamburgerMenu from "./navbar/HamburgerMenu";
// import ProfileDropdown from "./navbar/ProfileDropdown";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website
//จะทำ https://www.ingrid.com/blog/order-confirmation-page

function LayoutZ() {
  //store
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  return (
    <div  className='flex flex-col min-h-[100vh]'>
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
            {jwtToken ? <></> : <HamburgerMenu />}
            {/* <ProfileDropdown /> */}
          </div>
        </div>
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default LayoutZ