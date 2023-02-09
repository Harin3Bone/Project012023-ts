import { PropsWithChildren } from "react"
import { Authentication } from "./authenticateContext"
import { useLocalStorage } from "react-use"

type AuthenticationProviderPropsType = {}

function AuthenticationProvider({children}: PropsWithChildren<AuthenticationProviderPropsType>) {
  const [token, setToken, removeToken] = useLocalStorage<string|undefined>("token")

  const onSetToken = (param: string) => {
    setToken(param)
  }

  const onDeleteToken = () => {
    removeToken()
  }

  return (
    <Authentication.Provider
        value={{
          token:token,
          onSetToken: onSetToken,
          onDeleteToken: onDeleteToken
        }}
    >
        {children}
    </Authentication.Provider>
  )
}

export default AuthenticationProvider