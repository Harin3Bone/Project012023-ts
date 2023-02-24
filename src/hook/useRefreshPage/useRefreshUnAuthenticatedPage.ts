import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//hook
import useAuthenticationContext from "../useAuthenticationContext";

function useRefreshUnAuthenticatedPage() {
  const { token } = useAuthenticationContext();

  //useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token) {
      navigate("/")
    }
      return ()=>{}
  }, [token]);
}

export default useRefreshUnAuthenticatedPage