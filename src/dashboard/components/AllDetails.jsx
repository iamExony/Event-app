import { useState } from "react";
import EachOfferDetails from "./EachOfferDetails";
import { waveform } from "ldrs";
import WaveLoader from "../../components/WaveLoader";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const AllDetails = ({
  type,
  buttons,
  // options,
  testData,
  offerData,
  isLoadingOffer,
}) => {
  const [openRowId, setOpenRowId] = useState(null);
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("all offers");

  const handleClick = (index, tab) => {
    setActive(index);
    setTab(tab.toLowerCase());
  };

  const handleSelectChange = (event) => {
    const selectedTab = event.target.value;
    const index = buttons.findIndex((button) => button === selectedTab);
    handleClick(index, selectedTab);
  };

  const handleOpenRow = (id) => {
    setOpenRowId(openRowId === id ? null : id);
  };

  const mainData = offerData?.data?.data;

  waveform.register();

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
      to: `/offers/offer-info/${id}`,
    },
  ];
  if (isLoadingOffer) return <WaveLoader />;

  return (
    <>
      <div className="md:m-4 p-4 rounded-lg border border-borderGrey w-full overflow-x-scroll">
        {/* Top */}
        <div className="flex justify-between  items-center gap-6 mb-4">
          {/* Button List */}
          <div className="hidden md:flex gap-4 p-2 bg-[#F9D7CC] rounded-full">
            {buttons?.map((button, index) => (
              <button
                key={index}
                onClick={() => handleClick(index, button)}
                className={`py-1 px-5 w-max text-White rounded-full  ${
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

        {/* Bottom List */}
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
                  Offer ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {mainData
                ?.filter((p) => {
                  if (tab.toString() === "all offers") return true;
                  if (tab === "pending")
                    return p.source.toString() === "pending";
                  if (tab.toString() === "pending  offers")
                    return p.status === "Pending";
                  if (tab.toLowerCase() === "accepted offers")
                    return p.status.toLowerCase() === "accepted";
                  return false;
                })
                .map((data, index) => (
                  <EachOfferDetails
                    key={index}
                    type={type}
                    data={data}
                    options={options}
                    optionTo="/contracts"
                    isOpen={openRowId === data.event_id}
                    onOpen={() => handleOpenRow(data.event_id)}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllDetails;
