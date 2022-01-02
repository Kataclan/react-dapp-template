import { loadChains } from "contexts/config/cache";
import { FC, useEffect, useState } from "react";

import Router from "router";

const App: FC = () => {
  const [hasChains, setHasChains] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  // Do some auth logic if you don't want to show some routes
  useEffect(() => {
    const initChains = async () => {
      try {
        await loadChains();
        setHasChains(true);
      } catch (err: any) {
        setIsError(true);
      }
    };
    initChains();
  }, []);

  if (!hasChains || isError) {
    return <></>;
  }

  return (
    <>
      <Router />
    </>
  );
};

export default App;
