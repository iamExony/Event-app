import DropdownMenu from "../../components/ButtonDropdown";
import AreaChart from "../../components/AreaCharts";
import RecentActivities from "../../components/RecentActivities";

const Entrypass = () => {
  const entrypass = [
    {
      percent: null,
      value: 0,
      type: "All entry pass",
      src: "converted-passes",
      data: [0, 20, 5, 35, 25, 45],
    },
    {
      percent: null,
      value: 0,
      type: "Paid passes",
      src: "converted-passes",

      data: [0, 18, 10, 35, 15, 50, 25],
    },
    {
      percent: null,
      value: 0,
      type: "Registered passes",
      src: "converted-passes",
      data: [0, 20, 5, 35, 25, 45],
    },
  ];

  return (
    <div className="top-20 relative pb-7">
      <DropdownMenu
        viewAll={"View all entrypass"}
        addNew={"Create new entrypass"}
        type={"Pass manager"}
      />

      <div className="relative  w-full px-4 md:px-0 ">
        <AreaChart eventSourced={entrypass} />
      </div>

      <div className="w-full text-right ">
        <button className="text-primaryColC border-primaryColC border p-2 rounded-md relative mt-5">
          View custom report
        </button>
      </div>

      {/* Bottom Section */}
      <RecentActivities eventSourced={"Entry passes"} />
    </div>
  );
};

export default Entrypass;
