import { Navigate, Outlet, useLocation } from "react-router-dom";

//store
import useAuthenticationStore from "src/store/authentication/authentication.store";

//type
type PrivateRoutePropsType = {};

function PrivateRoute({}: PrivateRoutePropsType) {
  //store
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  const location = useLocation();

  return jwtToken ? <Outlet /> : <Navigate to={"/sign-in"} state={{ from: location }} replace />;
}

export default PrivateRoute;
//replace = การแทนที่
//state={{from:location}} คือการเก็บค่า from เป็น (location = หน้าที่เข้าก่อนหน้านี้) เมือไม่มี jwtToken หน้าที่ขอ jwtToken จะส่งไปหน้าก่อนหน้านี้
