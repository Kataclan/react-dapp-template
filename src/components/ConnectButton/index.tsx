import Button from "components/Button";
import Spinner from "components/Spinner";
import { useProvider } from "contexts/provider";
import { FC } from "react";
import { shortVersionOf } from "utils/addresses";

const ConnectButton: FC = () => {
  // const provider = useEthersProvider();
  // const connect = useEthersConnect();
  // const { account } = useAccount(provider);

  // const Component = isEmpty(account) ? (
  //   <Button onClick={connect}>CONNECT</Button>
  // ) : (
  //   <span>{getHiddenAddresStr(account)}</span>
  // );
  // return !provider ? <SkeletonBox containerClassname="w-20 h-10" /> : Component;

  const { connect, connecting, props } = useProvider();

  return props.account ? (
    <>{shortVersionOf(props.account, 5)}</>
  ) : (
    <Button disabled={connecting} onClick={connect}>
      {connecting ? <Spinner /> : "CONNECT"}
    </Button>
  );
};

export default ConnectButton;
