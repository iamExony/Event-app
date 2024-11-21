import celebration from "/images/dashboard/celebration.png";
import { NextButton } from "../components/Button";
import { Link } from "react-router-dom";

function Done() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center py-12">
        <img src={celebration} alt="celebration" />
      </div>
      <Link to={"/offers/all-offers"}>
        <NextButton className={"w-[300px] !p-4"}>View all offer</NextButton>
      </Link>
    </div>
  );
}

export default Done;
