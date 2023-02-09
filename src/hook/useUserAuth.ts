import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

//api
import { onSingIn, onSingUp } from "api/authentication";

//hook
import useAuthenticationContext from "./useAuthenticationContext";

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

  //useNavigate
  const navigate = useNavigate();

  //useState
  const [informationForm, setInformationForm] = useState<informationFormType>({
    email: "",
    password: "",
  });

  //useLocalStorage
  const [, setValue] = useLocalStorage("token");

  //function
  function onHandleChangeInformationForm(value: string, type: keyof informationFormType) {
    setInformationForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  function onSubmitForm(parameter: informationFormClassificationType) {
    if (parameter.Form === "SignIn") {
      onSingIn({ email: parameter.email, password: parameter.password });
      setValue(parameter.email);
      onSetToken(parameter.email);
      // navigate(0);
    }
    if (parameter.Form === "SignUp") {
      onSingUp({ email: parameter.email, password: parameter.password });
    } else {
      console.log("error 404");
      navigate(0);
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
