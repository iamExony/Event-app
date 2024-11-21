import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

const Checkbox = ({
  id,
  value,
  color = "#D9D9D9",
  defaultType = false,
  handleCheck,
}) => {
  const [check, setCheck] = useState(false);
  const handleChange = () => {
    handleCheck(!value);
  };

  return (
    <div className="check-div relative w-min">
      <input
        id={id}
        value={value}
        type="checkbox"
        onClick={() => setCheck(!check)} //Default check (if no value is provided)
        onChange={(e) => handleChange(e.target.checked)}
        className={`appearance-none bg-transparent border border-${color} w-5 h-5 rounded outline-none cursor-pointer`}
      />

      {value && (
        <FiCheck
          className={`absolute inset-0 m-auto text-${color} -z-10 -translate-y-[3px]`}
        />
      )}
      {defaultType && check && (
        <FiCheck
          className={`absolute inset-0 m-auto text-${color} -z-10 -translate-y-[3px]`}
        />
      )}
    </div>
  );
};

export default Checkbox;
