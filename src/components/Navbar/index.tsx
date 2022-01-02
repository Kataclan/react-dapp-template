import { FC } from "react";

import ConnectButton from "components/ConnectButton";
import { RouterLink } from "components/Links";
import MenuDropdown from "components/MenuDropdown";

import { NAVBAR_MENU } from "./config";

const Navbar: FC = () => {
  return (
    <nav className="flex w-full h-16 border-b justify-between items-center px-4">
      <span>POLYGON & MUMBAI DAPP</span>
      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
        {NAVBAR_MENU.map((navbarMenuItem, index) =>
          navbarMenuItem.children.length > 0 ? (
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
            >
              {navbarMenuItem.title}
            </RouterLink>
          )
        )}
      </div>
      <ConnectButton />
    </nav>
  );
};

export default Navbar;
