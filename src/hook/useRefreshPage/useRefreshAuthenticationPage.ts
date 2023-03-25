import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//store
import useAuthenticationStore from "src/store/authentication/authentication.store";

function useRefreshAuthenticationPage() {
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  //useNavigate
  const navigate = useNavigate();

  navigate(0);
  useEffect(() => {
    if (!jwtToken) {
      navigate("/sign-in");
    }
    return () => {};
  }, [jwtToken]);
}

export default useRefreshAuthenticationPage;
