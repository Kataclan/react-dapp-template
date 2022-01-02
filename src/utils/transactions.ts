import { ethers } from "ethers";

export const EMPTY_DATA = "0x";

export const getUserNonce = async (
  web3: ethers.providers.Web3Provider,
  userAddress: string
): Promise<number> => {
  try {
    return await web3.getTransactionCount(userAddress, "pending");
  } catch (error) {
    return Promise.reject(error);
  }
};
