//style
import theme from "src/style/them";

//store
import useAuthenticationStore from "src/store/authentication/authentication.store";

//hook
import useUserAuth from "src/hook/useUserAuth";

type OnCreateLiPropTypes = {
  showStyleState?: boolean;
};

function ButtonCheckToken({ showStyleState = false }: OnCreateLiPropTypes) {
  //hook
  const jwtToken = useAuthenticationStore((state) => state.jwt);
  const { onSignOut } = useUserAuth();

  return jwtToken ? (
    <div className={showStyleState ? theme.setStyleMenuUi.setContainerButton : undefined}>
      <button
        className={showStyleState ? theme.setStyleMenuUi.setStyleButton : undefined}
        onClick={() => onSignOut()}
      >
        sign out
      </button>
    </div>
  ) : null;
}

export default ButtonCheckToken;
