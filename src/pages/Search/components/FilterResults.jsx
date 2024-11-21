import React from "react";

const FilterResults = () => {
  return (
    <div className="flex gap-2 items-center ">
      <h3 className=" text-black font-medium text-xl">Filter results</h3>
      <button className="te align-text-bottom text-primaryCol font-medium text-base">
        clear filter
      </button>
    </div>
  );
};

export default FilterResults;
