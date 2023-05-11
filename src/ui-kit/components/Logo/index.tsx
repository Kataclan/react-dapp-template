import { FC } from "react";

import { ReactComponent as LogoIcon } from "assets/icons/matic.svg";

const Logo: FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <LogoIcon />
      <span>POLYGON & MUMBAI DAPP</span>
    </div>
  );
};

export default Logo;
