import AreaChart from "../../components/AreaCharts";
import DropdownMenu from "../../components/ButtonDropdown";
import RecentActivities from "../../components/RecentActivities";

const Offers = () => {
  const offers = [
    {
      percent: null,
      value: 0,
      type: "All Offers",
      // src: "all-offers"
      src: "converted-offers",
      data: [0, 20, 5, 35, 25, 45],
    },
    {
      percent: null,
      value: 0,
      type: "Converted offers",
      src: "converted-offers",
      data: [0, 18, 10, 35, 15, 50, 25],
    },
    {
      percent: null,
      value: 0,
      type: "Pending offers",
      // src: "pending-offers"
      src: "converted-offers",
      data: [0, 20, 5, 35, 25, 45],
    },
  ];

  return (
    <div className="top-20 relative pb-7 px-4 md:px-0">
      <DropdownMenu
        viewAll={"View all offers"}
        addNew={"Add new offer"}
        type={"Offers manager"}
      />
      <div className="relative   w-full px-0 ">
        <AreaChart eventSourced={offers} />
      </div>

      <div className="w-full text-right ">
        <button className="text-primaryColC border-primaryColC border p-2 rounded-md relative mt-5  ">
          View custom report
        </button>
      </div>
      <RecentActivities eventSourced={"Offer"} />
    </div>
  );
};

export default Offers;
