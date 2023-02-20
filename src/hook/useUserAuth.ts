import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

//api
import { onSingIn, onSingUp } from "api/authentication";

//hook
import useAuthenticationContext from "./useAuthenticationContext";
import { useGlobalLoading } from "./useGlobalLoading";

//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastSuccess, toastError } from "style/toast";

//type
export type informationFormType = {
  email: string;
  password: string;
};

export type informationFormClassificationType = {
  Form: "SignUp" | "SignIn";
} & informationFormType;

function useUserAuth() {
  //hook
  const { onSetToken, onDeleteToken } = useAuthenticationContext();
  const { onUpdateIsOpen } = useGlobalLoading();

  //useNavigate
  const navigate = useNavigate();

  //useLocalStorage
  const [, setValue] = useLocalStorage("token");

  //useState
  const [informationForm, setInformationForm] = useState<informationFormType>({
    email: "",
    password: "",
  });

  //function
  function onHandleChangeInformationForm(value: string, type: keyof informationFormType) {
    setInformationForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  async function onSubmitForm(parameter: informationFormClassificationType) {
    let dummy: string | undefined = undefined;
    if (parameter.Form === "SignIn") {
      onUpdateIsOpen();
      const [data, errorMessage] = await onSingIn({
        email: parameter.email,
        password: parameter.password,
      });
      if (!!data?.jwt && !!data?.user) {
        dummy = data.user?.email;
        // setValue(data.jwt);
        onSetToken(data.jwt);
        onUpdateIsOpen();
        toast.success(`successfully connected ${dummy}`, toastSuccess);
        navigate("/");
      } else {
        onUpdateIsOpen();
        toast.error(errorMessage, toastError);
        // console.log('Please enter the correct email and password.');
      }
    }
    if (parameter.Form === "SignUp") {
      const [data, errorMessage] = await onSingUp({
        email: parameter.email,
        password: parameter.password,
      });
      if (!!data) {
        dummy = data.user?.email;
        onUpdateIsOpen();
        toast.success(`successfully connected ${dummy}`, toastSuccess);
        navigate(`/please-confirmation?email=${dummy}`);
      } else {
        onUpdateIsOpen();
        toast.error(errorMessage, toastError);
        // console.log('Please enter the correct email and password.');
      }
    }
  }

  function onSignOut() {
    onDeleteToken();
    navigate(0);
  }

  return {
    informationForm,
    onHandleChangeInformationForm,
    onSubmitForm,
    onSignOut,
  };
}
export default useUserAuth;

//คือการ reload หน้าเว็บ
//window.location.reload();
//navigate(0)

//useState ทำงานแบบ Asynchronous function
 //ตัวอย่างที่ 1
  // const onUpdateConfirmationEmail = () => {
  //   setConfirmationEmail((p)=>!p)
  //   setConfirmationEmail((p) => {
  //     console.log(p)
  //     return p
  //   });
  // };

 //ตัวอย่างที่ 2 
// const onUpdateConfirmationEmail = () => {
//   const effigy = !confirmationEmail
//   setConfirmationEmail(effigy)
// };;