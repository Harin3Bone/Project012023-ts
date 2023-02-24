import { Link,  Outlet } from "react-router-dom";

//components
import OnCreateLi from "./OnCreateLi";
import ButtonCheckToken from "./ButtonCheckToken";
import HamburgerMenu from "./HamburgerMenu";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website

//จะทำ https://www.ingrid.com/blog/order-confirmation-page

function Navbar() {
  return (
    <div>
      <div className='NavbarBody sticky top-0 inset-x-0 h-[4.6rem] bg-black z-40'>
        <div className='flex justify-between items-center h-[4.6rem] lg:mx-[3%] px-[2%] py-2.5 text-white'>
            <Link to='/'>
              <h1 className='m-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer select-none '>Test</h1>
            </Link>
          <div className="hidden md:flex justify-between items-center">
            <ul className='flex justify-between items-center'>
              <OnCreateLi showStyleState={true}/>
            </ul>
            <ButtonCheckToken showStyleState={true}/>
          </div>
          <HamburgerMenu/>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;