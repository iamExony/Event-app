
import { useEffect, useState } from "react";

function OptionButton({
  specifications,
  setSpecifications,
  specificationId,
  setSpecificationType,
  setProvision,
  setActivity,
  setDescription,
  setStartDate,
  setEndDate,
  setAmount,
}) {
  const [open, setOpen] = useState(false);

  //Handle delete specification
  function handleDelete(id) {
    setSpecifications(
      specifications.filter((specification) => specification.id !== id)
    );
  }
  //Handle Edit specifications
  function handleEdit(id) {
    const curSpecification = specifications.filter(
      (specification) => specification.id === id
    );
    setSpecificationType(curSpecification.at(0).specificationType);
    setProvision(curSpecification.at(0).provision);
    setActivity(curSpecification.at(0).activity);
    setDescription(curSpecification.at(0).description);
    setStartDate(curSpecification.at(0).startDate);
    setEndDate(curSpecification.at(0).endDate);
    setAmount(curSpecification.at(0).amount);

    setSpecifications(
      specifications.filter((specification) => specification.id !== id)
    );
  }

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
      <div className="relative">

        <button className="">
          <img
            src="/images/dashboard/open-options.png"
            alt={`Open specification`}
            onClick={() => setOpen(!open)}
          />
        </button>


        {/* Dropdown */}
        <div
          className="absolute w-max -bottom-[-60%] right-[0%] bg-red rounded-md py-3 shadow-md z-10 text-sm bg-white"
          onClick={() => setOpen(!open)}
        >
          <ul>
            <li
              key={1}
              onClick={() => handleEdit(specificationId)}
              className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200 ${
                open ? "block" : "hidden"
              }`}
            >
              <img src={"/images/dashboard/createIcon.png"} alt="" />

              <span className="">Create Invoice</span>
            </li>
            <li
              key={0}
              onClick={() => handleEdit(specificationId)}
              className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200 ${
                open ? "block" : "hidden"
              }`}
            >
              <img src={"/images/dashboard/editIcon.png"} alt="" />

              <span className="">Edit Details</span>
            </li>

            <li
              key={2}
              onClick={() => handleDelete(specificationId)}
              className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200 ${
                open ? "block" : "hidden"
              }`}
            >
              <img src={"/images/dashboard/reject.png"} alt="" />

              <span className="">Delete</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OptionButton;

