import { useState } from "react";
import { Stepper } from "../../components/Stepper";
import SpecificationStructure from "./pages/SpecificationStructure";
import PaymentDetails from "./pages/PaymentDetails";
import PreviewInvoice from "./pages/PreviewInvoice";

import Summary from "./pages/Summary";
import PaymentPopUp from "./components/PaymentPopUp";

function AddPayment() {
  //Storing inputs into variable using state

  //variables for specification structure
  const [theme, setTheme] = useState([]);
  const [specifications, setSpecifications] = useState(function () {
    const storedValue = localStorage.getItem("specifications");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  //variable for payment structure
  const [paymentStyle, setPaymentStyle] = useState("Lump Sum");
  const [paymentSchedules, setPaymentSchedules] = useState([]);
  const [scheduleAmount, setScheduleAmount] = useState("");
  const [scheduleDueDate, setScheduleDueDate] = useState("");
  const [lumpSumAmount, setLumpSumAmount] = useState("");
  const [lumpSumDueDate, setLumpSumDueDate] = useState("");

  //steps variable
  const steps = [
    "Specification Structure",
    "Payment Details",
    "Review Invoice",
    "Summary",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-solid border-borderColor rounded-md px-4 md:px-16 py-12">
      <Stepper currentStep={currentStep} complete={complete} steps={steps} />
      {currentStep === 1 && (
        <SpecificationStructure
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setComplete={setComplete}
          steps={steps}
          theme={theme}
          setTheme={setTheme}
          specifications={specifications}
          setSpecifications={setSpecifications}
        />
      )}

      {currentStep === 2 && (
        <PaymentDetails
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setComplete={setComplete}
          steps={steps}
          paymentStyle={paymentStyle}
          setPaymentStyle={setPaymentStyle}
          lumpSumAmount={lumpSumAmount}
          setLumpSumAmount={setLumpSumAmount}
          lumpSumDueDate={lumpSumDueDate}
          setLumpSumDueDate={setLumpSumDueDate}
          scheduleAmount={scheduleAmount}
          setScheduleAmount={setScheduleAmount}
          scheduleDueDate={scheduleDueDate}
          setScheduleDueDate={setScheduleDueDate}
          paymentSchedules={paymentSchedules}
          setPaymentSchedules={setPaymentSchedules}
        />
      )}

      {currentStep === 3 && (
        <PreviewInvoice
          specifications={specifications}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setComplete={setComplete}
          steps={steps}
        />
      )}

      {currentStep === 4 && (
        <Summary
          specifications={specifications}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setComplete={setComplete}
          steps={steps}
          setIsOpen={setIsOpen}
        />
      )}

      {isOpen && <PaymentPopUp setIsOpen={setIsOpen} />}
    
    </div>
  );
}

export default AddPayment;
