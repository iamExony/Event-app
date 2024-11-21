import React, { useState } from "react";
import FormStages from "../../../components/FormStages";
import EventDetails from "../../events/pages/EventDetails";
import EventSchedule from "../../events/pages/EventSchedule";
import EntryPass from "./EntryPass";
import AttendeeDetails from "./AttendeeDetails";
import Summary from "./Summary";

const AddEntry = () => {
  const [step, setStep] = useState(1);
  const steps = [
    "Event Details",
    "Event Schedule",
    "Pass Details",
    "Attendee Details",
    "Summary",
  ];
  // For event details
  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  // For event Schedule
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [frequency, setFrequency] = useState("");

  // For socials
  const [color, setColor] = useState("");

  //  pass DETAILS
  const [passName, setPassName] = useState("");
  const [passType, setPassType] = useState("Free");
  const [stockType, setStockType] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [reservationLimit, setReservationLimit] = useState("");
  const [passDescription, setPassDescription] = useState("");
  const [passPrice, setPassPrice] = useState("nil");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [inviteSubject, setInviteSubject] = useState("");
  const [inviteMessage, setInviteMessage] = useState("");

  const [allPasses, setAllPasses] = useState([]);

  // For Attendee details
  const [attendeeName, setAttendeeName] = useState("");
  const [contact, setContact] = useState("");
  const [org, setOrg] = useState("");
  const [orgContact, setOrgContact] = useState("");
  const [orgName, setOrgName] = useState("");
  const [repName, setRepName] = useState("");

  return (
    <main className="border border-[#2d2c2c66] rounded-lg my-4 px-4 md:px-16 pt-10 pb-5">
      <FormStages steps={steps} step={step} />

      <div className="relative">
        {step === 1 && (
          <EventDetails
            name={eventName}
            link={eventLink}
            location={eventLocation}
            description={eventDescription}
            setStep={setStep}
            setName={setEventName}
            setLink={setEventLink}
            setLocation={setEventLocation}
            setDescription={setEventDescription}
          />
        )}
        {step === 2 && (
          <EventSchedule
            endDate={endDate}
            endTime={endTime}
            startDate={startDate}
            startTime={startTime}
            frequency={frequency}
            setStep={setStep}
            setColor={setColor}
            setEndDate={setEndDate}
            setEndTime={setEndTime}
            setStartDate={setStartDate}
            setStartTime={setStartTime}
            setFrequency={setFrequency}
          />
        )}
        {step === 3 && (
          <EntryPass
            passType={passType}
            passName={passName}
            allPasses={allPasses}
            stockType={stockType}
            ticketType={ticketType}
            passDescription={passDescription}
            inviteMessage={inviteMessage}
            reservationLimit={reservationLimit}
            setStep={setStep}
            setPassType={setPassType}
            setPassName={setPassName}
            setAllPasses={setAllPasses}
            setStockType={setStockType}
            setTicketType={setTicketType}
            setReservationLimit={setReservationLimit}
            setPassDescription={setPassDescription}
            setPassPrice={setPassPrice}
            setSenderName={setSenderName}
            setSenderEmail={setSenderEmail}
            setRecipientEmail={setRecipientEmail}
            setInviteSubject={setInviteSubject}
            setInviteMessage={setInviteMessage}
          />
        )}
        {step === 4 && (
          <AttendeeDetails
            name={attendeeName}
            setName={setAttendeeName}
            contact={contact}
            setContact={setContact}
            org={org}
            setOrg={setOrg}
            setStep={setStep}
            orgContact={orgContact}
            setOrgContact={setOrgContact}
            orgName={orgName}
            setOrgName={setOrgName}
            repName={repName}
            setRepName={setRepName}
          />
        )}
        {step === 5 && (
          <Summary
            setStep={setStep}
            eventName={eventName}
            description={eventDescription}
            link={eventLink}
            location={eventLocation}
            startDate={startDate}
            startTime={startTime}
            endDate={endDate}
            endTime={endTime}
            frequency={frequency}
            passName={passName}
            passType={passType}
            stockType={stockType}
            ticketType={ticketType}
            passDescription={passDescription}
            inviteMessage={inviteMessage}
            reservationLimit={reservationLimit}
            senderEmail={recipientEmail}
            recipientEmail={recipientEmail}
            passPrice={passPrice}
            attendeeName={attendeeName}
            attendeeContact={contact}
            org={org}
          />
        )}
      </div>
    </main>
  );
};

export default AddEntry;
