import React, { useState } from "react";
import { NextButton } from "../components/Button";

function ProspectDetails({
  setShowSummary,
  clientType,
  setClientType,
  clientName,
  setClientName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
}) {
  return (
    <div className="flex  flex-col rounded-md border-2 border-borderColor md:w-[70%] m-auto md:mt-16 py-6">
      <h4 className="px-6 pb-6 font-bold">Client Details</h4>
      <hr />

      <form
        action=""
        className="pt-6 px-6 flex flex-col"
        onSubmit={() => {
          setShowSummary(true);
        }}
      >
        <label htmlFor="Theme" className="font-semibold">
          Client Type
        </label>
        <select
          name="Theme"
          id="Theme"
          className="w-full p-2 my-3 text-bold border-2 border-borderColor rounded-md focus:outline-none"
          value={clientType}
          required
          onChange={(e) => setClientType(e.target.value)}
        >
          <option value="" className="">
            Select Client Type
          </option>
          <option value="Company/Organization">Company/Organization</option>
          <option value="Individual">Individual</option>
        </select>

        <label htmlFor="name" className="mt-6 font-semibold">
          Client's Name
        </label>
        <input
          className="w-full p-2 pl-7 mt-3 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none"
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter Client's Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <label htmlFor="number" className="mt-6 font-semibold">
          Client's Phone Number
        </label>
        <input
          className="w-full p-2 pl-7 mt-3 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none"
          type="tel"
          name="number"
          id="number"
          required
          placeholder=" Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="mail" className="mt-6 font-semibold">
          Client's Email Address
        </label>
        <input
          className="w-full p-2 pl-7 mt-3 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none"
          type="email"
          name="mail"
          id="mail"
          required
          placeholder=" Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex justify-end pt-10 pr-6">
          <input type='submit' value={'Continue'} className={"w-[150px] rounded-md text-white bg-primaryCol px-4 py-2 hover:border-2 hover:border-primaryCol hover:bg-transparent hover:text-primaryCol font-semibold "} />
        </div>
      </form>
    </div>
  );
}

export default ProspectDetails;
