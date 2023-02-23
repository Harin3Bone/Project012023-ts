//style
import theme from 'style/them';

//hook
import useAuthenticationContext from 'hook/useAuthenticationContext';
import useUserAuth from 'hook/useUserAuth';

type OnCreateLiPropTypes = {
  showStyleState: boolean;
};

function ButtonCheckToken({showStyleState}:OnCreateLiPropTypes) {
  //hook
  const { token } = useAuthenticationContext();
  const { onSignOut } = useUserAuth()
  
  return token ? (
    <div className={showStyleState ? theme.setStyleMenuUi.setContainerButton : undefined}>
      <button className={showStyleState ?(theme.setStyleMenuUi.setStyleButton)  : undefined} onClick={() => onSignOut()}>sign out</button>
    </div>
  ): null
}

export default ButtonCheckToken