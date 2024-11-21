import React, { useEffect, useState } from "react";
import Summary from "./Summary";
import EntryPass from "./EntryPass";
import EventDetails from "./EventDetails";
import EventSchedule from "./EventSchedule";
import SocialDetails from "./SocialDetails";
import SpecificationsDetails from "./SpecificationsDetails";
import FormStages from "../../../components/FormStages";

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const steps = [
    { id: 1, label: "Event details" },
    { id: 2, label: "Event schedule" },
    { id: 3, label: "Social details" },
    { id: 4, label: "Specifications details" },
    { id: 5, label: "Entry pass" },
    { id: 6, label: "Summary" },
  ];

  // For event details
  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventState, setEventState] = useState("");
  const [virtualLink, setVirtualLink] = useState("");
  const [locationAddress, setLocationAddress] = useState("");

  // For event Schedule
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [frequency, setFrequency] = useState("one_time");

  // For socials
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [coverArt, setCoverArt] = useState("");
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");

  // For specifications
  const [provision, setProvision] = useState("");
  const [description, setDescription] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();

  // For entry pass
  const [passName, setPassName] = useState("");
  const [stockType, setStockType] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [reservationLimit, setReservationLimit] = useState("");
  const [passDescription, setPassDescription] = useState("");
  const [passPrice, setPassPrice] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [recipientEmail, setRecipientEmail] = useState([]);
  const [inviteSubject, setInviteSubject] = useState("");
  const [inviteMessage, setInviteMessage] = useState("");
  const [eventTheme, setEventTheme] = useState("");

  const [allSpecifications, setAllSpecifications] = useState([]);
  const [allPasses, setAllPasses] = useState([]);
  const [event, setEvent] = useState({});
  const [activity, setActivity] = useState("");

  console.log({ event });

  let activities = allSpecifications.filter((spec) => spec.type === "Activity");
  let provisions = allSpecifications.filter(
    (spec) => spec.type === "Provision"
  );

  const updatedActivities = activities.map(({ type, id, ...rest }) => ({
    ...rest,
  }));

  const updatedProvisions = provisions.map(({ type, id, ...rest }) => ({
    ...rest,
  }));


  const eventData = {
    name: eventName,
    link: eventLink,
    description: eventDescription,
    city: eventCity,
    state: eventState,
    location_type: eventLocation,
    virtual_meeting_link: virtualLink,
    location_address: locationAddress,
    schedule_type: frequency,
    start_date: startDate,
    end_date: endDate,
    start_time: startTime,
    end_time: endTime,
    facebook_link: facebook,
    instagram_link: instagram,
    x_link: twitter,
    website_link: website,
    cover_art_url: coverArt,
    specification: {
      theme: eventTheme,
      activities: updatedActivities,
      provisions: updatedProvisions,
    },
    entry_passes: allPasses,
  };

  console.log({ eventData });

  return (
    <main className="border border-[#2d2c2c66] rounded-lg my-4 px-4 mx-4 md:mx-0 md:px-16 pt-10 pb-5">
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
            city={eventCity}
            setCity={setEventCity}
            state={eventState}
            setState={setEventState}
            locationAddress={locationAddress}
            setLocationAddress={setLocationAddress}
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
          <SocialDetails
            font={font}
            color={color}
            twitter={twitter}
            website={website}
            coverArt={coverArt}
            facebook={facebook}
            instagram={instagram}
            setStep={setStep}
            setFont={setFont}
            setColor={setColor}
            setTwitter={setTwitter}
            setWebsite={setWebsite}
            setCoverArt={setCoverArt}
            setFacebook={setFacebook}
            setInstagram={setInstagram}
            virtualLink={virtualLink}
            setVirtualLink={setVirtualLink}
          />
        )}
        {step === 4 && (
          <SpecificationsDetails
            end={end}
            start={start}
            title={title}
            setStep={setStep}
            provision={provision}
            vendorName={vendorName}
            description={description}
            allSpecifications={allSpecifications}
            setEnd={setEnd}
            setStart={setStart}
            setTitle={setTitle}
            setProvision={setProvision}
            setVendorName={setVendorName}
            setDescription={setDescription}
            setAllSpecifications={setAllSpecifications}
            amount={amount}
            setAmount={setAmount}
            theme={eventTheme}
            setTheme={setEventTheme}
          />
        )}

        {step === 5 && (
          <EntryPass
            passName={passName}
            allPasses={allPasses}
            stockType={stockType}
            ticketType={ticketType}
            passDescription={passDescription}
            inviteMessage={inviteMessage}
            setStep={setStep}
            setPassName={setPassName}
            setAllPasses={setAllPasses}
            setStockType={setStockType}
            setTicketType={setTicketType}
            setReservationLimit={setReservationLimit}
            setPassDescription={setPassDescription}
            setPassPrice={setPassPrice}
            senderName={senderName}
            setSenderName={setSenderName}
            senderEmail={senderEmail}
            setSenderEmail={setSenderEmail}
            recipientEmail={recipientEmail}
            setRecipientEmail={setRecipientEmail}
            inviteSubject={inviteSubject}
            setInviteSubject={setInviteSubject}
            setInviteMessage={setInviteMessage}
          />
        )}

        {step === 6 && (
          <Summary event={event} setStep={setStep} eventData={eventData} />
        )}
      </div>
    </main>
  );
};

export default CreateEvent;


