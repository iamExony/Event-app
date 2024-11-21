import React from "react";
import { Back, Continue } from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";
import { useFetchProspect } from "./../../../../hook/query/useFetchProspect";

const Summary = ({ prospects, setStep }) => {
  const navigate = useNavigate();
  const id = location.pathname.split("/")[3].toLowerCase();
  console.log({ id });
  const { data, isLoading } = useFetchProspect(id);

  console.log({ BV: data?.data?.data });
  // const {
  //   clientType,
  //   clientName,
  //   clientEmail,
  //   clientNumber,
  //   eventName,
  //   eventType,
  //   eventDate,
  //   intakeDate,
  //   eventLocation,
  //   eventAddress,
  //   allSpecifications,
  //   theme,
  //   DJ,
  //   note,
  //   band,
  //   centre,
  // } = prospects;

  if (isLoading) {
    return null;
  }

  const { client, event, allSpecifications } = data?.data?.data || {};

  return (
    <div className="flex justify-between gap-10 text-bodyText">
      <div className="flex flex-col border border-borderGrey w-[90%] h-[80vh] overflow-y-scroll m-auto p-8">
        <div className="flex flex-col gap-3">
          <h4 className="text-[2.5rem] font-semibold text-[#2255A0]">
            Prospect Summary
          </h4>
          <p className="text-xl font-normal w-[80%]">
            The event host provided the following information for your
            evaluation.
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-6">
          <div className="flex flex-col gap-6">
            <h4 className="text-2xl font-medium text-black ">Client Details</h4>
            <div className="border-2 border-slate-300 rounded-2xl p-3">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Client Name
                  </p>
                  <p className="text-lg font-normal text-black">
                    {client?.name}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Client Type
                  </p>
                  <p className="text-lg font-normal text-black">
                    {client?.type}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Email Address
                  </p>
                  <p className="text-lg font-normal text-black">
                    {client?.email}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Phone Number
                  </p>
                  <p className="text-lg font-normal text-black">
                    {client?.phone_number}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Address
                  </p>
                  <p className="text-lg font-normal text-black">
                    {event?.location_address}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Intake date
                  </p>
                  <p className="text-lg font-normal text-black">
                    {event?.start_date || "nill"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-2xl font-medium text-black ">Event Details</h4>
            <div className="border-2 border-slate-300 rounded-2xl p-3">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Type of Event
                  </p>
                  <p className="text-lg font-normal text-black">
                    {event?.type}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Event Location
                  </p>
                  <p className="text-lg font-normal text-black">
                    {event?.location_address}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Number of Guest
                  </p>
                  <p className="text-lg font-normal text-black">0</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Date of Event
                  </p>
                  <p className="text-lg font-normal text-black">
                    {event?.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {allSpecifications && allSpecifications?.length > 0 && (
            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black  whitespace-nowrap">
                Event Specifications
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3">
                <div>
                  {allSpecifications.map((specification, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-medium text-slate-500">
                          Key {specification?.type}
                        </p>
                        <p className="text-lg font-normal text-black">
                          {specification?.provision
                            ? specification?.provision
                            : specification?.activity}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-medium text-slate-500">
                          Note
                        </p>
                        <p className="text-lg font-normal text-black">
                          {specification?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="">
        <Continue
          className="w-full"
          handleClick={() => navigate(`/offers/add-offers/${id}`)}
        >
          Make Offer
        </Continue>
        <Back className="w-full mt-12" handleClick={() => navigate(-1)}>
          Back
        </Back>
      </div>
    </div>
  );
};

export default Summary;
