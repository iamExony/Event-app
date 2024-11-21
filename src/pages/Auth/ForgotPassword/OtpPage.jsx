import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Picture from "../components/Picture"
import ProgressBars from "../components/ProgressBar";

const OtpPage = ({ nextPage }) => {
    const [count, setCount] = useState(25);
    const [otp, setOtp] = useState(Array(5).fill(""));
    // Progress bar step 2
    const [step, setStep] = useState(2);

    // Getting each otp value
    const handleOtpChange = (event, index) => {
      const { value } = event.target;
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    };
  
    // OTP input delete and navigate function
    const handleKeyDown = (event, index) => {
        // Storing event target and event value
        const e = event.target;
        const value = event.target.value;

        if (event.key === "Backspace" && !otp[index]) {
            const newOtp = [...otp];
            setOtp(newOtp);
            event.preventDefault();
            // Focusing on previous input box when the current input box is empty
            if(value.length === 0){
                e.previousSibling.focus();
            }
        }

        // Focusing on prev input box on "arrow left" click
        else if (event.key === "ArrowLeft" && index > 0) {
            e.previousSibling.focus();
        }
        // Focusing on next input when current input lenght is greater than 1
        else if (value.length > 0 && index < otp.length - 1) {
            e.nextSibling.focus();
        }
    };

    // Countdown function for otp resend
    useEffect(() =>{
        let counter = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearInterval(counter);
    }, [count])

    // Form submit function
    const handleSubmit = (e) =>{
        e.preventDefault();

        // The rest
        nextPage()
    }

    return (
      <div className="flex w-full h-screen overflow-y-hidden">
        {/* <Picture src={`/otp.png`} /> */}

        <div
          className="h-full w-1/2 hidden md:block"
          style={{
            backgroundImage: `url("/images/otp.png")`,
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

          <div className="flex-group gap-8 md:w-[65%] px-5 md:px-0">
            <img
              src="/images/password-check.png"
              className="self-start"
              alt=""
            />

            <form
              action=""
              className="flex-group gap-8"
              onSubmit={handleSubmit}
            >
              <div className="">
                <h3 className="text-xl font-semibold mb-4">Enter OTP code</h3>
                <p className="">
                  We just sent an OTP code to yourown@gmail.com
                </p>
              </div>

              <div className="flex justify-between">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    inputMode="numerical"
                    pattern="[0-9]*"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyUp={(e) => handleKeyDown(e, index)}
                    className="style-input w-[4rem] h-[4rem] text-[2.5rem] text-center"
                  />
                ))}
              </div>

              <div className="flex-group items-center gap-4">
                <button className="bg-primaryCol text-White py-[.7rem] rounded-md hover:brightness-110 w-full">
                  Reset password
                </button>
                {count > 0 ? (
                  <p className="">Resend code in {`(${count}s)`}</p>
                ) : (
                  <p className="">Resend code in (0s)</p>
                )}
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
 
export default OtpPage;