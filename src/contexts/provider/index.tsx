import "./web3-modal-styles.css";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Web3Modal, { getProviderInfo } from "web3modal";
import { ethers } from "ethers";
import noop from "lodash/noop";

import { DEFAULT_RPC_URL } from "utils/env-constants";
import { localStorageKeys } from "config/constants/localStorage";
import { DAppProvider, ProviderNames, ProviderProps } from "types/web3";
import useSetState from "hooks/useSetState";
import local from "utils/storage/local";

import { web3ModalSetup } from "./web3Modal";
import { getChainId } from "utils/chain";
import { getDAppProviderInfo } from "utils/web3";

export const buildProviderProps = (props?: ProviderProps) => ({
  name: props?.name || "unknown",
  network: props?.network || "80001",
  loaded: props?.loaded || false,
  available: props?.available || false,
  account: props?.account || "",
});

const loadLastUsedProvider = () => {
  const lastUsedProvider = local.getItem<string>(
    localStorageKeys.LAST_USED_PROVIDER_KEY
  );
  return lastUsedProvider;
};

type ContextProviderState = {
  props: ProviderProps;
};

type ContextProps = ContextProviderState &
  Partial<{
    web3Provider: ethers.providers.Web3Provider | undefined;
    rpcProvider: ethers.providers.JsonRpcProvider;
    web3ModalProxy: any;
  }> & {
    connectToLast: () => Promise<void>;
    connect: () => Promise<void>;
  };

export const ProviderContext = createContext<ContextProps>({
  props: buildProviderProps(),

  connectToLast: () => new Promise(noop),
  connect: () => new Promise(noop),
});

export const ProviderContextProvider: React.FC = ({ children }) => {
  // Creates a JsonRpc static provider with the default rpc url of the config chain
  const rpcProvider = useRef<ethers.providers.JsonRpcProvider>(
    new ethers.providers.JsonRpcProvider(DEFAULT_RPC_URL)
  );
  const web3ModalRef = useRef<Web3Modal>(); // References web3 modal instance
  const web3ModalProxy = useRef<any>(); // References an instance of the proxy returned when connecting web3modal
  const web3ProviderRef = useRef<ethers.providers.Web3Provider>(); // References the web3 provider created with web3modal provider

  const [state, setState] = useSetState<ProviderProps>(buildProviderProps());

  const CHAIN_ID = useMemo(() => getChainId(), []);

  // WATCHER: can be needed to poll provider
  // const watcherIntervalRef = useRef<NodeJS.Timer>();

  // const watchProvider = useCallback(() => {
  //   if (watcherIntervalRef.current) {
  //     clearInterval(watcherIntervalRef.current);
  //   }

  //   local.setItem(localStorageKeys.LAST_USED_PROVIDER_KEY, state.props.name);

  //   watcherIntervalRef.current = setInterval(async () => {
  //     const web3 = getWeb3();
  //     const providerInfo = await getProviderInfo(web3ProviderRef.current);
  //     const networkChanged = provider.network !== providerInfo.network;
  //     if (networkChanged) {
  //       close snackbar
  //     }
  //     if (provider.account !== providerInfo.account || networkChanged) {
  //       fetchProvider(providerInfo.name);
  //     }
  //   }, 5000);
  // }, [provider, fetchProvider]);

  // STATE MANAGEMENT
  const resetState = () => {
    setState({ ...buildProviderProps });
  };

  const setProvider = async (provider: any, providerName?: ProviderNames) => {
    if (provider) {
      web3ProviderRef.current = new ethers.providers.Web3Provider(provider);
      const props = await getDAppProviderInfo(
        web3ProviderRef.current,
        providerName
      );
      local.setItem(localStorageKeys.LAST_USED_PROVIDER_KEY, providerName);
      setState(props);
    } else {
      resetState();
    }
  };

  /**
   * Subscriptions to wallet provider events
   */
  const subscribeWalletProvider = useCallback(() => {
    web3ModalProxy.current.on("accountsChanged", (accounts: string[]) => {
      if (accounts.length === 0) {
        // USER HAS DISCONNECTED ALL ACCOUNTS
        resetState();
      }
      setProvider(web3ModalProxy.current);
    });
    // Subscribe to chainId change
    web3ModalProxy.current.on("chainChanged", (chainId: number) => {
      setProvider(web3ModalProxy.current);
    });

    // Subscribe to provider connection
    web3ModalProxy.current.on("connect", (info: { _chainId: number }) => {
      setProvider(web3ModalProxy.current);
    });
    // Subscribe to provider disconnection
    web3ModalProxy.current.on(
      "disconnect",
      (error: { code: number; message: string }) => {
        resetState();
      }
    );
  }, [web3ModalProxy.current]);

  /**
   * Try to open Web3Modal and wait user to connect. Store
   */
  const connect = useCallback(async () => {
    try {
      // Connect
      web3ModalProxy.current = await web3ModalRef.current?.connect();
      const providerInfo = getProviderInfo(web3ModalProxy.current);
      subscribeWalletProvider();
      setProvider(web3ModalProxy.current, providerInfo.id as ProviderNames);
    } catch (e: any) {
      resetState();
      throw new Error("User rejected the request");
    }
  }, []);

  /**
   * Try to connect to last used Web3Modal provider id stored in localstorage
   */
  const connectToLast = useCallback(async () => {
    const provider = await loadLastUsedProvider();
    if (provider) {
      try {
        web3ModalProxy.current = await web3ModalRef.current?.connectTo(
          provider
        );
        const providerInfo = getProviderInfo(web3ModalProxy.current);
        subscribeWalletProvider();
        setProvider(web3ModalProxy.current, providerInfo.id as ProviderNames);
      } catch (e: any) {
        resetState();
        throw new Error("User rejected the request");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Instantiates web3 modal
   */
  useEffect(() => {
    web3ModalRef.current = new Web3Modal(web3ModalSetup(CHAIN_ID));
  }, []);

  return (
    <ProviderContext.Provider
      value={{
        props: state,
        web3Provider: web3ProviderRef.current,
        rpcProvider: rpcProvider.current,
        web3ModalProxy,
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
  const { web3Provider: provider } = useContext(ProviderContext);
  return provider;
};

export const useWeb3Static = (): DAppProvider | undefined => {
  const { rpcProvider: staticProvider } = useContext(ProviderContext);
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
