import React from "react";
import { Back, Continue } from "../../../components/Buttons";
import useCreateContract from "./../../../../hook/mutations/useCreateContract";
import { toast } from "react-toastify";

const Summary = ({
  handleContinue,
  handleBack,
  paymentSchedules,
  setPopupIsOpen,
  contractData,
  setStep,
}) => {
  const { event, client, cancellation_policy, payment_structure } =
    contractData;

  console.log({ event, client, cancellation_policy, payment_structure });

  const { mutate, isPending } = useCreateContract();

  const handleCreateContract = () => {
    mutate(contractData, {
      onSuccess: (data) => {
        console.log({ data: data?.data });
        toast.success("Contract created successfully");
        setStep(4);
      },
      // onError: (error) => {
      //   console.error("Error creating contract:", error);
      //   toast.error("Failed to create contract");
      // },
    });
  };

  return (
    <main className="flex flex-col md:flex-row justify-between gap-10 text-bodyText px-6">
      <div className="flex flex-col border border-borderGrey md:w-[90%] h-[80vh] overflow-y-scroll m-auto p-4 md:p-8">
        <div className="flex flex-col gap-3">
          <h4 className="text-[24px] md:text-[2.5rem] font-semibold text-[#2255A0]">
            Contract Summary
          </h4>
          <p className="md:text-xl font-normal md:w-[80%]">
            The following information guides our business with the client.
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
                    {event?.city}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-slate-500">
                    Intake date
                  </p>
                  <p className="text-lg font-normal text-black">
                    {event?.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:w-[300px]">
        <Continue className="" handleClick={() => setPopupIsOpen(true)}>
          Send Contract
        </Continue>
        <Continue className="" handleClick={handleCreateContract}>
          {isPending ? "Loading..." : "Create contract"}
        </Continue>
        <Back className="" handleClick={handleBack}>
          Edit
        </Back>
      </div>
    </main>
  );
};

export default Summary;
