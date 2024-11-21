import { InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import vendors from "../utils/Vendors";

import { BsChevronDown } from "react-icons/bs";

const SelectInput = ({ select, setSelect, credentials, setCredentials }) => {
  const handleOpen = (e) => {
    document.querySelector(".select").click();
  };

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    padding: theme.spacing(1.5),
    "&:hover": {
      color: "#fff",
      backgroundColor: "#0065A5",
    },
    marginInline: "15px",
    borderRadius: "5px",
  }));

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
        width: "20ch",
      },
    },
  };

  return (
    <>
      <InputLabel>Type of event</InputLabel>

      <Select
        // value={select}
        // onChange={(e) => setSelect(e.target.value)}
        value={credentials?.exhibit}
        onChange={(e) =>
          setCredentials({ ...credentials, exhibit: e.target.value })
        }
        MenuProps={MenuProps}
        name="event"
        className="select"
        IconComponent={() => (
          <BsChevronDown
            className="text-2xl text-bodyText mr-4 cursor-pointer"
            onClick={handleOpen}
          />
        )}
      >
        {vendors.map((vendor) => (
          <StyledMenuItem key={vendor} value={vendor}>
            <font>{vendor}</font>
          </StyledMenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectInput;
