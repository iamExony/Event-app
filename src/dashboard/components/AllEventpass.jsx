import React, { useState } from "react";
import { FiSearch, FiX, FiExternalLink } from "react-icons/fi";
import { useFetchAllEvent } from "./../../hook/query/useFetchAllEvent";
import {
  MdOutlineBarChart,
  MdOutlineTimer,
  MdOutlineDelete,
  MdOutlineEditNote,
} from "react-icons/md";
import { Link } from "react-router-dom";
// import Moment from "react-moment";
import formatDateToOrdinal from "./../../utils/functions/formatDateToOrdinal";

import SelectTag from "./SelectTag";
import WaveLoader from "../../components/WaveLoader";
// import { allEvents } from "../../utils/Test";

const AllEventpass = ({ allEvents, type }) => {
  const [active, setActive] = useState("");
  const [datePublished, setDatePublished] = useState("");
  // const date = ;
  // console.log(date);
  const { data: allEventData, isLoading: allEventIsLoading } =
    useFetchAllEvent();
  const events = allEventData?.data?.data || [];

  console.log({ events });

  if (allEventIsLoading) return <WaveLoader />;

  return (
    <div className="flex-group gap-6 w-full p-6">
      <Link to={`/${type}/add-${type}`} className="self-end">
        <button className="bg-primaryColC text-White py-2 px-4 rounded-full">
          Create new event
        </button>
      </Link>

      {/* Headers */}
      <div className="flex flex-col md:flex-row gap-10 md:h-[30vh]">
        <div className="relative flex gap-6 items-center p-4 text-White bg-primaryColC bg-opacity-90 rounded-2xl">
          <FiX className="absolute top-4 right-4 p-1 bg-White bg-opacity-50 h-8 w-8 rounded-full cursor-pointer" />

          <img src="/images/dashboard/manage-events.png" alt="Manage event" />

          <div>
            <h3 className="font-medium text-2xl">Manage e-vents</h3>
            <p className="text-sm">
              Welcome to Events. Do well to enjoy all our awesome features to
              bring the vibes!!
            </p>
          </div>
        </div>

        <div className="relative flex gap-6 items-center p-4 text-White bg-[#0065A5] bg-opacity-90 rounded-2xl">
          <FiX className="absolute top-4 right-4 p-1 bg-White bg-opacity-50 h-8 w-8 rounded-full cursor-pointer" />

          <img
            src="/images/dashboard/real-time.png"
            alt="Real time analytics"
          />

          <div>
            <h3 className="font-medium text-2xl">Real time analytics</h3>
            <p className="text-sm">
              Streamline event processes with E-vent's powerful cards and
              elevate your business
            </p>
          </div>
        </div>
      </div>

      {/* Filter and search */}
      <div className="flex w-full flex-col md:flex-row gap-4 justify-between my-8">
        <div className="flex flex-col md:block w-full gap-4">
          <SelectTag
            value={active}
            options={["Active", "Non-active"]}
            className="opacity-70"
            handleSelect={setActive}
            defaultValue="Active"
          />

          <SelectTag
            value={datePublished}
            options={["Today", "..."]}
            className="ml-3 opacity-70"
            handleSelect={setDatePublished}
            defaultValue="By date published"
          />
        </div>

        <div className="relative">
          <FiSearch className="absolute top-1/4 left-2 opacity-50" />
          <input
            type="text"
            placeholder="Search event"
            className="outline-none border pr-4 pl-7 py-2 rounded-md"
          />
        </div>
      </div>

      {/* {List of events } */}
      {
        <div className="grid grid-cols-1 gap-3">
          {events?.map((eachEvent, index) => {
            const {
              cover_art_url,
              date,
              name,
              provision,
              frequency,
              specification,
              passes,
              payments,
              // date,
            } = eachEvent;

            console.log({ coverArt: cover_art_url });
            return (
              <div
                key={index}
                className="flex items-center justify-between flex-col md:flex-row border-b border-bodyText border-opacity-50 pb-4 w-full"
              >
                <div className="flex flex-col md:flex-row md:items-start items-center gap-6 w-full">
                  <img
                    className="w-full md:w-32 h-32 object-center object-cover"
                    src={
                      cover_art_url ||
                      "http://res.cloudinary.com/dyichwphp/image/upload/v1724351303/event-testing/cfv174e8czmpqzqvc1zf.webp"
                    }
                    alt={name}
                  />
                  <div className=" w-full">
                    <p className="text-center md:text-start">
                      Event date: {formatDateToOrdinal(date)}
                    </p>
                    <h3 className="font-medium text-xl mt-2 text-center md:text-start">
                      {name}
                    </h3>
                    <div className="flex gap-3 my-2 w-full items-center justify-center md:items-start md:justify-start">
                      <img src="/images/dashboard/Star.svg" alt="" />
                      {/* Render specification if it's a string or a number */}
                      <p className="font-medium">
                        {typeof specification === "string" ||
                        typeof specification === "number"
                          ? specification
                          : "0"}
                      </p>
                      <img src="/images/dashboard/dot.svg" alt="" />
                      {/* Render provision if it's a string or a number */}
                      <p>
                        {typeof provision === "string" ||
                        typeof provision === "number"
                          ? provision
                          : "0"}
                      </p>
                      <img src="/images/dashboard/dot.svg" alt="" />
                      <p>{"monthly"}</p>
                    </div>

                    <div className="flex gap-3 w-full items-center justify-center md:items-start md:justify-start">
                      <span className="bg-bodyText text-White py-1 px-4 rounded-full">
                        {passes || 0}
                      </span>
                      <span className="flex items-center">
                        <MdOutlineBarChart />
                        {payments || 0}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdOutlineTimer /> {formatDateToOrdinal(date)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 opacity-70 mt-4 md:mt-0">
                  <div className="cursor-pointer flex-group items-center">
                    <MdOutlineEditNote className="text-2xl" />
                    <span>Edit</span>
                  </div>

                  <div className="cursor-pointer flex-group items-center">
                    <FiExternalLink className="text-2xl" />
                    <span>View</span>
                  </div>

                  <div className="cursor-pointer flex-group items-center">
                    <MdOutlineDelete className="text-2xl" />
                    <span>Delete</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default AllEventpass;
