import { useEffect } from "react";
import { useRoutes } from "react-router";

import { useProvider } from "contexts/provider";

import defaultRoutes from "./default";
import toolsRoutes from "./tools";

const Router = () => {
  const { connectToLast } = useProvider();
  useEffect(() => {
    connectToLast();
  }, []);
  const routes = useRoutes([defaultRoutes, toolsRoutes]);
  return routes;
};

export default Router;
