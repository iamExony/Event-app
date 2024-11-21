import { useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import Settings from "./Settings";

const Menubar = ({
  parsedProfile,
  showDrawer,
  setShowDrawer,
  showMobileDrawer,
  setShowMobileDrawer,
}) => {
  const [notificationIsOpen, setNotificationIsOpen] = useState(false)
  const [settingsIsOpen, setSettingsIsOpen] = useState(false)
  const history = useLocation();
  const pathName = history.pathname;

  function extractWordFromURL(url) {
    if (url.length > 0) {
      const title = url.split("/").at(1);

      return title.charAt(0).toUpperCase() + title.slice(1);
    } else {
      return "";
    }
  }
  const title = extractWordFromURL(pathName);

  return (
    <div
      className="w-full flex justify-between
   items-center px-4 md:px-10 py-6 border-b-[0.5px] border-[#C4C4C4] z-20 bg-white"
    >
      <div className="flex items-center gap-2">
        <button
          className="lg:hidden"
          onClick={() => setShowMobileDrawer((prev) => !prev)}
        >
          <CiMenuFries />
        </button>
        <div>
          {title === "Dashboard" ? (
            <div className="relative">
              <FaSearch className="text-slate-300 absolute -translate-y-[50%] top-[50%] ml-6" />
              <input
                type="search"
                placeholder="Search"
                className="bg-slate-100 rounded-full w-[775px] p-3 pl-12 focus:outline-none"
              />
            </div>
          ) : (
            <h3 className=" font-bold text-[#2D2C2C] text-xl">{title === "Crm" ? "Clients" : title}</h3>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="relative cursor-pointer">
          <FaBell
            onClick={() => {
              setNotificationIsOpen(!notificationIsOpen);
              setSettingsIsOpen(false);
            }}
            className={notificationIsOpen && "text-primaryColC"}
          />
          {notificationIsOpen && (
            <div className="absolute right-[100%]">
              {/* <Notification /> */}
            </div>
          )}
        </div>
        <div className="relative cursor-pointer">
          <RiSettings4Fill
            onClick={() => {
              setSettingsIsOpen(!settingsIsOpen);
              setNotificationIsOpen(false);
            }}
            className={settingsIsOpen && "text-primaryColC"}
          />
          {settingsIsOpen && (
            <div className="absolute right-[100%]">
              <Settings />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center bg-teal-900 rounded-[50%] w-9 h-9">
          {parsedProfile?.user?.firstname?.charAt(0).toUpperCase()}
        </div>

        <span className="hidden md:flex justify-center items-center gap-2 capitalize">
          <h4>
            {parsedProfile?.user?.firstname} .{" "}
            {parsedProfile?.user?.lastname?.charAt(0).toUpperCase()}
          </h4>
          <img src="/images/dashboard/arrowDown.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Menubar;
