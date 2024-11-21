import { GoogleLogin } from "react-google-login";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

const ContinueWith = () => {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESSFUL, USER::", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED:: ", res);
  };

  return (
    <div className="flex-group items-center gap-12 md:w-3/5 mx-auto">
      <div className="flex justify-center w-full">
        <span className="flex gap-2 justify-center items-center w-full before:content-[''] before:block before:h-[.05rem] before:w-[30%] before:bg-[#CCD1D4] after:content-[''] after:inline-block after:h-[.05rem] after:w-[30%] after:bg-[#CCD1D4]">
          Or continue with
        </span>
      </div>

      <div className="flex gap-6">
        <button className="continue-with">
          <img src="/images/Google.png" alt="" />
          <span className="">Google</span>
        </button>
        {/* <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div> */}

        <button className="continue-with">
          <img src="/images/Facebook.png" alt="" />
          <span className="">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default ContinueWith;
