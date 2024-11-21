import React, { Fragment, useState } from "react";
import { NextButton, PrevButton } from "../components/Button";
// import { TbCurrencyNaira } from "react-icons/tb";
import useCreateOffer from "./../../../../hook/mutations/useCreateOffer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Summary = ({
  setComplete,
  setCurrentStep,
  setShowSummary,
  setIsOpen,
  offer,
  offerData,
  allSpecifications,
}) => {
  const { mutate: mutateCreationOfOffer, isPending } = useCreateOffer();

  const { specification, client } = offerData;

  const { type, email, name, phone_number, address } = client;

  // const offerTheme = offer.theme.join("; ");
  // const provisionSpecifications = offer.specifications.filter(
  //   (specification) => specification.specificationType === "provision"
  // );
  // const activitySpecifications = offer.specifications.filter(
  //   (specification) => specification.specificationType === "activity"
  // );

  // console.log({ provisionSpecifications, activitySpecifications });

  const handleCreateOffer = (e) => {
    // e.preventDefault();
    console.log({ offerData });
    // return
    mutateCreationOfOffer(offerData, {
      onSuccess: (data) => {
        console.log({ data: data?.data });
        toast.success("Offer created successfully");
        setComplete(true);
      },
    });
  };

  return (
    <>
      <div className="flex flex-col border border-borderGrey md:w-[70%] h-[80vh] overflow-y-scroll m-auto p-8 mt-10">
        <div className="flex flex-col gap-3">
          <h4 className="text-[24px] md:text-[2.5rem] font-semibold text-[#2255A0]">
            Offer Summary
          </h4>
          <p className="md:text-xl font-normal md:w-[80%]">
            The following information guide our business with the client
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
                  <p className="text-lg font-normal text-black">{name}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Client Type
                  </p>
                  <p className="text-lg font-normal text-black">{type}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Email Address
                  </p>
                  <p className="text-lg font-normal text-black">{email}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Phone Number
                  </p>
                  <p className="text-lg font-normal text-black">
                    {phone_number}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Address
                  </p>
                  <p className="text-lg font-normal text-black">
                    {address}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Intake date
                  </p>
                  <p className="text-lg font-normal text-black">date</p>
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
                  <p className="text-lg font-normal text-black"></p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Event Location
                  </p>
                  <p className="text-lg font-normal text-black"></p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Number of Guest
                  </p>
                  <p className="text-lg font-normal text-black">500</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Date of Event
                  </p>
                  <p className="text-lg font-normal text-black"></p>
                </div>
              </div>
            </div>
          </div>
          {allSpecifications.length > 0 && (
            <div className="flex flex-col gap-4">
              {allSpecifications.map((specification, index) => (
                <div className="flex flex-col gap-6" key={index}>
                  <h4 className="text-2xl font-medium text-black ">
                    Specifications Structure -{index + 1}
                  </h4>
                  <div className="border-2 border-slate-300 rounded-2xl p-3">
                    <div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <p className="text-base font-medium text-slate-500">
                            Specification provision/title
                          </p>
                          <p className="text-lg font-normal text-black">
                            {specification.provision
                              ? specification?.provision
                              : specification?.title}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-base font-medium text-slate-500">
                            Specification description
                          </p>
                          <p className="text-lg font-normal text-black">
                            {specification?.description}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-base font-medium text-slate-500">
                            Start Date
                          </p>
                          <p className="text-lg font-normal text-black">
                            {specification?.start_date}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-base font-medium text-slate-500">
                            End Date
                          </p>
                          <p className="text-lg font-normal text-black">
                            {specification?.end_date}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-base font-medium text-slate-500">
                            Amount
                          </p>
                          <p className="text-lg font-normal text-black">
                            {specification?.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-8 absolute top-[218px] right-12 w-[150px]">
        <NextButton onClick={() => setIsOpen(true)} className={"w-[150px]"}>
          Send offer
        </NextButton>
        <NextButton onClick={handleCreateOffer} className={"w-[150px]"}>
          {isPending ? "Loading..." : "Create offer"}
        </NextButton>
        <PrevButton
          onClick={() => {
            setCurrentStep((prev) => prev - 2);
            setComplete(false);
            setShowSummary(false);
            setIsOpen(false);
          }}
          className={"w-[150px]"}
        >
          Edit
        </PrevButton>
      </div>
    </>
  );
};

export default Summary;
