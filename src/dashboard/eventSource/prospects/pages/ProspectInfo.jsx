import { useState } from "react";
import FormStages from "../../../components/FormStages";
import ProspectStage from './ProspectStage'

function ProspectInfo() {
  const [step, setStep] = useState(1);

  const steps = [
    "Prospect Stage",
    "Offer Stage",
    "Contract Stage",
    "Payment Stage",
  ];
  const prospects = {
    clientType: 'Individual',
    clientName:'sola alison',
    clientEmail: 'alison@gmail.com',
    clientNumber: '09087654321',
    eventName: 'ade2020',
    eventType: 'wedding party',
    eventDate: '23-43-90',
    eventLocation: 'ajah, lagos',
    eventAddress: 'lagos',
    theme: 'contemporary',
    intakeDate: '12-04-2024',
    allSpecifications:[],
  }
  return (
    <div className="border-2 border-slate-300 rounded-md m-6 p-6">

        <div className="w-[70%] m-auto">

      <FormStages step={step} steps={steps} />
        </div>

      {step === 1 && <ProspectStage setStep={setStep} prospects={prospects} />}
    </div>
  );
}

export default ProspectInfo;
