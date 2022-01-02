export const a = 0;
// import React, { useState, useEffect, ReactNode } from "react";
// import * as ethers from "ethers";
// import _get from "lodash/get";
// import noop from "lodash/noop";
// import { HARDHAT_CONFIG } from "config/constants/chains";

// const globalStore: {
//   [providerId: string]: {
//     provider:
//       | ethers.providers.Web3Provider
//       | ethers.providers.JsonRpcProvider
//       | null;
//     network: number;
//     raw?: any;
//     url?: string | null;
//   };
// } = {
//   injectProvider: {
//     provider: null,
//     network: 0,
//     raw: null,
//   },
//   backupProvider: {
//     provider: null,
//     network: 0,
//     url: null,
//   },
// };

// function denyMetamask() {
//   const expire = window.localStorage.getItem("metamask-deny");
//   return new Date(expire || "") > new Date();
// }

// function setDenyMetamask() {
//   let d = new Date();
//   d.setHours(d.getHours() - 12);
//   window.localStorage.setItem("metamask-deny", d.toDateString());
// }

// // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md
// // https://github.com/MetaMask/metamask-extension/issues/5715
// let enabled = false;
// let tried = false;
// export async function tryEnableWeb3(forceEnable?: boolean, tried?: boolean) {
//   try {
//     if (
//       window &&
//       window.ethereum &&
//       (forceEnable || (!enabled && !denyMetamask()))
//     ) {
//       if (window.ethereum.request && !tried) {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         if (accounts && (accounts as any).length > 0) {
//           enabled = true;
//         }
//         tried = true;
//       } else if (window.ethereum.enable) {
//         await window.ethereum.enable();
//         enabled = true;
//       } else if (window.ethereum.sendAsync) {
//         window.ethereum.sendAsync(
//           { method: "eth_requestAccounts", jsonrpc: "2.0", id: "" },
//           (error, result) => {
//             if (!error && result) {
//               enabled = true;
//             }
//           }
//         );
//       }
//     }
//   } catch (e) {
//     console.log(e);
//     setDenyMetamask();
//     enabled = false;
//   }
//   return enabled;
// }

// async function loadProvider(
//   jsonRpcUrl: string,
//   chainChangedCallback: (id: string) => void,
//   accountsChangedCallback: () => void
// ) {
//   if (typeof window === "undefined") {
//     return null;
//   }
//   const current = _get(window, ["ethereum"], _get(window, ["ethereum"])) as any;
//   const { injectProvider, backupProvider } = globalStore;

//   // create browser web3 provider
//   if (!injectProvider.provider && current) {
//     injectProvider.provider = new ethers.providers.Web3Provider(current);
//     const { chainId: network } = await injectProvider.provider.getNetwork();
//     injectProvider.network = network;

//     if (current !== injectProvider.raw) {
//       current.on("chainChanged", (id: any) => {
//         // https://metamask.github.io/metamask-docs/API_Reference/Ethereum_Provider#ethereum.on(eventname%2C-callback)-2
//         injectProvider.provider = null;
//         chainChangedCallback(id);
//         loadProvider(jsonRpcUrl, chainChangedCallback, accountsChangedCallback);
//       });

//       current.on("accountsChanged", () => {
//         injectProvider.provider = null;
//         accountsChangedCallback();
//         loadProvider(jsonRpcUrl, chainChangedCallback, accountsChangedCallback);
//       });
//     }
//   }

//   // set web3 raw provider
//   injectProvider.raw = current;

//   // create JsonRpc web3 provider
//   if (
//     !backupProvider.provider &&
//     jsonRpcUrl &&
//     jsonRpcUrl !== backupProvider.url
//   ) {
//     backupProvider.provider =
//       jsonRpcUrl !== HARDHAT_CONFIG.rpcUrls[0]
//         ? new ethers.providers.JsonRpcProvider(jsonRpcUrl)
//         : new ethers.providers.JsonRpcProvider(HARDHAT_CONFIG.rpcUrls[0]);
//     const { chainId: network } = await backupProvider.provider.getNetwork();
//     backupProvider.network = network;
//   }

//   backupProvider.url = jsonRpcUrl;
// }

// function getProvider() {
//   console.log(
//     globalStore.injectProvider.provider
//       ? "GET INJECTED PROVIDER"
//       : globalStore.backupProvider
//   );
//   return globalStore.injectProvider.provider
//     ? globalStore.injectProvider
//     : globalStore.backupProvider;
// }

