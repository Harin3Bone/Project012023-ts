import React from "react";

//components
import FormSign from "components/FormSign";
import useUserAuth from "hook/useUserAuth";

function SignUpPage() {
  //useState hook
  const { user, setUser } = useUserAuth();

  //function
  const onSubmitSignUp = (email: string, password: string) => {
    console.log("SignUp", email, password);
  };

  return (
    <div>
      <FormSign
        formHeader={"Create an account"}
        formDescription={"Please your details."}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitSignUp(user.email, user.password);
        }}
        emailValue={user.email}
        onSetEmailValue={(param) => {
          setUser((prev) => {
            return {
              ...prev,
              email: param,
            };
          });
        }}
        passwordValue={user.password}
        onSetPasswordValue={(param) => {
          setUser((prev) => {
            return {
              ...prev,
              password: param,
            };
          });
        }}
        buttonLabel={"Sign up"}
      />
    </div>
  );
}

export default SignUpPage;
