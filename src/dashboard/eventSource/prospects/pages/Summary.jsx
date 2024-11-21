import React from "react";
import { Back, Continue } from "../../../components/Buttons";
import { createProspect } from "../utils/prospectApi";
import PropTypes from "prop-types";
import useCreateProspect from "../../../../hook/mutations/useCreateProspect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Summary = ({ prospects, setStep }) => {
  const { mutate: createProspectMutate, isPending } = useCreateProspect();
  const navigate = useNavigate();

  const { client, event, specification } = prospects;
  const {
    type: clientType,
    email: clientEmail,
    name: clientName,
    phone_number,
  } = client;

  const {
    name: eventName,
    date: eventDate,
    type: eventType,
    location_type,
    location_address,
  } = event;

  const { theme, activities, provisions } = specification;

  console.log({ prospects });

  async function handleSubmit(e) {
    e.preventDefault();
    // TODO: send data to server and redirect user or show a success message
    createProspectMutate(prospects, {
      onSuccess: (data) => {
        console.log({ BASE: data, message: data?.data?.message });
        toast.success("Prospect successfully created");
        setStep(4);
        navigate(`/prospects/prospect-info/${data?.data?.data?.id}`);
        // prospects/prospect-info/033ed01d-6105-4027-bc22-009f24761e3c
      },
      onError: (error) => {
        toast.error("Error creating the Prospect", error);
      },
    });
  }

  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 text-bodyText">
      <div className="flex flex-col border border-borderGrey md:w-[90%] h-[80vh] overflow-y-scroll m-auto p-4 md:p-8">
        <div className="flex flex-col gap-3">
          <h4 className="text-[24px] md:text-[2.5rem] font-semibold text-[#2255A0]">
            Prospect Summary
          </h4>
          <p className="md:text-xl font-normal md:w-[80%]">
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
                  <p className="text-lg font-normal text-black">{clientName}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Client Type
                  </p>
                  <p className="text-lg font-normal text-black">{clientType}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Email Address
                  </p>
                  <p className="text-lg font-normal text-black">
                    {clientEmail}
                  </p>
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
                  <p className="text-lg font-normal text-black"></p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Intake date
                  </p>
                  <p className="text-lg font-normal text-black"></p>
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
                  <p className="text-lg font-normal text-black">{eventType}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Event Location
                  </p>
                  <p className="text-lg font-normal text-black">
                    {location_address}
                  </p>
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
                  <p className="text-lg font-normal text-black">{eventDate}</p>
                </div>
              </div>
            </div>
          </div>
          {(activities.length > 0 || provisions.length > 0) && (
            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black ">
                Event Specifications
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3 flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  {activities.map((specification, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-medium text-slate-500">
                          Key {specification.type}
                        </p>
                        <p className="text-lg font-normal text-black">
                          {specification.title}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-medium text-slate-500">
                          Note
                        </p>
                        <p className="text-lg font-normal text-black">
                          {specification.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {provisions.map((specification, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-medium text-slate-500">
                          Key {specification.type}
                        </p>
                        <p className="text-lg font-normal text-black">
                          {specification.title}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-medium text-slate-500">
                          Note
                        </p>
                        <p className="text-lg font-normal text-black">
                          {specification.description}
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
        <Continue className="w-full" handleClick={handleSubmit}>
          {isPending ? "Loading..." : "Submit"}
        </Continue>
        <Back
          className="w-full mt-12"
          handleClick={() => {
            setStep((step) => step - 1);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          Back
        </Back>
      </div>
    </div>
  );
};

Summary.propTypes = {
  prospects: PropTypes.shape({
    client: PropTypes.shape({
      type: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
    }).isRequired,
    event: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      location_type: PropTypes.string.isRequired,
      location_address: PropTypes.string.isRequired,
    }).isRequired,
    specification: PropTypes.shape({
      theme: PropTypes.string,
      activities: PropTypes.arrayOf(
        PropTypes.shape({
          // type: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
      provisions: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  setStep: PropTypes.func.isRequired,
};

export default Summary;
