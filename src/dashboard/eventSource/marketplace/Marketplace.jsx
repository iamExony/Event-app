import AreaChart from "../../components/AreaCharts";
import DropdownMenu from "../../components/ButtonDropdown";
import RecentActivities from "../../components/RecentActivities";
import DropdownButton from "./components/MarketplaceManagerButton";

const Marketplace = () => {
  const offers = [
    {
      percent: null,
      value: 0,
      type: "All Applications",
      // src: "all-offers"
      src: "converted-offers",
      data: [0, 20, 5, 35, 25, 45],
    },
    {
      percent: null,
      value: 0,
      type: "Accepted Applications",
      src: "converted-offers",
      data: [0, 18, 10, 35, 15, 50, 25],
    },
    {
      percent: null,
      value: 0,
      type: "Pending Application",
      // src: "pending-offers"
      src: "converted-offers",
      data: [0, 20, 5, 35, 25, 45],
    },
  ];

  return (
    <div className="top-20 relative px-4 md:px-0 pb-7">
      <DropdownButton
        viewAll={"E-sales manager"}
        addNew={"View/edit webpage"}
        type={"Marketplace manager"}
      />
      <div className="relative   w-full px-0 ">
        <AreaChart eventSourced={offers} />
      </div>

      <div className="w-full text-right ">
        <button className="text-primaryColC border-primaryColC border p-2 rounded-md relative mt-5  ">
          View custom report
        </button>
      </div>
      <RecentActivities eventSourced={"marketplace activity"} />
    </div>
  );
};

export default Marketplace;
