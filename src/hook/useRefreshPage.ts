import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//hook
import useAuthenticationContext from "./useAuthenticationContext";

function useRefreshPage() {
  const { token } = useAuthenticationContext();

  //useNavigate
  const navigate = useNavigate();

  function useRefreshUnAuthenticatedPage() {
    useEffect(() => {
      if (!!token) {
        navigate("/")
      }
      return ()=>{}
    }, [token]);
  }

  function useRefreshAuthenticationPage() {
      navigate(0) 
      useEffect(() => { 
      if (!token) {
        navigate("/sign-in")
      }
      return ()=>{}
    }, [token]);
  }

  return {
    useRefreshUnAuthenticatedPage,
    useRefreshAuthenticationPage,
  };
}

export default useRefreshPage;
