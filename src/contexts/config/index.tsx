import { createContext, useContext } from "react";
import noop from "lodash/noop";
import {
  getChainName,
  LOCAL_CONFIG_KEY,
  _getChainId,
} from "contexts/config/global";
import useSetState from "utils/hooks/useSetState";
import { ChainId, ChainName } from "types/chains";
import local from "utils/storage/local";
import { ConfigState } from "types/config";

type ConfigContextState = {
  chainId: ChainId;
  chainName: ChainName;
};

type ConfigContextProps = {
  chainId: ChainId;
  chainName: ChainName;
  setChain: (chainId: ChainId) => void;
};

const initialState: ConfigContextState = {
  chainId: _getChainId(),
  chainName: getChainName(),
};

const defaultContextValue: ConfigContextProps = {
  ...initialState,
  setChain: noop,
};

export const Config = createContext<ConfigContextProps>(defaultContextValue);

export const ConfigProvider: React.FC = ({ children }) => {
  const [state, setState] = useSetState<ConfigContextState>(initialState);

  const setChain = (chainId: ChainId, chainName?: ChainName) => {
    local.setItem<ConfigState>(LOCAL_CONFIG_KEY, {
      chainId,
      chainName: chainName || "",
    });
    setState({ chainId });
  };

  return (
    <Config.Provider
      value={{ chainId: state.chainId, chainName: state.chainName, setChain }}
    >
      {children}
    </Config.Provider>
  );
};

export const useConfig = () => useContext(Config);
