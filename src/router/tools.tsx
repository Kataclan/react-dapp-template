import { lazy } from "react";
import { Navigate } from "react-router";

import NavbarLayout from "layouts/NavbarLayout";

import { TOOLS_PATHS } from "./paths";
import Loadable from "ui-kit/components/Loadable";
import PageLoader from "ui-kit/components/PageLoader";

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
