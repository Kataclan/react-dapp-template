import { useWeb3Provider } from "contexts/provider";
import { useMemo } from "react";
import { getTestDBContract } from "utils/contracts";

export const useTestDBContract = () => {
  const web3Provider = useWeb3Provider();
  return useMemo(
    () => getTestDBContract(web3Provider?.getSigner()),
    [web3Provider]
  );
};
