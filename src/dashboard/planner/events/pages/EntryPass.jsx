// import React, { useEffect, useState } from "react";
// import SelectTag from "../../../components/SelectTag";
// import { Back, Continue } from "../../../components/Buttons";
// import { FiX } from "react-icons/fi";
// import { IoEllipsisVertical } from "react-icons/io5";

// import TagsInput from "react-tagsinput";
// import "react-tagsinput/react-tagsinput.css";
// import EmailInput from "../../../components/EmailInput";

// const EntryPass = ({
//   inviteMessage,
//   setStep,
//   setSenderName,
//   setSenderEmail,
//   recipientEmail,
//   setRecipientEmail,
//   setInviteSubject,
//   setInviteMessage,
//   allPasses,
//   setAllPasses,
// }) => {
//   const [active, setActive] = useState(0);
//   const [passName, setPassName] = useState("");
//   const [passPrice, setPassPrice] = useState("");
//   const [passDescription, setPassDescription] = useState("");
//   const [stockType, setStockType] = useState("");
//   const [ticketType, setTicketType] = useState("");
//   const [transferProcessingFeeToGuest, setTransferProcessingFeeToGuest] =
//     useState("");
//   const [reservationLimit, setReservationLimit] = useState("");
//   const buttonContents = ["Free", "Paid", "Invites only"];
//   const [disabled, setDisabled] = useState(true);
//   const handleEmailChange = (updatedEmails) => {
//     setRecipientEmail(updatedEmails);
//     // You can perform additional actions here, such as saving to a server
//     console.log("Updated emails:", updatedEmails);
//   };

//   useEffect(() => {
//     if (passName === "") {
//       setDisabled(true);
//     } else {
//       setDisabled(false);
//     }
//   }, [passName, stockType, ticketType]);

//   const savePass = () => {
//     const data = {
//       name: passName,
//       type: stockType,
//       stock_type: stockType,
//       reservation_limit: Number(reservationLimit),
//       description: passDescription,
//       price: passPrice,
//       transfer_processing_fee_to_guest: transferProcessingFeeToGuest,
//       ticket_type: ticketType,
//     };

//     setAllPasses([data, ...allPasses]);
//   };

//   const removePass = () => {
//     setPassName("");
//     setStockType("");
//     setTicketType("");
//     setPassPrice("");
//     setPassDescription("");
//     setReservationLimit("");
//     setTransferProcessingFeeToGuest("");
//   };

//   return (
//     <div className="border border-borderGrey rounded-lg text-bodyText w-full">
//       <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
//         Entry Pass
//       </h3>

//       <div className="flex flex-col gap-6 overflow-y-scroll">
//         <div className="bg-primaryCol bg-opacity-20 w-3/4 flex justify-between mx-auto p-2 my-4 rounded-full">
//           {buttonContents.map((content, index) => (
//             <button
//               key={index}
//               onClick={() => setActive(index)}
//               className={`w-1/2 p-4 rounded-full outline-none ${active === index && "bg-primaryColC text-White"}`}
//             >
//               {content}
//             </button>
//           ))}
//         </div>

//         <div className="grid gap-8 px-8">
//           <div>
//             <p>Pass name</p>
//             <input
//               type="text"
//               value={passName}
//               placeholder="Enter pass name"
//               className="style-input mt-3 w-full"
//               onChange={(e) => setPassName(e.target.value)}
//             />
//           </div>

//           {active === 0 || active === 1 ? (
//             <div>
//               <p>Stock type</p>
//               <SelectTag
//                 value={stockType}
//                 className="w-full mt-3"
//                 handleSelect={setStockType}
//                 defaultValue="Select stock type"
//                 options={["Limited", "Unlimited"]}
//               />
//             </div>
//           ) : (
//             <div>
//               <p>Ticket type</p>
//               <SelectTag
//                 value={ticketType}
//                 className="w-full mt-3"
//                 options={["Free", "Paid"]}
//                 handleSelect={setTicketType}
//                 defaultValue="Select ticket type"
//               />
//             </div>
//           )}

//           {(active === 0 || active === 1) && (
//             <div>
//               <p>Pass price</p>
//               <input
//                 type="text"
//                 placeholder="Enter ticket price"
//                 className="style-input mt-3 w-full"
//                 onChange={(e) => setPassPrice(e.target.value)}
//               />
//             </div>
//           )}

