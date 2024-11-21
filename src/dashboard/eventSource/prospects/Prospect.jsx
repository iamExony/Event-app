import DropdownMenu from "../../components/ButtonDropdown";
import AreaChart from "../../components/AreaCharts";
import RecentActivities from "../../components/RecentActivities";
import { useSelector } from "react-redux";
// import { getProspect } from "./utils/prospectSlice";
// import { createProspect } from "./utils/prospectSlice";
// import { getProspects } from "./utils/prospectSlice";

const Prospects = () => {
  const prospects = [
    {
      percent: null,
      value: 0,
      type: "All prospects",
      src: "converted-prospects",
      data: [0, 20, 5, 35, 25, 45],
    },
    {
      percent: null,
      value: 0,
      type: "Converted prospects",
      data: [0, 18, 10, 35, 15, 50, 25],
    },
    {
      percent: null,
      value: 0,
      type: "Pending prospects",
      src: "converted-prospects",
      data: [0, 20, 5, 35, 25, 45],
    },
  ];

  // getProspects()
  // createProspect()

  return (
    <div className=" top-20 relative md:px-0 px-4 pb-7">
      <DropdownMenu
        viewAll={"View all prospects"}
        addNew={"Add new prospect"}
        type={"Prospect manager"}
      />

      <div className="relative w-full px-0 ">
        <AreaChart eventSourced={prospects} />
      </div>

      <div className="w-full text-right ">
        <button className="text-primaryColC border-primaryColC border p-2 rounded-md relative mt-5  ">
          View custom report
        </button>
      </div>

      {/* Bottom Section */}
      <RecentActivities eventSourced={"Prospect"} />
    </div>
  );
};

export default Prospects;
