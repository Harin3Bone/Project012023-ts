import { PropsWithChildren } from "react"
import { Authentication } from "./authenticateContext"
import { useLocalStorage } from "react-use"

type AuthenticationProviderPropsType = {}

function AuthenticationProvider({children}: PropsWithChildren<AuthenticationProviderPropsType>) {
    const [token] = useLocalStorage<string|undefined>("token")
  return (
    <Authentication.Provider
        value={{token:token}}
    >
        {children}
    </Authentication.Provider>
  )
}

export default AuthenticationProvider