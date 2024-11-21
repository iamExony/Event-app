import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { Form, Link } from "react-router-dom";
import Vendors, { cities } from "../../../utils/Vendors";

const SearchForm = () => {
  const [personneltype, setPersonnelType] = useState("");
  const [location, setLocation] = useState("");
  const [suggestpersonnel, setSuggestPersonnel] = useState(false);
  const [suggestLocal, setSuggestLocal] = useState(false);

  const [filteredDataPersonnel, setFilteredDataPersonnel] = useState([]);
  const [filteredDataLocal, setFilteredDataLocal] = useState([]);

  // [...filteredDataPersonnel] === personneltype
  //   ? setSuggestPersonnel(false)
  //   : null;
  // [...filteredDataLocal] === location ? setSuggestLocal(false) : null;

  const changePersonnel = (e) => {
    setSuggestPersonnel(true);
    setPersonnelType(e.target.value);
    const newFilterPersonnel = Vendors.filter((val) =>
      val.toLowerCase().includes(personneltype.toLowerCase())
    );
    setFilteredDataPersonnel(newFilterPersonnel);
  };

  const formattedCities = [];

  cities.forEach((state) => {
    const stateName = state.name;
    state.cities.forEach((city) => {
      formattedCities.push(`${stateName},${city}`);
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

  const submitPersonnel = (type) => {
    setPersonnelType(type);
    setSuggestPersonnel(false);
  };
  const submitLocation = (type) => {
    setLocation(type);
    setSuggestLocal(false);
  };
  return (
    <Form method="post">
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div className="w-[50%] flex gap-5">
          <div className="w-full  relative">
            <TextField
              label="Personnel type"
              type="text"
              variant="outlined"
              name="personnelType"
              value={personneltype}
              fullWidth
              InputLabelProps={{
                style: {
                  fontWeight: "500",
                  fontSize: "1rem",
                  fontFamily: "Euclid Circular A",
                },
              }}
              onChange={changePersonnel}
              size="md"
            />
            {suggestpersonnel && personneltype !== "" ? (
              <div className=" suggestion ">
                {filteredDataPersonnel.map((type, key) => (
                  <p
                    key={key}
                    className="tex-sm hover:text-white px-5 py-2 hover:bg-primaryCol border-b-[1px] border-b-gray-100"
                    value={type}
                    onClick={submitPersonnel.bind(null, type)}
                  >
                    {type}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
          <div className="w-full  relative">
            <TextField
              label="Location"
              type="text"
              name="location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={changeLocation}
              InputLabelProps={{
                style: {
                  fontWeight: "500",
                  fontSize: "1rem",
                  fontFamily: "Euclid Circular A",
                },
              }}
              size="md"
            />
            {suggestLocal && location !== "" ? (
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
            ) : null}
          </div>
        </div>
        <button className="flex px-14 py-4  w-52 bg-primaryCol text-white rounded-md justify-center hover:bg-primaryHover">
          Search
        </button>
      </FormControl>
    </Form>
  );
};
export default SearchForm;
