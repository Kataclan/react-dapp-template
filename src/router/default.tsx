import { lazy } from "react";
import { Navigate } from "react-router";

import { ROOT_PATHS } from "./paths";
import PageLoader from "ui-kit/components/PageLoader";
import Loadable from "ui-kit/components/Loadable";
import NavbarLayout from "layouts/NavbarLayout";

const Home = Loadable(
  PageLoader,
  lazy(() => import("../views/Home"))
);
const Notifications = Loadable(
  PageLoader,
  lazy(() => import("../views/Tools/Notifications"))
);
const NotFound = Loadable(
  PageLoader,
  lazy(() => import("../views/NotFound"))
);

const defaultRoutes = {
  path: "/",
  element: <NavbarLayout />,
  children: [
    { path: ROOT_PATHS.home, element: <Home /> },
    { path: ROOT_PATHS.tools, element: <Notifications /> },
    { path: ROOT_PATHS.notFound, element: <NotFound /> },
    { path: "*", element: <Navigate to="404" replace /> },
  ],
};

export default defaultRoutes;
