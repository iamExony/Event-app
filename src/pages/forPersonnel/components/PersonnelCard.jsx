import { BsDot, BsHeart } from "react-icons/bs";
import { GrCalendar, GrLocation } from "react-icons/gr";
import StarRating from "../../../components/StarRating";
import { Link } from "react-router-dom";

function PersonnelCard() {
  return (
    <div className=" flex gap-3 items-center py-6 border-b-2 border-slate-300 relative">
      <div className=" rounded-full"><img src="../../../public/images/profilePic.png" alt="" className="w-36 h-36"/></div>
      <div className="flex flex-col gap-1 w-[80%] relative">
        <div className="flex items-center">
          <h4 className="font-semibold text-lg">
            An event planner needed for a wedding
          </h4>
          <BsDot size={40} />
          <p className="text-slate-600 text-sm font-semibold">
            Posted 3 hours ago
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <GrLocation />
          <p>Lagos, Nigeria</p>
          <p>24 Applicants</p>
          <p><StarRating active={4}/></p>
        </div>
        <div className="flex gap-3 items-center">
          <GrCalendar />
          <p>24th April 2024</p>
        </div>
        <div>
          <p className="font-semibold">
            A seasoned event planner is needed to plan a wedding ceremony. You
            will be responsible for supervising the entire aspect of this event.
            You will supervise the catering services a...
            <Link to={'job-id'} className="text-primaryCol cursor-pointer">See more</Link>
          </p>
        </div>

      </div>
        <div className="rounded-full border-2 border-slate-400 absolute right-0 top-3 text-primaryCol p-3 flex items-center justify-center cursor-pointer">
          <BsHeart size={25} />
        </div>
    </div>
  );
}

export default PersonnelCard;