//           {active === 2 && (
//             <>
//               <div>
//                 <p>Sender’s name</p>
//                 <input
//                   type="text"
//                   placeholder="Enter sender’s name"
//                   className="style-input mt-3 w-full"
//                   onChange={(e) => setSenderName(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <p>Sender’s e-mail address</p>
//                 <input
//                   type="text"
//                   className="style-input mt-3 w-full"
//                   onChange={(e) => setSenderEmail(e.target.value)}
//                   placeholder="Enter sender’s email address"
//                 />
//               </div>

//               <div>
//                 <p>Recipient’s email</p>
//                 <div className="style-input mt-3 w-ful flex flex-col">
//                   <div>
//                     {/* {recipientEmail.map((email) => (
//                       <span
//                         key={email}
//                         className="flex justify-start items-center py-[2px] gap-2 bg-primaryColC w-fit px-2 rounded-full text-teal-50"
//                       >
//                         <IoCloseSharp />
//                         <span>{email}</span>
//                       </span>
//                     ))} */}
//                   </div>
//                   <EmailInput
//                     initialEmails={recipientEmail}
//                     onChange={handleEmailChange}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <p>Invite subject</p>
//                 <input
//                   type="text"
//                   placeholder="Enter invite subject"
//                   className="style-input mt-3 w-full"
//                   onChange={(e) => setInviteSubject(e.target.value)}
//                 />
//               </div>
//             </>
//           )}

//           {(active === 1 || active === 2) && (
//             <div>
//               <p>Reservation limit</p>
//               <input
//                 type="text"
//                 className="style-input mt-3 w-full"
//                 placeholder="Enter pass reservation limit"
//                 onChange={(e) => setReservationLimit(e.target.value)}
//               />
//             </div>
//           )}

//           {active === 0 || active === 1 ? (
//             <div>
//               <div className="flex justify-between">
//                 <p>Pass description</p>
//                 <small>{passDescription.length}/200 characters</small>
//               </div>

//               <textarea
//                 rows={4}
//                 type="text"
//                 maxLength={200}
//                 className="style-input w-full mt-3"
//                 placeholder="Enter a description..."
//                 onChange={(e) => setPassDescription(e.target.value)}
//               />
//             </div>
//           ) : (
//             <div>
//               <div className="flex justify-between">
//                 <p>Invite message</p>
//                 <small>{inviteMessage.length}/200 characters</small>
//               </div>

//               <textarea
//                 rows={4}
//                 type="text"
//                 maxLength={200}
//                 placeholder="Enter a message..."
//                 className="style-input w-full mt-3"
//                 onChange={(e) => setInviteMessage(e.target.value)}
//               />
//             </div>
//           )}
//         </div>

//         <div className="flex gap-8 px-8">
//           <button
//             disabled={disabled}
//             onClick={removePass}
//             className="w-1/6 p-2 border-2 flex gap-2 justify-center items-center rounded-md text-primaryCol border-primaryCol disabled:text-borderGrey disabled:border-borderGrey disabled:cursor-not-allowed"
//           >
//             <FiX className="text-xl" />
//             <span>Remove</span>
//           </button>

//           <button
//             disabled={disabled}
//             onClick={savePass}
//             className="w-1/6 p-2 rounded-md text-White bg-primaryCol disabled:bg-borderGrey disabled:cursor-not-allowed"
//           >
//             Save Pass
//           </button>
//         </div>

//         <div className="mt-8 px-8">
//           <div className="grid grid-cols-6 font-medium text-left">
//             <span>S/N</span>
//             <span className="col-span-2">Pass name</span>
//             <span className="col-span-2">Stock type</span>
//             <span className="text-right">Pass type</span>
//           </div>

//           <div className="flex flex-col gap-6 mt-6">
//             {allPasses.map((pass, index) => (
//               <div key={index} className="bg-White grid grid-cols-6 text-left">
//                 <div className="flex gap-2">
//                   <input
//                     type="checkbox"
//                     className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-5 w-5 border border-primaryColC rounded-sm mr-2"
//                   />
//                   <span className="text-primaryCol">#{index + 1}</span>
//                 </div>

