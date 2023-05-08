import { useMemo } from "react";
import { NavLink } from "react-router-dom";

//style
import theme from "style/them";

//store
import useProfileStore from "store/profile/profile.store";

//constraint
import { FULL_MENU_LIST } from "src/constraint/FULL_MENU_LIST";

//type
type OnCreateLiPropTypes = {
  showStyleState: boolean;
};

function OnCreateLi({ showStyleState }: OnCreateLiPropTypes) {
  const user = useProfileStore((state) => state.user);

  //useMemo
  const menuList = useMemo(() => {
    return user
      ? FULL_MENU_LIST.filter((item) => !(item.path === "/sign-in" || item.path === "/sign-up"))
      : FULL_MENU_LIST.filter((item) => !item.private);
  }, [user]);

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
