import { FC, useCallback, useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";

import { abis } from "config/abis";
import { DAppProvider } from "types/web3";
import { useConfig } from "contexts/config";
import { useProvider } from "contexts/provider";
import { useBlock } from "contexts/block";
import { getContractAddress } from "utils/contracts";

const Home: FC = () => {
  // const { chainId } = useConfig();
  // const { props, rpcProvider } = useProvider();
  // const { block } = useBlock();
  // const [number, setNumber] = useState<number>();

  // const fetchNumber = useCallback(async () => {
  //   const contract = new ethers.Contract(
  //     getContractAddress("TestDB"),
  //     abis.TestDB,
  //     rpcProvider
  //   );
  //   const values = await contract.retrieve();
  //   setNumber(BigNumber.from(values.number).toNumber());
  // }, []);

  // useEffect(() => {
  //   fetchNumber();
  // }, [block]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center"></div>
  );
};

export default Home;
