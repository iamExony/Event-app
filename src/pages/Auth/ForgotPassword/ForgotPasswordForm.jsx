import { useState } from "react";
import ForgotPage from "./ForgotPage";
import OtpPage from "./OtpPage";
import NewPasswordPage from "./NewPassWordPage";
import SuccessPage from "./SuccessPage";

const ForgetPasswordForm = () => {
  // State variable for updating page number
  const [currentPage, setCurrentPage] = useState(1);

  // Function for updating page number
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Rendering page based on state number
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <ForgotPage nextPage={nextPage} />;
      case 2:
        return <OtpPage nextPage={nextPage} />;
      case 3:
        return <NewPasswordPage nextPage={nextPage} />;
      case 4:
        return <SuccessPage />;
      default:
        return <ForgotPage nextPage={nextPage} />;
    }
  };

  return (
    <div className="">
      {/* Rendering page from renderPage function in template */}
      {renderPage()}
    </div>
  );
};

export default ForgetPasswordForm;
