import React, { useState } from "react";
import { Back, Continue } from "../../../components/Buttons";
import Checkbox from "../../../components/Checkbox";
import SelectTag from "../../../components/SelectTag";

const EventDetails = ({
  name,
  type,
  locationType,
  address,
  setName,
  setStep,
  setType,
  eventDate,
  setEventDate,
  setLocationType,
  setAddress,
  undecidedName,
  undecidedAddress,
  setUndecidedName,
  setUndecidedAddress,
  handleBack,
  handleContinue,
  description,
  city,
  state,
  setDescription,
  setCity,
  setState,
  inputType,
  setInputType,
  nameChecked,
  setNameChecked,
  addressChecked,
  setAddressChecked,
}) => {
  const locationTypes = ["In person", "Virtual", "Hybrid"];
  const eventType = [
    "Wedding reception",
    "Adult birthday party",
    "Children birthday party",
    "Wedding anniversary",
    "Corporate - Product launch",
    "Corporate - Trade show",
    "Corporate -Annual general meeting",
    "House opening",
    "Surprise party",
    "House party",
    "Relationship proposals",
    "Music festivals & shows",
    "Baby showers, dedication & naming",
    "Funeral ceremonies",
    "Bachelorette",
    "Sport events",
    "Old friend’s reunion",
    "Club & association events",
    "Corporate - Office & business launch",
    "Honeymoon and holidays",
    "Religious events",
    "School graduation",
    "Job promotion & career milestone celebration",
    "Career fairs & networking events",
    "Others",
  ];

  const handleNameCheck = (e) => {
    setNameChecked(e.target.checked);
  };

  const handleAddressCheck = (e) => {
    setAddressChecked(e.target.checked);
  };

  console.log(nameChecked, addressChecked);

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h2 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Event Details
      </h2>

      <div className="flex-group gap-6 px-4 md:px-10 py-4">
        <div className="flex flex-col gap-3">
          <h4>Event name</h4>

          <input
            type="text"
            value={name}
            placeholder="Enter name"
            className="style-input"
            disabled={nameChecked}
            onChange={(e) => {
              setName(e.target.value);
              if (nameChecked) {
                setName("");
              }
            }}
          />

          {/* <div className="flex gap-3">
            <Checkbox
              id={"name"}
              value={undecidedName}
              handleCheck={setUndecidedName}
            />
            <label htmlFor="name">Undecided</label>
          </div> */}
          <div>
            {" "}
            <label className="check-container">
              <input
                type="checkbox"
                checked={nameChecked}
                onChange={handleNameCheck}
                className=""
              />
              <span className="checkmark"></span>
            </label>
            <p className="pl-7">Undecided</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4>Event date</h4>

          <input
            type="date"
            value={eventDate}
            placeholder="Select Date"
            className="style-input"
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h4>Event type</h4>

          <SelectTag
            value={type}
            options={eventType}
            className=""
            handleSelect={setType}
            defaultValue="Select event type"
          />
        </div>

        {type === "Others" && (
          <div className="flex flex-col gap-3">
            <h4>Enter Event Type</h4>

            <input
              type="text"
              value={inputType}
              placeholder="Enter description"
              className="style-input"
              onChange={(e) => {
                setInputType(e.target.value);
              }}
            />
          </div>
        )}

        <div className="flex flex-col gap-3">
          <h4>Event description</h4>

          <input
            type="text"
            value={description}
            placeholder="Enter description"
            className="style-input"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4>City</h4>

          <input
            type="text"
            value={city}
            placeholder="Enter city"
            className="style-input"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4>State</h4>

          <input
            type="text"
            value={state}
            placeholder="Enter state"
            className="style-input"
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4>Location type</h4>

          <SelectTag
            value={locationType}
            options={locationTypes}
            className=""
            handleSelect={setLocationType}
            defaultValue="Select location type"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h4>Location address</h4>

          <input
            type="text"
            value={address}
            placeholder="Enter address"
            className="style-input"
            disabled={addressChecked}
            onChange={(e) => {
              setAddress(e.target.value);
              if (addressChecked) {
                setAddress("");
              }
            }}
          />

          {/* <div className="flex gap-3">
            <Checkbox
              id={"address"}
              value={undecidedAddress}
              handleCheck={setUndecidedAddress}
            />
            <label htmlFor="address">Undecided</label>
          </div> */}
          <div>
            {" "}
            <label className="check-container">
              <input
                type="checkbox"
                checked={addressChecked}
                onChange={handleAddressCheck}
                className=""
              />
              <span className="checkmark"></span>
            </label>
            <p className="pl-7">Undecided</p>
          </div>
        </div>

        <div className="self-end">
          <Back handleClick={handleBack} className="md:mx-4 mb-4 md:mb-0">
            Back
          </Back>
          <Continue handleClick={handleContinue}>Continue</Continue>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
