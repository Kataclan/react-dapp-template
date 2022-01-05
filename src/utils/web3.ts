import { BigNumber } from "@ethersproject/bignumber";

/**
 * Check if string is HEX, requires a 0x in front
 *
 * @method isHexStrict
 * @param {String} hex to be checked
 * @returns {Boolean}
 */
const isHexStrict = (hex: string) => {
  return (
    (typeof hex === "string" || typeof hex === "number") &&
    /^(-)?0x[0-9a-f]*$/i.test(hex)
  );
};

export const numberToHex = (value: number | string) => {
  if (value === null || value === undefined) {
    return value;
  }

  if (!isFinite(value as number) && !isHexStrict(value.toString())) {
    throw new Error('Given input "' + value + '" is not a number.');
  }

  var number = toBigNumber(value);
  var result = number.toString();

  return number.lt(BigNumber.from(0))
    ? "-0x" + result.substr(1)
    : `0x${parseInt("0x" + result, 16)}`;
};

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

export const getChainHexStr = (chainId: string) =>
  `0x${parseInt(chainId, 10).toString(16)}`;
