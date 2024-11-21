import { useState } from "react";
import { TextField } from "@mui/material";

const ShowPassword = ({ setCredentials, credentials, placeholder, helper }) => {
  const [visible, setVisible] = useState(false);

  // Toggle password icon
  const toggleIcon = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <div className="relative w-auto">
      <TextField
        label={placeholder ? "Confirm password" : "Password"}
        type={visible ? "text" : "password"}
        variant="outlined"
        value={credentials?.password}
        name="password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="style-input"
        helperText={helper ? helper : ""}
        fullWidth
        required
      />

      <button
        className="absolute top-[50%] right-[2%] -translate-y-[50%] outline-0 cursor-pointer bg-White px-2"
        onClick={toggleIcon}
        aria-label={visible ? "Hidden" : "Show"}
      >
        {visible ? (
          <img
            src="/images/eye.png"
            alt="Hidden"
            aria-hidden="true"
            className=" object-contain"
          />
        ) : (
          <img
            src="/images/Password icon.png"
            alt="Show"
            aria-hidden="false"
            className=""
          />
        )}
      </button>
    </div>
  );
};

export default ShowPassword;
