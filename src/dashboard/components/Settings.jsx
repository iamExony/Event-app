import { useState } from "react";
import { MdOutlineKeyboardArrowRight, MdSettings} from 'react-icons/md'
import { Link } from "react-router-dom";

function Settings() {
    const [opened, setOpened] = useState(null)
  return (
    <div className="w-[400px] h-[330px] shadow-[0px_4px_4px_1px_rgba(0,0,0,0.25)] bg-white pt-6 p-2 z-10 overflow-y-scroll">
      <div className="border-b-4 flex items-center gap-3 px-4 py-3 text-[1.125rem] font-[600] ">
       
          <span className="text-primaryColC">
            <MdSettings size={20}/>
          </span>

          <span>Settings</span>
        
      </div>

      {/* Permissions */}
      <div className=" border-b-4 ">
        <Link to={'/settings'} className="flex gap-3 w-full py-3 px-2 items-center cursor-pointer" onClick={ () => {opened === 'prescriptions' ? setOpened(null) : setOpened('prescriptions') }}>
          <span className=" w-[2.3125rem] h-[1.4375rem] bg-primaryColC text-white rounded-[1.25rem] text-[0.75rem] flex items-center justify-center shrink-0 font-[500] leading-3">
            2
          </span>
          <span className="text-[1rem] font-[500] w-[80%] leading-4 capitalize">
            Permissions
          </span>
          <span className=" leading 1">
           <MdOutlineKeyboardArrowRight  size={30}/> 
          </span>
        </Link>
      
      </div>

        {/* Payment Settings */}
      <div className=" border-b-4 ">
        <Link to={'/payment-settings'} className="flex gap-3 w-full py-3 px-2 items-center cursor-pointer" onClick={ () => {opened === 'patients' ? setOpened(null) : setOpened('patients') }}>
          <span className=" w-[2.3125rem] h-[1.4375rem] bg-primaryColC text-white rounded-[1.25rem] text-[0.75rem] flex items-center justify-center shrink-0 font-[500] leading-3">
            2
          </span>
          <span className="text-[1rem] font-[500] w-[80%] leading-4 capitalize">
            Payment Settings
          </span>
          <span className=" leading 1">
           <MdOutlineKeyboardArrowRight  size={30}/> 
          </span>
        </Link>
       
      </div>

    {/* Subscriptions */}
      <div className=" border-b-4 ">
        <Link to={'/subscriptions'} className="flex gap-3 w-full py-3 px-2 items-center cursor-pointer" onClick={ () => {opened === 'appointments' ? setOpened(null) : setOpened('appointments') }}>
          <span className=" w-[2.3125rem] h-[1.4375rem] bg-primaryColC text-white rounded-[1.25rem] text-[0.75rem] flex items-center justify-center shrink-0 font-[500] leading-3">
            2
          </span>
          <span className="text-[1rem] font-[500] w-[80%] leading-4 capitalize">
            Subscriptions
          </span>
          <span className=" leading 1">
           <MdOutlineKeyboardArrowRight  size={30}/> 
          </span>
        </Link>
       
      </div>

    {/* Profile settings */}
      <div className=" border-b-4 ">
        <Link to={'/settings'} className="flex gap-3 w-full py-3 px-2 items-center cursor-pointer" onClick={ () => {opened === 'billing' ? setOpened(null) : setOpened('billing') }}>
          <span className=" w-[2.3125rem] h-[1.4375rem] bg-primaryColC text-white rounded-[1.25rem] text-[0.75rem] flex items-center justify-center shrink-0 font-[500] leading-3">
            2
          </span>
          <span className="text-[1rem] font-[500] w-[80%] leading-4 capitalize">
            Profile settings
          </span>
          <span className=" leading 1">
           <MdOutlineKeyboardArrowRight  size={30}/> 
          </span>
        </Link>
      
      </div>


    </div>
  );
}

export default Settings;
