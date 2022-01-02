import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import noop from "lodash/noop";

import { localStorageKeys } from "config/constants/localStorage";
import { ChainId } from "types/chains";
import { DAppProvider, ProviderNames } from "types/web3";
import { useConfig } from "contexts/config";
import { CHAIN_ID } from "utils/env-constants";
import useSetState from "utils/hooks/useSetState";
import local from "utils/storage/local";

import { web3ModalSetup } from "./web3Modal";
import { getProviderInfo, getWeb3ReadOnly } from "./web3Provider";

export type ProviderProps = {
  name: string;
  loaded: boolean;
  available: boolean;
  account: string;
  network: ChainId;
};

export const buildProviderProps = (props?: Partial<ProviderProps>) => ({
  name: props?.name || "",
  loaded: props?.loaded || false,
  available: props?.available || false,
  account: props?.account || "",
  network: props?.network || (CHAIN_ID.UNKNOWN as ChainId),
});

type ContextProviderState = {
  props: ProviderProps;
  connecting: boolean;
};

type ContextProps = ContextProviderState &
  Partial<{
    provider: ethers.providers.Web3Provider | undefined;
    staticProvider: ethers.providers.JsonRpcProvider;
    walletProvider: any;
  }> & {
    connectToLast: () => Promise<void>;
    connect: () => Promise<void>;
  };

export const ProviderContext = createContext<ContextProps>({
  props: buildProviderProps(),
  connecting: false,

  connectToLast: () => new Promise(noop),
  connect: () => new Promise(noop),
});

export const ProviderContextProvider: React.FC = ({ children }) => {
  const { chainId, setChain } = useConfig();

  const web3ModalRef = useRef<Web3Modal>();
  const walletProvider = useRef<any>();
  const web3ProviderRef = useRef<ethers.providers.Web3Provider>();
  const staticProviderRef = useRef<DAppProvider>(getWeb3ReadOnly());

  const [state, setState] = useSetState<ContextProviderState>({
    props: buildProviderProps(),
    connecting: false,
  });

  // WATCHER: can be needed
  // const watcherIntervalRef = useRef<NodeJS.Timer>();
  // const watchProvider = useCallback(() => {
  //   if (watcherIntervalRef.current) {
  //     clearInterval(watcherIntervalRef.current);
  //   }

  //   saveToStorage(localStorageKeys.LAST_USED_PROVIDER_KEY, provider.name);

  //   watcherIntervalRef.current = setInterval(async () => {
  //     // const web3 = getWeb3();
  //     // const providerInfo = await getProviderInfo(web3);
  //     // const networkChanged = provider.network !== providerInfo.network;
  //     // if (networkChanged) {
  //     //   // close snackbar
  //     // }
  //     // if (provider.account !== providerInfo.account || networkChanged) {
  //     //   fetchProvider(providerInfo.name);
  //     // }
  //   }, 10000);
  // }, [provider, fetchProvider]);

  const loadLastUsedProvider = () => {
    const lastUsedProvider = local.getItem<string>(
      localStorageKeys.LAST_USED_PROVIDER_KEY
    );
    return lastUsedProvider;
  };

  const resetState = () => {
    setState({ ...buildProviderProps, connecting: false });
  };

  const setProvider = async (provider: any, providerName: ProviderNames) => {
    if (provider) {
      web3ProviderRef.current = new ethers.providers.Web3Provider(provider);
      const props = await getProviderInfo(
        web3ProviderRef.current,
        providerName
      );
      local.setItem(localStorageKeys.LAST_USED_PROVIDER_KEY, props.name);
      setState({ props, connecting: false });
    } else {
      resetState();
    }
  };

  const subscribeWalletProvider = useCallback(() => {
    walletProvider.current.on("accountsChanged", (accounts: string[]) => {
      if (accounts.length === 0) {
        // USER HAS DISCONNECTED ALL ACCOUNTS
        resetState();
      }
      console.log("accountsChanged", accounts);
      setProvider(walletProvider.current, "walletconnect");
    });
    // Subscribe to chainId change
    walletProvider.current.on("chainChanged", (chainId: number) => {
      console.log("chainChanged", Number(chainId).toString());
      const _chainId = Number(chainId).toString() as ChainId;
      setChain(_chainId);
      setProvider(walletProvider.current, "walletconnect");
    });

    // Subscribe to provider connection
    walletProvider.current.on("connect", (info: { chainId: number }) => {
      console.log("connect");
      setState({ connecting: true });
      if (chainId !== chainId.toString()) {
        setChain(Number(chainId).toString() as ChainId);
      }
      setProvider(walletProvider.current, "walletconnect");
    });
    // Subscribe to provider disconnection
    walletProvider.current.on(
      "disconnect",
      (error: { code: number; message: string }) => {
        resetState();
      }
    );
  }, [walletProvider.current]);

  const connect = useCallback(async () => {
    setState({ connecting: true });
    try {
      walletProvider.current = await web3ModalRef.current?.connect();
      console.log(walletProvider.current);
      subscribeWalletProvider();
      setProvider(walletProvider.current, "walletconnect");
    } catch (e: any) {
      resetState();
    }
  }, []);

  const connectToLast = useCallback(async () => {
    const provider = await loadLastUsedProvider();
    if (provider) {
      try {
        walletProvider.current = await web3ModalRef.current?.connectTo(
          provider
        );
        subscribeWalletProvider();
        setProvider(walletProvider.current, "walletconnect");
      } catch (e: any) {
        resetState();
      }
    }
  }, [walletProvider.current]);

  useEffect(() => {
    web3ModalRef.current = new Web3Modal(web3ModalSetup(chainId));
  }, [chainId]);

  return (
    <ProviderContext.Provider
      value={{
        ...state,
        provider: web3ProviderRef.current,
        staticProvider: staticProviderRef.current,
        walletProvider,
        connect,
        connectToLast,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export const useProvider = () => useContext(ProviderContext);

export const useWeb3Provider = ():
  | ethers.providers.Web3Provider
  | undefined => {
  const { provider } = useContext(ProviderContext);
  return provider;
};

export const useWeb3Static = (): DAppProvider | undefined => {
  const { staticProvider } = useContext(ProviderContext);
  return staticProvider;
};

export const useWeb3ProviderProps = () => {
  const { props } = useContext(ProviderContext);
  return { ...props };
};

export const useAccount = () => {
  const { props } = useContext(ProviderContext);
  return props.account;
};
