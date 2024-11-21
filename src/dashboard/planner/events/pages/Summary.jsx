import React, { useState } from "react";
import PropTypes from "prop-types";
import { Back, Continue } from "../../../components/Buttons";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useCreateEvent from "./../../../../hook/mutations/useCreateEvent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MdOutlineCalendarMonth,
  MdOutlineTimer,
  MdOutlineLocationOn,
} from "react-icons/md";
import {
  IoEllipsisVertical,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Summary = ({ event, setStep, eventData }) => {
  const navigate = useNavigate();
  const {
    eventName,
    startDate,
    startTime,
    endTime,
    endDate,
    eventLink,
    eventLocation,
    eventDescription,
    frequency,
    facebook,
    instagram,
    twitter,
    website,
    coverArt,
    allPasses,
    allSpecifications,
  } = event;

  const [page, setPage] = useState(0);
  const { mutate: createEventMutate, isLoading } = useCreateEvent();

  const navigateEntry = () => {
    navigate("/entrypass/add-entrypass");
  };

  const handleCreateEvent = () => {
    console.log({ eventData });

    createEventMutate(eventData, {
      onSuccess: (data) => {
        toast.success("Event created successfully");
        navigate("/events/all-events");
        console.log({ data: data?.data });
      },
    });
  };

  return (
    <div className="text-bodyText">
      <section className="flex justify-center items-center gap-4 p-4 md:p-8 h-full">
        {/* Prev Button */}
        <button
          disabled={page === 0}
          onClick={() => setPage((prevPage) => prevPage - 1)}
          className="bg-White hidden md:grid place-items-center text-xl h-8 w-8 rounded-full shadow-md border disabled:bg-borderGrey disabled:text-White disabled:pointer-events-none"
        >
          <FiChevronLeft />
        </button>

        {/* Content */}
        <div className="md:w-4/5 w-full min-h-[30rem] rounded-lg border overflow-hidden">
          {(page === 0 || page === 1) && (
            <div className="h-full">
              <h2 className="text-xl font-medium p-4">
                {page === 0
                  ? "Summary - Event webpage"
                  : "Summary - Event flyer"}
              </h2>
              <div
                className={`relative h-full text-White p-6 ${
                  eventData?.cover_art_url ? "bg-slate-500" : "bg-none"
                }`}
                style={{
                  backgroundImage: eventData?.cover_art_url
                    ? `url(${eventData?.cover_art_url})`
                    : "none",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backgroundBlendMode: "darken",
                }}
              >
                <div className="flex flex-col gap-8 h-full">
                  <h3 className="text-xl">{eventData?.name}</h3>

                  <div className="grid gap-5">
                    <div className="flex items-center gap-3">
                      <MdOutlineCalendarMonth />
                      <span>{eventData?.start_date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <MdOutlineTimer />
                      <span>
                        {eventData?.start_time} - {eventData?.end_time}
                      </span>
                    </div>

                    {eventData?.location_address && (
                      <div className="flex items-center gap-3">
                        <MdOutlineLocationOn />
                        <span>{eventData?.location_address}</span>
                      </div>
                    )}
                  </div>

                  {page === 0 && (
                    <button
                      onClick={navigateEntry}
                      className="text-Black bg-White py-3 px-12 rounded-lg w-fit"
                    >
                      Get Pass
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-5 mt-12">
                  <h3 className="text-xl">About event</h3>
                  <p>{eventData?.description}</p>

                  <div className="flex gap-6 text-3xl mt-3">
                    {eventData?.facebook_link && <IoLogoFacebook />}
                    {eventData?.instagram_link && <IoLogoInstagram />}
                    {eventData?.x_link && <IoLogoTwitter />}
                    {eventData?.website_link && <TbWorld />}
                  </div>
                </div>
              </div>
            </div>
          )}

          {page === 2 && (
            <div>
              <h2 className="text-xl font-medium p-4">
                Summary - Specifications details
              </h2>

              <div className="mt-8 mb-3 ml-14">
                <span className="text-[#4B4B4B] text-sm font-medium">
                  {eventData?.specification?.activities?.length +
                    eventData?.specification?.provisions?.length}{" "}
                  {}
                  Specification
                </span>
              </div>

              <div className="grid grid-cols-6 font-medium text-left px-10">
                <span>S/N</span>
                <span className="col-span-2">Specification type</span>
                <span className="col-span-2">Specification main title</span>
                <span className="">Amount</span>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {eventData?.specification?.activities?.map(
                  (specification, index) => (
                    <div
                      key={index}
                      className="bg-White grid grid-cols-6 text-left border-y border-borderGrey p-4"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="cursor-pointer appearance-none outline-none accent-primaryCol h-3 w-3 border border-primaryColC rounded-sm mr-2"
                        />
                        <span className="text-primaryCol text-sm">
                          #{index + 1}
                        </span>
                      </div>

                      <p className="col-span-2 text-sm pl-5">Activity</p>

                      <span className="col-span-2 text-sm">
                        {specification.title}
                      </span>

                      <div className="flex items-center justify-between">
                        <span className="text-right text-primaryCol text-sm">
                          {specification.amount}
                        </span>

                        <IoEllipsisVertical />
                      </div>
                    </div>
                  )
                )}

                {eventData?.specification?.provisions?.map(
                  (specification, index) => (
                    <div
                      key={index}
                      className="bg-White grid grid-cols-6 text-left border-y border-borderGrey p-4"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="cursor-pointer appearance-none outline-none accent-primaryCol h-3 w-3 border border-primaryColC rounded-sm mr-2"
                        />
                        <span className="text-primaryCol text-sm">
                          #{index + 1}
                        </span>
                      </div>

                      <p className="col-span-2 text-sm pl-5">Provision</p>

                      <span className="col-span-2 text-sm">
                        {specification.provision}
                      </span>

                      <div className="flex items-center justify-between">
                        <span className="text-right text-primaryCol text-sm">
                          {specification.amount}
                        </span>

                        <IoEllipsisVertical />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {page === 3 && (
            <div>
              <h2 className="text-xl font-medium p-4">Summary - Entry Pass</h2>

              <div className="mt-8 mb-3 ml-[140px]">
                <span className="text-[#4B4B4B] text-sm font-medium">
                  {eventData?.entry_passes?.length} {}
                  Pass
                </span>
              </div>

              <div className="grid grid-cols-6 font-medium text-left px-10">
                <span>S/N</span>
                <span className="col-span-2">Pass name</span>
                <span className="col-span-2">Stock type</span>
                <span className="">Pass type</span>
              </div>

              <div className="flex flex-col gap-6 mt-6">
                {eventData?.entry_passes?.map((pass, index) => (
                  <div
                    key={index}
                    className="bg-White grid grid-cols-6 text-left border-y border-borderGrey p-4"
                  >
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        className="cursor-pointer appearance-none outline-none accent-primaryCol h-3 w-3 border border-primaryColC rounded-sm mr-2"
                      />
                      <span className="text-primaryCol test-sm">#{index + 1}</span>
                    </div>

                    <p className="col-span-2 test-sm pl-5">{pass.name}</p>

                    <span className="col-span-2 capitalize test-sm">
                      {pass.stock_type}
                    </span>

                    <div className="flex items-center justify-between">
                      <span className="text-right text-primaryCol test-sm">
                        {pass.type}
                      </span>

                      <IoEllipsisVertical />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          disabled={page === 3}
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className="bg-White hidden md:grid place-items-center text-xl h-8 w-8 rounded-full shadow-md border disabled:bg-borderGrey disabled:text-White disabled:pointer-events-none"
        >
          <FiChevronRight />
        </button>
      </section>

      <div className="flex justify-end mt-20 gap-2">
        <Back handleClick={() => setStep((prevStep) => prevStep - 1)}>
          Back
        </Back>
        <Continue handleClick={handleCreateEvent}>
          {isLoading ? <CircularProgress /> : "Create"}
        </Continue>
      </div>
    </div>
  );
};

Summary.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    eventLocation: PropTypes.string,
    eventDescription: PropTypes.string.isRequired,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string,
    coverArt: PropTypes.string,
    allPasses: PropTypes.arrayOf(
      PropTypes.shape({
        passName: PropTypes.string.isRequired,
        stockType: PropTypes.string.isRequired,
        ticketType: PropTypes.string.isRequired,
      })
    ).isRequired,
    allSpecifications: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        provision: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  setStep: PropTypes.func.isRequired,
};

export default Summary;
