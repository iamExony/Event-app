import event from "/event.svg";
import exhibitor from "/personel.svg";
import request from "/request.svg";

const stats = [
  { icon: event, details: "Total Events hosted", digit: "350,000" },
  { icon: exhibitor, details: "Events vendor", digit: "100,000" },
  { icon: request, details: "Total Event vendor request", digit: "380,000" },
];

const TodaysStats = () => {
  return (
    <section className="flex flex-col gap-10 pt-28 pb-14 ">
      <h3 className="text-4xl font-bold text-headerText">Today’s Stats</h3>
      <div className="flex flex-row gap-4 w-full">
        {stats.map((stat, id) => (
          <div
            key={id}
            className="flex flex-col gap-3 w-full bg-DarkMode text-darkModeText p-4 rounded-md justify-center items-center"
          >
            <img className=" h-8 w-8" src={stat.icon} alt="" />
            <div className="flex flex-col items-center">
              <h4 className="text text-2xl">{stat.digit}</h4>
              <p className=" text-base">{stat.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodaysStats;
