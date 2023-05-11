import { FC } from "react";
import { Outlet } from "react-router";

import NavbarPolygon from "components/NavbarPolygon";

const NavbarLayout: FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavbarPolygon />
      <main className="flex flex-1 flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default NavbarLayout;
