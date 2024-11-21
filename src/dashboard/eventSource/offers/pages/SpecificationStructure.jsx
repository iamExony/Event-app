import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { NextButton } from "../components/Button";
import OptionButton from "../components/OptionButton";
import MultiSelect from "../../../../components/MultiSelect";
import SelectTag from "../../../components/SelectTag";
import { FiX } from "react-icons/fi";
import { Continue } from "../../../components/Buttons";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function SpecificationStructure({
  setComplete,
  setCurrentStep,
  currentStep,
  steps,
  theme,
  setTheme,
  allSpecifications,
  setAllSpecifications,
}) {
  const [provision, setProvision] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [amount, setAmount] = useState();
  const [specificationType, setSpecificationType] = useState("Provision");
  const [active, setActive] = useState(0);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (provision !== "" || startDate !== "" || description !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [provision, startDate, description]);

  //Adding new specification to local storage when specifications change
  // useEffect(
  //   function () {
  //     localStorage.setItem("specifications", JSON.stringify(specifications));
  //   },
  //   [specifications]
  // );

  const handleRemoveSpecification = (specification) => {
    console.log({ specification });
    const newSpecification = allSpecifications.filter(
      (e) => e.id !== specification.id
    );
    setAllSpecifications(newSpecification);
  };

  //handle Remove
  function handleClear() {
    setProvision("");
    setActivity("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setAmount(0);
  }

  //Handle continue
  function handleContinue() {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //Generating ID for each Specification
  function generateUniqueID() {
    return Math.floor(Math.random() * Date.now());
  }

  console.log("spec::", specificationType);

  // const specification = {
  //   // specificationType,
  //   ...(specificationType === "Provision"
  //     ? { provision }
  //     : { title: activity }),
  //   description,
  //   vendor_name: "Kola",
  //   start_date: startDate,
  //   end_date: endDate,
  //   amount: amount ? parseInt(amount) : 0,
  //   id: generateUniqueID(),
  // };

  //Adding new specification to the specifications array
  // function handleSaveSpecs(e) {
  //   e.preventDefault();
  //   setSpecifications((detail) => [...detail, specification]);

  //   handleClear();
  // }

  const handleSaveSpecs = () => {
    const data = {
      ...(specificationType === "Provision"
        ? { provision }
        : { title: activity }),
      description,
      vendor_name: "Kola",
      start_date: startDate,
      end_date: endDate,
      amount: amount ? parseInt(amount) : 0,
      id: generateUniqueID(),
    };

    setAllSpecifications([data, ...allSpecifications]);
    console.log({ allSpecifications, data });
    // removeSpecs();
  };

  const removeSpecs = () => {
    setProvision("");
    setActivity("");
    setDescription("");
    setVendorName("");
    setStart("");
    setEnd("");
    setAmount("");
  };

  const buttonContents = ["Provision", "Activity"];
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
  const provisions = [
    "DJ",
    "Live band",
    "Event centre",
    "Event planning",
    "Decoration",
    "Make-up",
    "Fashion design",
    "Pedicure and manicure",
    "Catering",
    "Photogrphy",
    "Accommodation",
    "Brand design",
    "Transportation",
    "Modelling",
    "Event security",
    "Religious clerics",
    "Bartender/drink services",
    "Image Styling",
  ];

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h4 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Specification Structure
      </h4>
      <hr />

      {/* <form
        action=""
        className="pt-6 px-6 flex flex-col"
        onSubmit={handleSpecificationList}
      > */}

      <div className="flex-group gap-6 p-4">
        <div className="md:px-6">
          <h4>Theme</h4>

          <MultiSelect
            theme={theme}
            setTheme={setTheme}
            title={"Select Theme"}
            themeList={themeList}
          />
        </div>

        <div>
          <h4 className="text-lg font-medium p-6">Add a specification</h4>

          <div className="border-b flex gap-[30%]">
            {buttonContents.map((content, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                  handleClear();
                  setSpecificationType(content);
                }}
                className={`font-medium w-1/4 ${
                  active === index &&
                  "text-primaryCol border-b-2 border-primaryCol"
                }`}
              >
                {content}
              </button>
            ))}
          </div>
        </div>

        {/* <div
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
        </div> */}

        <section className="md:p-8 overflow-y-scroll w-full">
          <div className="flex flex-col gap-6">
            {/* Provision */}
            {active === 0 ? (
              <SelectTag
                value={provision}
                className="w-full"
                options={provisions}
                handleSelect={setProvision}
                defaultValue="Select a provision"
              />
            ) : (
              <input
                type="text"
                value={activity}
                placeholder="Enter title"
                className="style-input w-full"
                onChange={(e) => setActivity(e.target.value)}
              />
            )}

            <div>
              <p>Description</p>

              <textarea
                rows={4}
                type="text"
                value={description}
                className="style-input mt-3 w-full"
                placeholder="Enter a description..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-between">
              <div className="md:w-1/2">
                <p>Start Date</p>

                <input
                  type="date"
                  value={startDate}
                  className="style-input uppercase mt-3 w-full"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="md:w-1/2">
                <p>End Date</p>

                <input
                  type="date"
                  value={endDate}
                  className="style-input uppercase mt-3 w-full"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="Amount" className="">
                Amount for provision
              </label>
              <div className="relative mt-3">
                <TbCurrencyNaira className=" absolute top-50%  translate-y-[50%] text-xl ml-2 " />
                <input
                  className="w-full p-2 pl-7 text-bold border-2 border-borderColor rounded-md mb-6 focus:outline-none "
                  type="number"
                  id="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <button
                disabled={disabled}
                onClick={handleClear}
                className="md:w-1/6 py-2 px-4 border-2 flex gap-2 justify-center items-center rounded-md text-primaryCol border-primaryCol disabled:text-borderGrey disabled:border-borderGrey disabled:cursor-not-allowed"
              >
                <FiX className="text-xl" />
                <span>Remove</span>
              </button>

              <button
                disabled={disabled}
                onClick={handleSaveSpecs}
                className="md:min-w-1/6 py-2 px-4 rounded-md text-White bg-primaryCol disabled:bg-borderGrey disabled:cursor-not-allowed"
              >
                Save Specification
              </button>
            </div>
          </div>
        </section>

        {/* specification list */}
        <div className="mt-8">
          <div className="grid grid-cols-6 font-medium text-left">
            <span>S/N</span>
            {/* <span className="col-span-2">Specification type</span> */}
            <span className="col-span-4">Specification main title</span>
            <span className="">Amount</span>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            {allSpecifications.map((specification, index) => (
              <div key={index} className="bg-White grid grid-cols-6 text-left">
                <span className="text-primaryCol">#{index + 1}</span>

                {/* <span className="col-span-2">{specification.type}</span> */}

                <span className="col-span-4">{specification?.provision}</span>

                <div className="flex items-center justify-between">
                  <span className="text-right text-primaryCol">
                    {specification.amount}
                  </span>

                  <button
                    onClick={() => handleRemoveSpecification(specification)}
                  >
                    <IoIosRemoveCircleOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className=" w-full flex justify-end mt-20">
          <Continue handleClick={handleContinue}>Continue</Continue>
        </section>
      </div>
    </div>
  );
}

export default SpecificationStructure;
