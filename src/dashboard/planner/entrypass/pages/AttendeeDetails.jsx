import React, { useState } from "react";
import { Continue } from "../../../components/Buttons";

const AttendeeDetails = ({
  name,
  setName,
  contact,
  setContact,
  org,
  setOrg,
  setStep,
  orgContact,
  setOrgContact,
  orgName,
  setOrgName,
  repName,
  setRepName,
}) => {
  const [active, setActive] = useState(0);

  const buttonContents = ["Individual", "Organization"];

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Attendee details
      </h3>

      <div className="flex flex-col justify-between h-screen p-4 md:p-8">
        <div>
          <div className="bg-primaryCol bg-opacity-20 md:w-3/4 w-[95%] flex justify-between mx-auto p-2 my-4 rounded-full">
            {buttonContents.map((content, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-1/2 p-4 rounded-full outline-none ${
                  active === index && "bg-primaryColC text-White"
                }`}
              >
                {content}
              </button>
            ))}
          </div>
          {active === 0 && (
            <section className="flex-group gap-8 p-4">
              <div>
                <label className=" font-medium text-lg" htmlFor="attendee-name">
                  Attendee’s name
                </label>
                <input
                  type="text"
                  id="attendee-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter attendee’s name"
                  className="style-input w-full mt-3"
                />
              </div>
              <div>
                <label
                  className=" font-medium text-lg"
                  htmlFor="attendee-contact"
                >
                  Attendee’s contact
                </label>
                <input
                  type="text"
                  id="attendee-contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Enter attendee’s contact"
                  className="style-input w-full mt-3"
                />
              </div>
              <div>
                <label className=" font-medium text-lg" htmlFor="attendee-org">
                  Attendee affiliation/organization
                </label>
                <input
                  type="text"
                  id="attendee-org"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="Enter attendee’s affiliation/organization"
                  className="style-input w-full mt-3"
                />
              </div>
            </section>
          )}
          {active === 1 && (
            <section className="flex-group gap-8 p-4">
              <div>
                <label className=" font-medium text-lg" htmlFor="org-name">
                  Organization’s name
                </label>
                <input
                  type="text"
                  id="org-name"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Enter attendee’s name"
                  className="style-input w-full mt-3"
                />
              </div>
              <div>
                <label className=" font-medium text-lg" htmlFor="org-contact">
                  Organization’s contact
                </label>
                <input
                  type="text"
                  id="org-contact"
                  value={orgContact}
                  onChange={(e) => setOrgContact(e.target.value)}
                  placeholder="Enter attendee’s contact"
                  className="style-input w-full mt-3"
                />
              </div>
              <div>
                <label className=" font-medium text-lg" htmlFor="rep-name">
                  Representative’s name
                </label>
                <input
                  type="text"
                  id="rep-name"
                  value={repName}
                  onChange={(e) => setRepName(e.target.value)}
                  placeholder="Enter representative’s name"
                  className="style-input w-full mt-3"
                />
              </div>
            </section>
          )}
        </div>

        <Continue
          className="self-end my-4"
          handleClick={() => setStep((step) => step + 1)}
        >
          Continue
        </Continue>
      </div>
    </div>
  );
};

export default AttendeeDetails;
