import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Authentication } from 'context/auth/authenticateContext'

//type
type PrivateRoutePropsType = {}

function PrivateRoute({}:PrivateRoutePropsType) {
  const { token } = useContext(Authentication)
  return token ? <Outlet /> : <Navigate to={"/"} />
}

export default PrivateRoute