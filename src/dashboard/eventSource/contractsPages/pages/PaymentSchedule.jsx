import { HiDotsVertical, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { TbCurrencyNaira } from "react-icons/tb";
import { Back, Continue } from "../../../components/Buttons";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import OptionButton from "../../offers/components/OptionButton";

function PaymentSchedule({
  handleContinue,
  handleBack,
  paymentSchedules,
  setPaymentSchedules,
  paymentTitle,
  setPaymentTitle,
  paymentDate,
  setPaymentDate,
  paymentAmount,
  setPaymentAmount,
  paymentDetails,
  setPaymentDetails,
}) {
  const [titleOfDeliverable, setTitleOfDeliverable] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [amount, setAmount] = useState("");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (titleOfDeliverable !== "" || dueDate !== "" || amount !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [titleOfDeliverable, dueDate, amount]);

  //Generating ID for each Specification
  function generateUniqueID() {
    return Math.floor(Math.random() * Date.now());
  }

  const payment = {
    dueDate,
    titleOfDeliverable,
    amount,
    id: generateUniqueID(),
  };

  //   Clear input
  function handleClear(e) {
    e.preventDefault();
    setTitleOfDeliverable("");
    setDueDate("");
    setAmount("");
  }

  //Adding new payment schedule
  function handleAddPaymentSchedule(e) {
    e.preventDefault();
    // setPaymentSchedules((detail) => [...detail, payment]);
    setPaymentDetails((prev) => [
      ...prev,
      {
        title_of_deliverable: paymentTitle,
        due_date: paymentDate,
        amount: paymentAmount,
        payment_style: "lump_sum",
      },
    ]);

    setPaymentTitle("");
    setPaymentDate("");
    setPaymentAmount(0);
    handleClear();
  }

  const disableAdd =
    paymentAmount === 0 || paymentTitle === "" || paymentDate == "";

  return (
    <div className="border border-[#2d2c2c66] rounded-lg md:w-[80%] mx-4 md:mx-auto">
      <h3 className="font-semibold px-4 md:px-10 py-6 border-b border-[#2d2c2c66] text-xl">
        Payment Schedule
      </h3>
      <form className="px-4 md:px-10 flex flex-col gap-6 pt-7">
        <div className="flex flex-col gap-3">
          <label htmlFor="Title of Deliverable" className="font-medium">
            Title of Deliverable
          </label>
          <input
            type="text"
            name="Title of Deliverable"
            value={paymentTitle}
            onChange={(e) => setPaymentTitle(e.target.value)}
            className="border px-3 py-4 border-slate-300 rounded-md focus:outline-none text-black"
            placeholder="Enter title of scope deliverable"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="due date" className="font-medium">
            Due Date
          </label>
          <input
            type="date"
            name="due date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            className="border px-3 py-4 border-slate-300 rounded-md focus:outline-none text-black uppercase"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="amount" className="font-medium">
            Amount{" "}
          </label>
          <div className="relative w-full">
            <TbCurrencyNaira className="absolute top-[50%] -translate-y-[50%] ml-4 text-bodyText mb-1 text-xl" />
            <input
              type="number"
              name="amount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(Number(e.target.value))}
              className="border px-3 py-4 border-slate-300 rounded-md focus:outline-none text-black w-full pl-10"
            />
          </div>
        </div>

        {/* <div>
          <button
            type="button"
            //   onClick={() => setStep(step - 1)}
            className="px-8 py-2 border border-primaryCol text-sm text-primaryCol rounded-lg mr-8"
          >
            <RxCross1 className="inline-block mb-1 mr-2 text-sm" />
            <span className="font-semibold">Remove</span>{" "}
          </button>
          <button className="px-8 py-[10px] bg-primaryCol rounded-lg text-sm text-white font-semibold">
            Save schedule
          </button>
        </div> */}

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
            disabled={disableAdd}
            onClick={handleAddPaymentSchedule}
            className="md:min-w-1/6 py-2 px-4 rounded-md text-White bg-primaryCol disabled:bg-borderGrey disabled:cursor-not-allowed"
          >
            Save schedule
          </button>
        </div>
      </form>

      {/* Payment schedule list */}
      {paymentDetails.length >= 1 && (
        <section className="p-6">
          <div className="grid grid-cols-7 my-4  text-sm">
            <p></p>
            <p className=" col-span-4">
              <span>{paymentDetails.length}</span>{" "}
              {paymentDetails.length > 1
                ? "Payment schedules"
                : "Payment schedule "}
            </p>
            <p className=" font-semibold text-right">Amount:</p>

            <span className="text-primaryCol flex font-semibold">
              <TbCurrencyNaira className="text-xl ml-2" />
              {paymentDetails.reduce(function (acc, detail) {
                return Number(detail?.amount) + Number(acc);
              }, 0)}
            </span>
          </div>

          <div>
            <div className="grid grid-cols-7 font-medium text-left">
              <span>S/N</span>
              <span className="col-span-2">Due Date</span>
              <span className="col-span-2"> Title of Deliverable</span>
              <span className="text-right">Amount</span>
            </div>

            <ul className="flex flex-col gap-6 mt-6">
              {paymentDetails.map((detail, i) => (
                <li className="grid grid-cols-7 text-left" key={detail.id}>
                  <p className=" text-primaryCol">#{i + 1}</p>
                  <p className="col-span-2 capitalize ">{detail.due_date}</p>

                  <p className="col-span-2 capitalize ">
                    {detail.title_of_deliverable}
                  </p>
                  <p className=" text-right">{detail.amount}</p>

                  <div className=" text-right ">
                    <OptionButton
                    //   specifications={specifications}
                    //   setSpecifications={setSpecifications}
                    //   specificationId={detail.id}
                    //   setSpecificationType={setSpecificationType}
                    //   setProvision={setProvision}
                    //   setActivity={setActivity}
                    //   setDescription={setDescription}
                    //   setStartDate={setStartDate}
                    //   setEndDate={setEndDate}
                    //   setAmount={setAmount}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className="flex justify-end gap-4 mt-20 mb-6 px-6">
        <Back handleClick={handleBack}>Back</Back>
        <Continue handleClick={handleContinue}>Continue</Continue>
      </div>
    </div>
  );
}

export default PaymentSchedule;
