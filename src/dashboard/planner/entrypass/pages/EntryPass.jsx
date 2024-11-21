import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SelectTag from "../../../components/SelectTag";
import { Back, Continue } from "../../../components/Buttons";
import { MdCancel } from "react-icons/md";

const EntryPass = ({
  passType,
  allPasses,
  passName,
  stockType,
  ticketType,
  passDescription,
  inviteMessage,
  reservationLimit,
  senderName,
  senderEmail,
  recipientEmail,
  inviteSubject,
  passPrice,
  setPassType,
  setStep,
  setAllPasses,
  setPassName,
  setStockType,
  setTicketType,
  setReservationLimit,
  setPassDescription,
  setPassPrice,
  setSenderName,
  setSenderEmail,
  setRecipientEmail,
  setInviteSubject,
  setInviteMessage,
}) => {
  const [active, setActive] = useState(0);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [showDiscount, setShowDiscount] = useState(false);
  const [activeDiscountType, setActiveDiscountType] = useState("codes");
  const [discountType, setDiscountType] = useState("");
  const buttonContents = ["Free", "Paid", "Invites only"];

  useEffect(() => {
    setDisabled(passName === "");
  }, [passName]);

  function validate() {
    const newErrors = {};
    if (!passName) newErrors.passName = "Pass name is required.";
    if (active === 0 || active === 1) {
      if (!stockType) newErrors.stockType = "Stock type is required.";
      if (active === 1 && !passPrice)
        newErrors.passPrice = "Pass price is required.";
      if (active === 1 && !reservationLimit)
        newErrors.reservationLimit = "Reservation limit is required.";
      if (!passDescription)
        newErrors.passDescription = "Pass description is required.";
    } else if (active === 2) {
      if (!ticketType) newErrors.ticketType = "Ticket type is required.";
      if (!inviteMessage)
        newErrors.inviteMessage = "Invite message is required.";
      if (!senderName) newErrors.senderName = "Sender’s name is required.";
      if (!senderEmail)
        newErrors.senderEmail = "Sender’s email address is required.";
      if (!recipientEmail)
        newErrors.recipientEmail = "Recipient’s email is required.";
      if (!inviteSubject)
        newErrors.inviteSubject = "Invite subject is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleValidation() {
    if (validate()) {
      savePass();
      setStep((step) => step + 1);
    }
  }

  const savePass = () => {
    const data = {
      passName,
      stockType,
      ticketType,
      passDescription,
      inviteMessage,
      reservationLimit,
      passPrice,
      senderName,
      senderEmail,
      recipientEmail,
      inviteSubject,
    };

    setAllPasses([data, ...allPasses]);
  };

  const removePass = () => {
    setPassName("");
    setStockType("");
    setTicketType("");
  };

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Pass Details
      </h3>

      <div className="flex flex-col gap-6 overflow-y-scroll">
        <div className="bg-primaryCol bg-opacity-20 md:w-3/4 w-[95%] flex justify-between mx-auto p-2 my-4 rounded-full">
          {buttonContents.map((content, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                setPassType(content);
              }}
              className={`w-1/2 p-4 rounded-full outline-none ${
                active === index ? "bg-primaryColC text-White" : ""
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
              className={`style-input mt-3 w-full ${errors.passName ? "border-red-500" : ""}`}
              onChange={(e) => setPassName(e.target.value)}
            />
            {errors.passName && (
              <p className="text-red-500 text-sm mt-1">{errors.passName}</p>
            )}
          </div>

          {active === 0 || active === 1 ? (
            <div>
              <p>Stock type</p>
              <SelectTag
                value={stockType}
                className={`w-full mt-3 ${errors.stockType ? "border-red-500" : ""}`}
                handleSelect={setStockType}
                defaultValue="Select stock type"
                options={["Limited", "Unlimited"]}
              />
              {errors.stockType && (
                <p className="text-red-500 text-sm mt-1">{errors.stockType}</p>
              )}
            </div>
          ) : (
            <div>
              <p>Ticket type</p>
              <SelectTag
                value={ticketType}
                className={`w-full mt-3 ${errors.ticketType ? "border-red-500" : ""}`}
                options={["Free", "Paid"]}
                handleSelect={setTicketType}
                defaultValue="Select ticket type"
              />
              {errors.ticketType && (
                <p className="text-red-500 text-sm mt-1">{errors.ticketType}</p>
              )}
            </div>
          )}

          {(active === 1 || active === 2) && (
            <div>
              <p>Pass price</p>
              <input
                type="text"
                value={passPrice}
                placeholder="Enter ticket price"
                className={`style-input mt-3 w-full ${errors.passPrice ? "border-red-500" : ""}`}
                onChange={(e) => setPassPrice(e.target.value)}
              />
              {errors.passPrice && (
                <p className="text-red-500 text-sm mt-1">{errors.passPrice}</p>
              )}
            </div>
          )}

          {active === 2 && (
            <>
              <div>
                <p>Sender’s name</p>
                <input
                  type="text"
                  value={senderName}
                  placeholder="Enter sender’s name"
                  className={`style-input mt-3 w-full ${errors.senderName ? "border-red-500" : ""}`}
                  onChange={(e) => setSenderName(e.target.value)}
                />
                {errors.senderName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.senderName}
                  </p>
                )}
              </div>

              <div>
                <p>Sender’s e-mail address</p>
                <input
                  type="text"
                  value={senderEmail}
                  className={`style-input mt-3 w-full ${errors.senderEmail ? "border-red-500" : ""}`}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="Enter sender’s email address"
                />
                {errors.senderEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.senderEmail}
                  </p>
                )}
              </div>

              <div>
                <p>Recipient’s email</p>
                <input
                  type="text"
                  value={recipientEmail}
                  placeholder="Enter recipient’s email"
                  className={`style-input mt-3 w-full ${errors.recipientEmail ? "border-red-500" : ""}`}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                />
                {errors.recipientEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.recipientEmail}
                  </p>
                )}
              </div>

              <div>
                <p>Invite subject</p>
                <input
                  type="text"
                  value={inviteSubject}
                  placeholder="Enter invite subject"
                  className={`style-input mt-3 w-full ${errors.inviteSubject ? "border-red-500" : ""}`}
                  onChange={(e) => setInviteSubject(e.target.value)}
                />
                {errors.inviteSubject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.inviteSubject}
                  </p>
                )}
              </div>
            </>
          )}

          {(active === 0 || active === 1) && (
            <div>
              <p>Reservation limit</p>
              <input
                type="text"
                value={reservationLimit}
                className={`style-input mt-3 w-full ${errors.reservationLimit ? "border-red-500" : ""}`}
                placeholder="Enter pass reservation limit"
                onChange={(e) => setReservationLimit(e.target.value)}
              />
              {errors.reservationLimit && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.reservationLimit}
                </p>
              )}
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
                value={passDescription}
                maxLength={200}
                className={`style-input w-full mt-3 ${errors.passDescription ? "border-red-500" : ""}`}
                placeholder="Enter a description..."
                onChange={(e) => setPassDescription(e.target.value)}
              />
              {errors.passDescription && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.passDescription}
                </p>
              )}
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <p>Invite message</p>
                <small>{inviteMessage.length}/200 characters</small>
              </div>

              <textarea
                rows={4}
                maxLength={200}
                value={inviteMessage}
                placeholder="Enter a message..."
                className={`style-input w-full mt-3 ${errors.inviteMessage ? "border-red-500" : ""}`}
                onChange={(e) => setInviteMessage(e.target.value)}
              />
              {errors.inviteMessage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.inviteMessage}
                </p>
              )}
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
              <p
                className="text-primaryColC"
                onClick={() => setShowDiscount(true)}
              >
                Add discount
              </p>
              {/* DISCOUNT POP UP */}
              {showDiscount && (
                <div className="w-[647px] h-[383px] border-2 border-slate-300  bg-white absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] p-6">
                  <div
                    className="flex justify-end text-slate-500"
                    onClick={() => setShowDiscount(false)}
                  >
                    <MdCancel size={20} />
                  </div>

                  <div className="flex gap-12 items-center text-xs">
                    <p
                      className={`text-xs font-medium ${activeDiscountType === "codes" && "underline underline-offset-[6px] text-primaryColC"}`}
                      onClick={() => setActiveDiscountType("codes")}
                    >
                      Discount codes
                    </p>
                    <p
                      className={`text-xs font-medium ${activeDiscountType === "criteria" && "underline underline-offset-[6px] text-primaryColC"}`}
                      onClick={() => setActiveDiscountType("criteria")}
                    >
                      Discount criteria
                    </p>
                  </div>
                  {/* Discount codes section */}
                  <div>
                    {" "}
                    <div className="flex flex-col gap-3 mt-16 w-[350px]">
                      {activeDiscountType === "codes" && (
                        <div className="grid grid-cols-2 gap-3">
                          <label htmlFor="" name="coupon_code">
                            Create coupon code
                          </label>
                          <input
                            name="coupon_code"
                            placeholder="enter coupon code"
                            className="p-1 border-2 border-slate-400 focus:outline-none rounded-md w-[294px]"
                          />
                        </div>
                      )}
                      {activeDiscountType === "criteria" && (
                        <div className="grid grid-cols-2 gap-3">
                          <label htmlFor="" name="criteria_type">
                            Criteria type
                          </label>
                          <select
                            name="criteria_type"
                            placeholder="enter coupon code"
                            className="p-1 border-2 border-slate-400 focus:outline-none rounded-md w-[294px]"
                            value={discountType}
                            onChange={(e) => setDiscountType(e.target.value)}
                          >
                            <option defaultValue={""}>
                              select criteria type
                            </option>
                            {[
                              "first 20 pass buyer",
                              "first 50 pass buyer",
                              "first 100 pass buyer",
                            ].map((option, i) => (
                              <option value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3">
                        <label htmlFor="" name="discount_type">
                          Discount type
                        </label>
                        <select
                          name="discount_type"
                          placeholder="enter coupon code"
                          className="p-1 border-2 border-slate-400 focus:outline-none rounded-md w-[294px]"
                          value={discountType}
                          onChange={(e) => setDiscountType(e.target.value)}
                        >
                          <option defaultValue={""}>
                            select discount type
                          </option>
                          {["fixed rate discount", "percentage discount"].map(
                            (option, i) => (
                              <option value={option}>{option}</option>
                            )
                          )}
                        </select>
                      </div>
                      {discountType == "fixed rate discount" && (
                        <div className="grid grid-cols-2 gap-3">
                          <label htmlFor="" name="discount_value">
                            Discount value
                          </label>
                          <input
                            name="discount_value"
                            placeholder="enter discount value"
                            className="p-1 border-2 border-slate-400 focus:outline-none rounded-md w-[294px]"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center  flex-col gap-3 items-center mt-4">
                      <button className="bg-[#4B4B4B] hover:bg-primaryCol text-white py-2 px-4 rounded-md w-[180px] font-semibold">
                        Submit
                      </button>
                      <button className="bg-[#4B4B4B] text-white py-3 px-4 rounded-md w-[190px] font-medium text-sm">
                        coupon code created
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-end items-end gap-4 p-8 mt-20">
          <Continue handleClick={handleValidation}>Continue</Continue>
        </div>
      </div>
    </div>
  );
};

EntryPass.propTypes = {
  passType: PropTypes.string.isRequired,
  allPasses: PropTypes.arrayOf(PropTypes.object).isRequired,
  passName: PropTypes.string.isRequired,
  stockType: PropTypes.string,
  ticketType: PropTypes.string,
  passDescription: PropTypes.string,
  inviteMessage: PropTypes.string,
  reservationLimit: PropTypes.string,
  senderName: PropTypes.string,
  senderEmail: PropTypes.string,
  recipientEmail: PropTypes.string,
  inviteSubject: PropTypes.string,
  passPrice: PropTypes.string,
  setPassType: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  setAllPasses: PropTypes.func.isRequired,
  setPassName: PropTypes.func.isRequired,
  setStockType: PropTypes.func.isRequired,
  setTicketType: PropTypes.func.isRequired,
  setReservationLimit: PropTypes.func.isRequired,
  setPassDescription: PropTypes.func.isRequired,
  setPassPrice: PropTypes.func.isRequired,
  setSenderName: PropTypes.func.isRequired,
  setSenderEmail: PropTypes.func.isRequired,
  setRecipientEmail: PropTypes.func.isRequired,
  setInviteSubject: PropTypes.func.isRequired,
  setInviteMessage: PropTypes.func.isRequired,
};

export default EntryPass;
