import { useState } from "react";
import SelectTag from "../../../components/SelectTag";
import { Continue } from "../../../components/Buttons";

function CancellationPolicy({
  handleContinue,
  refundPolicy,
  setRefundPolicy,
  numberOfDays,
  setNumberOfDays,
  percentageNonRefundable,
  setPercentageNonRefundable,
  specifiedBy,
  setSpecifiedBy,
}) {
  const [active, setActive] = useState(0);

  const buttonContents = ["By Client", "By Vendor"];
  const refundPolicies = ["Refundable", "Non Refundable"];

  const handleSpecifiedBy = (content) => {
    const modifiedContent = content.replace("By ", "").toLowerCase();
    setSpecifiedBy(modifiedContent);
  };

  return (
    <div className="border border-[#2d2c2c66] rounded-lg md:w-[80%] mx-4 md:mx-auto">
      <h3 className="font-semibold px-10 py-6 border-b border-[#2d2c2c66] text-xl">
        Cancellation Policy
      </h3>
      {/* <div className="border-b border-[#2d2c2c66] pt-8">
            <button className="px-10 text-primaryCol border-b border-primaryCol relative mr-20 font-semibold">
              By Client
            </button>
            <button className="px-10 hover:text-primaryCol hover:border-b hover:border-primaryCol relative  font-semibold">
              By Exhibitor
            </button>
          </div> */}
      <div className="border-b flex gap-[30%] pt-8">
        {buttonContents.map((content, index) => (
          <button
            key={index}
            onClick={() => {
              setActive(index);
              handleSpecifiedBy(content);
            }}
            className={`font-medium w-1/4 ${
              active === index && "text-primaryCol border-b-2 border-primaryCol"
            }`}
          >
            {content}
          </button>
        ))}
      </div>

      <form
        className="px-4 md:px-10 flex flex-col gap-8 pt-8 pb-10"
        onSubmit={handleContinue}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="refund-policy" className="font-medium">
            Refund policy
          </label>

          <SelectTag
            value={refundPolicy}
            className="w-full"
            options={refundPolicies}
            handleSelect={setRefundPolicy}
            defaultValue={"Select Refund Policy"}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="days of notice" className="font-medium">
            Number of days notice
          </label>
          <input
            type="text"
            name="days of notice"
            value={numberOfDays}
            onChange={(e) => setNumberOfDays(Number(e.target.value))}
            className="border px-3 py-4 border-slate-300 rounded-md focus:outline-none text-black"
            placeholder="Enter number of days"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="percentage" className="font-medium">
            Percentage of fees (if allowed)
          </label>
          <input
            type="text"
            name="percentage"
            value={percentageNonRefundable}
            onChange={(e) => setPercentageNonRefundable(Number(e.target.value))}
            className="border px-3 py-4 border-slate-300 rounded-md focus:outline-none text-black"
            placeholder="Enter percentage of non-returnable fees"
          />
        </div>

        {/* <button className="bg-primaryCol text-white px-7 py-2 w-min ml-auto rounded-md">
          Continue
        </button> */}
        <div className="flex justify-end">
          <Continue handleClick={handleContinue}>Continue</Continue>
        </div>
      </form>
    </div>
  );
}

export default CancellationPolicy;
