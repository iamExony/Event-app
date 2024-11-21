import React from "react";
import AllEventpass from "../../../components/AllEventpass";
import { allEntry } from "../../../../utils/Test";

const AllEntry = () => {
  return <>
  <AllEventpass allEvents={allEntry} type={"entrypass"} />

  
  </>
};

export default AllEntry;
