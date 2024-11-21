import * as React from "react";
import {
  StepContent,
  StepLabel,
  Stepper,
  Step,
  Box,
  Typography,
} from "@mui/material";
import { steps1 } from "./StepperDatas";
import { useState } from "react";

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (index) => {
    setActiveStep(index);
  };

  return (
    <Box>
      <div className=" md:px-[60px] mt-5 md:flex gap-8 w-full h-full">
        <div className="md:w-1/2 pt-4">
          <h3 className="text-xl md:text-[40px] font-semibold">
            Take your event to the next level
          </h3>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            sx={{ mt: "2rem", fontFamily: "Euclid Circular A" }}
          >
            {steps1.map((step, index) => (
              <Step key={step.label}>
                <StepLabel onClick={handleNext.bind(null, index)}>
                  {step.label}
                </StepLabel>
                <StepContent TransitionProps={{ unmountOnExit: false }}>
                  <Typography sx={{ color: "#F7FBFD", marginLeft: "1.5rem" }}>
                    {step.description}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <button className="flex  py-4 w-full  md:w-[129px] bg-primaryCol text-white rounded-md justify-center hover:bg-primaryHover mt-8">
            Get started
          </button>
        </div>
        <div className=" w-1/2 h-[560px] hidden md:block">
          <img
            src={`./images/How-it-works${activeStep + 1}.png`}
            className="rounded-2xl h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </Box>
  );
}
