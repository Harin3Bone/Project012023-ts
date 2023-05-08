import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//store
import useAuthenticationStore from "store/authentication/authentication.store";

function useRefreshUnAuthenticatedPage() {
  //useNavigate
  const navigate = useNavigate();
  const location = useLocation();

  const jwtToken = useAuthenticationStore((state) => state.jwt);

  useEffect(() => {
    if (jwtToken) {
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    }
    return () => {};
  }, [jwtToken]);
}

export default useRefreshUnAuthenticatedPage;
//{ from: { pathname: "/" } } ในการนำทางจะช่วยให้คุณสามารถกำหนดค่าเริ่มต้นของ from ในกรณีที่ไม่มีสถานะ location ที่ส่งมากับการนำทาง