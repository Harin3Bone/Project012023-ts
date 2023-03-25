import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//store
import useAuthenticationStore from "src/store/authentication/authentication.store";

function useRefreshUnAuthenticatedPage() {
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  //useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    if (!!jwtToken) {
      navigate("/");
    }
    return () => {};
  }, [jwtToken]);
}

export default useRefreshUnAuthenticatedPage;
