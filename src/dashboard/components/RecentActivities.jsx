import { useState } from "react";
import { entryPassActivities } from "../../utils/data";

const RecentActivities = ({ eventSourced }) => {
  const [viewAll, setViewall] = useState(false);
  const onShowall = () => {
    setViewall(true);
  };

  return (
    <div className="border-2 mx-4 md:mx-0 p-4 rounded-md my-6">
      <div className="flex justify-between pb-4 border-b-2 ">
        <h3 className="text-xl text-[#2D2C2C] font-semibold">
          Recent Activities
        </h3>

        <button className="text-primaryCol" onClick={onShowall}>
          View All
        </button>
      </div>
      {viewAll ? (
        <div className="pb-10">
          {entryPassActivities.map((pass, id) => (
            <div
              id={id}
              className="flex gap-4 items-center border-b-2  py-3 px-2"
            >
              <div className={`p-3 bg-[${pass.bgcolor}] rounded-[50%]`}>
                <img src={pass.type} alt="" />
              </div>
              <div className=" flex flex-col gap-1">
                <h6 className=" f font-medium">{pass.title}</h6>
                <p>{pass.dateTime}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="text-center mr-10">
            <p className="mb-6 font-medium">
              You have no previous {eventSourced}
            </p>

            <div className="">
              <p className="">
                Create a new {eventSourced} through the {eventSourced}{" "}
                manager dropdown
              </p>
              <small className="">
                Go to {eventSourced} manager - Add new {eventSourced}.
              </small>
            </div>
          </div>

          {/* Image */}
          <div className="my-10">
            <img
              src="/images/dashboard/no-prospects-bg.png"
              alt="No Prospects Image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentActivities;
