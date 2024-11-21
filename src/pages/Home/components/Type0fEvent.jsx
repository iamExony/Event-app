import locationIcon from "/images/location.svg";
import calendar from "/images/calendar.svg";
import { FiSearch } from "react-icons/fi";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Vendors, { cities } from "../../../utils/Vendors";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Type0fEvent = () => {
  const [exhibitortype, setExhibitorType] = useState("");
  const [location, setLocation] = useState("");
  const [suggestExhibitor, setSuggestExhibitor] = useState(false);
  const [suggestLocal, setSuggestLocal] = useState(false);

  const [filteredDataExhibitor, setFilteredDataExhibitor] = useState([]);
  const [filteredDataLocal, setFilteredDataLocal] = useState([]);

  const changeExhibitor = (e) => {
    setSuggestExhibitor(true);
    setExhibitorType(e.target.value);
    const newFilterexhibitor = Vendors.filter((val) =>
      val.toLowerCase().includes(exhibitortype.toLowerCase())
    );
    setFilteredDataExhibitor(newFilterexhibitor);
  };

  const formattedCities = [];

  cities.forEach((state) => {
    const stateName = state.name;
    state.cities.forEach((city) => {
      formattedCities.push(`${city},${stateName}`);
    });
  });

  const changeLocation = (e) => {
    setSuggestLocal(true);
    setLocation(e.target.value);
    const newFilterLocal = formattedCities.filter((val) =>
      val.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredDataLocal(newFilterLocal);
  };

  const submitExhibitor = (type) => {
    setExhibitorType(type);
    setSuggestExhibitor(false);
  };

  const submitLocation = (type) => {
    setLocation(type);
    setSuggestLocal(false);
  };

  return (
    // < action="" className="flex mr-[202px] ml-[202px] bg-white p-[22px]">
    <Box
      component="form"
      sx={{
        display: "flex",
        position: "relative",
        zIndex: "20",
        alignItems: "center",
        justifyContent: "center",
        margin: {
          xs: "0px 20px",
          sm: "0rem 202px",
        },
        top: "-2rem",
        borderRadius: "1rem",
        gap: { sm: "1rem", xs: "0px" },
        height: {
          xs: "380px",
          sm: "88px",
        },
        padding: { sm: "0rem 21px", xs: "20px 20px" },
        backgroundColor: "white",
        boxShadow: "0px 1px 8px 1px rgba(15, 76, 129, 0.1)",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <div className="relative w-full">
        <TextField
          id="search"
          placeholder="What type of event vendor are you looking for?"
          variant="standard"
          value={exhibitortype}
          onChange={changeExhibitor}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <FiSearch size={15} color="#4B5B65" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: {
              fontWeight: "500",
              fontSize: "1rem",
              fontFamily: "Euclid Circular A",
            },
          }}
        />

        {suggestExhibitor && exhibitortype !== "" && (
          <div className=" suggestion ">
            {filteredDataExhibitor.map((type, key) => (
              <p
                key={key}
                className="tex-sm hover:text-white px-5 py-2 hover:bg-primaryCol border-b-[1px] border-b-gray-100"
                value={type}
                onClick={submitExhibitor.bind(null, type)}
              >
                {type}
              </p>
            ))}
          </div>
        )}
      </div>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          height: "2.5rem",
          marginTop: "1.5rem",
        }}
      />

      <div className="relative w-full">
        <TextField
          id="location"
          placeholder="Location"
          variant="standard"
          value={location}
          onChange={changeLocation}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={locationIcon} className="h-5 w-5" alt="" />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: {
              fontWeight: "500",
              fontSize: "1rem",
              fontFamily: "Euclid Circular A",
            },
          }}
        />

        {suggestLocal && location !== "" && (
          <div className=" suggestion ">
            {filteredDataLocal.map((type, key) => (
              <p
                key={key}
                className="tex-sm hover:text-white px-5 py-2 hover:bg-primaryCol border-b-[1px] border-b-gray-100"
                value={type}
                onClick={submitLocation.bind(null, type)}
              >
                {type}
              </p>
            ))}
          </div>
        )}
      </div>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ height: "2.5rem", marginTop: "1.5rem" }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DateField"]}
          sx={{
            overflowX: "hidden",
            width: "70%",
            zIndex: "20",
            marginTop: "-0.5rem",
          }}
          fullWidth
        >
          <DateField
            placeholder="Date of event"
            variant="standard"
            sx={{
              "& .MuiInputBase-root": {
                borderBottom: "none", // remove input bottom border
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={calendar} className="h-5 w-5" alt="" />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: {
                fontWeight: "500",
                fontSize: "1rem",
                fontFamily: "Euclid Circular A",
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <button className="flex px-14 py-4  w-[94px] bg-primaryCol text-white rounded-md justify-center hover:bg-primaryHover mt-4 md:mt-0">
        Search
      </button>
    </Box>
  );
};

export default Type0fEvent;
