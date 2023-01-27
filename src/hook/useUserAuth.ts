import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

//type
export type informationFormType = {
  email: string;
  password: string;
};

function useUserAuth() {
  //useNavigate
  const navigate = useNavigate()

  //useState
  const [informationForm, setInformationForm] = useState<informationFormType>({
    email: "",
    password: "",
  });

  //useLocalStorage
  const [,setValue] = useLocalStorage("token")

  //function
  function onHandleChangeInformationForm(value: string, type: keyof informationFormType) {
    setInformationForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  function onSubmitForm(parameter: informationFormType) {
    console.log("SignUp", parameter.email, parameter.password);
    setValue(parameter.email);
    navigate("/")
    window.location.reload(); 
  }

  return {
    informationForm,
    onHandleChangeInformationForm,
    onSubmitForm,
  };
}
export default useUserAuth;
