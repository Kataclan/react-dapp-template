import { sameString } from "utils/strings";
import { EMPTY_DATA } from "./transactions";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const sameAddress = (
  firstAddress: string | undefined,
  secondAddress: string | undefined
): boolean => {
  return sameString(firstAddress, secondAddress);
};

export const isEmptyAddress = (address: string | undefined): boolean => {
  if (!address) return true;
  return sameAddress(address, EMPTY_DATA) || sameAddress(address, ZERO_ADDRESS);
};

export const shortVersionOf = (value: string, cut: number): string => {
  if (!value) {
    return "Unknown";
  }

  const final = value.length - cut;
  if (value.length <= cut) {
    return value;
  }

  return `${value.substring(0, cut)}...${value.substring(final)}`;
};

export const isValidEnsName = (name: string): boolean =>
  /^([\w-]+\.)+(eth|test|xyz|luxe|ewc)$/.test(name);

export const isValidCryptoDomainName = (name: string): boolean =>
  /^([\w-]+\.)+(crypto)$/.test(name);
