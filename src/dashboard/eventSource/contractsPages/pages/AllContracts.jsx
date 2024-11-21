import AllDetails from "../../../components/AllDetails";
import { allContracts } from "../../../../utils/Test";
import { useState } from "react";
import { waveform } from "ldrs";
import { useFetchAllContracts } from "./../../../../hook/query/useFetchAllContracts";
import WaveLoader from "../../../../components/WaveLoader";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import EachDetails from "../../../components/EachDetails";

const AllContracts = () => {
  const [openRowId, setOpenRowId] = useState(null);

  const handleOpenRow = (id) => {
    setOpenRowId(openRowId === id ? null : id);
  };

  waveform.register();

  const { data: contracts, isLoading } = useFetchAllContracts();

  console.log({ contracts });

  const contractData = contracts?.data?.data;

  const buttons = ["All Contracts", "Accepted Contracts", "Pending Contracts"];
  const options = (id) => [
    // {
    //   src: "/images/dashboard/accept.png",
    //   value: "Accept Contract",
    //   to: "/contracts/all-contracts/details",
    // },
    {
      src: "",
      value: "Edit Contract",
      to: "",
    },
    {
      src: "/images/dashboard/view.png",
      value: "View Details",
      to: `/contracts/contract-info/${id}`,
    },
  ];

  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("all contracts");

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
    // <AllDetails
    //   type={"Contracts"}
    //   buttons={buttons}
    //   options={options}
    //   testData={allContracts}
    // />
    <div className="md:m-4 p-4 rounded-lg border border-borderGrey w-full overflow-x-scroll">
      <div className="flex justify-between items-center gap-6 mb-[20px]">
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
                Contract ID
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
            {contractData?.map((data, index) => (
              <EachDetails
                key={index}
                data={data}
                type="Contracts"
                options={options}
                optionTo="/contracts"
                isOpen={openRowId === data.id}
                onOpen={() => handleOpenRow(data.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContracts;
