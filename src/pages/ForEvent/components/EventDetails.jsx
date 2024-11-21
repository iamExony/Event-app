import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { FormControl, TextField } from "@mui/material";
import { Form, Link, useActionData } from "react-router-dom";
import { useState } from "react";
import Vendors, { cities } from "../../../utils/Vendors";

const EventDetails = () => {
  const [exhibitortype, setExhibitorType] = useState("");
  const [location, setLocation] = useState("");
  const [suggestExhibitor, setSuggestExhibitor] = useState(false);
  const [suggestLocal, setSuggestLocal] = useState(false);

  const [filteredDataExhibitor, setFilteredDataExhibitor] = useState([]);
  const [filteredDataLocal, setFilteredDataLocal] = useState([]);

  // [...filteredDataExhibitor] === exhibitortype
  //   ? setSuggestExhibitor(false)
  //   : null;
  // [...filteredDataLocal] === location ? setSuggestLocal(false) : null;

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
    <div className="bg-[url('/images/for-event-host.png')] py-20 w-full h-full">
      <section>
        <div className="flex flex-col bg-white py-20 px-10  rounded-md gap-6">
          <h3 className=" text-4xl font-bold text-headerText">
            Enter event details to find event vendor
          </h3>
          {/* SEARCH AND DATE INPUT FORM */}
          <Form method="post">
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                position: "relative",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div className="w-full relative">
                <TextField
                  label="Vendor type"
                  type="text"
                  name="exhibitor_type"
                  variant="outlined"
                  value={exhibitortype}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontWeight: "500",
                      fontSize: "1rem",
                      fontFamily: "Euclid Circular A",
                    },
                  }}
                  onChange={changeExhibitor}
                  size="md"
                />
                {suggestExhibitor && exhibitortype !== "" ? (
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
                ) : null}
              </div>
              <div className="w-full relative">
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
              <LocalizationProvider dateAdapter={AdapterDayjs} name={"date"}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{
                    overflowX: "hidden",
                    width: "100%",
                    marginTop: "-.5rem",
                    zIndex: "20",
                  }}
                  fullWidth
                >
                  <DatePicker label="Date of event" />
                </DemoContainer>
              </LocalizationProvider>
              <button className="flex px-14 py-4  w-52 bg-primaryCol text-white rounded-md justify-center hover:bg-primaryHover">
                Search
              </button>
            </FormControl>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
