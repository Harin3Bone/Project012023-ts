import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

//hook
import useAuthenticationContext from 'hook/useAuthenticationContext'

//type
type PrivateRoutePropsType = {}

function PrivateRoute({}:PrivateRoutePropsType) {
  
  //hook
  const { token } = useAuthenticationContext()

  //useNavigate
  const navigate = useNavigate()

  //useEffect
  useEffect(() => {
    if(!token){
      navigate('/signin')
    }
  }, [token])
  
  return token ? <Outlet /> : <Navigate to={"/"} />
}

export default PrivateRoute