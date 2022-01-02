import random from "lodash/random";

export const testNodes = [process.env.REACT_APP_TEST_NODE_1];

const getTestNodeUrl = () => {
  const randomIndex = random(0, testNodes.length - 1);
  return testNodes[randomIndex];
};

export default getTestNodeUrl;
