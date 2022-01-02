import { Suspense } from "react";

const Loadable =
  (Loader: React.FC<{}>, Component: React.ElementType) => (props: any) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
