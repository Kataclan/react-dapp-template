import { FC } from "react";

const Spinner: FC = () => (
  <div
    className={`
      spinner-border
      animate-spin
      inline-block
      w-8
      h-8
      border-4
      rounded-full
      text-purple-500
    `}
    role="status"
  ></div>
);
export default Spinner;
