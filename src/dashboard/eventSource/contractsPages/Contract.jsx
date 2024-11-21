import React from "react";
import AreaChart from "../../components/AreaCharts";
import DropdownMenu from "../../components/ButtonDropdown";
import RecentActivities from "../../components/RecentActivities";

const Contract = () => {
  const contracts = [
    {
      percent: null,
      value: 0,
      type: "All Contracts",
      src: "all-contract",
      data: [0, 20, 5, 35, 25, 45],
    },
    {
      percent: null,
      value: 0,
      type: "Accepted contract",
      src: "accepted-contract",
      data: [0, 18, 10, 35, 15, 50, 25],
    },
    {
      percent: null,
      value: 0,
      type: "Pending contract",
      src: "pending-contract",
      data: [0, 20, 5, 35, 25, 45],
    },
  ];
  return (
    <div className="top-20 relative pb-7">
      <DropdownMenu
        viewAll={"View all contracts"}
        addNew={"Add new contract"}
        type={"Contract manager"}
      />
      <div className="relative   w-full px-4 md:px-0 ">
        <AreaChart eventSourced={contracts} />
      </div>

      <div className="w-full text-right pr-4 md:pr-0">
        <button className="text-primaryColC border-primaryColC border p-2 rounded-md relative mt-5  ">
          View custom report
        </button>
      </div>
      <RecentActivities eventSourced={"Contracts"} />
    </div>
  );
};

export default Contract;
