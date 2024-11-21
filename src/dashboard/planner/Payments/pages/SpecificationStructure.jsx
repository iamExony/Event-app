import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { NextButton } from "../components/Button";
import OptionButton from "../components/OptionButton";
import MultiSelect from "../../../../components/MultiSelect";

function SpecificationStructure({
  setComplete,
  setCurrentStep,
  currentStep,
  steps,
  theme,
  setTheme,
  specifications,
  setSpecifications,
}) {
  const [provision, setProvision] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [amount, setAmount] = useState("");
  const [specificationType, setSpecificationType] = useState("provision");

  //Adding new specification to local storage when specifications change
  useEffect(
    function () {
      localStorage.setItem(
        "PaymentSpecifications",
        JSON.stringify(specifications)
      );
    },
    [specifications]
  );

  //handle Remove
  function handleClear() {
    setProvision("");
    setActivity("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setAmount("");
  }

  //Handle continue
  function handleContinue() {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  }

  //Generating ID for each Specification
  function generateUniqueID() {
    return Math.floor(Math.random() * Date.now());
  }

  const specification = {
    specificationType,
    provision,
    activity,
    description,
    startDate,
    endDate,
    amount,
    id: generateUniqueID(),
  };

  //Adding new specification to the specifications array
  function handleSpecificationList(e) {
    e.preventDefault();
    setSpecifications((detail) => [...detail, specification]);

    handleClear();
  }
  const themeList = [
    "African culture",
    "Halloween",
    "Islamic",
    "Christian",
    "Contemporary",
    "Entertainment",
    "Educational",
    "Teenagers",
    "Young adults",
    "Outdoor",
    "Indoor",
    "Remembrance",
    "Civil society and empowerment",
    "Political groups",
    "Women empowerment",
    "Excellence and success",
    "Business and leadership",
  ];

  return (
    <div className="flex  flex-col rounded-md border-2 border-borderColor w-full md:w-[70%] m-auto mt-16 py-6">
      <h4 className="px-6 pb-6 font-bold">Specification Structure</h4>
      <hr />

      <form
        action=""
        className="pt-6 px-6 flex flex-col"
        onSubmit={handleSpecificationList}
      >
        <h5 className="font-semibold">Theme</h5>

        <MultiSelect
          theme={theme}
          setTheme={setTheme}
          themeList={themeList}
          title={"Select theme"}
        />

        <h5 className=" my-6">Add a specificationType</h5>
        <div
          className="flex justify-start items-center border-b-2 font-semibold relative  -left-6 w-[107%] px-6
        "
        >
          <div className="w-[50%] ">
            <h5
              onClick={() => {
                setSpecificationType("provision");
                setActivity("");

                setDescription("");
              }}
              className={`relative -bottom-[2px] border-b-2 pb-2 cursor-pointer w-28 text-center -left-6 ${
                specificationType === "provision" && "border-primaryColC"
              }`}
            >
              Provision
            </h5>
          </div>
          <div className=" w-[50%]">
            <h5
              onClick={() => {
                setSpecificationType("activity");
                setProvision("");

                setDescription("");
              }}
              className={`relative -bottom-[2px] border-b-2 pb-2 cursor-pointer w-28 text-center -left-6 ${
                specificationType === "activity" && "border-primaryColC"
              }`}
            >
              Activity
            </h5>
          </div>
        </div>

        {specificationType === "provision" ? (
          <select
            name="Select a provision"
            id="provision"
            required
            value={provision}
            onChange={(e) => {
              setProvision(e.target.value);
            }}
            className="w-full p-2 my-3 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none"
          >
            <option value="">Select a provision</option>
            <option value="DJ">DJ</option>
            <option value="Live band">Live Band</option>
            <option value="Event centre">Event Centre</option>
            <option value="Event Planning">Event Planning</option>
            <option value="Decoration">Decoration</option>
            <option value="Make-up">Make-up</option>
            <option value="Fashion design">Fashion design</option>
            <option value="Pedicure and manicure">Pedicure and manicure</option>
            <option value="Catering">Catering</option>
            <option value="Photography">Photography</option>
            <option value="Accomodation">Accomodation</option>
            <option value="Brand design">Brand design</option>
            <option value="Transportation">Transportation</option>
            <option value="Modelling">Modelling</option>
            <option value="Event security">Event security</option>
            <option value="Religious clerics">Religious clerics</option>
            <option value="Bartender/drink services">
              Bartender/drink services
            </option>
            <option value="Image styling">Image styling</option>
          </select>
        ) : (
          <input
            className="w-full p-2 mt-3 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none"
            type="text"
            name="activity"
            id="activity"
            required
            value={activity}
            onChange={(e) => {
              setActivity(e.target.value);
            }}
            placeholder="Enter title"
          />
        )}
        <label htmlFor="description" className="font-semibold">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          required
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
          className="border-2 border-borderColor p-3 rounded-md mt-2 resize-none focus:outline-none"
        ></textarea>
        <div className="flex flex-col md:flex-row  justify-between mt-6 gap-4">
          <div className="md:w-[45%]">
            <label htmlFor="Start_Date" className="font-semibold">
              Start Date{" "}
            </label>
            <input
              className="w-full border-2 border-borderColor rounded-md p-2 mt-2 uppercase  focus:outline-none"
              type="date"
              id="Start_Date"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="md:w-[45%] ">
            <label htmlFor="End_Date" className="font-semibold">
              End Date
            </label>
            <input
              type="date"
              id="End_Date"
              required
              className="w-full border-2 border-borderColor rounded-md p-2 mt-2 uppercase  focus:outline-none"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="Amount" className="mt-6 font-semibold">
          Amount for provision
        </label>
        <TbCurrencyNaira className=" relative top-11 text-xl ml-2" />
        <input
          className="w-full p-2 pl-7 mt-3 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none "
          type="number"
          id="Amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="md:w-[50%] gap-4 flex flex-col md:flex-row justify-between ">
          <div
            className=" flex items-center justify-center rounded-md hover:text-white hover:bg-primaryCol px-4 py-2 border-2 border-primaryCol bg-transparent text-primaryCol font-semibold "
            onClick={handleClear}
          >
            <FaTimes className="mr-2" />
            <input type="button" value={"Remove"} />
          </div>

          <input
            type="submit"
            className="rounded-md text-white bg-primaryCol px-4 py-2 hover:border-2 hover:border-primaryCol hover:bg-transparent hover:text-primaryCol font-semibold"
            value={"Save Specification"}
          />
        </div>
      </form>
      {specifications.length >= 1 && (
        <div className="p-6">
          <div className="flex justify-between items-center pl-[115px] my-4  text-sm">
            <p className="">
              <span>{specifications.length}</span>{" "}
              {specifications.length > 1 ? "Specifications" : "Specification"}
            </p>
            <h6 className="font-semibold w-[130px] flex">
              Amount:{" "}
              <span className="text-primaryCol flex">
                <TbCurrencyNaira className="text-xl ml-2" />
                {specifications.reduce(function (acc, detail) {
                  return Number(detail?.amount) + Number(acc);
                }, 0)}
              </span>
            </h6>
          </div>

          <div>
            <div className="flex font-semibold gap-6 mb-3">
              <p className="w-4"></p>
              <h4 className="w-12 ">S/N</h4>
              <h4 className="w-[195px] ">Specification Type</h4>
              <h4 className="w-[190px] ">Specification Main Title</h4>
              <h4 className="w-[90px] ">Amount</h4>
            </div>
            <ul>
              {specifications.map((detail, i) => (
                <li className="flex  items-center gap-6 py-1" key={detail?.id}>
                  <div className="flex justify-center items-center">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className=" cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-4 w-4 border border-primaryColC rounded-sm mr-2"
                    />
                  </div>
                  <p className="w-12 text-primaryCol">#{i + 1}</p>
                  <p className="w-[200px] capitalize ">
                    {detail?.specificationType}
                  </p>

                  <p className="w-[190px] capitalize ">
                    {detail?.provision ? detail?.provision : detail?.activity}
                  </p>
                  <p className="w-[70px] ">{detail?.amount}</p>

                  <div className="w-10 text-right">
                    <OptionButton
                      specifications={specifications}
                      setSpecifications={setSpecifications}
                      specificationId={detail?.id}
                      setSpecificationType={setSpecificationType}
                      setProvision={setProvision}
                      setActivity={setActivity}
                      setDescription={setDescription}
                      setStartDate={setStartDate}
                      setEndDate={setEndDate}
                      setAmount={setAmount}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className=" flex justify-end mt-20">
        <NextButton
          className="relative right-6 w-[150px] "
          onClick={handleContinue}
        >
          Continue
        </NextButton>
      </div>
    </div>
  );
}

export default SpecificationStructure;
