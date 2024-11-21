import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { formatDateAndTime } from "../eventSource/prospects/utils/helper";

const EachPaymentDetails = ({ type, data, options, isOpen, onOpen }) => {
  const { id, created_at, source, location, status, client } = data;

  const pending =
    "text-[#FFA902] border border-[#FFA902] bg-[#FFA902] bg-opacity-30 py-2 px-4 rounded-lg";
  const converted =
    "text-[#049561] border border-[#049561] bg-[#9FF1CA] py-2 px-3 rounded-lg";

  return (
    <tr className="bg-white border-b  hover:bg-gray-50 w-full">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <input
          type="checkbox"
          className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-5 w-5 border border-primaryColC rounded-sm mr-2"
        />

        <label htmlFor={type} className="text-primaryColC">
          {id.substring(0, 8)}
        </label>
      </th>
      <td className="px-6 py-4 whitespace-nowrap">
        {formatDateAndTime(created_at)}
      </td>
      <td className="px-6 py-4">{client?.name}</td>
      <td className="px-6 py-4">
        {type === "Prospects" ? (
          <span
            className={`${
              source === "Online"
                ? "text-[#027A48] border-[#027A48]"
                : "text-[#B42318] border-[#B42318]"
            } py-1 rounded-full text-center border flex justify-center items-center gap-2`}
          >
            <GoDotFill className="w-3" />
            {source}
          </span>
        ) : (
          <span className="whitespace-nowrap">
            {client?.location_address || "--"}
          </span>
        )}
      </td>
      <td>
        <div className="flex w-full items-center justify-between mr-[4px]">
          <span
            className={`${status === "Pending" ? pending : converted} w-fit`}
          >
            {status}
          </span>
          <div className="relative mx-4">
            <button>
              <img
                src="/images/dashboard/open-options.png"
                alt={`Open ${type}`}
                onClick={onOpen}
              />
            </button>

            <div className="absolute w-max top-[100%] right-[10px] bg-White rounded-md py-3 shadow-md z-10">
              <ul>
                {options(id)?.map((option, index) => (
                  <Link key={index} to={option?.to}>
                    <li
                      className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200 ${
                        isOpen ? "block" : "hidden"
                      }`}
                    >
                      <img src={option?.src} alt="" />
                      <span>{option?.value}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default EachPaymentDetails;
