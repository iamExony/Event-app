import * as React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";
import VerticalLinearStepper from "./steppers/VerticalSteppers";
import VerticalLinearStepper2 from "./steppers/VerticalSteppers2";

const HowItWorks = () => {
  const [alignment, setAlignment] = useState("host");

  const handleChange = (event) => {
    setAlignment(event.target.value);
  };

  return (
    <>
      <section className=" py-20 text-white mx-5">
        <div className=" bg-DarkMode rounded-2xl pt-[30px] px-[20px] md:px-0 md:pt-[60px] md:h-[56rem] pb-5 md:pb-0">
          <div className="  flex flex-col gap-5 items-center">
            <h2 className="font-bold text-3xl text-center md:text-5xl">
              HOW IT WORKS
            </h2>
            <p className="md:mt-2 md:text-xl text-center">
              Manage your event from start to finish either as a host or vendor
            </p>

            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton
                value="host"
                sx={{
                  color: "white",
                  textTransform: "inherit",
                  outline: ".1rem solid #DF3602",
                  fontSize: "1rem",
                  fontWeight: "500",
                  width: { sm: "189px", xs: "90px" },
                  "&.Mui-selected": {
                    backgroundColor: "#DF3602",
                    border: "1px solid #DF3602",
                    color: "white",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "#DF3602",
                    border: "1px solid #DF3602",
                  },
                }}
              >
                <span className="hidden md:block">For event host</span>
                <span className="block md:hidden">Host</span>
              </ToggleButton>
              <ToggleButton
                value="exhibitor"
                sx={{
                  color: "white",
                  outline: ".1rem solid #DF3602",
                  textTransform: "inherit",
                  fontSize: "1rem",
                  fontWeight: "500",
                  width: { sm: "189px", xs: "90px" },

                  "&.Mui-selected": {
                    backgroundColor: "#DF3602",
                    border: "1px solid #DF3602",
                    color: "white",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "#DF3602",
                    border: "1px solid #DF3602",
                  },
                }}
              >
                <span className="hidden md:block">For event vendor</span>
                <span className="block md:hidden">Vendor</span>
              </ToggleButton>
            </ToggleButtonGroup>

            {alignment === "host" ? (
              <VerticalLinearStepper />
            ) : (
              <VerticalLinearStepper2 />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
