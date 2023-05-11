import { memo } from "react";

import { useBlock } from "contexts/block";

const DumbBlockText = memo<{ block: number }>(({ block }) => (
  <span>Web3 Provider Block: {block}</span>
));

const NetworkBlockText = () => {
  const { block } = useBlock();
  return <DumbBlockText block={block} />;
};

export default NetworkBlockText;
