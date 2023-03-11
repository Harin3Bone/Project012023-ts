import "../../style/App.css";

//store
import useAuthenticationStore from "store/authentication/authentication.store";

//components
import OnCreateLi from "./OnCreateLi";
import ButtonCheckToken from "./ButtonCheckToken";

function HamburgerMenu() {
  const jwtToken = useAuthenticationStore((state) => state.jwt);
  return (
    <label htmlFor='active' className='label__checkbox'>
      <input type='checkbox' id='active' className='input__checkbox hidden' />
      <span className='span__checkbox'></span>
      <span className='span__checkbox'></span>
      <span className='span__checkbox'></span>
      <div className='wrapper'>
        <ul>
          <OnCreateLi showStyleState={false} />
          <li className={jwtToken ? "block" : " hidden "}>
            <ButtonCheckToken showStyleState={false} />
          </li>
        </ul>
      </div>
    </label>
  );
}

export default HamburgerMenu;
