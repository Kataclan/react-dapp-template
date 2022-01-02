import { lazy } from "react";
import { Navigate } from "react-router";

import NavbarLayout from "components/layouts/NavbarLayout";

import Loadable from "components/Loadable";
import PageLoader from "components/PageLoader";
import { ROOT_PATHS } from "./paths";

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
  lazy(() => import("../components/PageNotFound"))
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
