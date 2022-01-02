import { FC } from "react";
import { Outlet } from "react-router";

import Navbar from "components/Navbar";

const NavbarLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default NavbarLayout;
