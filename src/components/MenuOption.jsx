import { useEffect, useState } from "react";

function MenuOption({ children, value, theme, setTheme }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (theme.includes(children)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [setSelected]);

  function handleClick(children) {
    if (theme.includes(children)) {
      setSelected(false);
      setTheme(theme.filter((theme) => theme !== children));
    } else {
      setTheme([...theme, children]);
      setSelected(true);
    }
  }
  return (
    <option
      key={value}
      value={value}
      onClick={() => handleClick(children)}
      className={`p-2 m-1 hover:bg-blue-500 rounded-md hover:text-white capitalize ${
        selected ? "bg-blue-300 text-white" : ""
      }`}
    >
      {children}
    </option>
  );
}

export default MenuOption;
