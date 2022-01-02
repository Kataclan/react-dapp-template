import { setWeb3ReadOnly } from "contexts/provider/web3Provider";
import { ChainConfig } from "types/chains";
import { configs } from "../../config/constants/chains";

let chains: ChainConfig[] = [];

export const getChains = (): ChainConfig[] => chains;

export const loadChains = async () => {
  chains = Object.values(configs);
  setWeb3ReadOnly();
};

export const emptyChainConfig: ChainConfig = {
  chainId: "",
  chainName: "",
  nativeCurrency: {
    name: "",
    symbol: "",
    decimals: 0,
  },
  rpcUrls: [],
  blockExplorerUrls: [],
};
