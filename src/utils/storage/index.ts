import { ChainId } from "types/chains";
import { getChainId } from "utils/chain";
import Storage from "./Storage";

const STORAGE_KEYS: Record<ChainId, string> = {
  "137": "POLYGON",
  "80001": "MUMBAI",
};

export const storage = new Storage(window.localStorage, "");

export const getStoragePrefix = (id = getChainId()): string => {
  return STORAGE_KEYS[id] || id;
};

export const loadFromStorage = async <T = unknown>(
  key: string,
  prefix = getStoragePrefix()
): Promise<T | undefined> => {
  return storage.getItem(`${prefix}${key}`);
};

export const saveToStorage = async <T = unknown>(
  key: string,
  value: T
): Promise<void> => {
  storage.setItem<T>(`${getStoragePrefix()}${key}`, value);
};

export const removeFromStorage = async (key: string): Promise<void> => {
  storage.removeItem(`${getStoragePrefix()}${key}`);
};
