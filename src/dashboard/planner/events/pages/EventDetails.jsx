import React, { useState } from "react";
import PropTypes from "prop-types";
import { Continue } from "../../../components/Buttons";
import SelectTag from "../../../components/SelectTag";

const EventDetails = ({
  name,
  link,
  location,
  description,
  setStep,
  setName,
  setLink,
  setLocation,
  setDescription,
  city,
  setCity,
  state,
  setState,
  locationAddress,
  setLocationAddress,
}) => {
  const [errors, setErrors] = useState({});
  const locations = ["In person", "Virtual", "Hybrid"];

  function validate() {
    const newErrors = {};
    if (!name) newErrors.name = "Event name is required.";
    if (!link) newErrors.link = "Event link is required.";
    if (!description) newErrors.description = "Event description is required.";
    if (!location) newErrors.location = "Location type is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleValidation() {
    if (validate()) {
      setStep((step) => step + 1);
    }
  }

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Event Details
      </h3>

      <div className="flex-group gap-6 p-4">
        <div>
          <p>Event Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter event name"
            className={`style-input w-full mt-3 ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <p>Describe your event</p>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a short description of your event here..."
            className={`style-input w-full mt-3 ${errors.description ? "border-red-500" : ""}`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div>
          <p>Event Link</p>
          <div className="style-input w-full mt-3 flex items-center">
            <span>event.com/</span>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="event-star"
              className={`outline-0 w-full ${errors.link ? "border-red-500" : ""}`}
            />
          </div>
          {errors.link && (
            <p className="text-red-500 text-sm mt-1">{errors.link}</p>
          )}
        </div>

        <div>
          <p>Location type</p>
          <SelectTag
            text="#4B4B4B"
            value={location}
            options={locations}
            background="#FFB198"
            handleSelect={setLocation}
            className={`w-full mt-3 ${errors.location ? "border-red-500" : ""}`}
            defaultValue="Select location type"
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        <div>
          <p>Event City</p>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter event city"
            className={`style-input w-full mt-3 ${errors.city ? "border-red-500" : ""}`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        <div>
          <p>Event State</p>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter event state"
            className={`style-input w-full mt-3 ${errors.state ? "border-red-500" : ""}`}
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>

        <div>
          <p>Event Location Address</p>
          <input
            type="text"
            value={locationAddress}
            onChange={(e) => setLocationAddress(e.target.value)}
            placeholder="Enter event address"
            className={`style-input w-full mt-3 ${errors.locationAddress ? "border-red-500" : ""}`}
          />
          {errors.locationAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.locationAddress}
            </p>
          )}
        </div>

        <Continue className="self-end my-4" handleClick={handleValidation}>
          Continue
        </Continue>
      </div>
    </div>
  );
};

EventDetails.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setLink: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default EventDetails;
