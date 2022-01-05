import { FC, useCallback, useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";

import { DAppProvider } from "types/web3";
import { abis } from "config/abis";
import { useProvider } from "contexts/provider";
import useTransactionLifecycle from "hooks/useConfirmTransaction";
import { getContractAddress } from "utils/contracts";
import Button from "components/Button";
import { useTestDBContract } from "hooks/useContract";

const Notifications: FC = () => {
  const { props, rpcProvider } = useProvider();

  const [number, setNumber] = useState<number>();
  const _contract = useTestDBContract();
  const [pendingTx, setPendingTx] = useState(false);
  const startTx = () => setPendingTx(true);
  const cancelTx = () => setPendingTx(false);

  const { execute } = useTransactionLifecycle({
    contractMethod: () => {
      console.log(_contract);
      return _contract.storeNumber(2);
    },
    waitingConfirmationMessage: "Please confirm the tx",
    onConfirmWaiting: startTx,
    onConfirmRejected: () => {
      console.log("Confirm rejected");
      cancelTx();
    },
    onExecutionFailed: cancelTx,
    onExecuted: cancelTx,
  });

  const fetchNumber = useCallback(
    async (provider: DAppProvider | undefined) => {
      if (provider) {
        const contract = new ethers.Contract(
          getContractAddress("TestDB"),
          abis.TestDB,
          rpcProvider
        );
        const values = await contract.retrieve();
        setNumber(BigNumber.from(values.number).toNumber());
      }
    },
    []
  );

  useEffect(() => {
    fetchNumber(rpcProvider);
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Button disabled={!props.account || pendingTx} onClick={execute}>
        {pendingTx ? "WAITING" : "UPDATE"}
      </Button>
      <span className="text-lg">VALUE: {number}</span>
    </div>
  );
};

export default Notifications;
