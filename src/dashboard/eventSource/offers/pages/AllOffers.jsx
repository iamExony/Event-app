import AllDetails from "../../../components/AllDetails";
import { allContracts } from "../../../../utils/Test";
import { useFetchAllOffer } from "./../../../../hook/query/useFetchAllOffer";
import { waveform } from "ldrs";
import { useState } from "react";

const AllOffers = () => {
  const [openRowId, setOpenRowId] = useState(null);
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("All offers");
  const { data: offerData, isLoading: isLoadingOffer } = useFetchAllOffer();

  const handleOpenRow = (id) => {
    setOpenRowId(openRowId === id ? null : id);
  };

  waveform.register();

  console.log({ offerData });

  const buttons = ["All offers", "Accepted offers", "Pending  offers"];
  const options = (id) => [
    {
      src: "/images/dashboard/accept.png",
      value: "Accept Offer",
      to: "",
    },
    {
      src: "/images/dashboard/reject.png",
      value: "Reject Offer",
      to: "",
    },
    {
      src: "/images/dashboard/view.png",
      value: "View Details",
      to: `/offers/offer-info/${id}`,
    },
  ];

  return (
    <AllDetails
      type={"Offers"}
      buttons={buttons}
      options={options}
      testData={allContracts}
      offerData={offerData}
      isLoadingOffer={isLoadingOffer}
    />
  );
};

export default AllOffers;
