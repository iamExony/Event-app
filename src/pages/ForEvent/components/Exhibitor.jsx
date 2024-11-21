import { Link } from "react-router-dom";
import featuredOne from "/images/featured-1.png";
import featuredTwo from "/images/featured-2.png";
import featuredThree from "/images/featured-3.png";
import verified from "/Verified.svg";
import EachExhibitor from "./EachExhibitor";

const exhibitor = [
  {
    image: featuredOne,
    job: "PHOTOGRAPHER",
    title: "Karmen Photography",
    location: "Lagos, Nigeria",
    rating: "4.8",
    quantity: "112",
    bookings: "156",
    verified: verified,
  },
  {
    image: featuredTwo,
    job: "CATERER",
    title: "Tspices Kitchen",
    location: "Abuja, Nigeria",
    rating: "5.0",
    quantity: "96",
    bookings: "120",
    verified: verified,
  },
  {
    image: featuredThree,
    job: "FAVOURS AND GIFT",
    title: "Emerald Fab Gift Noire Storage",
    location: "Kaduna, Nigeria",
    rating: "5.0",
    quantity: "12",
    bookings: "32",
    verified: verified,
  },
];

const Exhibitor = () => {
  return (
    <section>
      <div className="flex justify-between items-center pt-28 pb-10">
        <h3 className="text-4xl font-bold text-headerText">
          Featured vendorss
        </h3>
        <Link
          className=" text-bodyText hover:text-primaryCol font-medium text-xl"
          to="#"
        >
          See all
        </Link>
      </div>
      <div className="flex gap-4 pb-20 ">
        {exhibitor.map((each, id) => (
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
    </section>
  );
};
export default Exhibitor;
