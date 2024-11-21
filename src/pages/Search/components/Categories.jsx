import React from "react";
import { categories } from "../../../utils/Vendors";

const Categories = () => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-black font-medium text-xl">Categories</h4>
      <div className="flex gap-4 flex-wrap">
        <button className="font-bold text-primaryCol"> All categories</button>
        {categories.map((cat, id) => (
          <button id={id} className="text-[#9C9C9C] font-medium">
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
