import { useState } from "react";
import Steps from "./components/Steps";
// Pages
import Review from "./pages/Review";
import RequestSent from "./pages/RequestSent";
import EventDetails from "./pages/EventDetails";
import PersonalInfo from "./pages/PersonalInfo";
import Specifications from "./pages/Specifications";
import ViewApplication from "./pages/ViewApplication";

const RequestPersonnel = () => {
  const [step, setStep] = useState(1);
  const steps = [
    "Personal Information",
    "Event details",
    "Specifications",
    "Review",
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [eventType, setEventType] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [guestsNumber, setGuestsNumber] = useState("");
  const [eventDate, setEventDate] = useState("");

  const [eventTheme, setEventTheme] = useState("");
  const [provision, setProvision] = useState("");
  const [description, setDescription] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const request = {
    firstName,
    lastName,
    email,
    phoneNumber,
    eventType,
    eventLocation,
    guestsNumber,
    eventDate,
    eventTheme,
    provision,
    description,
    budgetRange,
    additionalDetails,
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        {step <= 4 && <Steps step={step} steps={steps} />}

        {step === 1 && (
          <PersonalInfo
            email={email}
            lastName={lastName}
            firstName={firstName}
            phoneNumber={phoneNumber}
            setStep={setStep}
            setEmail={setEmail}
            setLastName={setLastName}
            setFirstName={setFirstName}
            setPhoneNumber={setPhoneNumber}
          />
        )}

        {step === 2 && (
          <EventDetails
            eventDate={eventDate}
            eventType={eventType}
            guestsNumber={guestsNumber}
            eventLocation={eventLocation}
            setStep={setStep}
            setEventDate={setEventDate}
            setEventType={setEventType}
            setGuestsNumber={setGuestsNumber}
            setEventLocation={setEventLocation}
          />
        )}

        {step === 3 && (
          <Specifications
            eventTheme={eventTheme}
            provision={provision}
            description={description}
            budgetRange={budgetRange}
            additionalDetails={additionalDetails}
            setStep={setStep}
            setEventTheme={setEventTheme}
            setProvision={setProvision}
            setDescription={setDescription}
            setBudgetRange={setBudgetRange}
            setAdditionalDetails={setAdditionalDetails}
          />
        )}

        {step === 4 && <Review setStep={setStep} request={request} />}
      </div>

      {step === 5 && <RequestSent setStep={setStep} />}

      {step === 6 && <ViewApplication request={request} />}
    </>
  );
};

export default RequestPersonnel;