//                 <span className="col-span-2">{pass.passName}</span>

//                 <span className="col-span-2">{pass.stockType}</span>

//                 <div className="flex items-center justify-between">
//                   <span className="text-right text-primaryCol">
//                     {pass.ticketType}
//                   </span>

//                   <IoEllipsisVertical />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default EntryPass;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SelectTag from "../../../components/SelectTag";
import { Back, Continue } from "../../../components/Buttons";
import { FiX } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
import EmailInput from "../../../components/EmailInput";
import { MdCancel } from "react-icons/md";

const EntryPass = ({
  inviteMessage,
  setStep,
  // step,
  senderName,
  setSenderName,
  senderEmail,
  setSenderEmail,
  recipientEmail,
  setRecipientEmail,
  inviteSubject,
  setInviteSubject,
  setInviteMessage,
  allPasses,
  setAllPasses,
}) => {
  const [active, setActive] = useState(0);
  const [passName, setPassName] = useState("");
  const [passPrice, setPassPrice] = useState("");
  const [passDescription, setPassDescription] = useState("");
  const [stockType, setStockType] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [transferProcessingFeeToGuest, setTransferProcessingFeeToGuest] =
    useState(false);
  const [reservationLimit, setReservationLimit] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [type, setType] = useState("Free");


  const [showDiscount, setShowDiscount] = useState(false)
  const [activeDiscountType, setActiveDiscountType] = useState('codes')
  const [discountType, setDiscountType] = useState('')

  const buttonContents = ["Free", "Paid", "Invite only"];


  const handleEmailChange = (updatedEmails) => {
    setRecipientEmail(updatedEmails);
  };

  console.log({recipientEmail});
  

  useEffect(() => {
    setDisabled(passName === "");
  }, [passName]);

  const savePass = () => {
    const data = {
      name: passName,
      type,
      stock_type: stockType,
      reservation_limit: reservationLimit ? parseInt(reservationLimit, 10) : 0,
      description: passDescription,
      price: passPrice ? parseInt(passPrice, 10) : 0,
      transfer_processing_fee_to_guest: transferProcessingFeeToGuest,
      ticket_type: ticketType,
      ...(type === "Invite only" && {
        invite: {
          sender_email: senderEmail,
          sender_name: senderName,
          recipients_emails: recipientEmail,
          subject: inviteSubject,
          message: inviteMessage,
        },
      }),
    };
    setAllPasses([data, ...allPasses]);
  };

  const removePass = () => {
    setPassName("");
    setStockType("");
    setTicketType(type);
    setPassPrice("0");
    setPassDescription("");
    setReservationLimit("");
    setTransferProcessingFeeToGuest(false);
  };

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Entry Pass
      </h3>

      <div className="flex flex-col gap-6 overflow-y-scroll">
        <div className="bg-primaryCol bg-opacity-20 w-[95%] md:w-3/4 flex justify-between mx-auto p-2 my-4 rounded-full">
          {buttonContents.map((content, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                setType(content);
              }}
              className={`md:w-1/2 p-4 rounded-full outline-none ${
                active === index && "bg-primaryColC text-White"
              }`}
            >
              {content}
            </button>
          ))}
        </div>

        <div className="grid gap-8 px-4 md:px-8">
          <div>
            <p>Pass name</p>
            <input
              type="text"
              value={passName}
              placeholder="Enter pass name"
              className="style-input mt-3 w-full"
              onChange={(e) => setPassName(e.target.value)}
            />
          </div>

          {active === 0 || active === 1 ? (
            <div>
              <p>Stock type</p>
              <SelectTag
                value={stockType}
                className="w-full mt-3"
                handleSelect={setStockType}
                defaultValue="Select stock type"
                options={["Limited", "Unlimited"]}
              />
            </div>
          ) : (
            <div>
              <p>Ticket type</p>
              <SelectTag
                value={ticketType}
                className="w-full mt-3"
                options={["Free", "Paid"]}
                handleSelect={setTicketType}
                defaultValue="Select ticket type"
              />
            </div>
          )}

          {(active === 0 || active === 1) && (
            <div>
              <p>Pass price</p>
              <input
                type="text"
                value={passPrice}
                placeholder="Enter ticket price"
                className="style-input mt-3 w-full"
                onChange={(e) => setPassPrice(e.target.value)}
              />
            </div>
          )}

          {active === 2 && (
            <>
              <div>
                <p>Sender’s name</p>
                <input
                  type="text"
                  placeholder="Enter sender’s name"
                  className="style-input mt-3 w-full"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </div>

              <div>
                <p>Sender’s e-mail address</p>
                <input
                  type="email"
                  className="style-input mt-3 w-full"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="Enter sender’s email address"
                />
              </div>

              <div>
                <p>Recipient’s email</p>
                <div className="style-input mt-3 w-ful flex flex-col">
                  <EmailInput
                    initialEmails={recipientEmail}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>

              <div>
                <p>Invite subject</p>
                <input
                  type="text"
                  placeholder="Enter invite subject"
                  className="style-input mt-3 w-full"
                  value={inviteSubject}
                  onChange={(e) => setInviteSubject(e.target.value)}
                />
              </div>
            </>
          )}

          {(active === 1 || active === 2) && (
            <div>
              <p>Reservation limit</p>
              <input
                type="number"
                value={reservationLimit}
                className="style-input mt-3 w-full"
                placeholder="Enter pass reservation limit"
                onChange={(e) => setReservationLimit(e.target.value)}
              />
            </div>
          )}

          {active === 0 || active === 1 ? (
            <div>
              <div className="flex justify-between">
                <p>Pass description</p>
                <small>{passDescription.length}/200 characters</small>
              </div>

              <textarea
                rows={4}
                type="text"
                value={passDescription}
                maxLength={200}
                className="style-input w-full mt-3"
                placeholder="Enter a description..."
                onChange={(e) => setPassDescription(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <p>Invite message</p>
                <small>{inviteMessage.length}/200 characters</small>
              </div>

              <textarea
                rows={4}
                type="text"
                maxLength={200}
                value={inviteMessage}
                placeholder="Enter a message..."
                className="style-input w-full mt-3"
                onChange={(e) => setInviteMessage(e.target.value)}
              />
            </div>
          )}
        </div>


        {active === 1 && (
          <div className="flex justify-between mr-10 cursor-pointer">

          <div className="flex gap-2 pl-8">
            <input
              id="checkbox"
              type="checkbox"
              className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-5 w-5 border border-primaryColC rounded-sm mr-2"
              />
            <label htmlFor="checkbox">Transfer processing fee to guest</label>
            
          </div>
          {/* DISCOUNT*/}
          <div>

          <p className="text-primaryColC" onClick={() => setShowDiscount(true)}>
              Add discount
            </p>
            {/* DISCOUNT POP UP */}
           {showDiscount && <div className="w-[647px] h-[383px] border-2 border-slate-300  bg-white absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] p-6">
              <div className="flex justify-end text-slate-500" onClick={() => setShowDiscount(false)}>

            <MdCancel size={20} />
              </div>

              <div className="flex gap-12 items-center text-xs">
                <p className={`text-xs font-medium ${activeDiscountType === "codes" && "underline underline-offset-[6px] text-primaryColC"}`} onClick={() => setActiveDiscountType("codes")}>Discount codes</p>
                <p className={`text-xs font-medium ${activeDiscountType === "criteria" && "underline underline-offset-[6px] text-primaryColC"}`} onClick={() => setActiveDiscountType("criteria")}>Discount criteria</p>
              </div>
              {/* Discount codes section */}
              <div> <div className="flex flex-col gap-3 mt-16 w-[350px]">
                  { activeDiscountType === 'codes' &&<div className="grid grid-cols-2 gap-3">
                    <label htmlFor="" name="coupon_code">Create coupon code</label>
                    <input name="coupon_code" placeholder="enter coupon code" className="p-1 border-2 border-slate-400 focus:outline-none rounded-md w-[294px]" />
                    </div>}
                    {activeDiscountType === "criteria" &&  <div className="grid grid-cols-2 gap-3">
                    <label htmlFor="" name="criteria_type">Criteria type</label>
                    <select name="criteria_type" placeholder="enter coupon code" className="p-1 border-2 border-slate-400 focus:outline-none rounded-md w-[294px]" value={discountType} onChange={(e) => setDiscountType(e.target.value)} >
                      <option defaultValue={""}>select criteria type</option>
                      {["fixed rate discount", "percentage discount"].map((option, i) => <option value={option}>{option}</option>)}
                    </select>
                    </div>}

                  <div className="grid grid-cols-2 gap-3">
                    <label htmlFor="" name="discount_type">Discount type</label>
                    <select name="discount_type" placeholder="enter coupon code" className="p-1 border-2 border-slate-400 focus:outline-none rounded-md w-[294px]" value={discountType} onChange={(e) => setDiscountType(e.target.value)} >
                      <option defaultValue={""}>select discount type</option>
                      {["fixed rate discount", "percentage discount"].map((option, i) => <option value={option}>{option}</option>)}
                    </select>
                  </div>
                  {discountType =="fixed rate discount" && <div className="grid grid-cols-2 gap-3">
                    <label htmlFor="" name="discount_value">Discount value</label>
                    <input name="discount_value" placeholder="enter discount value" className="p-1 border-2 border-slate-400 focus:outline-none rounded-md w-[294px]" />
                    </div>}
                </div>
              <div className="flex justify-center  flex-col gap-3 items-center mt-4" >
                <button className="bg-[#4B4B4B] hover:bg-primaryCol text-white py-2 px-4 rounded-md w-[180px] font-semibold">
                  Submit
                </button>
                <button className="bg-[#4B4B4B] text-white py-3 px-4 rounded-md w-[190px] font-medium text-sm">
                  coupon code created
                </button>
              </div>
                </div>
              


            </div>}

          </div>
              </div>
        )}

        

        <div className="flex gap-8 px-8">

          <button
            disabled={disabled}
            onClick={removePass}
            className="md:w-1/6 p-2 border-2 flex gap-2 justify-center items-center rounded-md text-primaryCol border-primaryCol disabled:text-borderGrey disabled:border-borderGrey disabled:cursor-not-allowed"
          >
            <FiX className="text-xl" />
            <span>Remove</span>
          </button>

          <button
            disabled={disabled}
            onClick={savePass}
            className="md:w-1/6 p-2 rounded-md text-White bg-primaryCol disabled:bg-borderGrey disabled:cursor-not-allowed"
          >
            Save Pass
          </button>
        </div>

        <div className="mt-8 px-4 md:px-8">
          <div className="grid grid-cols-6 font-medium text-left">
            <span>S/N</span>
            <span className="col-span-2 capitalize flex gap-1">
              <span className="hidden md:block">Pass</span> name
            </span>
            <span className="col-span-2">Stock type</span>
            <span className="text-right capitalize flex gap-1">
              <span className="hidden md:block">Pass</span> type
            </span>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            {allPasses.map((pass, index) => (
              <div key={index} className="bg-White grid grid-cols-6 text-left">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-5 w-5 border border-primaryColC rounded-sm mr-2"
                  />
                  <span className="text-primaryCol">#{index + 1}</span>
                </div>

                <span className="col-span-2">{pass.name}</span>

                <span className="col-span-2">{pass.stock_type}</span>

                <div className="flex items-center justify-between">
                  <span className="text-right text-primaryCol">
                    {pass.ticket_type}
                  </span>

                  <button>
                    <IoEllipsisVertical />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-end items-end gap-4 px-4 md:p-8 mt-20 mb-5 m">
        <Back handleClick={() => setStep((step) => step - 1)}>Back</Back>
        <Continue handleClick={() => setStep((step) => step + 1)}>
          Continue
        </Continue>
      </div>
    </div>
  );
};

EntryPass.propTypes = {
  inviteMessage: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number,
  setSenderName: PropTypes.func.isRequired,
  setSenderEmail: PropTypes.func.isRequired,
  recipientEmail: PropTypes.array.isRequired,
  setRecipientEmail: PropTypes.func.isRequired,
  setInviteSubject: PropTypes.func.isRequired,
  setInviteMessage: PropTypes.func.isRequired,
  allPasses: PropTypes.array.isRequired,
  setAllPasses: PropTypes.func.isRequired,
};

export default EntryPass;
