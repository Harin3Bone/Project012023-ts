import React from 'react'
import { Link } from 'react-router-dom'

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website

function Navbar() {
  return (
    <div className='NavbarBody sticky top-0 inset-x-0 h-[4.6rem] bg-black z-50'>
      <div className='flex justify-between items-center h-[4.6rem] mx-[5%] py-2.5 px-[2.5%] text-white'>
        <Link to="/">
          <h1 className='text-2xl cursor-pointer lg:text-3xl'>Test</h1>
        </Link>
        <button className='flex justify-between w-[4rem]'>
          <span className='text-xl lg:text-2xl'>Menu</span>
          <span className=''>b</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar

