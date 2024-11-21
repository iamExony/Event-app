import React from "react";

//Buttons with Red Background and white background on hover
export const NextButton = ({ children, className, onClick }) => {
  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
        className={`${className} rounded-md text-white bg-primaryCol px-4 py-2 hover:border-2 hover:border-primaryCol hover:bg-transparent hover:text-primaryCol font-semibold `}
      >
        {children}
      </button>
    </>
  );
};

//Buttons with white background and red background on hover
export const PrevButton = ({ children, className, onClick }) => {
  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
        className={`${className}flex items-center justify-center rounded-md hover:text-white hover:bg-primaryCol px-4 py-2 border-2 border-primaryCol bg-transparent text-primaryCol font-semibold`}
      >
        {children}
      </button>
    </>
  );
};
