// import React, { useEffect, useState } from 'react'
// import { FiX } from 'react-icons/fi'
// import { Back, Continue } from '../../../components/Buttons'
// import SelectTag from '../../../components/SelectTag'
// import Checkbox from '../../../components/Checkbox'
// import { IoEllipsisVertical } from 'react-icons/io5'

// const SpecificationsDetails = ({
//   setStep,
//   end,
//   start,
//   title,
//   provision,
//   vendorName,
//   description,
//   allSpecifications,
//   setEnd,
//   setStart,
//   setTitle,
//   setProvision,
//   setVendorName,
//   setDescription,
//   setAllSpecifications
// }) => {
//   const buttonContents = ["Provision", "Activity"]
//   const provisions = ["DJ", "Live band", "Event centre", "Event planning", "Decoration", "Make-up", "Fashion design", "Pedicure and manicure", "Catering", "Photogrphy", "Accommodation", "Brand design", "Transportation", "Modelling", "Event security", "Religious clerics", "Bartender/drink services", "Image Styling"]

//   const [active, setActive] = useState(0)
//   const [disabled, setDisabled] = useState(true)

//   useEffect(() => {
//     if (provision !== "" || start !== "" || description !== "" || vendorName !== "")
//     {
//       setDisabled(false)
//     }
//     else
//     {
//       setDisabled(true)
//     }
//   }, [provision, start, description, vendorName])

//   const saveSpecs = () => {
//     const data = {
//       type: "Provision",
//       provision,
//       amount: "120,000"
//     }

//     setAllSpecifications([data, ...allSpecifications])
//   }

//   const removeSpecs = () => {
//     setProvision("")
//     setDescription("")
//     setVendorName("")
//     setStart("")
//   }

//   return (
//     <div className="border border-borderGrey rounded-lg text-bodyText w-full">
//       <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">Specification details</h3>

//       <div>
//         <h4 className="text-lg font-medium p-6">Add a specification</h4>

//         <div className="border-b flex gap-[30%]">
//           {buttonContents.map((content, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActive(index)}
//                 className={`font-medium w-1/4 ${active === index && "text-primaryCol border-b-2 border-primaryCol"}`}
//               >
//                   {content}
//               </button>
//           ))}
//         </div>

//       </div>

//       <section className="p-8 verflow-y-scroll">
//         {/* Provision */}
//         <div className="flex flex-col gap-6">
//           {active === 0 ? (
//             <SelectTag
//               value={provision}
//               className="w-full"
//               options={provisions}
//               handleSelect={setProvision}
//               defaultValue="Select a provision"
//             />
//           ) : (
//             <input
//               type="text"
//               value={title}
//               placeholder="Enter title"
//               className="style-input w-full"
//               onChange={e => setTitle(e.target.value)}
//             />
//           )}

//           <div>
//             <p>Description</p>

//             <textarea
//               rows={4}
//               type="text"
//               value={description}
//               className="style-input mt-3 w-full"
//               placeholder="Enter a description..."
//               onChange={e => setDescription(e.target.value)}
//             />
//           </div>

//           <div>
//             <p>Exhibitor name (optional)</p>

//             <input
//               type="text"
//               value={vendorName}
//               placeholder="Enter exhibitor name..."
//               className="style-input mt-3 w-full"
//               onChange={e => setVendorName(e.target.value)}
//             />
//           </div>

//           <div className="flex gap-8 justify-between">
//             <div className="w-1/2">
//               <p>Start Date</p>

//               <input
//                 type="date"
//                 value={start}
//                 className="style-input uppercase mt-3 w-full"
//                 onChange={e => setStart(e.target.value)}
//               />
//             </div>

//               <div className="w-1/2">
//                 <p>End Date</p>

//                 <input
//                   type="date"
//                   value={end}
//                   className="style-input uppercase mt-3 w-full"
//                   onChange={e => setEnd(e.target.value)}
//                 />
//               </div>
//           </div>

//           <div className="flex gap-8">
//             <button
//               disabled={disabled}
//               onClick={removeSpecs}
//               className="w-1/6 py-2 px-4 border-2 flex gap-2 justify-center items-center rounded-md text-primaryCol border-primaryCol disabled:text-borderGrey disabled:border-borderGrey disabled:cursor-not-allowed"
//             >
//               <FiX className="text-xl" />
//               <span>Remove</span>
//             </button>

//             <button
//               disabled={disabled}
//               onClick={saveSpecs}
//               className="min-w-1/6 py-2 px-4 rounded-md text-White bg-primaryCol disabled:bg-borderGrey disabled:cursor-not-allowed"
//             >
//               Save Specification
//             </button>
//           </div>

//           {/* Specifications list */}
//           <div className="mt-8">
//             <div className="grid grid-cols-6 font-medium text-left">
//               <span>S/N</span>
//               <span className="col-span-2">Specification type</span>
//               <span className="col-span-2">Specification main title</span>
//               <span className="text-right">Amount</span>
//             </div>

