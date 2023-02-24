import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//hook
import useAuthenticationContext from "../useAuthenticationContext";

function useRefreshAuthenticationPage() {
  const { token } = useAuthenticationContext();

  //useNavigate
  const navigate = useNavigate();

  navigate(0) 
  useEffect(() => { 
  if (!token) {
    navigate("/sign-in")
  }
    return ()=>{}
  }, [token]);
}

export default useRefreshAuthenticationPage