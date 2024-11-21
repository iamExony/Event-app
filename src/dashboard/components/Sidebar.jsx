import * as React from "react";
import { Form, Link, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";

import { ClientIcon, ContractIcon, EntryIcon, EventIcon, EventSourceIcon, MarketplaceIcon, OfferIcon, PaymentIcon, PlannerIcon, ProspectIcon } from "../icons/SidebarIcons";



export default function Sidebar({ showDrawer, setShowDrawer }) {
  const history = useLocation();
  const headerMenu = history.pathname.slice(9);

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(headerMenu);

  const activeHandler = () => {
    setOpen(!open);
  };

  const activeLinkHandler = (link) => {
    setActiveLink(link);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#EA7956;",
      },
    },
    typography: {
      fontFamily: [""],
    },
  });

  const eventSourcing = [
    {
      link: "prospects",
      name: "Prospects",
      activeIcon: <ProspectIcon active />,
      inactiveIcon: <ProspectIcon />,
    },
    {
      link: "offers",
      name: "Offers",
      activeIcon: <OfferIcon active />,
      inactiveIcon: <OfferIcon />,
    },
    {
      link: "contracts",
      name: "Contracts",
      activeIcon: <ContractIcon active/>,
      inactiveIcon: <ContractIcon/>,
    },
    {
      link: "marketplace",
      name: "Marketplace",
      activeIcon: <MarketplaceIcon active />,
      inactiveIcon: <MarketplaceIcon />,
    },
  ];

  const planner = [
    {
      link: "payments",
      name: "Payments",
      activeIcon: <PaymentIcon active />,
      inactiveIcon: <PaymentIcon />,
    },
    {
      link: "events",
      name: "Events",
      activeIcon: <EventIcon active />,
      inactiveIcon: <EventIcon />,
    },
    {
      link: "entrypass",
      name: "Entry pass",
      activeIcon: <EntryIcon active />,
      inactiveIcon: <EntryIcon />,
    },
    {
      link: "specifications",
      name: "Specifications",
    },
    {
      link: "client",
      name: "Client",
      activeIcon: <ClientIcon active />,
      inactiveIcon: <ClientIcon />,
    },
    {
      link: "procurement",
      name: "Procurement",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <List
        sx={{
          width: { sm: "20%", xs: "100%" },
          bgcolor: "background.paper",
          height: "100vh",
          zIndex: "9",
          position: "fixed",
          borderRight: "0.5px solid #737373",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              backgroundColor: "white",
              zIndex: "5",
            }}
          >
            <div className="flex w-full items-center justify-between m-4 bg-white">
              <a href="/">
                <img className=" w-[100px] " src="/Logo.svg" alt="E-vent" />
              </a>
              <IoMdClose
                size={30}
                className="lg:hidden"
                onClick={() => setShowDrawer(!showDrawer)}
              />
            </div>
          </ListSubheader>
        }
      >
        <ul className="relative top-10">
          <ListItemButton
            sx={{
              margin: "3rem 1rem 0rem 1.5rem ",
              padding: "0rem",
            }}
            className="dash"
          >
            <NavLink
              to="/dashboard"
              className={`flex justify-start  rounded-lg p-3 items-center   hover:text-white hover:bg-primaryColC cursor-pointer  w-full h-full  ${
                activeLink === "dashboard" ? "coloredlink" : ""
              }`}
              onClick={() => activeLinkHandler("dashboard")}
            >
              <ListItemIcon>
                <i
                  className={` ${
                    activeLink === "dashboard" ? "dus" : "dashIcon"
                  }`}
                ></i>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </NavLink>
          </ListItemButton>

          <ListItemButton
            sx={{ margin: "1rem 1rem 0rem 1.5rem ", padding: "0rem" }}
            className="dash"
            onClick={activeHandler}
          >
            <NavLink
              to="/prospects"
              className={`flex justify-start  rounded-lg p-3 items-center   hover:text-white hover:bg-primaryColC cursor-pointer  w-full h-full ${
                activeLink === "prospects" ? "coloredlink" : ""
              } `}
              onClick={() => activeLinkHandler("prospects")}
            >
              <ListItemIcon>
                {activeLink === "prospects" ? (
                  <EventSourceIcon color={"white"} />
                ) : (
                  <EventSourceIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="Event sourcing" />
              {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </NavLink>
          </ListItemButton>

          <Collapse
            in={open && activeLink === "prospects"}
            timeout="auto"
            unmountOnExit
          >
            <SubMenu subs={eventSourcing} />
          </Collapse>

          <ListItemButton
            sx={{ margin: "1rem 1rem 0rem 1.5rem ", padding: "0rem" }}
            className="dash"
            onClick={() => setOpen(!open)}
          >
            <NavLink
              to="/payments"
              className={`flex justify-start  rounded-lg p-3 items-center   hover:text-white hover:bg-primaryColC cursor-pointer  w-full h-full ${
                activeLink === "planner" ? "coloredlink" : ""
              } `}
              onClick={() => activeLinkHandler("planner")}
            >
              <ListItemIcon>
                {activeLink === "planner" ? (
                  <PlannerIcon color={"white"} />
                ) : (
                  <PlannerIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="Planner" />
              {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </NavLink>
          </ListItemButton>
          <Collapse
            in={open && activeLink === "planner"}
            timeout="auto"
            unmountOnExit
          >
            <SubMenu subs={planner} />
          </Collapse>

          <ListItemButton
            sx={{ margin: "1rem 1rem 0rem 1.5rem ", padding: "0rem" }}
            className="dash"
            onClick={activeHandler}
          >
            <NavLink
              to="/crm"
              className={`flex justify-start  rounded-lg p-3 items-center   hover:text-white hover:bg-primaryColC cursor-pointer  w-full h-full ${
                activeLink === "crm" ? "coloredlink" : ""
              } `}
              onClick={() => activeLinkHandler("crm")}
            >
              <ListItemIcon>
                <i
                  className={` ${activeLink === "crm" ? "dus" : "dashIcon"}`}
                ></i>
              </ListItemIcon>
              <ListItemText primary="CRM" />
            </NavLink>
          </ListItemButton>

          <ListItemButton
            sx={{ margin: "1rem 1rem 0rem 1.5rem ", padding: "0rem" }}
            className="dash"
            onClick={activeHandler}
          >
            <NavLink
              to="/back-office"
              className={`flex justify-start  rounded-lg p-3 items-center   hover:text-white hover:bg-primaryColC cursor-pointer  w-full h-full ${
                activeLink === "back-office" ? "coloredlink" : ""
              } `}
              onClick={() => activeLinkHandler("back-office")}
            >
              <ListItemIcon>
                <i
                  className={` ${
                    activeLink === "back-office" ? "dus" : "dashIcon"
                  }`}
                ></i>
              </ListItemIcon>
              <ListItemText primary="Back Office" />
            </NavLink>
          </ListItemButton>

          <ListItemButton
            sx={{ margin: "1rem 1rem 0rem 1.5rem ", padding: "0rem" }}
            className="dash"
            onClick={activeHandler}
          >
            <NavLink
              to="/help-desk"
              className={`flex justify-start  rounded-lg p-3 items-center   hover:text-white hover:bg-primaryColC cursor-pointer  w-full h-full ${
                activeLink === "help-desk" ? "coloredlink" : ""
              } `}
              onClick={() => activeLinkHandler("help-desk")}
            >
              <ListItemIcon>
                <i
                  className={` ${
                    activeLink === "help-desk" ? "dus" : "dashIcon"
                  }`}
                ></i>
              </ListItemIcon>
              <ListItemText primary="Help Desk" />
            </NavLink>
          </ListItemButton>
        </ul>
        <Form
          action="/logout"
          method="post"
          className="w-full mt-20 flex gap-2  items-center ml-10 text-md"
        >
          <img src="/images/dashboard/logout.png" alt="" className=" h-7 w-7" />
          <button>Logout</button>
        </Form>
      </List>
    </ThemeProvider>
  );
}
