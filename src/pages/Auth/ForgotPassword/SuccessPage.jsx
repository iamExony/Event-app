import { useState } from "react";
import { Link } from "react-router-dom";
import Picture from "../components/Picture";
import ProgressBars from "../components/ProgressBar";

const SuccessPage = () => {
  // Progress bar step 4
  const [step, setStep] = useState(4);

  const handleSubmit = (e) => {
    e.preventDefault();

    // The rest
  };

  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      {/* <Picture src={`/success.png`} /> */}

      <div
        className="h-full w-1/2 hidden md:block"
        style={{
          backgroundImage: `url("/images/success.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <Link to="/">
            <img
              src="/images/auth-logo.png"
              className="absolute top-[8%] left-[8%]"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="flex-group items-center justify-around md:w-1/2 w-full">
        <ProgressBars currentStep={step} />
        <div className="flex-group translate-y-[-80%] gap-8 md:w-[70%] w-full mt-10 px-5 md:px-0">
          <img src="/images/shield-tick.png" className="self-start" alt="" />

          <form action="" className="flex-group gap-8" onSubmit={handleSubmit}>
            <div className="">
              <h3 className="text-xl font-semibold mb-4">
                Password Reset Successful!
              </h3>
              <p className="">Your password has been successfully reset</p>
            </div>

            <div className="">
              <Link to="?mode=login">
                <button className="bg-primaryCol text-White py-[.7rem] rounded-md hover:brightness-110 w-full">
                  Back to login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
