import { useEffect, useState } from "react";
import { allProspects } from "../../../../utils/Test";
// import AllDetails from "../../../components/AllDetails";
import EachDetails from "../../../components/EachDetails";
import { getAllProspects, getProspectById } from "../utils/prospectApi";
import ProspectFetcher from "../../offers/components/ProspectFetcher";
import { getAuthToken } from "../../../../utils/Auth";
import { waveform } from "ldrs";
import WaveLoader from "../../../../components/WaveLoader";
import { formatDateAndTime } from "../utils/helper";
import { useFetchAllProspects } from "./../../../../hook/query/useFetchAllProspects";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const AllProspects = () => {
  // const [prospects, setProspects] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [openRowId, setOpenRowId] = useState(null);

  const handleOpenRow = (id) => {
    setOpenRowId(openRowId === id ? null : id);
  };

  waveform.register();

  const { data: Prospects, isLoading } = useFetchAllProspects();

  console.log({ Prospects });

  const prospects = Prospects?.data?.data;

  const buttons = [
    "All inbounds",
    "Marketplace requests",
    "Marketplace vacancies",
    "Offline inbounds",
  ];
  const options = (id) => [
    {
      src: "/images/dashboard/accept.png",
      value: "Accept Order",
      to: "",
    },
    {
      src: "/images/dashboard/reject.png",
      value: "Reject Order",
      to: "",
    },
    {
      src: "/images/dashboard/view.png",
      value: "View Details",
      to: `/prospects/prospect-info/${id}`,
    },
  ];

  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("all inbounds");

  // handle active button
  const handleClick = (index, tab) => {
    setActive(index);
    setTab(tab.toLowerCase());
  };

  const handleSelectChange = (event) => {
    const selectedTab = event.target.value;
    const index = buttons.findIndex((button) => button === selectedTab);
    handleClick(index, selectedTab);
  };

  if (isLoading) return <WaveLoader />;

  return (
    <div className="md:m-4 p-4 rounded-lg border border-borderGrey w-full overflow-x-scroll">
      {/* Top */}
      <div className="flex justify-between items-center gap-6 mb-[20px]">
        {/* Button List */}
        <div className="hidden md:flex gap-4 p-2 bg-[#F9D7CC] rounded-full">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleClick(index, button)}
              className={`py-[4px] px-5 w-max text-White rounded-full outline-none ${
                index === active ? "bg-primaryColC" : "bg-none"
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        <div className="block md:hidden w-[200px]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label capitalize">
              {tab}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tab}
              label={tab}
              onChange={handleSelectChange}
            >
              {buttons.map((button, index) => (
                <MenuItem
                  value={button}
                  key={index}
                  className={`py-[4px] px-5 w-max text-White rounded-full outline-none  ${
                    index === active ? "bg-primaryColC" : "bg-none"
                  }`}
                >
                  {button}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="">
          <button className="flex gap-2 py-2 px-6 border border-primaryColC text-primaryColC rounded-full">
            <img src="/images/dashboard/sort.png" alt="Sort image" />
            Filter
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 flex items-center text-primaryColC"
              >
                <input
                  type="checkbox"
                  className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none accent-primaryCol h-5 w-5 border border-primaryColC rounded-sm mr-2"
                />
                Prospects ID
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Client Name
              </th>
              <th scope="col" className="px-6 py-3">
                Source
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {prospects
              ?.filter((p) => {
                if (tab === "all inbounds") return true;
                if (tab === "marketplace requests")
                  return p.source === "Online";
                if (tab === "marketplace vacancies")
                  return p.status === "Pending";
                if (tab === "offline inbounds") return p.source === "Offline";
                return false;
              })
              .map((data, index) => (
                <EachDetails
                  key={index}
                  data={data}
                  type="Prospects"
                  options={options}
                  optionTo="/prospects"
                  isOpen={openRowId === data.id}
                  onOpen={() => handleOpenRow(data.id)}
                />
              ))}
          </tbody>
        </table>
      </div>

      {prospects?.filter((p) => {
        if (tab === "all inbounds") return true;
        if (tab === "marketplace requests") return p.source === "Online";
        if (tab === "marketplace vacancies") return p.status === "Pending";
        if (tab === "offline inbounds") return p.source === "Offline";
        return false;
      }).length === 0 && (
        <div className="text-center my-12 w-full">No prospect yet</div>
      )}
    </div>
  );
};

export default AllProspects;
