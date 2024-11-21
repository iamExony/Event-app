import { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

/**
 * Array of Objects
 * @param {array} options
 * {
 *  title,
 *  icon,
 *  to,
 *  onClick,
 * }
 * @param {object} prescription
 * @param {function} setPrescriptions
 * @param {array} prescriptions
 * @returns {jsx}
 */

export default function OptionButton({ options }) {
  const [open, setOpen] = useState(false);

  useEffect(function () {
    function callback(e) {
      if (e.code === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  return (
    <div>
      <div className="relative ">
        <div className="flex gap-1 cursor-pointer" onClick={() => setOpen(!open)}>
          <MdSettings />
          {!open ? <AiOutlineDown /> : <AiOutlineUp />}
        </div>

        {/* Dropdown */}
        <div
          className={`absolute w-max left-[50%] top-6  bg-red rounded-md py-3 shadow-inner shadow-slate-300 z-10 bg-white text-xs transition-all ease-in-out duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0' }`}
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <ul >
            {options.map((option, index) => {
              return option.to ? (
                <Link to={option.to}>
                  <li
                    key={option.title + index * 2}
                    className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200  `}
                  >
                    {option.icon}

                    <span className="font-normal">{option.title}</span>
                  </li>
                </Link>
              ) : (
                <li
                  key={option.title + index}
                  className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200  `}
                >
                  {option.icon}

                  <span className="font-normal">{option.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
