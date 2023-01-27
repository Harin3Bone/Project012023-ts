import { useMemo } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../style/App.css";

//hook
import useAuthenticationContext from "hook/useAuthenticationContext";

//reference https://www.ramotion.com/web-design/?utm_source=drbl&utm_medium=special&utm_campaign=20247474-Education-Website

const fullMenuList = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "sign in",
    path: "/signin",
  },
  {
    name: "sign up",
    path: "/signup",
  },
  {
    name: "sign out",
    path: "/",
  },
];

const pathForToken = ["/about", "/"];

function Navbar() {
  const { token } = useAuthenticationContext();

  //useMemo
  const menuList = useMemo(() => {
    if (!token) {
      return fullMenuList.filter((menu) => {
        return pathForToken.includes(menu.path) ? null : menu;
      });
    }
    if (token) {
      return fullMenuList.filter((menu) => {
        return pathForToken.includes(menu.path) ? menu : null;
      });
    } else return fullMenuList;
  }, [token]);

  //function
  const onCreateLi = () => {
    return menuList.map((item) => {
      return (
        <li
          key={item.name}
          className='relative mr-3 md:mr-4 lg:mr-5 px-[0.5rem] py-[0.5rem] border-2 border-transparent rounded
          before:absolute before:inset-0 before:opacity-0 before:ease-in before:duration-300 before:-z-49
          after:absolute after:inset-0 after:top-[100%] after:bg-[#252525] after:ease-in after:duration-300 after:-z-50
        hover:border-white hover:after:top-0'
        >
          <NavLink
            to={item.path}
            className='text-lg md:text-xl px-[0.5rem] py-[0.5rem] border-2 border-transparent rounded select-none z-[99]
             focus:px-[0.5rem] focus:py-[0.5rem]'
          >
            {item.name}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <div>
      <div className='NavbarBody sticky top-0 inset-x-0 h-[4.6rem] bg-black z-40'>
        <div className='flex justify-between items-center h-[4.6rem] mx-[5%] py-2.5 px-[2.5%] text-white'>
          <Link to='/'>
            <h1 className='text-2xl cursor-pointer select-none md:text-3xl lg:text-4xl'>Test</h1>
          </Link>
          <ul className='flex justify-between items-center'>{onCreateLi()}</ul>
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
