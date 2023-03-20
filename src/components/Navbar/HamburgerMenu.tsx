import "../../style/App.css";

//components
import OnCreateLi from "./OnCreateLi";

//https://codepen.io/Danilo06/pen/PoNNvGm
//https://codepen.io/yuhomyan/pen/WNwGywp

function HamburgerMenu() {
  return (
    <label htmlFor='active' className='label__checkbox'>
      <input type='checkbox' id='active' className='input__checkbox hidden' />
      <span className='span__checkbox'></span>
      <span className='span__checkbox'></span>
      <span className='span__checkbox'></span>
      <div className='wrapper'>
        <ul>
          <OnCreateLi showStyleState={false} />
        </ul>
      </div>
    </label>
  );
}

export default HamburgerMenu;
