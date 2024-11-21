import React, { useState } from "react";
import PropTypes from "prop-types";
import { Back, Continue } from "../../../components/Buttons";
import SelectTag from "../../../components/SelectTag";

const EventSchedule = ({
  setStep,
  endDate,
  endTime,
  startDate,
  startTime,
  frequency,
  setEndDate,
  setEndTime,
  setStartDate,
  setStartTime,
  setFrequency,
}) => {
  const [active, setActive] = useState(0);
  const [errors, setErrors] = useState({});
  const buttonContents = ["One-time Event", "Recurring Event"];

  const frequencies = [
    "Daily",
    "Weekly",
    "Monthly",
    "Quarterly",
    "Semi-annually",
    "Yearly",
  ];

  function validate() {
    const newErrors = {};
    if (!startDate) newErrors.startDate = "Start date is required.";
    if (!startTime) newErrors.startTime = "Start time is required.";
    if (active === 1) {
      if (!endDate)
        newErrors.endDate = "End date is required for recurring events.";
      if (!endTime)
        newErrors.endTime = "End time is required for recurring events.";
      if (!frequency)
        newErrors.frequency = "Frequency is required for recurring events.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function convertTo12HourFormat(time) {
    if (!time) return "";
    const [hour, minute] = time.split(":");
    const period = +hour >= 12 ? "PM" : "AM";
    const hour12 = +hour % 12 || 12;
    return `${hour12}:${minute} ${period}`;
  }

  function handleValidation() {
    if (validate()) {
      setStartTime(convertTo12HourFormat(startTime));
      setEndTime(convertTo12HourFormat(endTime));
      setStep((step) => step + 1);
    }
  }

  function handleStartTimeChange(e) {
    const time = e.target.value;
    setStartTime(time);
  }

  function handleEndTimeChange(e) {
    const time = e.target.value;
    setEndTime(time);
  }

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Event Schedule
      </h3>

      <div className="flex flex-col justify-between p-4 md:p-8">
        <div className="bg-primaryCol bg-opacity-20 md:w-3/4 flex justify-between mx-auto p-2 my-4 rounded-full">
          {buttonContents.map((content, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                if (content === "One-time Event") {
                  setFrequency("one_time");
                }
              }}
              className={`w-1/2 p-4 rounded-full outline-none ${
                active === index ? "bg-primaryColC text-White" : ""
              }`}
            >
              {content}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 my-10 w-full ">
          <div>
            <p>Start Date</p>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={`style-input w-full mt-3 uppercase ${errors.startDate ? "border-red-500" : ""}`}
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
            )}
          </div>

          <div>
            <p>End Date</p>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={`style-input w-full mt-3 uppercase ${errors.endDate ? "border-red-500" : ""}`}
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
            )}
          </div>

          <div>
            <p>Start Time</p>
            <input
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
              className={`style-input w-full mt-3 uppercase ${errors.startTime ? "border-red-500" : ""}`}
            />
            {errors.startTime && (
              <p className="text-red-500 text-sm mt-1">{errors.startTime}</p>
            )}
          </div>

          <div>
            <p>End Time</p>
            <input
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
              className={`style-input w-full mt-3 uppercase ${errors.endTime ? "border-red-500" : ""}`}
            />
            {errors.endTime && (
              <p className="text-red-500 text-sm mt-1">{errors.endTime}</p>
            )}
          </div>

          {active === 1 && (
            <div>
              <p>Recurring Frequency</p>
              <SelectTag
                text="#4B4B4B"
                value={frequency}
                className={`w-full mt-3 ${errors.frequency ? "border-red-500" : ""}`}
                background="#FFB198"
                options={frequencies}
                handleSelect={setFrequency}
                defaultValue="Select recurring frequency"
              />
              {errors.frequency && (
                <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>
              )}
            </div>
          )}
        </section>

        <div className="flex flex-col md:flex-row justify-end gap-4">
          <Back handleClick={() => setStep((step) => step - 1)}>Back</Back>
          <Continue handleClick={handleValidation}>Continue</Continue>
        </div>
      </div>
    </div>
  );
};

EventSchedule.propTypes = {
  setStep: PropTypes.func.isRequired,
  endDate: PropTypes.string,
  endTime: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  frequency: PropTypes.string,
  setEndDate: PropTypes.func.isRequired,
  setEndTime: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setStartTime: PropTypes.func.isRequired,
  setFrequency: PropTypes.func.isRequired,
};

export default EventSchedule;
