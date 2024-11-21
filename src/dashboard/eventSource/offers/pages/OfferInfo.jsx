import React, { useState } from 'react'
import FormStages from '../../../components/FormStages';
import OfferStage from '../components/OfferStage';

const OfferInfo = () => {
  const [step, setStep] = useState(2);

  const steps = [
    "Prospect Stage",
    "Offer Stage",
    "Contract Stage",
    "Payment Stage",
  ];

  return (
    <div className="border-2 border-slate-300 rounded-md m-6 p-6">
      <div className="w-[70%] m-auto">
        <FormStages step={step} steps={steps} />
      </div>

      {step === 2 && <OfferStage setStep={setStep} />}
    </div>
  );
}

export default OfferInfo