import { FC, useMemo } from "react";

import { useProvider } from "contexts/provider";
import Navbar from "ui-kit/components/Navbar";
import Logo from "components/Logo";

import { NAVBAR_MENU } from "./config";
import MenuDropdown from "ui-kit/components/MenuDropdown";
import { RouterLink } from "ui-kit/components/Links";
import { useLocation } from "react-router";
import { useConnectWallet } from "hooks/useConnectWallet";
import { useNotifications } from "contexts/notifications";
import { useChangeChainDialog } from "hooks/useChangeChainDialog";

const NavbarPolygon: FC = () => {
  const { props } = useProvider();
  const { pathname } = useLocation();
  const { enqueueToast } = useNotifications();
  const [connectWallet] = useConnectWallet((e: any) => {
    enqueueToast({
      message:
        "You cancelled the connection to your wallet. Please, consider to try again to unlock all features.",
      type: "error",
    });
  });
  useChangeChainDialog();

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
    <Navbar
      logo={<Logo />}
      menuItems={menuItems}
      onClickConnect={connectWallet}
      account={props.account}
    />
  );
};

export default NavbarPolygon;
