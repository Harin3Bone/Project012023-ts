import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//store
import useProfileStore from "store/profile/profile.store";

//components
import OnCreateLi from "./OnCreateLi";
import HamburgerMenu from "./HamburgerMenu";
import DropdownProfile from "./DropdownProfile";
import CartModal from "../CartDrawer/CartModal";

function NavigationBar() {
  const user = useProfileStore((state) => state.user);

  //useState
  const [scrollY, setScrollY] = useState(window.scrollY || 0);
  const [visible, setVisible] = useState(true);

  //useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  //function
  const handleScroll = () => {
    const currentYOffset = window.scrollY;
    const checkVisible = scrollY > currentYOffset;

    setScrollY(currentYOffset);
    setVisible(checkVisible);
  };

  return (
    <div
      className={
        visible
          ? "sticky top-0 inset-x-0 block h-[4.6rem] " +
            (scrollY > 300 ? "bg-black/95" : "bg-black/90") +
            " z-40 duration-500 ease-out "
          : "-top-[101%] ease-in duration-1000 transition-all "
      }
    >
      <div className='flex justify-between items-center h-[4.6rem] lg:mx-[3%] px-[2%] py-2.5 text-white'>
        <NavLink to='/'>
          <h1 className='m-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer select-none '>Test</h1>
        </NavLink>
        <div className='flex justify-between items-center'>
          <CartModal/>
          <ul className='hidden md:flex justify-between items-center'>
            <OnCreateLi showStyleState={true} />
          </ul>
          {user ? <></> : <HamburgerMenu />}
          <DropdownProfile />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
