import React from 'react'

//components
import FormSign from 'components/FormSign'

function SignUpPage() {
  return (
    <div>
      <FormSign 
      header={'Create an account'}
      description={"Let's get started."}
      textButton={'Sign up'}
      />
    </div>
  )
}

export default SignUpPage