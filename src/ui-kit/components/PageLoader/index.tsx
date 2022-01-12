import { FC } from "react";

const PageLoader: FC = ({ children }) => (
  <div className="w-full h-full flex items-center justify-center">
    {children || (
      <div
        className="
    spinner-border
    animate-spin
    inline-block
    w-8
    h-8
    border-4
    rounded-full
    text-green-500
  "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    )}
  </div>
);

export default PageLoader;
