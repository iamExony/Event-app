import { ThemeProvider, Button, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const tools = [
    { id: 1, type: "Applications", src: "/application" },
    { id: 2, type: "Contracts", src: "/contracts" },
    { id: 3, type: "Invoices", src: "/invoices" },
    { id: 4, type: "Reviews", src: "/reviews" },
  ];

  const [open, setAnchorEl] = useState(false);
  const [locationArray, setLocationArray] = useState(
    window.location.pathname.split("/").length
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleClick = () => {
    setAnchorEl(!open);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: [""],
    },
  });

  const profile = localStorage.getItem("profile");
  const parsedProfile = JSON.parse(profile);

  useEffect(() => {
    locationArray === 2 ? setLocationArray(3) : setLocationArray(2);
    console.log(locationArray);
  }, [setLocationArray]);

  return (
    <>
      <nav className="py-5 bg-navBg fixed top-0 left-0 hidden md:flex justify-between items-center font-medium w-full z-50 mx-auto">
        <div className="relative h-8 w-32">
          <a href="/home">
            <img className=" h-full " src="/Logo.svg" alt="E-vent" />
          </a>
        </div>

        <ul className="flex justify-between gap-6 items-center  text-bodyText ">
          <li className="flex gap-1 justify-center items-center">
            <NavLink
              to="/home"
              className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer`}
              style={({ isActive }) => {
                if (isActive && locationArray > 2)
                  return {
                    color: "",
                  };
                else
                  return {
                    color: isActive ? "#df3602" : "",
                  };
              }}
            >
              <span>Company</span>
            </NavLink>
            <img src="/dropDown.svg" alt="" />
          </li>

          <NavLink
            className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer `}
            to="/home/for-events"
            style={({ isActive }) => {
              return {
                color: isActive ? "#df3602" : "",
              };
            }}
          >
            <span>For event host</span>
          </NavLink>
          <NavLink
            className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer `}
            to="/home/event-personnel"
            style={({ isActive }) => {
              return {
                color: isActive ? "#df3602" : "",
              };
            }}
          >
            <span>For event personnel</span>
          </NavLink>
          <li className="flex gap-1 justify-center items-center">
            <NavLink
              className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer`}
              to={"/home/use-case"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#df3602" : "",
                };
              }}
            >
              <span>Use cases</span>
            </NavLink>
            <img src="/dropDown.svg" alt="" />
          </li>

          <li className="flex gap-1 justify-center items-center">
            <NavLink
              className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer`}
              to="/home/resources"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#df3602" : "",
                };
              }}
            >
              <span>Resources</span>
            </NavLink>
            <img src="/dropDown.svg" alt="" />
          </li>
        </ul>

        {parsedProfile ? (
          <div className="flex gap-4 items-center justify-center  ">
            {/* <div
            className="flex justify-center items-center gap-2   hover:text-primaryHover cursor-pointer"
            onClick={() => {
              setActiveTool(!activeTool);
            }}
          >
            <i className={` ${activeTool ? "activeTool" : "tools"}`}></i>{" "}
            <p className=" text-bodyText">Tools</p>
          </div> */}
            <ThemeProvider theme={theme}>
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disableElevation
                disableRipple
                disableTouchRipple
                disableFocusRipple
                onClick={handleClick}
                color="primary"
                startIcon={
                  open ? (
                    <BiSolidDashboard color="#df3602" />
                  ) : (
                    <BiSolidDashboard color="rgb(75 91 101)" />
                  )
                }
                sx={{
                  color: open ? "#df3602" : "rgb(75 91 101)",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: "500",
                  zIndex: 50,
                }}
              >
                Tools
              </Button>
              {open ? (
                <div className="fixed top-16 right-36  bg-white py-3 px-2 flex flex-col gap-2">
                  {tools.map(({ type, src }) => (
                    <div className="flex items-center   gap-2 py-2 px-3  text-[rgb(75 91 101)]">
                      <BiSolidDashboard color="rgb(75 91 101)" />
                      {type}
                    </div>
                  ))}
                </div>
              ) : null}
            </ThemeProvider>
            <div className="flex justify-center items-centER bg-teal-900 rounded-[50%] w-9 h-9">
              <h1 className=" text-2xl uppercase text-white ">
                {parsedProfile?.firstname?.[0]}
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 items-center justify-center hover:text-primaryHover ">
            <NavLink
              className=" hover:text-primaryHover text-bodyText "
              to="/auth?mode=login"
            >
              Login
            </NavLink>
            <Link
              className="    px-5 py-4  rounded-md    outline outline-2 outline-primaryColC text-primaryCol w-full"
              to="/auth?mode=signup"
            >
              Get started
            </Link>
          </div>
        )}
      </nav>

      <div className="py-5 bg-navBg fixed top-0 left-0 flex items-center justify-between md:hidden font-medium w-full z-50 px-5">
        <div className="relative h-8 w-32">
          <a href="/home">
            <img className=" h-full " src="/Logo.svg" alt="E-vent" />
          </a>
        </div>
        <IoMenu
          className="text-3xl font-semibold cursor-pointer"
          onClick={handleShowMenu}
        />
      </div>

      {showMenu && (
        <div className="absolute top-20 right-0 w-full h-96 z-40">
          <div className="w-[90%] mx-auto bg-white shadow-xl h-full overflow-y-auto p-5">
            <ul className="flex flex-col gap-6 text-bodyText mb-10">
              <li className="flex gap-1 justify-center items-center">
                <NavLink
                  to="/home"
                  className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer`}
                  style={({ isActive }) => {
                    if (isActive && locationArray > 2)
                      return {
                        color: "",
                      };
                    else
                      return {
                        color: isActive ? "#df3602" : "",
                      };
                  }}
                >
                  <span>Company</span>
                </NavLink>
                <img src="/dropDown.svg" alt="" />
              </li>

              <NavLink
                className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer `}
                to="/home/for-events"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#df3602" : "",
                  };
                }}
              >
                <span>For event host</span>
              </NavLink>
              <NavLink
                className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer `}
                to="/home/event-personnel"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#df3602" : "",
                  };
                }}
              >
                <span>For event personnel</span>
              </NavLink>
              <li className="flex gap-1 justify-center items-center">
                <NavLink
                  className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer`}
                  to={"/home/use-case"}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#df3602" : "",
                    };
                  }}
                >
                  <span>Use cases</span>
                </NavLink>
                <img src="/dropDown.svg" alt="" />
              </li>

              <li className="flex gap-1 justify-center items-center">
                <NavLink
                  className={`flex justify-center items-center gap-1   hover:text-primaryHover cursor-pointer`}
                  to="/home/resources"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#df3602" : "",
                    };
                  }}
                >
                  <span>Resources</span>
                </NavLink>
                <img src="/dropDown.svg" alt="" />
              </li>
            </ul>

            {parsedProfile ? (
              <div className="flex gap-4 items-center justify-center  ">
                {/* <div
            className="flex justify-center items-center gap-2   hover:text-primaryHover cursor-pointer"
            onClick={() => {
              setActiveTool(!activeTool);
            }}
          >
            <i className={` ${activeTool ? "activeTool" : "tools"}`}></i>{" "}
            <p className=" text-bodyText">Tools</p>
          </div> */}
                <ThemeProvider theme={theme}>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    disableElevation
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    onClick={handleClick}
                    color="primary"
                    startIcon={
                      open ? (
                        <BiSolidDashboard color="#df3602" />
                      ) : (
                        <BiSolidDashboard color="rgb(75 91 101)" />
                      )
                    }
                    sx={{
                      color: open ? "#df3602" : "rgb(75 91 101)",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: "500",
                      zIndex: 50,
                    }}
                  >
                    Tools
                  </Button>
                  {open ? (
                    <div className="fixed top-16 right-36  bg-white py-3 px-2 flex flex-col gap-2">
                      {tools.map(({ type, src }) => (
                        <div className="flex items-center   gap-2 py-2 px-3  text-[rgb(75 91 101)]">
                          <BiSolidDashboard color="rgb(75 91 101)" />
                          {type}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </ThemeProvider>
                <div className="flex justify-center items-centER bg-teal-900 rounded-[50%] w-9 h-9">
                  <h1 className=" text-2xl uppercase text-white ">
                    {parsedProfile?.firstname?.[0]}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="flex gap-4 items-center justify-between hover:text-primaryHover ">
                <NavLink
                  className=" hover:text-primaryHover text-bodyText w-40"
                  to="/auth?mode=login"
                >
                  Login
                </NavLink>
                <Link
                  className="    px-5 py-4  rounded-md    outline outline-2 outline-primaryColC text-primaryCol w-40"
                  to="/auth?mode=signup"
                >
                  Get started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
