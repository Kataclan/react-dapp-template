import { FC } from "react";
import classname from "utils/classname";

const SkeletonBox: FC<{ containerClassname?: string }> = ({
  containerClassname,
}) => {
  return (
    <div className={classname("animate-pulse flex", containerClassname)}>
      <div className="flex-1">
        <div className="w-full h-full bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonBox;
