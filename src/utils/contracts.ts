import { ethers } from "ethers";
import { abis } from "config/abis";
import addresses from "config/constants/contract-addresses";
import { getRpcNodeUrl } from "./getRpcNodeUrl";
import { ContractName } from "types/contracts";
import { getChainId } from "./chain";

export const getContractAddress = (contractName: ContractName): string => {
  return addresses[contractName][getChainId()];
};

const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  const signerOrProvider =
    signer ?? new ethers.providers.JsonRpcProvider(getRpcNodeUrl());
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getTestDBContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(abis.TestDB, getContractAddress("TestDB"), signer);
};
