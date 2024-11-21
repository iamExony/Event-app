import { Outlet, useActionData, useLoaderData } from "react-router-dom";
import Menubar from "./components/Menubar";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { getTokenDuration } from "../utils/Auth";
import { useSubmit } from "react-router-dom";
import MobileSidebar from "./components/MobileSidebar";

const DashboardRoot = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const profile = localStorage.getItem("profile");
  const parsedProfile = JSON.parse(profile);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);

  useEffect(() => {
    if (!token) {
      return null;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    // console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <div className="flex flex-grow w-full bg-white md:p-1 ">
      <div
        className={`hidden md:w-[20%] lg:block ${!showDrawer ? "hidden" : "block"}`}
      >
        <Sidebar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      </div>

      {showMobileDrawer && (
        <div className="block lg:hidden w-full">
          <MobileSidebar
            showMobileDrawer={showMobileDrawer}
            setShowMobileDrawer={setShowMobileDrawer}
          />
        </div>
      )}
      <div className="md:w-[80%] w-full">
        <div className="w-full">
          <Menubar
            parsedProfile={parsedProfile}
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            showMobileDrawer={showMobileDrawer}
            setShowMobileDrawer={setShowMobileDrawer}
          />
        </div>
        <div className="md:px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;
