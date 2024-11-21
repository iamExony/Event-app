import { BsDot, BsHeart } from "react-icons/bs";
import { GrCalendar, GrLocation } from "react-icons/gr";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdSearch } from "react-icons/md";
import SearchBar from "./components/SearchBar";
import PersonnelCard from "./components/PersonnelCard";
import { useState } from "react";


const testData = new Array('',',',',',',',',',',',',',',',',',',',',',',',',',',',',','')

function ForPersonnel() {
    const [curOPen,setCurOpen] = useState(0)
  return (
    <div className="py-20 px-10 flex gap-16 justify-start items-start">
      {/* SIDE WIDGET */}
      <aside className=" w-[20%] mt-32 border-2 border-slate-300 rounded-lg p-6 ">
        <h4 className=" text-center font-semibold text-lg py-3">Filter By</h4>

        <div className="py-3 border-b-2 border-slate-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => curOPen !== 1 ? setCurOpen(1) : setCurOpen(0)}>
            <h5 className="font-semibold">Event Personnel</h5>
            {curOPen !== 1 ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            </div>
            {/* Options */}
        { curOPen === 1 &&   <div className="mt-3">
            im active

            </div>}
        </div>
        <div className="py-3 border-b-2 border-slate-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => curOPen !== 2 ? setCurOpen(2) : setCurOpen(0)}>
            <h5 className="font-semibold">Location</h5>
            {curOPen !== 2 ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            </div>
            {/* Options */}
        { curOPen === 2 &&   <div className="mt-3">
            im active

            </div>}
        </div>
        <div className="py-3 border-b-2 border-slate-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => curOPen !== 3 ? setCurOpen(3) : setCurOpen(0)}>
            <h5 className="font-semibold">Date Posted</h5>
            {curOPen !== 3 ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            </div>
            {/* Options */}
        { curOPen === 3 &&   <div className="mt-3">
            im active

            </div>}
        </div>
        <div className="py-3 border-b-2 border-slate-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => curOPen !== 4 ? setCurOpen(4) : setCurOpen(0)}>
            <h5 className="font-semibold">Application Deadline</h5>
            {curOPen !== 4 ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            </div>
            {/* Options */}
        { curOPen === 4 &&   <div className="mt-3">
            im active

            </div>}
        </div>
        <div className="py-3 border-b-2 border-slate-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => curOPen !== 5 ? setCurOpen(5) : setCurOpen(0)}>
            <h5 className="font-semibold">Project Length</h5>
            {curOPen !== 5 ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            </div>
            {/* Options */}
        { curOPen === 5 &&   <div className="mt-3">
            im active

            </div>}
        </div>
        <div className="py-3 border-b-2 border-slate-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => curOPen !== 6 ? setCurOpen(6) : setCurOpen(0)}>
            <h6 className="font-semibold">Number of Applicants</h6>
            {curOPen !== 6 ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            </div>
            {/* Options */}
        { curOPen === 6 &&   <div className="mt-3">
            im active

            </div>}
        </div>
        <div className="py-3 border-b-2 border-slate-300">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => curOPen !== 7 ? setCurOpen(7) : setCurOpen(0)}>
            <h7 className="font-semibold">Client Info</h7>
            {curOPen !== 7 ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            </div>
            {/* Options */}
        { curOPen === 7 &&   <div className="mt-3">
            im active

            </div>}
        </div>
        <div className="py-3">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => curOPen !== 8 ? setCurOpen(8) : setCurOpen(0)}>
            <h8 className="font-semibold">Client History</h8>
            {curOPen !== 8 ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            </div>
            {/* Options */}
        { curOPen === 8 &&   <div className="mt-3">
            im active

            </div>}
        </div>

      
     
    
     
    
        <div className="flex justify-center items-center mt-10">
            <button className="bg-primaryCol text-white rounded-lg text-center font-semibold w-[80%] p-3">Apply</button>
        </div>
      </aside>

      {/* PERSONNEL LIST */}
      <main className="w-[70%] flex flex-col gap-3 ml-0">
        {/* SEARCH BAR */}
       <SearchBar />

        {/* PERSONNEL CARD */}
       {testData.map((data, i) => <div className="flex flex-col gap-3 " key={i}>
        <PersonnelCard />
       </div>)}

       
      </main>
    </div>
  );
}

export default ForPersonnel;
