import React from "react";
import { Continue } from "../../../components/Buttons";
import SelectTag from "../../../components/SelectTag";

const ClientDetails = ({
  name,
  type,
  email,
  number,
  setType,
  setName,
  setStep,
  setEmail,
  setNumber,
  handleContinue,
}) => {
  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h2 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Client Details
      </h2>

      <div className="flex-group gap-8 py-4 px-4 md:px-10">
        <div className="flex flex-col gap-3">
          <h4>Client type</h4>

          <SelectTag
            value={type}
            className=""
            options={["Company/organization", "Individual"]}
            handleSelect={setType}
            defaultValue="Select client type"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4>Client’s Name</h4>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter client name"
            className="style-input"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4>Client's Phone Number</h4>

          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter phone number"
            className="style-input "
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4>Client’s Email Address</h4>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="style-input"
          />
        </div>

        <Continue
          handleClick={handleContinue}
          className="self-end my-6"
        >
          Continue
        </Continue>
      </div>
    </div>
  );
};

export default ClientDetails;
