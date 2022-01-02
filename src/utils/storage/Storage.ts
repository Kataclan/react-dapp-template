import { DEFAULT_LOCALSTORAGE_PREFIX } from "config/constants/localStorage";

type BrowserStorage = typeof localStorage | typeof sessionStorage;

const DEFAULT_PREFIX = DEFAULT_LOCALSTORAGE_PREFIX;

class Storage {
  private prefix: string;
  private storage: BrowserStorage;

  constructor(storage: BrowserStorage, prefix = DEFAULT_PREFIX) {
    this.prefix = prefix;
    this.storage = storage;
  }

  private prefixKey = (key: string): string => {
    return `${this.prefix}${key}`;
  };

  public getItem = <T>(key: string): T | undefined => {
    const fullKey = this.prefixKey(key);
    let saved: string | null = null;
    try {
      saved = this.storage.getItem(fullKey);
    } catch (e: any) {
      console.log("Error: ", `key ${key} – ${e.message}`);
    }

    if (!saved || saved === "undefined") return;

    try {
      return JSON.parse(saved) as T;
    } catch (e: any) {
      console.log("Error: ", `key ${key} – ${(e as any).message}`);
    }
  };

  public setItem = <T>(key: string, item: T): void => {
    const fullKey = this.prefixKey(key);
    try {
      this.storage.setItem(fullKey, JSON.stringify(item));
    } catch (err: any) {
      console.log("Error: ", `key ${key} – ${err.message}`);
    }
  };

  public removeItem = (key: string): void => {
    const fullKey = this.prefixKey(key);
    try {
      this.storage.removeItem(fullKey);
    } catch (err: any) {
      console.log("Error: ", `key ${key} – ${err.message}`);
    }
  };
}

export default Storage;
