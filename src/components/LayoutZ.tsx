import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

//store
import useAuthenticationStore from "store/authentication/authentication.store";

//components
import Footer from "./Footer";
import ProfileDropdown from "./navbar/ProfileDropdown";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website
//จะทำ https://www.ingrid.com/blog/order-confirmation-page

function LayoutZ() {
  //store
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  return (
    <div  className='flex flex-col min-h-[100vh]'>
      {/* <ProfileDropdown /> error */}
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default LayoutZ