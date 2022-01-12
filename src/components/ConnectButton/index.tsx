import { isValidChainId } from "contexts/config/global";
import { useProvider } from "contexts/provider";
import { FC, useEffect, useState } from "react";
import { shortVersionOf } from "utils/addresses";

const ConnectButton: FC = () => {
  const { connect, connecting, props, requestSwitchNetwork } = useProvider();
  const [isSwitchChainModalOpen, setSwitchChainModalOpen] = useState(false);

  const handleSwitch = async () => {
    await requestSwitchNetwork();
    setSwitchChainModalOpen(false);
  };

  useEffect(() => {
    if (props.available && !isValidChainId(props.network)) {
      setSwitchChainModalOpen(true);
    }
  }, [props.available, props.network]);

  return (
    <>
      {/* <Modal
        {...MODALS[Modals.CHANGE_CHAIN]}
        open={isSwitchChainModalOpen}
        onClose={() => setSwitchChainModalOpen(false)}
        actions={[
          <Button key="button-switch-chain" onClick={handleSwitch}>
            Switch
          </Button>,
          <Button
            key="button-close-chain-modal"
            onClick={() => setSwitchChainModalOpen(false)}
          >
            Close
          </Button>,
        ]}
      /> */}
      {
        props.available ? shortVersionOf(props.account, 5) : <></>
        // <Button disabled={connecting} onClick={connect}>
        //   {connecting ? <Spinner /> : "CONNECT"}
        // </Button>
      }
    </>
  );
};

export default ConnectButton;
