import Button from "components/Button";
import { abis } from "config/abis";
import { useConfig } from "contexts/config";
import { useProvider } from "contexts/provider";
import { ethers, BigNumber } from "ethers";
import { useBlock } from "contexts/block";
import { random } from "lodash";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { getContractAddress } from "utils/contracts";
import { DAppProvider } from "types/web3";

const Home: FC = () => {
  const { chainId } = useConfig();
  const { props, staticProvider, provider } = useProvider();
  const { block } = useBlock();
  const [number, setNumber] = useState<number>();

  const fetchNumber = useCallback(
    async (provider: DAppProvider | undefined) => {
      if (provider) {
        const contract = new ethers.Contract(
          getContractAddress("TestDB"),
          abis.TestDB,
          provider || staticProvider
        );
        const values = await contract.retrieve();
        setNumber(BigNumber.from(values.number).toNumber());
      }
    },
    []
  );

  useEffect(() => {
    fetchNumber(provider || staticProvider);
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <span>Config chainId: {chainId}</span>
      <span>Web3 Provider: {props?.name || "Not available"}</span>
      <span>Web3 Provider Block: {block}</span>
      <span>Web3 Provider network: {props?.network || "Not available"}</span>
      <span>Web3 Provider account: {props?.account} </span>
      <span>
        Contract value: {typeof number !== undefined ? number : "loading"}
      </span>
    </div>
  );
};

export default Home;
