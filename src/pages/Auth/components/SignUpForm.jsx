import { useState } from "react";
import { Form, Link, useNavigation } from "react-router-dom";
import { TextField, FormControl } from "@mui/material";
import SelectInput from "../../../components/Select";
import ContinueWith from "./ContinueWith";
import Password from "./Password";
import ErrorMessage from "./ErrorMessage";
import useSignup from "../../../hook/mutations/useSignup";

const SignUpForm = ({ response }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    type: "vendor",
    password: "",
    exhibit: "",
  });

  const formattedExhibit = credentials.exhibit
    ?.toLowerCase()
    .replace(/\s/g, "_");

  console.log("formattedExhibit::", formattedExhibit);

  console.log({ credentials });

  const { mutate } = useSignup();

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const modifiedCredentials = {
      ...credentials,
      exhibit: formattedExhibit,
    };

    mutate(modifiedCredentials, {
      onSettled: () => {
        setIsLoading(false);
      },
    });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");

  const [isVendor, setIsVendor] = useState(
    () => localStorage.getItem("type") || "host"
  );

  const handleUserTypeChange = (type) => {
    setIsVendor(type);
    localStorage.setItem("type", type);
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="md:flex items-center p-0 text-bodyText border-red-600 w-full h-screen">

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

      <div className="w-full md:w-1/2 py-[5rem] h-full overflow-y-auto px-5 md:px-0">
        <div className="md:w-3/5 mx-auto pb-8 text-center md:text-start">
          <h2 className="text-2xl text-black font-medium ">
            Welcome to E-vent
          </h2>
        </div>

        <div className="flex justify-between md:w-3/5 w-full mb-8 mx-auto border-2 border-solid border-primaryCol rounded-xl ">
          <button
            className={`sign-up-as ${isVendor === "host" ? "actives" : ""}`}
            onClick={() => {
              setIsVendor("host");
              setCredentials({ ...credentials, type: "host" });
            }}
          >
            Sign up as a host
          </button>

          <button
            className={`sign-up-as ${isVendor === "vendor" ? "actives" : ""}`}
            // onClick={() => handleUserTypeChange("vendor")}
            onClick={() => {
              setIsVendor("vendor");
              setCredentials({ ...credentials, type: "vendor" });
            }}
          >
            Sign up as a vendor
          </button>
        </div>

        {/* Upper Login form elements */}
        <Form
          onSubmit={handleSignup}
          className="flex-group gap-8 pb-8 md:w-3/5 mx-auto"
        >
          <div className="flex gap-6">
            <TextField
              label="First name"
              name="firstname"
              type="text"
              variant="outlined"
              value={credentials?.firstname}
              onChange={(e) =>
                setCredentials({ ...credentials, firstname: e.target.value })
              }
              className="style-input w-1/2"
              fullWidth
              required
            />

            <TextField
              label="Last name"
              type="text"
              variant="outlined"
              name="lastname"
              value={credentials?.lastname}
              onChange={(e) =>
                setCredentials({ ...credentials, lastname: e.target.value })
              }
              className="style-input w-1/2"
              fullWidth
              required
            />
          </div>

          <div className="w-auto">
            <TextField
              label="Email address"
              type="email"
              variant="outlined"
              name="email"
              value={credentials?.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              className="style-input"
              fullWidth
              required
            />
          </div>

          <Password credentials={credentials} setCredentials={setCredentials} />

          {isVendor === "vendor" && (
            <FormControl className="w-full cursor-pointer">
              <SelectInput
                select={select}
                setSelect={setSelect}
                credentials={credentials}
                setCredentials={setCredentials}
              />
            </FormControl>
          )}
          <button
            className="bg-primaryCol text-White py-[.9rem] rounded-md hover:bg-primaryHover"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Create an account"}
          </button>
        </Form>

        {/* Lower Login elements */}
        <ContinueWith />

        <div className="md:w-3/5 mx-auto mt-8 text-center">
          <span className="">Already have an account?</span>
          <Link to="?mode=login" className="text-primaryCol ml-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
