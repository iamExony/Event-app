
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import {
  GreenIcon,
  OrangeIcon,
  PeopleIcon,
  RedIcon,
  RoundEndIcon,
} from "./icons/dashboardIcons";
import Donut from "./components/Donut";
import { FiMoreVertical } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { vendorData } from "./crm/util/test";
import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";


const Dashboard = () => {
  const [data, setData] = useState(vendorData);
  const dropdownRef = useRef(null);

  const toggleDropdown = (itemId) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        }
        return {
          ...item,
          isOpen: false, // Close dropdown for other items
        };
      })
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setData((data) =>
          data.map((item) => ({
            ...item,
            isOpen: false,
          }))
        );
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  return (
    <main className=" mt-10 pr-3 pl-6 w-full flex flex-col gap-6">
      {/* TOP WIDGET */}
      <div className="flex justify-between ">
        <div className="flex flex-col gap-6 w-[265px] shadow-md shadow-slate-200 rounded-lg p-3">
          <div className="flex gap-6 items-start">
            <PeopleIcon />
            <div className="flex flex-col gap-3">
              <p className="font-bold text-[#525050]">Total prospects</p>
              <p className="font-bold text-2xl leading-3">250</p>
            </div>
          </div>
          <p className="text-primaryCol underline font-semibold text-xs">
            Show details
          </p>
        </div>
        <div className="flex flex-col gap-6 w-[265px] shadow-md shadow-slate-200 rounded-lg p-3">
          <div className="flex gap-6 items-start">
            <GreenIcon />
            <div className="flex flex-col gap-3">
              <p className="font-bold text-[#525050]">Total contracts</p>
              <p className="font-bold text-2xl leading-3">50</p>
            </div>
          </div>
          <p className="text-primaryCol underline font-semibold text-xs">
            Show details
          </p>
        </div>
        <div className="flex flex-col gap-6 w-[265px] shadow-md shadow-slate-200 rounded-lg p-3">
          <div className="flex gap-6 items-start">
            <OrangeIcon />
            <div className="flex flex-col gap-3">
              <p className="font-bold text-[#525050]">Total entry pass</p>
              <p className="font-bold text-2xl leading-3">N 250,000</p>
            </div>
          </div>
          <p className="text-primaryCol underline font-semibold text-xs">
            Show details
          </p>
        </div>
        <div className="flex flex-col gap-6 w-[265px] shadow-md shadow-slate-200 rounded-lg p-3">
          <div className="flex gap-6 items-start">
            <RedIcon />
            <div className="flex flex-col gap-3">
              <p className="font-bold text-[#525050]">Next event</p>
              <p className="font-bold text-2xl leading-3">Dec 12</p>
            </div>
          </div>
          <p className="text-primaryCol underline font-semibold text-xs">
            Show details
          </p>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex gap-6 justify-between pr-10">
        {/* LEFT */}
        <div className="flex flex-col gap-4 w-[558px] h-[378px] border-2 border-slate-200 rounded-xl p-3">
          <div className="flex gap-6 items-center pl-6">
            <RoundEndIcon color={"#009FE3"}/>
            <h4 className="text-xl">Events summary</h4>
          </div>
          <div className="w-full h-[52px] p-3 bg-[#9FF1CA] rounded-xl flex items-center gap-3 pl-6">
            <p className=" w-[46px] h-[37px] bg-[#049561] font-semibold rounded-md text-white flex items-center justify-center">
              15
            </p>
            <div className="flex items-center gap-2">
              <p>All events</p>
              <div className="w-2 h-2 rounded-full bg-[#049561] ml-40" />
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-xs">Manage events</p>
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className="flex gap-6">
            <div className=" flex flex-col gap-3 rounded-lg border-2 border-slate-200 p-3 w-[129px] h-[70px]">
              <p className="text-xl font-normal leading-3">25</p>
              <p className="text-[11px] text-slate-400">Completed events</p>
            </div>
            <div className=" flex flex-col gap-3 rounded-lg border-2 border-slate-200 p-3 w-[129px] h-[70px]">
              <p className="text-xl font-normal leading-3">10</p>
              <p className="text-[11px] text-slate-400">Pending events</p>
            </div>
            <div className=" flex flex-col gap-3 rounded-lg border-2 border-slate-200 p-3 w-[129px] h-[70px]">
              <p className="text-xl font-normal leading-3">5</p>
              <p className="text-[11px] text-slate-400">Completed events</p>
            </div>
          </div>

          {/* DONUT AND PROGRESS BAR */}
          <div className="flex gap-6 justify-between relative">
            <div className="-ml-24">
              <Donut />
            </div>

            {/* progress bars */}

            <div>
              <div className="   flex gap-4 items-center absolute right-12 top-[50px]">
                <p className="text-xs font-light">{"Completed (30%)"}</p>
                <div className="flex items-center gap-2">
                  <div class="w-[127px] bg-gray-200 rounded-full h-1  ">
                    <div class="bg-[#049561] h-1 rounded-full  w-1/2" />
                  </div>
                  <p className="text-xs font-medium">54</p>
                </div>
              </div>
              <div className="   flex gap-4 items-center absolute right-12 top-[75px]">
                <p className="text-xs font-light">{"Pending (55%)"}</p>
                <div className="flex items-center gap-2">
                  <div class="w-[127px] bg-gray-200 rounded-full h-1  ">
                    <div class="bg-[#AF290B] h-1 rounded-full  w-2/3" />
                  </div>
                  <p className="text-xs font-medium">24</p>
                </div>
              </div>
              <div className="   flex gap-4 items-center absolute right-12 top-[100px]">
                <p className="text-xs font-light">{"pending (15%)"}</p>
                <div className="flex items-center gap-2">
                  <div class="w-[127px] bg-gray-200 rounded-full h-1  ">
                    <div class="bg-[#9FF1CA] h-1 rounded-full  w-2/5" />
                  </div>
                  <p className="text-xs font-medium">44</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col gap-4 w-[558px] border-2 border-slate-200 rounded-xl p-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-6 items-center pl-6">
              <RoundEndIcon color={"#009FE3"}/>
              <h4 className="text-xl">Finance</h4>
            </div>
            <div className="rounded-full border-2 border-slate-300 py-1 px-3 flex gap-2 items-center cursor-pointer">
              <p className="text-[10px] font-medium">Monthly</p>
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[10px]">Income</p>
              <p>150,000 </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-[10px]">Expenses</p>
              <p>150,000 </p>
            </div>
          </div>
          {/* Area Chart */}
          <div>
            <AreaChart />
            
          </div>
        </div>
      </div>
      {/* DOWN */}
      <div className="flex gap-6 justify-between pr-10">
        {/* LEFT */}
        <div className="flex flex-col gap-4 w-[440PX] h-[380px] border-2 border-slate-200 rounded-xl p-3">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center ">
              <RoundEndIcon  color={'#DF3602'}/>
              <h4 className="text-xl">Entry pass summary</h4>
            </div>
            <div className="rounded-full border-2 border-slate-300 py-1 px-1 flex gap-2 items-center cursor-pointer">
              <p className="text-[10px] font-medium">Monthly</p>
              <p className="text-[10px] font-medium">Weekly</p>
              <p className="text-[10px] font-medium py-2 px-3 text-white bg-black rounded-full">Today</p>
            </div>
          </div>

          <div>
            <BarChart />
          </div>
          
          

          
        </div>
        {/* RIGHT */}
        <div className="flex flex-col gap-4 w-[635PX] border-2 border-slate-200 rounded-xl p-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center ">
              <RoundEndIcon color={'#DF3602'}/>
              <h4 className="text-xl">Vendors</h4>
            </div>
            <div className="rounded-full border-2 border-slate-300 py-1 px-3 flex gap-2 items-center cursor-pointer">
              <p className="text-[10px] font-medium">Newest</p>
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>

         <div className="flex flex-col gap-3">
          {data.map((data, i) => (
             <div className="flex justify-around items-center border-2 border-slate-200 rounded-lg py-4">
             <div>
               <h3 className="text-sm font-medium">{data.name}</h3>
             </div>
             <div>
               <p className="text-[11px] text-primaryCol">{data.id}</p>
               <p className="text-xs font-light">{data.date}</p>
             </div>
             <div>
               <p className="text-xs font-medium">{data.service}</p>
             </div>
             <div>
               <p className={`py-1 px-3 border-2 rounded-lg ${ data.status === "pending" && "border-yellow-500 text-yellow-500 bg-yellow-300"} ${ data.status === "completed" && "border-green-500 text-green-500 bg-green-300"} w-[90px] text-center text-sm`}>{data.status}</p>
             </div>
             <div ref={dropdownRef}>
               <FiMoreVertical  className="cursor-pointer" size={20}/>
             </div>
           </div>
          ))}
         </div>
          
          <div className="text-primaryCol flex gap-1 m-auto items-center cursor-pointer">
            <p className=" underline text-xs">view more</p>
            <MdKeyboardArrowDown size={15} />
          </div>

          
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
