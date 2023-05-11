import { ReactComponent as LogoIcon } from "assets/icons/matic.svg";
import { CHAIN_ID, DEFAULT_CHAIN_ID } from "utils/env-constants";

const Logo = () => {
  return (
    <div className="flex h-full items-center space-x-2">
      <LogoIcon />
      <div className="sm:hidden flex h-full items-center">
        {DEFAULT_CHAIN_ID === CHAIN_ID.POLYGON ? "POLYGON DAPP" : "MUMBAI DAPP"}
      </div>
    </div>
  );
};
export default Logo;
