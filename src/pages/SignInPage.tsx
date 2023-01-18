import React from 'react'

function SignInPage() {
  return (
    // mx-80 margin: 0 20rem; /* 320px
    //my-24  margin-top: 6rem margin-bottom: 6rem
    <div className='SignInBody h-[45rem] mx-[20.5rem] my-[5%] border-8 border-[#111727] rounded-2xl drop-shadow-2xl overflow-y-hidden z-10'>
      <div className='SignInFlex flex'>
        <div className='SignInImg max-w-3xl'>
          <img className='w-full h-[45rem]'  src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='SignInContainer w-[30rem] h-[45rem] border-[#f7f8f6] bg-zinc-50'>
          <h1>Welcome</h1>
          <p>Please your details.</p>
          <form action="">
            <input type="text" />
            <input type="password" />
            <button>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
//50.68
//27.3