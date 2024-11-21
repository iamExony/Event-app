import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ subs, setShowMobileDrawer }) => {
  const [activeLink, setActiveLink] = useState("");
  const activeLinkHandler = (link) => {
    setActiveLink(link);
    setShowMobileDrawer(false);
  };

  return (
    <ul className="border-l-[1.5px] border-[#EBEBEB] ml-9 mt-5">
      {subs.map((sub, index) => (
        <li key={index}>
          <NavLink
            to={`/${sub.link}`}
            className={`group flex justify-start ml-6 mr-4 rounded-lg py-4 px-3 items-center gap-7 cursor-pointer hover:text-primaryColC ${
              activeLink === sub.link && "colored"
            } `}
            onClick={() => activeLinkHandler(sub.link)}
          >
            {!sub.activeIcon ? (
              <i
                className={`dashDark group-hover:bg-[url(/images/dashboard/colorIcon.svg)] ${
                  activeLink === sub.link && "dashColor"
                }`}
              />
            ) : (
              <i>
                {activeLink === sub.link ? sub.activeIcon : sub.inactiveIcon}
              </i>
            )}
            <h4>{sub.name}</h4>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
