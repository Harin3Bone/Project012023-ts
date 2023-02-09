import { useMemo } from "react";
import { Link,  Outlet } from "react-router-dom";
import "../style/App.css";

//components
import OnCreateLi from "./OnCreateLi";

//hook
import useUserAuth from "hook/useUserAuth";
import useAuthenticationContext from "hook/useAuthenticationContext";

//style
import theme from "style/them";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website

function Navbar() {
  //hook
  const { onSignOut } = useUserAuth()
  const { token } = useAuthenticationContext();

  //useMemo
  const menuSignout = useMemo(()=>{
    if(token){
      return( 
        <div className={`${theme.setStyleMenuUi.setContainerButton}`}>
          <button className={`${theme.setStyleMenuUi.setStyleButton}`} onClick={() => onSignOut()}>sign out</button>
        </div>
       )
    }
    return token
  },[token])

  return (
    <div>
      <div className='NavbarBody sticky top-0 inset-x-0 h-[4.6rem] bg-black z-40'>
        <div className='flex justify-between items-center h-[4.6rem] mx-[5%] py-2.5 px-[2.5%] text-white'>
          <Link to='/'>
            <h1 className='text-2xl cursor-pointer select-none md:text-3xl lg:text-4xl'>Test</h1>
          </Link>
          <div className="flex justify-between items-center">
            <ul className='flex justify-between items-center'>{OnCreateLi()}</ul>
            {menuSignout}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
{
  /* <label
            htmlFor='check'
            className='group/input flex flex-col w-12 h-12 hover:cursor-pointer'
          >
            <input type='checkbox' id='check' className=' hidden' />
            <span
              className='w-1/2 h-1.5 my-1 rounded-lg bg-white ease-in-out duration-300
                group-checked/input:origin-bottom group-checked/input:rotate-45 group-checked/input:translate-y-2'
            ></span>
            <span
              className='h-1.5 my-1 rounded-lg bg-white ease-in-out duration-300
                group-checked/input:origin-top group-checked/input:-rotate-45'
            ></span>
            <span
              className='w-3/4 h-1.5 my-1 rounded-lg bg-white ease-in-out duration-300
                group-checked/input:w-1/2 group-checked/input:translate-y-[30px] group-checked/input:translate-x-[-11px] group-checked/input:rotate-45'
            ></span>
          </label> */
}
