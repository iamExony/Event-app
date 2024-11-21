import { useState } from "react";
import MenuOption from "./MenuOption";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const MultiSelect = ({ theme, setTheme, title,themeList }) => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  function handleDeleteOption(option) {
    console.log(theme);
    setTheme(theme.filter((theme) => theme !== option));
  }

  return (
    <div>
      <div className="w-full rounded-md border-2 border-borderColor flex justify-start items-center flex-wrap ">
        {theme.length === 0 && (
          <p className="text-slate-400 m-3 w-[90%]" onClick={handleMenu}>
          {title}
          </p>
        )}
        {theme.length >= 1 && (
          <div
            className="w-[95%] flex flex-wrap"
            onClick={() => setOpenMenu(false)}
          >
            {theme.map((theme) => (
              <p
                key={theme}
                className="p-2 pr-0 text-sm bg-slate-200 rounded-md m-1"
              >
                {theme}{" "}
                <span
                  className="hover:bg-red-200 hover:text-white cursor-pointer p-2 rounded-r-md z-10"
                  onClick={() => handleDeleteOption(theme)}
                >
                  x
                </span>
              </p>
            ))}
          </div>
        )}
        <span className="relative right-0" onClick={handleMenu}>
          {openMenu ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </div>

      {openMenu && (
        <ul className="h-[220px] border border-borderColor overflow-y-scroll relative">
          {themeList.map((option) => (
            <MenuOption
              key={option}
              value={option}
              theme={theme}
              setTheme={setTheme}
            >
              {option}
            </MenuOption>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
