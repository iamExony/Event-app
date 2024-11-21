import { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import { TextField } from "@mui/material";
import useLogin from "./../../../hook/mutations/useLogin";
import ContinueWith from "./ContinueWith";
import Picture from "./Picture";
import Password from "./Password";
import { gapi } from "gapi-script";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

const LogInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { mutate: loginMutate } = useLogin();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  var accessToken = gapi?.auth?.getToken()?.access_token;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    loginMutate(credentials, {
      onSettled: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <section className="md:flex p-0 text-bodyText border-red-600 w-full h-screen overflow-y-hidden">
      {/* <Picture
        src={`/auth-bg.png`}
        // height={"h-[calc(100vh+9rem)]"}
      /> */}

      <div
        className="h-full w-1/2 hidden md:block"
        style={{
          backgroundImage: `url("/images/auth-bg.png")`,
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

      <div className="w-full md:w-1/2 relative py-[5rem] h-full overflow-y-auto px-5 md:px-0">
        <Form
          className="flex-group gap-8 pb-8 md:w-3/5 mx-auto"
          onSubmit={handleLogin}
        >
          <div className="flex-group gap-10">
            <h2 className="text-2xl text-Black font-medium ">
              Welcome Back to E-vent
            </h2>
            <TextField
              label="Email address"
              type="email"
              variant="outlined"
              value={credentials?.email}
              name="email"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              className="style-input"
              fullWidth
              required
            />

            <Password
              credentials={credentials}
              setCredentials={setCredentials}
            />
          </div>

          <div className="flex-group gap-6">
            <div className="flex justify-between">
              <Link to="?mode=forgetPassword" className="text-primaryCol">
                Forgot password?
              </Link>
            </div>

            <button
              className="bg-primaryCol text-White py-[.7rem] rounded-md hover:bg-primaryHover"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </Form>
        <ContinueWith />
        <div className="md:w-3/5 mx-auto mt-8 text-center">
          <span>Don't have an account?</span>
          <Link to="?mode=signup" className="text-primaryCol ml-2">
            Create an account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogInForm;
