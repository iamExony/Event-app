import { useEffect, useState } from "react";
import SpecificationStructure from "./SpecificationStructure";

import PaymentStructure from "./PaymentStructure";
import Summary from "./Summary";
import { Stepper } from "../../../components/Stepper";
import ProspectDetails from "./ProspectDetails";
import OfferPupUp from "../components/OfferPupUp";
import Done from "./Done";
import { useFetchProspect } from "./../../../../hook/query/useFetchProspect";
import { useNavigate } from "react-router-dom";

function AddOffers() {
  //steps variable
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const steps = ["Specification Structure", "Payment Structure", "Summary"];

  const navigate = useNavigate();
  const id = location.pathname.split("/")[3]?.toLowerCase();
  const { data, isLoading } = useFetchProspect(id);
  const [offer, setOffer] = useState({});
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(
    [data?.data?.data?.event?.specification?.theme] || ""
  );

  console.log({ data });

  const eventData = data?.data?.data?.event;
  const prospectData = data?.data?.data;

  console.log({ eventData });
  console.log({ prospectData });

  const [paymentType, setPaymentType] = useState("Lump Sum");
  const [lumpInitialDeposit, setLumpInitialDeposit] = useState();
  const [specificationInitialDeposit, setSpecificationInitialDeposit] =
    useState();

  const [clientType, setClientType] = useState(
    prospectData?.client?.type || ""
  );
  const [clientName, setClientName] = useState(
    prospectData?.client?.name || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    prospectData?.client?.phone_number || ""
  );
  const [email, setEmail] = useState(prospectData?.client?.email || "");

  const [allSpecifications, setAllSpecifications] = useState([]);

  console.log({ allSpecifications });

  let activities = allSpecifications.filter((spec) => spec.title);
  let provisions = allSpecifications.filter((spec) => spec.provision);

  const updatedActivities = activities.map(({ type, id, ...rest }) => ({
    ...rest,
  }));

  const updatedProvisions = provisions.map(({ type, id, ...rest }) => ({
    ...rest,
  }));

  console.log({ activities, provisions });
  console.log({ updatedActivities, updatedProvisions });

  const offerData = {
    payment_structure: {
      structure: paymentType,
      initial_deposit: checked,
      initial_deposit_amount: specificationInitialDeposit || 0,
    },
    specification: {
      theme: theme[0],
      activities: updatedActivities,
      provisions: updatedProvisions,
    },
    client: {
      type: clientType,
      email: email,
      name: clientName,
      phone_number: phoneNumber,
    },

    event: eventData,
  };

  console.log({ offerData });

  return (
    <div className="border-2 border-solid border-borderColor rounded-md px-4 md:px-16 py-12 my-7 mx-4">
      <Stepper currentStep={currentStep} complete={complete} steps={steps} />

      {currentStep === 1 && (
        <SpecificationStructure
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setComplete={setComplete}
          steps={steps}
          theme={theme}
          setTheme={setTheme}
          allSpecifications={allSpecifications}
          setAllSpecifications={setAllSpecifications}
          // specifications={specifications}
          // setSpecifications={setSpecifications}
        />
      )}
      {currentStep === 2 && (
        <PaymentStructure
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setComplete={setComplete}
          steps={steps}
          paymentType={paymentType}
          setPaymentType={setPaymentType}
          lumpInitialDeposit={lumpInitialDeposit}
          setLumpInitialDeposit={setLumpInitialDeposit}
          specificationInitialDeposit={specificationInitialDeposit}
          setSpecificationInitialDeposit={setSpecificationInitialDeposit}
          checked={checked}
          setChecked={setChecked}
        />
      )}

      {!complete &&
        currentStep === 3 &&
        (!showSummary ? (
          <ProspectDetails
            setShowSummary={setShowSummary}
            clientName={clientName}
            setClientName={setClientName}
            clientType={clientType}
            setClientType={setClientType}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            email={email}
            setEmail={setEmail}
          />
        ) : (
          <Summary
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setComplete={setComplete}
            steps={steps}
            setShowSummary={setShowSummary}
            setIsOpen={setIsOpen}
            offer={offer}
            offerData={offerData}
            allSpecifications={allSpecifications}

            // specifications={specifications}
          />
        ))}

      {isOpen && <OfferPupUp setIsOpen={setIsOpen} />}

      {complete && currentStep === 3 && <Done />}
    </div>
  );
}

export default AddOffers;
