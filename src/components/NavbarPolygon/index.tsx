import { FC, useMemo } from "react";

import { useProvider } from "contexts/provider";
import Navbar from "ui-kit/components/Navbar";
import Logo from "components/Logo";

import { NAVBAR_MENU } from "./config";
import MenuDropdown from "ui-kit/components/MenuDropdown";
import { RouterLink } from "ui-kit/components/Links";
import { useLocation } from "react-router";

const NavbarPolygon: FC = () => {
  const { connect, props } = useProvider();
  const { pathname } = useLocation();

  const menuItems = useMemo(
    () =>
      NAVBAR_MENU.map((navbarMenuItem, index) => {
        return navbarMenuItem.children &&
          navbarMenuItem.children?.length > 0 ? (
          <MenuDropdown
            key={`navbar-menu-${index}`}
            title={navbarMenuItem.title}
            items={navbarMenuItem.children}
          />
        ) : (
          <RouterLink
            key={`navbar-link-${index}`}
            to={navbarMenuItem.to}
            disabled={navbarMenuItem.disabled}
            active={pathname === navbarMenuItem.to}
          >
            {navbarMenuItem.title}
          </RouterLink>
        );
      }),
    [pathname]
  );

  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar
        logo={<Logo />}
        menuItems={menuItems}
        onClickConnect={connect}
        account={props.account}
      />
    </div>
  );
};

export default NavbarPolygon;
