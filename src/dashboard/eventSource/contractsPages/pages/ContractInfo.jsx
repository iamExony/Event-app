import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchContract } from "../../../../hook/query/useFetchContract";
import FormStages from "../../../components/FormStages";
import { Back, Continue } from "../../../components/Buttons";

const ContractInfo = () => {
  const navigate = useNavigate();
  const id = location.pathname.split("/")[3].toLowerCase();

  const { data, isLoading } = useFetchContract(id);

  console.log({ data });

  const contractData = data?.data?.data || {};
  const [step, setStep] = useState(3);

  const steps = [
    { label: "Prospect Stage" },
    { label: "Offer Stage" },
    { label: "Contract Stage" },
    { label: "Payment Stage" },
  ];

  const formatDate = (dateString) => {
    if (!dateString) return "nill";

    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="border-2 border-slate-300 rounded-md m-6 p-6">
      <div className="w-[70%] m-auto">
        <FormStages step={step} steps={steps} />
      </div>
      <div className="flex justify-between gap-10 text-bodyText">
        <div className="flex flex-col border border-borderGrey w-[90%] h-[80vh] overflow-y-scroll m-auto p-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-[2.5rem] font-semibold text-[#2255A0]">
              Contract Summary
            </h4>
            <p className="text-xl font-normal w-[80%]">
              The following information guides our business with the client.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black ">
                Client Details
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Client name
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.client?.name}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Client type
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.client?.type}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Email address
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.client?.email}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Phone number
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.client?.phone_number}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Address
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.location_address}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Intake date
                    </p>
                    <p className="text-lg font-normal text-black">
                      {formatDate(contractData?.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black ">
                Event Details
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Type of event
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.event?.type}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Event Location
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.event?.state}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Number of guests
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.event?.number_of_guests}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Date of event
                    </p>
                    <p className="text-lg font-normal text-black">
                      {formatDate(contractData?.event?.start_date)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black ">
                {contractData?.cancellation_policy?.specified_by === "client"
                  ? "Termination Policy - By client"
                  : "Termination Policy - By vendor"}
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Refund Policy
                    </p>
                    <p className="text-lg font-normal text-black capitalize">
                      {contractData?.cancellation_policy?.refund_policy}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Numbers of days notice
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.cancellation_policy?.notice_days}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-slate-500">
                      Percentage of fees
                    </p>
                    <p className="text-lg font-normal text-black">
                      {contractData?.cancellation_policy?.percentage_of_fee}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black ">
                Confidentiality
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3">
                <p className="font-normal text-black">
                  {contractData?.confidentiality}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black ">
                Indemnification
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3">
                <p className="font-normal text-black">
                  {contractData?.indemnification}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black ">
                Photography and publicity laws
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3">
                <p className="font-normal text-black">
                  {contractData?.photography_and_publicity_laws}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-medium text-black ">
                Entire agreement
              </h4>
              <div className="border-2 border-slate-300 rounded-2xl p-3">
                <p className="font-normal text-black">
                  {contractData?.entire_agreement}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Continue
            className="w-full"
            handleClick={() => navigate(`/payments/all-payments`)}
          >
            Create invoice
          </Continue>
          <Back className="w-full mt-12" handleClick={() => navigate(-1)}>
            Back
          </Back>
        </div>
      </div>
    </div>
  );
};

export default ContractInfo;
