import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

//store
import useAuthenticationStore from "store/authentication/authentication.store";

//type
type PrivateRoutePropsType = {};

function PrivateRoute({}: PrivateRoutePropsType) {
  //store
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  //useNavigate
  const navigate = useNavigate();

  //useEffect
  useEffect(() => {
    if (!jwtToken) {
      navigate("/sign-in");
    }
  }, [jwtToken]);

  return jwtToken ? <Outlet /> : <Navigate to={"/"} />;
}

export default PrivateRoute;
