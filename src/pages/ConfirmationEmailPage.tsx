import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//components
import FormNotification from "components/FormNotification";

function ConfirmationEmailPage() {
  //react-router-dom
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const dummy = searchParams.get("email",)

  //useEffect
  useEffect(() => {
    if (!dummy) {
      navigate("*");
    }
  }, [dummy]);

  return (
    <div>
      <FormNotification
        formHeader={"Thank you! Regarding Your Registration"}
        formContent={`We have send you an confirmation email to ${dummy} Please confirm your email address to activate your account`}
        buttonLabel={"SignIn"}
        onClickButton={() => {navigate("/sign-in")}}
      />
    </div>
  );
}

export default ConfirmationEmailPage;
