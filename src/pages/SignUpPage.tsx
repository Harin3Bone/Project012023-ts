//components
import FormSign from "components/FormSign";

//hook
import useUserAuth from "hook/useUserAuth";
import useRefreshUnAuthenticatedPage from "hook/useRefreshPage/useRefreshUnAuthenticatedPage";

function SignUpPage() {
  //useState hook
  const { informationForm,onHandleChangeInformationForm,onSubmitForm } = useUserAuth();
  
  useRefreshUnAuthenticatedPage()

  return (
    <div>
      <FormSign
        formHeader={"Create an account"}
        formDescription={"Please your details."}
        onSubmit={(email:string, password: string) => onSubmitForm({email,password,Form:"SignUp"})}
        emailValue={informationForm.email}
        passwordValue={informationForm.password}
        onChangeValue={(value: string, type: "email" | "password") => onHandleChangeInformationForm(value,type)}
        buttonLabel={"Sign up"}
      />
    </div>
  );
}

export default SignUpPage;
