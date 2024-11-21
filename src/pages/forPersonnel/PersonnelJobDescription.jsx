import { useState } from "react";
import { BsArrowLeft, BsDot, BsHeart, BsLink } from "react-icons/bs";
import { GrCalendar, GrLocation } from "react-icons/gr";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";

function PersonnelJobDescription() {
  const [curOPen, setCurOpen] = useState(0);
  return (
    <div className="py-20 px-32">
      {/* BACK ARROW BUTTON */}
      <Link to={"/home/event-personnel"}>
        <BsArrowLeft size={30} />
      </Link>
      <>
        <div className=" flex gap-6 items-center py-6 mt-16 relative">
          <div className=" rounded-full">
            <img
              src="../../../public/images/profilePic.png"
              alt=""
              className="w-28 h-28"
            />
          </div>
          <div className="flex flex-col gap-3 w-[80%] relative">
            <div className="flex items-center">
              <h4 className="font-semibold text-4xl">
                An event planner needed for a wedding
              </h4>
              <BsDot size={40} />
              <p className="text-slate-600  font-semibold">
                Posted 3 hours ago
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <GrLocation size={25} />
              <p className="text-xl">Lagos, Nigeria</p>
              <p className="text-xl">24 Applicants</p>
            </div>
            <div className="flex gap-3 items-center">
              <GrCalendar size={25} />
              <p className="text-xl">24th April 2024</p>
            </div>
          </div>
          <div className="absolute right-0 top-3 flex gap-6">
            <div className="rounded-full border-2 border-slate-400  text-primaryCol p-3  text-center cursor-pointer ">
              <BsHeart size={25} />
            </div>
            <div className="rounded-full border-2 border-slate-400  text-primaryCol p-3 flex items-center justify-center cursor-pointer ">
              <BsLink size={25} />
            </div>
          </div>
        </div>
      </>
      <>
        <div className="mt-6 flex flex-col gap-6">
          <h4 className="text-2xl font-semibold">Job Description</h4>
          <p className="text-xl leading-10">
            A seasoned photographer is needed to take pictures at a ceremony,
            the photographer will also be responsible for the work of a
            videography part of the wedding and would take atleast 50
            photographs at the venue also it is the responsibility of the
            photographer to take pictures of the bride and groom before and
            after the occasion, the photographer is meant to be available at all
            time of the contracted event and has only 20 to 30 minutes break in
            between the occasion.
          </p>
        </div>
        <div className="flex gap-20 mt-6">
          <div>
            <h5 className="text-2xl font-semibold mb-4">Eligibility</h5>
            <ul className="list-disc flex flex-col gap-3 ml-6 w-[450px] ">
              <li className="text-xl leading-10">3 years of experience</li>
              <li className="text-xl leading-10">Must reside in Lagos</li>
              <li className="text-xl leading-10">Must be Igbo</li>
              <li className="text-xl leading-10">
                Must have a portfolio that showcase recent works
              </li>
              <li className="text-xl leading-10 ">
                Applicant should be able to work for two weeks without rest
              </li>
            </ul>
          </div>
          <div className="flex gap-6 flex-col">
            <div className="flex gap-2 items-center">
              <h5 className="text-2xl font-semibold">Project length:</h5>
              <p className="text-xl">Less than a month</p>
            </div>
            <div className="flex gap-2 items-center">
              <h5 className="text-2xl font-semibold">Number of Applicants:</h5>
              <p className="text-xl">21 Applicants</p>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-20">
          <button className="w-[200px] text-center p-2 rounded-lg border-2 hover:bg-primaryCol border-primaryCol text-primaryCol hover:text-white font-semibold">
            Bookmark for later
          </button>
          <button className="w-[200px] text-center p-2 rounded-lg border-2 bg-primaryCol hover:bg-transparent border-primaryCol hover:text-primaryCol text-white font-semibold">
            Apply now
          </button>
        </div>
      </>
      {/* LINE */}
      <div className="border-b-2 border-slate-300 my-10" />

      {/* EMPLOYER DETAILS */}

      <div className="py-3">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => (curOPen !== 1 ? setCurOpen(1) : setCurOpen(0))}
        >
          <h5 className="font-semibold text-2xl">Employer Details</h5>
          {curOPen !== 1 ? (
            <MdKeyboardArrowDown size={20} />
          ) : (
            <MdKeyboardArrowUp size={20} />
          )}
        </div>
        {/* Options */}
        {curOPen === 1 && (
          <div className="mt-3 flex flex-col gap-3">
            <p className="text-xl leading-10">Adeshina</p>
            <p className="text-xl leading-10">25 Hires</p>
            <div className="flex gap-16 items-center">
              <p className="text-xl leading-10">Reviews</p>
              <StarRating active={4} />
            </div>
            <p className="text-xl leading-10">Job Posts:</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonnelJobDescription;
