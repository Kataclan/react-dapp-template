import { createContext, useContext, useEffect } from "react";
import noop from "lodash/noop";
import {
  getChainName,
  GlobalConfigState,
  isValidChainId,
  LOCAL_CONFIG_KEY,
  _getChainId,
} from "contexts/config/global";
import useSetState from "hooks/useSetState";
import { ChainId, ChainName } from "types/chains";
import local from "utils/storage/local";
import { loadChains } from "./cache";
import { useNotifications } from "contexts/notifications";
import { TOAST_DEFAULT_ERROR } from "contexts/notifications/notificationBuilder";

type ConfigContextState = {
  chainId: ChainId;
  chainName: ChainName;
  error?: string;
};

type ConfigContextProps = {
  chainId: ChainId;
  chainName: ChainName;
  setChain: (chainId: ChainId) => void;
};

// Initialize state with localstorage values if they are present
const initialState: ConfigContextState = {
  chainId: _getChainId(),
  chainName: getChainName(),
  error: "",
};

const defaultContextValue: ConfigContextProps = {
  ...initialState,
  setChain: noop,
};

export const Config = createContext<ConfigContextProps>(defaultContextValue);

export const ConfigProvider: React.FC = ({ children }) => {
  const [state, setState] = useSetState<ConfigContextState>(initialState);
  const { enqueueToast } = useNotifications();

  const setChain = (chainId: ChainId, chainName?: ChainName) => {
    if (isValidChainId(chainId)) {
      local.setItem<GlobalConfigState>(LOCAL_CONFIG_KEY, {
        chainId,
        chainName: chainName || "",
      });
      setState({ chainId });
    } else {
      enqueueToast(TOAST_DEFAULT_ERROR);
    }
  };

  useEffect(() => {
    const initChains = async () => {
      try {
        await loadChains();
      } catch (err: any) {
        enqueueToast(TOAST_DEFAULT_ERROR);
      }
    };
    initChains();
  }, []);

  return (
    <Config.Provider
      value={{ chainId: state.chainId, chainName: state.chainName, setChain }}
    >
      {children}
    </Config.Provider>
  );
};

export const useConfig = () => useContext(Config);
