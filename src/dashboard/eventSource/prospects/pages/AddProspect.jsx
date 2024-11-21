import { useState } from "react";

import Success from "./Success";
import Summary from "./Summary";
import EventDetails from "./EventDetails";
import ClientDetails from "./ClientDetails";
import Specifications from "./Specifications";
import FormStages from "../../../components/FormStages";
import { useDispatch, useSelector } from "react-redux";
import { addToProspect, getProspect } from "../utils/prospectSlice";
import { toast } from "react-toastify";
import handleValidatedClientDetails from "./../../../../utils/functions/handleValidatedClientDetails";
import handleValidatedEventDetails from "../../../../utils/functions/handleValidateEventDetails";

const AddProspect = () => {
  const [step, setStep] = useState(1);

  // For client details
  const [clientType, setClientType] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientNumber, setClientNumber] = useState();

  // For event details
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocationType, setEventLocationType] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [undecidedName, setUndecidedName] = useState(false);
  const [undecidedAddress, setUndecidedAddress] = useState(false);
  const [eventDescription, setEventDescription] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventState, setEventState] = useState("");

  // For specifications
  const [theme, setTheme] = useState("");
  const [activity, setActivity] = useState("");
  const [provision, setProvision] = useState("");
  const [description, setDescription] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [amount, setAmount] = useState();

  const [allSpecifications, setAllSpecifications] = useState([]);
  const [inputType, setInputType] = useState("");

  const [DJ, setDJ] = useState(false);
  const [note, setNote] = useState("");
  const [band, setBand] = useState(false);
  const [centre, setCentre] = useState(false);

  const [nameChecked, setNameChecked] = useState(false);
  const [addressChecked, setAddressChecked] = useState(false);

  let activities = allSpecifications.filter((spec) => spec.type === "Activity");
  let provisions = allSpecifications.filter(
    (spec) => spec.type === "Provision"
  );
  const validatedClientDetails = handleValidatedClientDetails({
    clientName,
    clientType,
    clientEmail,
    clientNumber,
  });

  const validatedEventDetails = handleValidatedEventDetails({
    eventName,
    eventDate,
    eventType,
    eventLocationType,
    eventAddress,
    nameChecked,
    addressChecked,
  });

  //   const intakeDate = new Date().toDateString();
  //   //   const day = intakeDate.getFull
  //   console.log(intakeDate);

  function handleContinue() {
    if (step == 1 && !validatedClientDetails?.status) {
      toast.error(validatedClientDetails?.message);
      return;
    }
    if (step == 2 && !validatedEventDetails?.status) {
      toast.error(validatedEventDetails?.message);
      return;
    }
    // return
    setStep(step + 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function handleBack() {
    setStep(step - 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const steps = [
    "Client details",
    "Event details",
    "Event Specifications",
    "Summary",
  ];
  const updatedActivities = activities.map(({ type, id, ...rest }) => ({
    ...rest,
  }));

  const updatedProvisions = provisions.map(({ type, id, ...rest }) => ({
    ...rest,
  }));

  const prospects = {
    client: {
      type: clientType,
      email: clientEmail,
      name: clientName,
      phone_number: clientNumber,
    },
    event: {
      name: eventName,
      date: eventDate,
      type: eventType === "Others" ? inputType : eventType,
      description: eventDescription,
      city: eventCity,
      state: eventState,
      location_type: eventLocationType,
      location_address: eventAddress,
    },
    specification: {
      theme,
      activities: updatedActivities,
      provisions: updatedProvisions,
    },
    source: "Online",
  };

  console.log({ prospects });

  return (
    <main className="border border-[#2d2c2c66] rounded-lg my-4 px-4 md:px-[60px] pt-10 pb-5 mx-4">
      <FormStages step={step} steps={steps} />

      <div className="relative">
        {step === 1 && (
          <ClientDetails
            type={clientType}
            name={clientName}
            email={clientEmail}
            number={clientNumber}
            setStep={setStep}
            setType={setClientType}
            setName={setClientName}
            setEmail={setClientEmail}
            setNumber={setClientNumber}
            handleContinue={handleContinue}
          />
        )}
        {step === 2 && (
          <EventDetails
            type={eventType}
            name={eventName}
            address={eventAddress}
            description={eventDescription}
            city={eventCity}
            state={eventState}
            locationType={eventLocationType}
            eventDate={eventDate}
            undecidedName={undecidedName}
            undecidedAddress={undecidedAddress}
            setStep={setStep}
            setEventDate={setEventDate}
            setType={setEventType}
            setName={setEventName}
            setAddress={setEventAddress}
            setDescription={setEventDescription}
            setCity={setEventCity}
            setState={setEventState}
            setLocationType={setEventLocationType}
            setUndecidedName={setUndecidedName}
            setUndecidedAddress={setUndecidedAddress}
            handleBack={handleBack}
            handleContinue={handleContinue}
            inputType={inputType}
            setInputType={setInputType}
            nameChecked={nameChecked}
            setNameChecked={setNameChecked}
            addressChecked={addressChecked}
            setAddressChecked={setAddressChecked}
          />
        )}
        {step === 3 && (
          <Specifications
            setStep={setStep}
            theme={theme}
            setTheme={setTheme}
            activity={activity}
            setActivity={setActivity}
            provision={provision}
            setProvision={setProvision}
            description={description}
            setDescription={setDescription}
            vendorName={vendorName}
            setVendorName={setVendorName}
            start={start}
            setStart={setStart}
            end={end}
            setEnd={setEnd}
            amount={amount}
            setAmount={setAmount}
            allSpecifications={allSpecifications}
            setAllSpecifications={setAllSpecifications}
          />
        )}
        {step === 4 && <Summary setStep={setStep} prospects={prospects} />}
        {step === 5 && <Success />}
      </div>
    </main>
  );
};

export default AddProspect;
