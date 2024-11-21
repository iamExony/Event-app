import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Picture from "../components/Picture";
import ProgressBars from "../components/ProgressBar";

const ForgotPage = ({ nextPage }) => {
  const [email, setEmail] = useState("");
  // Progress bar step 1
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // The rest
    nextPage();
  };

  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      {/* <Picture src={`/forgot.png`} /> */}

      <div
        className="h-full w-1/2 hidden md:block"
        style={{
          backgroundImage: `url("/images/forgot.png")`,
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

      <div className="flex-group items-center justify-center gap-10 w-full md:w-1/2 h-full overflow-y-auto ">
        <ProgressBars currentStep={step} />

        <div className="flex-group gap-8 w-[70%]">
          <img src="/images/key-square.png" className="self-start" alt="" />

          <form action="" className="flex-group gap-8" onSubmit={handleSubmit}>
            <div className="">
              <h3 className="text-xl font-semibold mb-4">Forgot Password?</h3>
              <p className="">
                No worries, Reset instruction will be sent to your email
              </p>
            </div>

            <TextField
              label="Email address"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="style-input w-full"
              fullWidth
              required
            />

            <div className="flex-group gap-4">
              <button className="bg-primaryCol text-White py-[.7rem] rounded-md hover:brightness-110">
                Reset password
              </button>
              <p className="self-center">
                Back to
                <Link to="?mode=login" className="text-primaryCol">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;
