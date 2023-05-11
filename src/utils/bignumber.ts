import { BigNumber } from "ethers";

/**
 * Takes an input and transforms it into an BN
 *
 * @method toBN
 * @param {Number|String|BigNumber} number, string, HEX string or BN
 * @return {BigNumber} BN
 */
export const toBigNumber = (number: number | string | BigNumber) => {
  try {
    return BigNumber.from(number);
  } catch (e) {
    throw new Error(e + ' Given value: "' + number + '"');
  }
};
