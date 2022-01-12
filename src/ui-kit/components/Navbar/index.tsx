import { FC, ReactElement } from "react";

import Button from "../Button";
import Spinner from "../Spinner";
import shortVersionOf from "../../utils/shortVersionString";

interface PropsType {
  menuItems: ReactElement[];
  logo: ReactElement;
  onClickConnect: () => {};
  account?: string;
  connecting?: boolean;
}

const Navbar: FC<PropsType> = ({
  menuItems,
  logo,
  onClickConnect,
  account,
  connecting = false,
}) => {
  return (
    <nav className="flex w-full h-16 border-b justify-between items-center px-4">
      {logo}
      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
        {menuItems}
      </div>
      {account ? (
        shortVersionOf(account, 5)
      ) : (
        <Button disabled={connecting} onClick={onClickConnect}>
          {connecting ? <Spinner /> : "CONNECT"}
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
