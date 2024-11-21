import React, { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { NextButton, PrevButton } from "../components/Button";
import { FaTimes } from "react-icons/fa";
import OptionButton from "../components/OptionButton";


const PaymentDetails = ({
  currentStep,
  setComplete,
  setCurrentStep,
  steps,

  paymentSchedules,
  setPaymentSchedules,

  scheduleAmount,
  setScheduleAmount,

  scheduleDueDate,
  setScheduleDueDate,

  lumpSumAmount,
  setLumpSumAmount,

  lumpSumDueDate,
  setLumpSumDueDate,

  paymentStyle,
  setPaymentStyle,
}) => {

    //Generating ID for each Specification
  function generateUniqueID() {
    return Math.floor(
      Math.random() *
        Date.now()

    );
  }

  

    const newSchedule = {
        scheduleAmount,
        scheduleDueDate,
        id: generateUniqueID()
    }
    function handleScheduleList (e){
        e.preventDefault();
        setPaymentSchedules([...paymentSchedules, newSchedule])
    }
  return (
    <div className="flex  flex-col rounded-md border-2 border-borderColor md:w-[70%] m-auto mt-16 py-6">
      <h4 className="px-6 pb-6 font-bold">Payment Details</h4>
      <hr />
      
        <h4 className="font-bold ml-12 mt-6 ">Payment Style</h4>
      
      <div className="rounded-full bg-red-200 flex justify-between items-center py-1 px-2 w-[90%] m-auto mt-6">
        <h4
          className={`rounded-full text-white p-3 w-[50%] text-center text-sm font-semibold cursor-pointer ${
            paymentStyle === "Lump Sum" ? "bg-primaryColC" : "bg-transparent"
          }`}
          onClick={() => {
            setPaymentStyle("Lump Sum");
          }}
        >
          Lump sum
        </h4>
        <h4
          className={`rounded-full text-white p-3 w-[50%] text-center text-sm font-semibold cursor-pointer ${
            paymentStyle === "Part Payment"
              ? "bg-primaryColC"
              : "bg-transparent"
          }`}
          onClick={() => {
            setPaymentStyle("Part Payment");
          }}
        >
          Part Payment
        </h4>
      </div>
      <div className="px-6 ">
        
        {paymentStyle === 'Lump Sum' ?
          <div className="mt-6 relative">
            <form action="">
                <label htmlFor="lumpinitialPayment" className="font-bold ml-3 ">Amount</label>
            <TbCurrencyNaira className=" absolute top-12 text-xl ml-2" />
            <input
              className="w-full p-2 pl-7   border-2 border-borderColor rounded-md my-3 focus:outline-none"
              type="number"
              required
              id="lumpinitialPayment"
              value={lumpSumAmount}
              onChange={(e) => setLumpSumAmount(e.target.value)}
            />
            <div className="w-[45%] mt-6">
            <label htmlFor="lump-due-date" className="font-bold ml-3  w-full">Due Date</label>
            <input
              type="date"
              id="lump-due-date"
              required
              className="w-full border-2 border-borderColor rounded-md p-2 mt-2 uppercase  focus:outline-none"
              value={lumpSumDueDate}
              onChange={(e) => setLumpSumDueDate(e.target.value)}
            />
          </div>
            </form>
          </div>:    <div className="mt-6 relative">
            <form action="" onSubmit={handleScheduleList}>
                <label htmlFor="specinitialPayment" className="font-bold ml-3 ">Amount</label>
            <TbCurrencyNaira className=" absolute top-12 text-xl ml-2" />
            <input
              className="w-full p-2 pl-7   border-2 border-borderColor rounded-md my-3 focus:outline-none"
              type="number"
              required
              id="specinitialPayment"
              value={scheduleAmount}
              onChange={(e) => setScheduleAmount(e.target.value)}
            />
            <div className="w-[45%] mt-6">
            <label htmlFor="spec-due-date" className="font-bold ml-3  w-full">Due Date</label>
            <input
              type="date"
              id="spec-due-date"
              required
              className="w-full border-2 border-borderColor rounded-md p-2 mt-2 uppercase  focus:outline-none"
              value={scheduleDueDate}
              onChange={(e) => setScheduleDueDate(e.target.value)}
            />
          </div>
          <div className="w-[50%] flex justify-between mt-12 ">
          <div
            className=" flex items-center justify-center rounded-md hover:text-white hover:bg-primaryCol px-4 py-2 border-2 border-primaryCol bg-transparent text-primaryCol font-semibold w-[150px] "
            // onClick={handleClear}

          >
            <FaTimes className="mr-2" />
            <input type="button" value={"Remove"} />
          </div>


          <input
            type="submit"
            className="rounded-md text-white bg-primaryCol px-4 py-2 hover:border-2 hover:border-primaryCol hover:bg-transparent hover:text-primaryCol font-semibold w-[150px]"
            value={"Save Details"}
          />

        </div>
            </form>

            {paymentSchedules.length >= 1 && (
        <div className=" mt-12">
          <div className="flex justify-between items-center ml-[95px] my-4  text-sm">
            <p className="">
              <span>{paymentSchedules.length}</span>{" "}
              {paymentSchedules.length > 1 ? "Payment Schedules" : "Payment Schedule"}
            </p>
            <h6 className="font-semibold w-[160px] flex">
              Amount:{" "}
              <span className="text-primaryCol flex">
                <TbCurrencyNaira className="text-xl ml-2" />
                {paymentSchedules.reduce(function (acc, schedule) {
                  return Number(schedule.scheduleAmount) + Number(acc);
                }, 0)}
              </span>
            </h6>
          </div>

          <div>
            <div className="flex gap-4 w-full  font-semibold mb-3">
            <p className="w-4 "></p>
              <h4 className="w-12 ">S/N</h4>
              <h4 className="w-[195px] ">Due Date</h4>
              <h4 className="w-[190px] "></h4>
              <h4 className="w-[90px] ">Amount</h4>
            </div>
            <ul>
              {paymentSchedules.map((schedule, i) => (
                <li className="flex  items-center gap-3 py-1" key={schedule.id}>
                    <div className="flex justify-center items-center ">
                    <input type="checkbox" className=" cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-4 w-4 border border-primaryColC rounded-sm mr-2" />
                    </div>
                  <p className="w-12 text-primaryCol">#{i + 1}</p>
                  <p className="w-[200px] capitalize ">
                    {schedule.scheduleDueDate}{console.log(new Date(schedule.scheduleDate))}
                  </p>

                  <p className="w-[190px] capitalize ">

                 
                  </p>
                  <p className="w-[70px] ">{schedule.scheduleAmount}</p>

                  <div className="w-10 text-right">

                    <OptionButton
                    //   paymentSchedules={paymentSchedules}
                    //   setSpecifications={setSpecifications}
                    //   specificationId={schedule.id}
                    //   setSpecificationType={setSpecificationType}
                    //   setProvision={setProvision}
                    //   setActivity={setActivity}
                    //   setDescription={setDescription}
                    //   setStartDate={setStartDate}
                    //   setEndDate={setEndDate}
                    //   setAmount={setAmount}
                    />

                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}


          </div>
        }
      </div>
      <div
        className={`relative w-full px-6 flex justify-end gap-5 mt-8 mb-3`}
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

export default PaymentDetails;
