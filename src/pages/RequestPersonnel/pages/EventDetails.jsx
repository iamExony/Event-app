import SelectInput from "../components/Select";
import { Continue, Back } from "../components/Buttons";
import { useState } from "react";

const EventDetails = ({
  eventDate,
  eventType,
  guestsNumber,
  eventLocation,
  setStep,
  setEventDate,
  setEventType,
  setGuestsNumber,
  setEventLocation,
}) => {
    const [checked, setChecked] = useState(false)
  const eventTypeList = [
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
  ];

  const guestRangeList = [
    "< 20",
    "20 - 40",
    "41 - 60",
    "61 - 100",
    "101 - 150",
    "151 - 200",
    "201 - 250",
    "251 - 300",
    "301 - 400",
    "> 400",
  ];

  return (
    <div className="w-2/5 py-8 px-16 flex flex-col gap-10 border border-formBorder rounded-lg">
      <SelectInput
        value={eventType}
        className="w-full"
        options={eventTypeList}
        handleSelect={setEventType}
        defaultValue="Type of event"
      />

     <div>
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
        <span className="ml-3  " title="Event location">
        {!checked ?  'Undecided?' : 'Event location Undecided'}
        </span>
      </div>

     {!checked ? <input
        type="text"
        value={eventLocation}
        placeholder="Event location"
        className="style-input w-full mt-3"
        onChange={(e) => setEventLocation(e.target.value)}
      /> : <input
      type="text"
      disabled
      value={'Undecided'}
      className="style-input w-full mt-3"
      onChange={(e) => setEventLocation(e.target.value)}
    />}
     </div>
      <SelectInput
        value={guestsNumber}
        className=" w-full"
        options={guestRangeList}
        handleSelect={setGuestsNumber}
        defaultValue="Number of guests"
      />

      <input
        type="date"
        value={eventDate}
        placeholder="Date of event"
        className="style-input w-full uppercase"
        onChange={(e) => setEventDate(e.target.value)}
      />

      <div className="flex gap-4">
        <Back className="w-1/2" handleClick={() => setStep((step) => step - 1)}>
          Back
        </Back>
        <Continue
          className="w-1/2"
          handleClick={() => setStep((step) => step + 1)}
        >
          Continue
        </Continue>
      </div>
    </div>
  );
};

export default EventDetails;
