import React from "react";
import HighlightResult from "./components/HighlightResult";
import SearchForm from "./components/SearchForm";
import FilterResults from "./components/FilterResults";
import Categories from "./components/Categories";
import Results from "./components/Results";
import ButtonNavigate from "./components/ButtonNavigate";
import { redirect, useSearchParams } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div className=" mx-24 flex flex-col gap-7 ">
        <HighlightResult />
        <SearchForm />
        <FilterResults />
        <Categories />
      </div>
      <div className="mt-10 ">
        <Results />
        <ButtonNavigate />
      </div>
    </>
  );
};

export default Search;

export const action = async ({ request }) => {
  const data = await request.formData();

  const eventPersonnel = {
    event_type: data.get("personnel_type"),
    location: data.get("location"),
  };

  const response = await fetch(
    `https://odd-gold-crab-veil.cyclic.app/user/findbylocation?location=${eventPersonnel.location}`
  );
  console.log(response);

  if (response.status === 422 || response.status === 401 || !response.ok) {
    return response;
  }

  const resData = await response.json();
  console.log(response, resData);

  return redirect(`/home/search?query=${eventPersonnel.event_type}`);
};
