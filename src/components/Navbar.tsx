import React from 'react'

function Navbar() {
  return (
    <div className='NavbarBody sticky top-0 inset-x-0 h-[4.6rem] bg-black z-50'>
      <div className='flex justify-between items-center h-[4.6rem] py-2.5 px-5 text-white'>
        <div>
          <h1>Test</h1>
        </div>
        <button className='flex justify-between w-[3rem]'>
          <span>Menu</span>
          <span>b</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar

