import AllDetails from "../../components/AllDetails";
import { allPayments } from "../../../utils/Test";
import { useFetchAllInvoices } from "../../../hook/query/useFetchAllInvoices";
import WaveLoader from "../../../components/WaveLoader";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import EachDetails from "../../components/EachDetails";
import EachPaymentDetails from "../../components/EachPaymentDetails";

const AllPayments = () => {
  const [active, setActive] = useState(0);
  const [openRowId, setOpenRowId] = useState(null);
  const [tab, setTab] = useState("all payments");

  const { data: invoices, isLoading } = useFetchAllInvoices();

  console.log({ invoices });

  const invoiceData = invoices?.data?.data;

  const buttons = ["All payments", "Most invoices", "Ticket payments"];
  const options = (id) => [
    {
      src: "/images/dashboard/view.png",
      value: "Edit Invoice",
      to: "",
    },
    {
      src: "/images/dashboard/view.png",
      value: "View Details",
      to: `/payments/payment-info/${id}`,
    },
  ];

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

  return (
    // <AllDetails
    //   type={"Invoice"}
    //   buttons={buttons}
    //   options={options}
    //   testData={allPayments}
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
                Invoice ID
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
            {invoiceData?.map((data, index) => (
              // <EachDetails
              //   key={index}
              //   data={data}
              //   type="Contracts"
              //   options={options}
              //   optionTo="/contracts"
              //   isOpen={openRowId === data.id}
              //   onOpen={() => handleOpenRow(data.id)}
              // />
              <EachPaymentDetails
                key={index}
                type="Invoices"
                data={data}
                options={options}
                optionTo="/payments"
                onOpen={() => handleOpenRow(data.id)}
                isOpen={openRowId === data.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPayments;
