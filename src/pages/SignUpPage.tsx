//components
import FormSign from "components/FormSign";
import useUserAuth from "hook/useUserAuth";

function SignUpPage() {
  //useState hook
  const { informationForm,onHandleChangeInformationForm,onSubmitForm } = useUserAuth();

  return (
    <div>
      <FormSign
        formHeader={"Create an account"}
        formDescription={"Please your details."}
        onSubmit={(email:string, password: string) => onSubmitForm({email,password})}
        emailValue={informationForm.email}
        passwordValue={informationForm.password}
        onChangeValue={(value: string, type: "email" | "password") => onHandleChangeInformationForm(value,type)}
        buttonLabel={"Sign up"}
      />
    </div>
  );
}

export default SignUpPage;
