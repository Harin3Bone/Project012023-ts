import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//hook
import useAuthenticationContext from "./useAuthenticationContext";

function useRefreshPage() {
  const { token } = useAuthenticationContext();

  //useNavigate
  const navigate = useNavigate();

  function useGoHome() {
    navigate("/");
  }

  function useRefreshUnAuthenticatedPage() {
    useEffect(() => {
      if (!!token) {
        navigate("/")
      }
      return () => {};
    }, [token]);
  }

  function useRefreshAuthenticationPage() {
    useEffect(() => {
      navigate(0);
      if (!!token) {
        navigate("/sign-in");
      }
      return () => {};
    }, [token]);
  }

  return {
    useGoHome,
    useRefreshUnAuthenticatedPage,
    useRefreshAuthenticationPage,
  };
}

export default useRefreshPage;
