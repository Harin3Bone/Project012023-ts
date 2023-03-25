import { useMemo } from "react";
import { NavLink } from "react-router-dom";

//style
import theme from "src/style/them";

//store
import useAuthenticationStore from "src/store/authentication/authentication.store";

//constraint
import { FULL_MENU_LIST } from "src/constraint/FULL_MENU_LIST";

//type
type OnCreateLiPropTypes = {
  showStyleState: boolean;
};

function OnCreateLi({ showStyleState }: OnCreateLiPropTypes) {
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  //useMemo
  const menuList = useMemo(() => {
    return jwtToken
      ? FULL_MENU_LIST.filter((item) => !(item.path === "/sign-in" || item.path === "/sign-up"))
      : FULL_MENU_LIST.filter((item) => !item.private);
  }, [jwtToken]);

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
        })}
    </>
  );
}

export default OnCreateLi;
