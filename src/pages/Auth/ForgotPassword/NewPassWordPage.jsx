import { useState } from "react";
import { Link } from "react-router-dom";
import Picture from "../components/Picture"
import ProgressBars from "../components/ProgressBar";
import Password from "../components/Password"

const NewPassWordPage = ({ nextPage }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // Progress bar step 3
    const [step, setStep] = useState(3);

    const handleSubmit = (e) =>{
        e.preventDefault();

        // The rest
        nextPage();
    }

    return (
      <div className="flex w-full h-screen overflow-y-hidden">
        {/* <Picture src={`/new-password.png`} /> */}

        <div
          className="h-full w-1/2 hidden md:block"
          style={{
            backgroundImage: `url("/images/new-password.png")`,
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

          <div className="flex-group gap-8 md:w-[70%] px-5 md:px-0">
            <img src="/images/lock.png" className="self-start" alt="" />

            <form
              action=""
              className="flex-group gap-8"
              onSubmit={handleSubmit}
            >
              <div className="">
                <h3 className="text-xl font-semibold mb-4">
                  Create new password
                </h3>
                <p className="">
                  Password must contain at least1 letter, 1 number, and 1 symbol
                </p>
              </div>

              <Password
                password={password}
                setPassword={setPassword}
                helper="Must be at least 6 characters long"
              />

              <Password
                password={confirmPassword}
                setPassword={setConfirmPassword}
                placeholder={"Confirm password"}
                helper="Both passwords must match"
              />

              <div className="flex-group gap-4">
                <button className="bg-primaryCol text-White py-[.7rem] rounded-md hover:brightness-110">
                  Reset password
                </button>
                <p className="self-center">
                  Back to{" "}
                  <Link to="?mode=login" className="text-primaryCol">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default NewPassWordPage;