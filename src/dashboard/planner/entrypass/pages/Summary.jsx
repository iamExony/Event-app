import React from "react";
import { Continue, Back } from "../../../components/Buttons";

const Summary = ({
  eventName,
  setStep,
  description,
  link,
  location,
  startDate,
  startTime,
  endDate,
  endTime,
  passPrice,
  frequency,
  passName,
  passType,
  stockType,
  recipientEmail,
  senderEmail,
  ticketType,
  attendeeName,
  attendeeContact,
  org,
  passDescription,
  inviteMessage,
  reservationLimit,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 relative w-full ">
      <div
        className="
   border-2 p-4 md:p-8 flex flex-col gap-10 md:w-[70%] md:pl-16"
      >
        <div className="flex flex-col gap-4 ">
          <h1 className="text-3xl font-semibold text-[#2255A0]">
            Entry pass summary
          </h1>
          <p className="text-md text-bodyText">
            The pass for guests to access your event
          </p>
        </div>

        {/* Event details  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[black] text-lg font-medium ">Event details</h3>
          <div className="flex flex-col gap-4 border-2 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> Event name:</p>
              <h6 className="text-black text-xl">{eventName}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> Event description:</p>
              <h6 className="text-black text-xl">{description}</h6>
            </div>{" "}
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> Event link:</p>
              <h6 className="text-black text-xl">{link} </h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">Location type:</p>
              <h6 className="text-black text-xl">{location}</h6>
            </div>
          </div>
        </div>

        {/* event Schedule  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[black] text-lg font-medium ">Event schedule</h3>
          <div className="flex flex-col gap-4 border-2 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> Start date:</p>
              <h6 className="text-black text-xl">{startDate}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> End date:</p>
              <h6 className="text-black text-xl">{endDate}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">Start time:</p>
              <h6 className="text-black text-xl">{startTime}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">End time:</p>
              <h6 className="text-black text-xl">{endTime}</h6>
            </div>
          </div>
        </div>
        {/* pass details  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[black] text-lg font-medium ">Pass details 1</h3>
          <div className="flex flex-col gap-4 border-2 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">Pass type:</p>
              <h6 className="text-black text-xl">{passType}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">Pass name:</p>
              <h6 className="text-black text-xl">{passName}</h6>
            </div>{" "}
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> Stock type:</p>
              <h6 className="text-black text-xl">{stockType}</h6>
            </div>{" "}
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">Pass description:</p>
              <h6 className="text-black text-xl">{passDescription}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">Reservation limit:</p>
              <h6 className="text-black text-xl">{reservationLimit}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">Fee for scope:</p>
              <h6 className="text-black text-xl">&#8358; {passPrice}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText">Invites email</p>
              <div className="flex gap-2 flex-wrap">
                <span className="p-1 flex items-center  gap-2 bg-gray-200 rounded-md cursor-pointer">
                  <h6>{recipientEmail}</h6>
                  <img
                    className=" h-4 w-4"
                    src="/images/dashboard/cancel.svg"
                    alt=""
                  />
                </span>
                <span className="p-1 flex items-center gap-2 bg-gray-200 rounded-md cursor-pointer">
                  <h6>{senderEmail}</h6>
                  <img src="/images/dashboard/cancel.svg" alt="" />
                </span>
                <span className="p-1 flex items-center gap-2 bg-gray-200 rounded-md cursor-pointer">
                  <h6>tobiadetunji5@gmail.com</h6>
                  <img src="/images/dashboard/cancel.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* attendee details  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[black] text-lg font-medium ">
            Attendee details
          </h3>
          <div className="flex flex-col gap-4 border-2 rounded-lg p-4">
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> Attendee name:</p>
              <h6 className="text-black text-xl">{attendeeName}</h6>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> Attendee contact:</p>
              <h6 className="text-black text-xl">{attendeeContact}</h6>
            </div>{" "}
            <div className="flex flex-col gap-1">
              <p className="text-md text-bodyText"> Affiliated organization:</p>
              <h6 className="text-black text-xl">{org}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:w-[20%]">
        <Continue>Send pass</Continue>
        <Back>Print</Back>
        <Back handleClick={() => setStep((step) => step - 4)}>Edit</Back>
      </div>
    </div>
  );
};

export default Summary;
