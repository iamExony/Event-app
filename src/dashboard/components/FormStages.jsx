import React from "react";
import { FiCheck } from "react-icons/fi";

const FormStages = ({ steps, step: current }) => {
  return (
    <div>
      {/* Desktop view */}
      <div className="lg:flex hidden justify-between items-start mb-10 w-full whitespace-nowrap">
        {steps?.map((step, i) => {
          const stepNumber = i + 1;
          const isActive = current === stepNumber;
          const isDone = stepNumber < current;
          const bgColor = isDone || isActive ? "bg-primaryColC" : "bg-slate-300";
          const textColor = isDone || isActive ? "text-primaryColC" : "text-gray-500";

          return (
            <div
              key={stepNumber}
              className={`step-block relative flex flex-col justify-center items-center w-1/3 ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}`}
            >
              <div className={`w-8 h-8 flex items-center justify-center z-10 relative rounded-full step-sub text-white ${bgColor}`}>
                {isDone ? <FiCheck /> : stepNumber}
              </div>
              <p className={`w-32 text-center font-medium ${textColor}`}>
                {step.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile view */}
      <ol className="space-y-4 w-full lg:hidden mb-4">
        {steps?.map((step) => {
          const stepNumber = step.id;
          let bgClass, textClass, iconPath;

          if (stepNumber < current ) {
            bgClass = "bg-primaryColC/10 border-green-300 text-primaryColC";
            textClass = "font-medium";
            iconPath = "M1 5.917 5.724 10.5 15 1.5";
          } else if (stepNumber === current ) {
            bgClass = "bg-primaryColC/50 border-green-300 text-primaryColC";
            textClass = "font-medium";
            iconPath = "M1 5h12m0 0L9 1m4 4L9 9";
          } else {
            bgClass = "bg-primaryColC/5 border-gray-300 text-gray-900";
            textClass = "";
            iconPath = null;
          }

          return (
            <li key={stepNumber}>
              <div className={`w-full p-4 rounded-lg ${bgClass}`} role="alert">
                <div className="flex items-center justify-between">
                  <span className="sr-only">{step.label}</span>
                  <h3 className={`font-medium ${textClass}`}>
                    {stepNumber}. {step.label}
                  </h3>
                  {iconPath && (
                    <svg
                      className={`w-4 h-4 ${stepNumber === current + 1 ? "rtl:rotate-180" : ""}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={iconPath}
                      />
                    </svg>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default FormStages;
