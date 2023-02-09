import { useMemo } from "react";
import { NavLink } from "react-router-dom";

//hook
import useAuthenticationContext from "hook/useAuthenticationContext";

//style
import theme from "style/them";

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
];

const pathForToken = ["/about"];

function OnCreateLi() {
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

  return (
    menuList &&
    menuList.map((item) => {
      return (
        <li
          key={item.name}
          className={`${theme.setStyleMenuUi.setContainerButton}`}
        >
          <NavLink
            to={item.path}
            className={`${theme.setStyleMenuUi.setStyleButton}`}
          >
            {item.name}
          </NavLink>
        </li>
      );
    })
  );
}

export default OnCreateLi;
