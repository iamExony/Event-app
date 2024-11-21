import { useState } from "react";
import star from "/star.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import TruncatedText from "./TruncatedText";

const EachExhibitor = (props) => {
  const navigate = useNavigate();

  const navigateProfile = () => {
    navigate("/home/profile");
  };
  const navigateRequest = () => {
    navigate("/home/request");
  };
  const [favorite, setFavorite] = useState(true);
  const changeFavorite = (event) => {
    event.stopPropagation();
    setFavorite(!favorite);
  };

  return (
    <div
      className="relative flex flex-col rounded-2x1 boxShadow w-[350px]"
      id={props.id}
    >
      <img
        className=" overflow-hidden w-full h-52 z-10"
        src={props.image}
        alt=""
      />
      <div
        className="absolute top-5 right-6 bg-white  z-30 rounded-full transition-all p-2.5  cursor-pointer"
        onClick={changeFavorite}
      >
        {favorite ? (
          <BsHeart className="    text-primaryCol scale-100  " size={21} />
        ) : (
          <BsHeartFill className="  text-primaryCol scale-90 " size={21} />
        )}
      </div>

      <div className="flex flex-col gap-2 px-5 py-5   cardBorder">
        <p className=" text-bodyText text-sm font-medium ">{props.job}</p>
        <div className="flex flex-col">
          <TruncatedText title={props.title} verified={props.verified} />
          <p className=" text-bodyText text-base font-normal">
            {props.location}
          </p>
        </div>

        <div className="flex  gap-1.5 items-center">
          <span className="flex  justify-center items-center gap-1">
            <img src={star} alt="" />
            <p className=" font-normal">{props.rating}</p>
          </span>

          <span className="text-bodyText">({props.quantity})</span>

          <span className="text-bodyText flex justify-center items-center gap-0.5">
            <p className=" text-bodyText font-extrabold"></p>
            <span className=" font-bold">&middot;</span>
            <p>
              {props.bookings} <span>bookings done</span>
            </p>
          </span>
        </div>
        <div className="flex  mt-4 gap-6 ">
          <button
            className=" rounded-md  py-4  outline outline-2 outline-primaryColC text-primaryCol w-full"
            onClick={navigateProfile}
          >
            View profile
          </button>
          <button
            className="hover:bg-primaryHover rounded-md text-navBg bg-primaryCol  py-4 font-normal text-base w-full"
            onClick={navigateRequest}
          >
            Request quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachExhibitor;
