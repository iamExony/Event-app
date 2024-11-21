import React, { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { NextButton, PrevButton } from "../components/Button";

const PaymentStructure = ({
  currentStep,
  setComplete,
  setCurrentStep,
  steps,
  lumpInitialDeposit,
  setLumpInitialDeposit,
  specificationInitialDeposit,
  setSpecificationInitialDeposit,
  paymentType,
  setPaymentType,
  checked,
  setChecked,
}) => {
  return (
    <div className="flex  flex-col rounded-md border-2 border-borderColor md:w-[70%] m-auto md:mt-16 py-6">
      <h4 className="px-6 pb-6 font-bold">Payment Structure</h4>
      <hr />
      <div className="rounded-full bg-red-200 flex justify-between items-center py-1 px-2 w-[95%] md:w-[80%] m-auto mt-6">
        <h4
          className={`rounded-full text-white p-3 w-[50%] text-center text-sm font-semibold cursor-pointer ${
            paymentType === "Lump Sum" ? "bg-primaryColC" : "bg-transparent"
          }`}
          onClick={() => {
            setPaymentType("Lump Sum");
          }}
        >
          Lump sum
        </h4>
        <h4
          className={`rounded-full text-white p-3 w-[50%] text-center text-sm font-semibold cursor-pointer ${
            paymentType === "Per Specification"
              ? "bg-primaryColC"
              : "bg-transparent"
          }`}
          onClick={() => {
            setPaymentType("Per Specification");
          }}
        >
          Per Specification
        </h4>
      </div>
      <div className="flex justify-start items-center font-semibold relative my-6 px-6">
        <h4 className="">Payment Deposit</h4>
      </div>
      <div className="px-6 ">
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="checkbox"
              value={checked}
              onChange={() => setChecked(!checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-borderColor rounded-full peer peer-focus:ring-2 peer-focus:ring-borderColor  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-borderColor after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primaryColC"></div>
          </label>
          <span className="ml-3 text-sm font-medium  ">
            There will be an initial deposit
          </span>
        </div>
        {checked &&
          (paymentType === "Lump Sum" ? (
            <div>
              <TbCurrencyNaira className=" relative top-11 text-xl ml-2" />
              <input
                className="w-full p-2 pl-7 mt-3 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none"
                type="number"
                name="initialPayment"
                value={lumpInitialDeposit}
                onChange={(e) => setLumpInitialDeposit(Number(e.target.value))}
              />
            </div>
          ) : (
            <div>
              <TbCurrencyNaira className=" relative top-11 text-xl ml-2" />
              <input
                className="w-full p-2 pl-7 mt-3 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none"
                type="number"
                name="initialPayment"
                value={specificationInitialDeposit}
                onChange={(e) =>
                  setSpecificationInitialDeposit(Number(e.target.value))
                }
              />
            </div>
          ))}
      </div>
      <div
        className={`relative w-full px-6 flex justify-end gap-5  ${
          !checked ? " mt-16 mb-8" : "my-8"
        } `}
      >
        <PrevButton
          onClick={() => {
            setCurrentStep((prev) => prev - 1);
            setComplete(false);
          }}
          className={"w-[150px] "}
        >
          Back
        </PrevButton>
        <NextButton
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
          className={"w-[150px]"}
        >
          Continue
        </NextButton>
      </div>
    </div>
  );
};

export default PaymentStructure;