// async function activeProvider(
//   networks = [80001, 31337, 0],
//   backupJsonRpcUrl: string,
//   hasTriedToConnect?: boolean,
//   changeChainCallback?: (id: string) => void,
//   changeAccountsCallback?: () => void
// ) {
//   await loadProvider(
//     backupJsonRpcUrl,
//     changeChainCallback || noop,
//     changeAccountsCallback || noop
//   );
//   const { provider: provd, network } = getProvider();
//   let ok = false;
//   if (provd) {
//     ok = true;
//     if (~networks.indexOf(network) || !hasTriedToConnect) {
//       ok = await tryEnableWeb3();
//     }
//   }
//   return ok;
// }

// function sleep(ms: number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("schedule"), ms);
//   });
// }

// function retry(fn: any, times: any, delay: any) {
//   return async (...args: any) => {
//     let tried = 0;
//     let ok = false;
//     let err;
//     while (tried <= times) {
//       try {
//         ok = await fn(...args);
//         if (ok) {
//           break;
//         }
//       } catch (e) {
//         ok = false;
//         err = e;
//       }
//       ++tried;
//       await sleep(delay);
//     }
//     return { ok, err };
//   };
// }
// const retryActiveProvider = retry(activeProvider, 1, 1000);

// const EthersContext = React.createContext<{
//   provider:
//     | ethers.providers.Web3Provider
//     | ethers.providers.JsonRpcProvider
//     | null;
//   connect?: () => Promise<any>;
// }>({ provider: null });

// type PropsType = {
//   networks: number[];
//   backupJsonRpcUrl: string;
//   ms: number;
//   children: ReactNode;
// };

// export const EthersProvider = ({
//   networks,
//   backupJsonRpcUrl,
//   ms,
//   children,
// }: PropsType) => {
//   const [provider, setProvider] = useState<
//     ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | null
//   >(null);

//   const [hasTriedToConnect, setTried] = useState(false);

//   const updateProvider = async () => {
//     console.log("UPDATE Provider prev: ", provider);
//     await retryActiveProvider(
//       networks,
//       backupJsonRpcUrl,
//       hasTriedToConnect,
//       updateProvider,
//       updateProvider
//     );
//     const { provider: currentProvider, network } = getProvider();

//     console.log("UPDATE Provider next:", currentProvider);
//     console.log("UPDATE Provider next: network", network);
//     if (
//       currentProvider &&
//       currentProvider !== provider &&
//       networks.indexOf(network) !== -1
//     ) {
//       console.log("UPDATE Provider: next", currentProvider);
//       setProvider(currentProvider);
//       setTried(true);
//     } else {
//       setProvider(null);
//     }
//   };

//   const connect = async () => {
//     await retryActiveProvider(
//       networks,
//       backupJsonRpcUrl,
//       tried,
//       updateProvider,
//       updateProvider
//     );
//     const { provider: currentProvider, network } = getProvider();
//     if (
//       currentProvider &&
//       currentProvider !== provider &&
//       ~networks.indexOf(network)
//     ) {
//       setProvider(currentProvider);
//       setTried(true);
//     } else {
//       setProvider(null);
//     }
//   };

//   useEffect(() => {
//     // let interval: NodeJS.Timer;
//     updateProvider();
//     // .then(() => {
//     // HIS WILL SET AN INTERVAL TO CALL CONNECT EVERY X SECONDS
//     // let running = false;
//     // interval = setInterval(() => {
//     //   if (!running) {
//     //     running = true;
//     //     updateProvider()
//     //       .then(() => {
//     //         running = false;
//     //       })
//     //       .catch((e) => {
//     //         running = false;
//     //       });
//     //   }
//     // }, ms);
//     // });
//     // return () => {
//     //   clearInterval(interval);
//     // };
//   }, [networks, backupJsonRpcUrl]);

//   return (
//     <EthersContext.Provider value={{ provider, connect }}>
//       {children}
//     </EthersContext.Provider>
//   );
// };

// export function useEthersConnect() {
//   const { connect } = React.useContext(EthersContext);
//   return connect;
// }

// export function useEthersProvider() {
//   const { provider } = React.useContext(EthersContext);
//   return provider;
// }

// export function useAccount(
//   provider:
//     | ethers.providers.Web3Provider
//     | ethers.providers.JsonRpcProvider
//     | null
// ) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [account, setAccount] = useState("");
//   useEffect(() => {
//     if (provider && provider.getSigner) {
//       const signer = provider.getSigner();
//       signer
//         .getAddress()
//         .then((add) => {
//           console.log(add);
//           if (add && add !== "0x0000000000000000000000000000000000000000") {
//             setAccount(add);
//             setIsLoading(false);
//           }
//         })
//         .catch(() => {
//           setIsLoading(false);
//         });
//     }
//   }, [provider]);
//   return { account, isLoading };
// }
