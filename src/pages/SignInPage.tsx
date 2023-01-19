import React from 'react'


//components
import FormInputDefault from 'components/FormInputDefault'

function SignInPage() {
  return (
    <div className='mx-5 mt-[2.5rem]'>
      <div className='h-[36rem] p-2.5 border-4 border-[#111727] rounded-2xl bg-zinc-50 drop-shadow-2xl overflow-hidden'>
        <div className='flex justify-between flex-col'>
          <div className='flex justify-center flex-col mt-[5rem] text-center'>
            <h1>Welcome</h1>
            <p>Please your details.</p>
          </div>
          <form className='flex justify-center flex-col mt-[5rem]'>
            <FormInputDefault labelText={'email'} type={'text'}/>
            <FormInputDefault labelText={'password'} type={'password'}/>
            <button>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
