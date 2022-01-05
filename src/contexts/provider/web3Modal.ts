import WalletConnectProvider from "@walletconnect/web3-provider";
import { INFURA_MUMBAI_TOKEN } from "utils/env-constants";
export const web3ModalSetup = (chainId: string) => {
  return {
    chainId: chainId,
    providerOptions: {
      injected: {
        display: {
          name: "Metamask",
        },
        package: null,
      },
      walletconnect: {
        display: {
          name: "Walletconnect",
        },
        options: {
          infuraId: INFURA_MUMBAI_TOKEN,
          bridge: "https://bridge.walletconnect.org",
        },
        package: WalletConnectProvider,
      },
    },
  };
};
