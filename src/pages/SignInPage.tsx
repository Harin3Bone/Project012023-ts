import React from 'react'

//components
import FormSign from 'components/FormSign'

function SignInPage() {
  return (
    <div>
      <FormSign 
      header={'Welcome'}
      description={'Please your details.'}
      textButton={'Sign in'}
      />
    </div>
  )
}

export default SignInPage

// w 360 = w-[19.5rem]  