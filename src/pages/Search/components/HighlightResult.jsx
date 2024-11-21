import React from "react";
import { NavLink } from "react-router-dom";

const HighlightResult = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-2 relative top-9 font-medium">
        <NavLink className={"text-bodyText text-lg"}>Event Personnel /</NavLink>
        <NavLink className={"text-primaryCol text-lg"}>Event planner</NavLink>
      </div>
      <div>
        <h1 className=" text-headerText text-2xl font-medium">
          Event planner in Lagos, Nigeria
        </h1>
        <p className="text-[#55656F] font-medium text-lg"> Results</p>
      </div>
    </div>
  );
};

export default HighlightResult;
