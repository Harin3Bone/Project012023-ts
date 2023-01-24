import React from "react";

//components
import FormSign from "components/FormSign";
import useUserAuth from "hook/useUserAuth";

function SignInPage() {
  //useState hook
  const { user, setUser } = useUserAuth();

  //function
  const onSubmitSignIn = (email: string, password: string) => {
    console.log("SignIn", email, password);
  };

  return (
    <div>
      <FormSign
        formHeader={"Welcome"}
        formDescription={"Please your details."}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitSignIn(user.email, user.password);
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
        buttonLabel={"Sign in"}
      />
    </div>
  );
}

export default SignInPage;
// w 360 = w-[19.5rem]
