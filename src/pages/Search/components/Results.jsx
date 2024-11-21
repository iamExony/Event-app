import React from "react";
import EachExhibitor from "../../ForEvent/components/EachExhibitor";
import { personnel } from "../../../utils/Vendors";

const Results = () => {
  return (
    <div className=" flex gap-4 flex-wrap pb-20 mx-24">
      {personnel.map((each, id) => (
        <EachExhibitor
          key={id}
          image={each.image}
          job={each.job}
          title={each.title}
          location={each.location}
          rating={each.rating}
          quantity={each.quantity}
          bookings={each.bookings}
          verified={each.verified}
        />
      ))}
    </div>
  );
};

export default Results;
