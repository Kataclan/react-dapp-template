import { lazy } from "react";
import { Navigate } from "react-router";

import NavbarLayout from "components/layouts/NavbarLayout";
import PageLoader from "components/PageLoader";
import Loadable from "components/Loadable";

import { TOOLS_PATHS } from "./paths";

const Notifications = Loadable(
  PageLoader,
  lazy(() => import("../views/Tools/Notifications"))
);

const toolsRoutes = {
  path: TOOLS_PATHS.root,
  element: <NavbarLayout />,
  children: [
    { path: TOOLS_PATHS.notifications, element: <Notifications /> },
    { path: "*", element: <Navigate to={TOOLS_PATHS.notifications} replace /> },
  ],
};

export default toolsRoutes;
