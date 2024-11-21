import React, { useState, useEffect } from "react";
import Checkbox from "../../../components/Checkbox";
import { Back, Continue } from "../../../components/Buttons";
import SelectTag from "../../../components/SelectTag";
import { IoEllipsisVertical } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { formatDate } from "../utils/helper";
import { v4 as uuidv4 } from "uuid";

const Specifications = ({
  //   DJ,
  //   note,
  //   band,
  //   centre,
  //   setDJ,
  //   setNote,
  //   setBand,
  //   setCentre,

  setStep,
  theme,
  setTheme,
  activity,
  setActivity,
  provision,
  setProvision,
  description,
  setDescription,
  vendorName,
  setVendorName,
  start,
  setStart,
  end,
  setEnd,
  amount,
  setAmount,
  allSpecifications,
  setAllSpecifications,
}) => {
  const buttonContents = ["Provision", "Activity"];
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
  const themes = [
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

  const [active, setActive] = useState(0);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      provision !== "" ||
      start !== "" ||
      description !== "" ||
      vendorName !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [provision, start, description, vendorName]);

  const handleRemoveSpecification = (specification) => {
    console.log({ specification });
    const newSpecification = allSpecifications.filter(
      (e) => e.id !== specification.id
    );
    setAllSpecifications(newSpecification);
  };

  function formatDateToIso(date) {
    if (!date) return "";

    const [year, month, day] = date.split("-");

    if (year && month && day) {
      const dateObject = new Date(`${year}-${month}-${day}`);

      if (!isNaN(dateObject.getTime())) {
        return dateObject.toISOString();
      }
    }

    return "";
  }

  const saveSpecs = () => {
    const id = uuidv4();
    const data = {
      type: active === 0 ? "Provision" : "Activity",
      id,
      provision: provision,
      description,
      start_date: formatDateToIso(start),
      end_date: formatDateToIso(end),
      vendor_name: vendorName,
      amount: amount ? parseInt(amount) : 0,
      title: activity,
    };

    setAllSpecifications([data, ...allSpecifications]);
    console.log({ allSpecifications, saveSpecs });
    removeSpecs();
  };

  const removeSpecs = () => {
    setProvision("");
    setDescription("");
    setVendorName("");
    setStart("");
    setEnd("");
    setAmount("");
  };

  // specification.activities.0.start_date must be a valid ISO 8601 date string

  // const myDate = new Date("2024-12-04")
  // console.log(myDate.getDate())
  // console.log(myDate.getFullYear())
  // console.log(myDate.getMonth())
  // console.log(myDate.getDay())
  //  const x = formatDate(new Date("2024-12-04T00:00:00.000Z"))
  //  console.log(x)

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h2 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26] whitespace-nowrap">
        Event Specifications
      </h2>

      <div className="flex-group gap-6 py-4 ">
        <div className="px-4 md:px-10">
          <h4>Theme</h4>

          <SelectTag
            value={theme}
            options={themes}
            className="w-full mt-3"
            handleSelect={setTheme}
            defaultValue="Select theme"
          />
        </div>

        <div>
          <h4 className="text-lg font-medium py-6 px-10">
            Add a specification
          </h4>

          <div className="border-b flex gap-[30%]">
            {buttonContents.map((content, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                  removeSpecs();
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

        <section className="p-4 md:p-8 h-screen overflow-y-scroll w-full">
          {/* Provision */}
          <div className="flex flex-col gap-6">
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

            <div>
              <p>Vendor name (optional)</p>
              <input
                type="text"
                value={vendorName}
                placeholder="Enter vendor name..."
                className="style-input mt-3 w-full"
                onChange={(e) => setVendorName(e.target.value)}
              />
              Specification type
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-between">
              <div className="md:w-1/2">
                <p>Start Date</p>

                <input
                  type="date"
                  value={start}
                  className="style-input uppercase mt-3 w-full"
                  onChange={(e) => setStart(e.target.value)}
                />
              </div>

              <div className="md:w-1/2">
                <p>End Date</p>

                <input
                  type="date"
                  value={end}
                  className="style-input uppercase mt-3 w-full"
                  onChange={(e) => setEnd(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="Amount" className="">
                Amount for provision
              </label>
              <div className="relative">
                <TbCurrencyNaira className=" absolute top-50%  translate-y-[50%] text-xl ml-2 mt-[4px]" />
                <input
                  className="w-full p-3 pl-7 text-bold border border-borderColor rounded-md mb-6 focus:outline-none "
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
                onClick={removeSpecs}
                className="md:w-1/6 py-2 px-4 border-2 flex gap-2 justify-center items-center rounded-md text-primaryCol border-primaryCol disabled:text-borderGrey disabled:border-borderGrey disabled:cursor-not-allowed"
              >
                <FiX className="text-xl" />
                <span>Remove</span>
              </button>

              <button
                disabled={disabled}
                onClick={saveSpecs}
                className="md:min-w-1/6 py-2 px-4 rounded-md text-White bg-primaryCol disabled:bg-borderGrey disabled:cursor-not-allowed"
              >
                Save Specification
              </button>
            </div>

            {/* Specifications list */}
            <div className="mt-8">
              <div className="grid grid-cols-6 font-medium text-left">
                <span>S/N</span>
                {/* <span className="col-span-2">Specification type</span> */}
                <span className="col-span-4">Specification main title</span>
                <span className="">Amount</span>
              </div>

              <div className="flex flex-col gap-6 mt-6">
                {allSpecifications.map((specification, index) => (
                  <div
                    key={index}
                    className="bg-White grid grid-cols-6 text-left"
                  >
                    <span className="text-primaryCol">#{index + 1}</span>

                    {/* <span className="col-span-2">{specification.type}</span> */}

                    <span className="col-span-4">
                      {specification?.provision}
                    </span>

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

            <div className="flex flex-col md:flex-row justify-end gap-4 mt-20">
              <Back
                handleClick={() => {
                  setStep((step) => step - 1);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                Back
              </Back>
              <Continue
                handleClick={() => {
                  setStep((step) => step + 1);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                  console.log({ allSpecifications, saveSpecs });
                }}
              >
                Continue
              </Continue>
            </div>
          </div>
        </section>
        {/* 
            <div className="flex flex-col gap-16 px-6">
                <h4 className="font-medium">Key provisions</h4>

                <div className="mt-3">
                    <div className="flex gap-3">
                        <Checkbox 
                            id={"DJ"}
                            value={DJ} 
                            handleCheck={setDJ} 
                        />
                        <label htmlFor="DJ">DJ</label>
                    </div>

                    {DJ && (
                        <input 
                            type="text" 
                            value={note}
                            placeholder="Enter note"
                            className='style-input w-1/2 mt-4'
                            onChange={e => setNote(e.target.value)}
                        />
                    )}
                </div>

                <div className="flex gap-3 mt-3">
                    <Checkbox 
                        id={"band"}
                        value={band}
                        handleCheck={setBand}
                    />
                    <label htmlFor="band">Live band</label>
                </div>

                <div className="flex gap-3 mt-3">
                    <Checkbox 
                        id={"centre"}
                        value={centre}
                        handleCheck={setCentre}
                    />
                    <label htmlFor="centre">Event centre</label>
                </div>
            </div>

            <div className="fixed bottom-10 flex gap-4 self-end">
                <Back handleClick={() => setStep((step) => step - 1)}>
                    Back
                </Back>
                <Continue handleClick={() => setStep((step) => step + 1)}>
                    Continue
                </Continue>
            </div>

            <div className="flex flex-col gap-16 px-6 mt-16">
                {provisions.map((provision, index) => (
                    <div key={index} className="flex gap-3">
                        <Checkbox 
                            id={provision} 
                            defaultType={true} 
                        />
                        <label htmlFor={provision}>{provision}</label>
                    </div>
                ))}
            </div> */}
      </div>
    </div>
  );
};

export default Specifications;
