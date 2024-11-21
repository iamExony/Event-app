import React from "react";

export const Continue = ({ children, className, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-primaryCol py-3 px-12 rounded-md outline-none text-white border hover:border-primaryCol hover:bg-transparent hover:text-primaryCol ${className}`}
    >
      {children}
    </button>
  );
};


export const Back = ({ children, className, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-White py-3 px-12 rounded-md outline-none hover:text-white hover:bg-primaryCol border border-primaryCol text-primaryCol ${className}`}
    >
      {children}
    </button>
  );
};