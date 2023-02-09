//components
import FormSign from "components/FormSign";

//hook
import useUserAuth from "hook/useUserAuth";
import useRefreshPage from "hook/useRefreshPage";

function SignInPage() {
  //useState hook
  const { informationForm,onHandleChangeInformationForm,onSubmitForm } = useUserAuth();
  const {useRefreshUnAuthenticatedPage} = useRefreshPage();
  
  useRefreshUnAuthenticatedPage()

  return (
    <div>
      <FormSign
        formHeader={"Welcome"}
        formDescription={"Please your details."}
        onSubmit={(email:string, password: string) => onSubmitForm({email,password,Form:"SignIn"})}
        emailValue={informationForm.email}
        passwordValue={informationForm.password}
        onChangeValue={(value: string, type: "email" | "password") => onHandleChangeInformationForm(value,type)}
        buttonLabel={"Sign in"}
      />
    </div>
  );
}

export default SignInPage;
// w 360 = w-[19.5rem]
