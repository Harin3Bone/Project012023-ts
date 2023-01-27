//components
import FormSign from "components/FormSign";
import useUserAuth from "hook/useUserAuth";


function SignInPage() {
  //useState hook
  const { informationForm,onHandleChangeInformationForm,onSubmitForm } = useUserAuth();

  return (
    <div>
      <FormSign
        formHeader={"Welcome"}
        formDescription={"Please your details."}
        onSubmit={(email:string, password: string) => onSubmitForm({email,password})}
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
