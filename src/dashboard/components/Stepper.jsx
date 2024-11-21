import "./stepper.css";
import { FiCheck } from "react-icons/fi";

export const Stepper = ({ complete, currentStep, steps }) => {
  return (
    <>
      <div className="hidden md:flex justify-between items-start mb-10">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <FiCheck /> : i + 1}
            </div>
            <p className="text-gray-500 w-32  text-center font-semibold">
              {step}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
