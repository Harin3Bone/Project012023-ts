import { useMemo } from "react";
import { NavLink } from "react-router-dom";

//hook
import useAuthenticationContext from "hook/useAuthenticationContext";

//style
import theme from "style/them";

//type
type OnCreateLiPropTypes = {
  showStyleState: boolean;
};

const fullMenuList = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "sign in",
    path: "/sign-in",
  },
  {
    name: "sign up",
    path: "/sign-up",
  },
];

const pathForToken = ["/about"];

function OnCreateLi({ showStyleState }: OnCreateLiPropTypes) {
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
    <>
      {menuList &&
        menuList.map((item) => {
          return (
            <li
              key={item.name}
              className={showStyleState ? theme.setStyleMenuUi.setContainerButton : undefined}
            >
              <NavLink
                to={item.path}
                className={showStyleState ? theme.setStyleMenuUi.setStyleButton : undefined}
              >
                {item.name}
              </NavLink>
            </li>
          );
        }
      )}
    </>
  );
}

export default OnCreateLi;
