import { Outlet, ScrollRestoration, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import { ErrorBoundary } from "react-error-boundary";
import boundaryLogError from "./../utils/boundaryLogError";
import SomethingWentWrong from "./../SomethingWentWrong";
import useCheckTokenExpiration from "../hooks/useCheckTokenExpiration";

const HomeRoot = () => {
  useCheckTokenExpiration();
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <div style={{ paddingTop: "78px" }}>
        <ErrorBoundary
          FallbackComponent={SomethingWentWrong}
          onError={boundaryLogError}
        >
          <Outlet />
        </ErrorBoundary>
      </div>
      <Footer />
    </>
  );
};

export default HomeRoot;
