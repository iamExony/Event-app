import { useState } from "react";
import Stages from "../../../components/Stages";
import { TbCurrencyNaira } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import congrats from "/images/dashboard/congrats.png";
import { Link } from "react-router-dom";
import FormStages from "../../../components/FormStages";
import CancellationPolicy from "./CancellationPolicy";
import PaymentSchedule from "./PaymentSchedule";
import Summary from "./Summary";
import ContractPupUp from "../components/ContractPopUp";
import { useFetchOffer } from "./../../../../hook/query/useFetchOffer";

const AddContracts = () => {
  const [step, setStep] = useState(1);
  const [refundPolicy, setRefundPolicy] = useState("refundable");
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [percentageNonRefundable, setPercentageNonRefundable] = useState(0);
  const [specifiedBy, setSpecifiedBy] = useState("client");

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [paymentSchedules, setPaymentSchedules] = useState([]);
  const stages = ["Cancellation Policy", "Payment Schedule", "Summary"];

  const id = location.pathname.split("/")[3]?.toLowerCase();
  const { data, isLoading } = useFetchOffer(id);

  console.log({ data });
  console.log("step::", step);

  const offerData = data?.data?.data;
  console.log({ offerData });

  const [clientType, setClientType] = useState(
    offerData?.event?.client?.type || ""
  );
  const [clientEmail, setClientEmail] = useState(
    offerData?.event?.client?.email || ""
  );
  const [clientName, setClientName] = useState(
    offerData?.event?.client?.name || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    offerData?.event?.client?.phone_number || ""
  );
  const [paymentTitle, setPaymentTitle] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentAmount, setPaymentAmount] = useState();
  const [paymentDetails, setPaymentDetails] = useState([]);

  const contractData = {
    cancellation_policy: {
      refund_policy: refundPolicy,
      notice_days: numberOfDays,
      percentage_of_fee: percentageNonRefundable,
      specified_by: specifiedBy,
    },

    client: {
      type: clientType,
      email: clientEmail,
      name: clientName,
      phone_number: phoneNumber,
    },

    payment_details: paymentDetails,
    //   [
    //   {
    //     title_of_deliverable: "Payment for conference hall",
    //     amount: 68000,
    //     payment_style: "lump_sum",
    //     due_date: "2024-11-25",
    //   },
    // ],

    event: {
      number_of_guests: offerData?.event?.number_of_guests || 0,
      date: offerData?.event?.date,
      type: offerData?.event?.type,
      description: offerData?.event?.description,
      city: offerData?.event?.city,
      state: offerData?.event?.state,
      location_type: offerData?.event?.location_type,
      specification: offerData?.event?.specification,
      // {
      //   theme: "Coronation",
      //   activities: [
      //     {
      //       title: "Omele Dance",
      //       description: "The coronation",
      //       vendor_name: "Kola",
      //       start_date: "2024-12-28",
      //       end_date: "2024-12-28",
      //       amount: 68000,
      //     },
      //   ],
      //   provisions: [
      //     {
      //       provision: "DJ",
      //       description: "Play only dirge",
      //       vendor_name: "DJ Zoo",
      //       start_date: "2024-12-28",
      //       end_date: "2024-12-28",
      //       amount: 25000,
      //     },
      //   ],
      // },
    },
  };

  console.log({ contractData });
  console.log("popupIsOpen::", popupIsOpen);

  const handleContinue = (e) => {
    e.preventDefault();
    if (step === 1) {
      const modifiedRefundPolicy =
        refundPolicy === "Refundable" ? "refundable" : "non_refundable";
      setRefundPolicy(modifiedRefundPolicy);
    }
    setStep(step + 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full my-7 py-6">
      <FormStages step={step} steps={stages} />

      {/* step 1 */}
      {step === 1 && (
        <CancellationPolicy
          handleContinue={handleContinue}
          refundPolicy={refundPolicy}
          setRefundPolicy={setRefundPolicy}
          numberOfDays={numberOfDays}
          setNumberOfDays={setNumberOfDays}
          percentageNonRefundable={percentageNonRefundable}
          setPercentageNonRefundable={setPercentageNonRefundable}
          specifiedBy={specifiedBy}
          setSpecifiedBy={setSpecifiedBy}
        />
      )}

      {/* step 2 */}
      {step === 2 && (
        <PaymentSchedule
          handleContinue={handleContinue}
          handleBack={handleBack}
          paymentSchedules={paymentSchedules}
          setPaymentSchedules={setPaymentSchedules}
          paymentTitle={paymentTitle}
          setPaymentTitle={setPaymentTitle}
          paymentDate={paymentDate}
          setPaymentDate={setPaymentDate}
          paymentAmount={paymentAmount}
          setPaymentAmount={setPaymentAmount}
          paymentDetails={paymentDetails}
          setPaymentDetails={setPaymentDetails}
        />
      )}

      {/* step 3 */}
      {step === 3 && (
        <Summary
          handleBack={handleBack}
          handleContinue={handleContinue}
          paymentSchedules={paymentSchedules}
          setPopupIsOpen={setPopupIsOpen}
          contractData={contractData}
          setStep={setStep}
        />
      )}

      {/* congrats */}
      {step === 4 && (
        <div className={` flex flex-col items-center justify-center`}>
          <img src={congrats} alt="congrats" className="w-[493px]" />
          <Link
            to="/contracts/all-contracts"
            className="text-xl text-white bg-primaryCol rounded-lg py-4 px-10"
          >
            View all contracts
          </Link>
        </div>
      )}

      {popupIsOpen && <ContractPupUp setPopupIsOpen={setPopupIsOpen} />}
    </div>
  );
};

export default AddContracts;
