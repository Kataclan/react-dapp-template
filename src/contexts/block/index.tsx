import { max } from "lodash";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useProvider } from "../provider";

type ContextProps = {
  block: number;
};

type PropsType = {
  pollingInterval?: number;
};

export const Block = createContext<ContextProps>({ block: 0 });

export const BlockProvider: React.FC<PropsType> = ({ children }) => {
  const [block, setBlock] = useState<number>();
  const { web3Provider: provider, rpcProvider: staticProvider } = useProvider();
  const interval = useRef<NodeJS.Timer>();

  const handleSetBlock = useCallback(
    (newBlock: number) => setBlock(max([(block || 0) + 1, newBlock || 0])),
    [block]
  );

  useEffect(() => {
    let _provider = provider || staticProvider;
    interval.current = setInterval(async () => {
      const latestBlockNumber = await _provider?.getBlockNumber().catch(() => {
        handleSetBlock(0);
      });
      handleSetBlock(latestBlockNumber || 0);
    }, 5000);

    return () => {
      clearInterval(interval.current as NodeJS.Timer);
    };
  }, [provider, staticProvider, handleSetBlock]);
  return (
    <Block.Provider value={{ block: block || 0 }}>{children}</Block.Provider>
  );
};

export const useBlock = () => useContext(Block);
