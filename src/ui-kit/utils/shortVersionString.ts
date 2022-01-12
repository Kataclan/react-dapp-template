const shortVersionOf = (value: string, cut: number): string => {
  if (!value) {
    return "Unknown";
  }

  const final = value.length - cut;
  if (value.length <= cut) {
    return value;
  }

  return `${value.substring(0, cut)}...${value.substring(final)}`;
};
export default shortVersionOf;
