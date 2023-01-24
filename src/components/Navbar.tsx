import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/App.css";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website

function Navbar() {
  return (
    <div>
      <div className='NavbarBody sticky top-0 inset-x-0 h-[4.6rem] bg-black z-40'>
        <div className='flex justify-between items-center h-[4.6rem] mx-[5%] py-2.5 px-[2.5%] text-white'>
          <Link to='/'>
            <h1 className='text-2xl cursor-pointer lg:text-3xl'>Test</h1>
          </Link>
          <button className=' items-center w-[4rem] z-50'>
            <div className='ml-[1rem]'>
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </div>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
