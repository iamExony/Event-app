import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import boundaryLogError from "./../utils/boundaryLogError";
import { ToastContainer } from "react-toastify";
import SomethingWentWrong from "./../SomethingWentWrong";

const Root = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <ErrorBoundary
        FallbackComponent={SomethingWentWrong}
        onError={boundaryLogError}
      >
        <Outlet />
      </ErrorBoundary>
    </>
  );
};

export default Root;
