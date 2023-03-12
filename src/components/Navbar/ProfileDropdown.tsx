import { useState } from "react";
import { NavLink } from "react-router-dom";

//store
import useProfileStore from "store/profile/profile.store";

//hook
import useUserAuth from "hook/useUserAuth";

function ProfileDropdown() {
  const user = useProfileStore((state) => state.user);
  // console.log(user);

  const { onSignOut } = useUserAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  // console.log(isDropdownOpen);

  return (
    <div className={user ? "block" : "hidden"}>
      <button
        onClick={() => setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen)}
        className=' flex justify-center items-center w-9 h-9 rounded-full bg-white text-black cursor-pointer select-none'
      >
        {user?.username.slice(0, 2).toUpperCase()}
      </button>
      <div className={isDropdownOpen ? " block" : " hidden"}>
        <div className='absolute flex justify-center top-20 right-1 lg:right-10 xl:right-16 w-72 rounded-2xl bg-[#35363a] shadow-xl z-40'>
          <div className='m-2 bg-[#202124] rounded-2xl '>
            <div className=' flex justify-between items-center p-4 border-b-2 border-[#35363a] cursor-pointer'>
              <div className='flex justify-center items-center w-10 h-10 p-4 mr-2 rounded-full bg-white text-black'>
                {user?.username.slice(0, 2).toUpperCase()}
              </div>
              <p className='w-44 text-ellipsis overflow-hidden'>{user?.email}</p>
            </div>
            <NavLink
              to='profile'
              className='flex justify-center items-center h-16 border-b-2 border-[#35363a] text-lg select-none hover:bg-[#35363a]/50 focus:outline-2 focus:outline-offset-2'
            >
              Profile
            </NavLink>
            <div className='flex justify-center items-center h-16 border-b-2 border-[#35363a] select-none hover:bg-[#35363a]/50'>
              <button className='w-full h-full text-lg' onClick={() => onSignOut()}>
                sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropdown;
