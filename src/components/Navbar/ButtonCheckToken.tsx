//style
import theme from 'style/them';

//store
import useAuthenticationStore from 'store/authentication/authentication.store';

//hook
import useUserAuth from 'hook/useUserAuth';

type OnCreateLiPropTypes = {
  showStyleState: boolean;
};

function ButtonCheckToken({showStyleState}:OnCreateLiPropTypes) {
  //hook
  const jwtToken = useAuthenticationStore();
  const { onSignOut } = useUserAuth()
  
  return jwtToken ? (
    <div className={showStyleState ? theme.setStyleMenuUi.setContainerButton : undefined}>
      <button className={showStyleState ?(theme.setStyleMenuUi.setStyleButton)  : undefined} onClick={() => onSignOut()}>sign out</button>
    </div>
  ): null
}

export default ButtonCheckToken