//             <div className="flex flex-col gap-6 mt-6">
//               {allSpecifications.map((specification, index) => (
//                 <div key={index} className="bg-White grid grid-cols-6 text-left">
//                   <div className="flex gap-2">
//                     <input
//                       type="checkbox"
//                       className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-5 w-5 border border-primaryColC rounded-sm mr-2"
//                     />
//                     <span className="text-primaryCol">#{index + 1}</span>
//                   </div>

//                   <span className="col-span-2">{specification.type}</span>

//                   <span className="col-span-2">{specification.provision}</span>

//                   <div className="flex items-center justify-between">
//                     <span className="text-right text-primaryCol">{specification.amount}</span>

//                     <IoEllipsisVertical />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-end gap-4 mt-20">
//             <Back handleClick={() => setStep((step) => step - 1)}>Back</Back>
//             <Continue handleClick={() => setStep((step) => step + 1)}>Continue</Continue>
//           </div>
//         </div>

//       </section>

//     </div>
//   )
// }

// export default SpecificationsDetails
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import { Back, Continue } from "../../../components/Buttons";
import SelectTag from "../../../components/SelectTag";
import { IoEllipsisVertical } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

const SpecificationsDetails = ({
  setStep,
  allSpecifications,
  setAllSpecifications,
  theme,
  setTheme,
  title,
  setTitle,
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
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [vendorName, setVendorName] = useState("");
  // const [start, setStart] = useState("");
  // const [end, setEnd] = useState("");
  // const [provision, setProvision] = useState("");

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

  console.log(provision, start, description, vendorName);

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
    console.log("SPECS::");

    const id = uuidv4();
    const data = {
      type: active === 0 ? "Provision" : "Activity",
      id,
      description,
      start_date: formatDateToIso(start),
      end_date: formatDateToIso(end),
      vendor_name: vendorName,
      amount: amount ? parseInt(amount) : 0,
      ...(active === 0 ? { provision } : { title }),
    };

    console.log({ data });

    setAllSpecifications([data, ...allSpecifications]);
    console.log({ allSpecifications });
    removeSpecs();
  };

  const removeSpecs = () => {
    setProvision("");
    setTitle("");
    setDescription("");
    setVendorName("");
    setStart("");
    setEnd("");
    setAmount(0);
  };

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Specification details
      </h3>

      <div>
        <h4 className="text-lg font-medium p-6">Add a specification</h4>

        <div className="border-b flex gap-[30%]">
          {buttonContents.map((content, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`font-medium w-1/4 ${active === index && "text-primaryCol border-b-2 border-primaryCol"}`}
            >
              {content}
            </button>
          ))}
        </div>
      </div>

      <section className="p-4 md:p-8 overflow-y-scroll">
        <div className="mb-6">
          {/* <p>Theme</p>
          <input
            type="text"
            value={theme}
            placeholder="Enter theme"
            className="style-input mt-3 w-full"
            onChange={(e) => setTheme(e.target.value)}
          /> */}

          <h4>Theme</h4>

          <SelectTag
            value={theme}
            options={themes}
            className="w-full mt-3"
            handleSelect={setTheme}
            defaultValue="Select theme"
          />
        </div>

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
              value={title}
              placeholder="Enter title"
              className="style-input w-full"
              onChange={(e) => setTitle(e.target.value)}
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
          </div>

          <div>
            <p>Amount</p>

            <input
              type="text"
              value={amount}
              placeholder="Enter amount..."
              className="style-input mt-3 w-full"
              onChange={(e) => setAmount(e.target.value)}
            />
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
              className="min-w-1/6 py-2 px-4 rounded-md text-White bg-primaryCol disabled:bg-borderGrey disabled:cursor-not-allowed"
            >
              Save Specification
            </button>
          </div>

          {/* Specifications list */}
          <div className="mt-8">
            <div className="grid grid-cols-6 font-medium text-left">
              <span>S/N</span>
              <span className="col-span-2 flex items-center gap-1">
                <span className="hidden md:block">Specification</span> type
              </span>
              <span className="col-span-2 flex items-center gap-1">
                <span className="hidden md:block">Specification</span> main
                title
              </span>
              <span className="text-right">Amount</span>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              {allSpecifications.map((specification, index) => (
                <div
                  key={index}
                  className="bg-White grid grid-cols-6 text-left"
                >
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-5 w-5 border border-primaryColC rounded-sm mr-2"
                    />
                    <span className="text-primaryCol">#{index + 1}</span>
                  </div>

                  <span className="col-span-2">{specification.type}</span>

                  <span className="col-span-2">{specification.provision}</span>

                  <div className="flex items-center justify-between">
                    <span className="text-right text-primaryCol">
                      {specification.amount}
                    </span>

                    <IoEllipsisVertical />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-20 flex-col md:flex-row">
            <Back handleClick={() => setStep((step) => step - 1)}>Back</Back>
            <Continue handleClick={() => setStep((step) => step + 1)}>
              Continue
            </Continue>
          </div>
        </div>
      </section>
    </div>
  );
};

SpecificationsDetails.propTypes = {
  setStep: PropTypes.func.isRequired,
  allSpecifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      provision: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      vendorName: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
      amount: PropTypes.string.isRequired,
    })
  ).isRequired,
  setAllSpecifications: PropTypes.func.isRequired,
};

export default SpecificationsDetails;
