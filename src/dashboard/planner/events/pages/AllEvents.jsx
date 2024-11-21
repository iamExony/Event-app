import React from "react";
import AllEventpass from "../../../components/AllEventpass";
import { allEvents } from "../../../../utils/Test";

const AllEvents = () => {
  return <AllEventpass allEvents={allEvents}  type={"events"}/>;
};

export default AllEvents;
