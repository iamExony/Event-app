import Chart from "react-apexcharts";
import React from "react";
import { useLocation } from "react-router-dom";

const AreaChart = ({ eventSourced }) => {
  const history = useLocation();
  const pathName = history.pathname;
  const match = pathName.match(/\/([^/]+)\/?$/);
  const word = match[1];

  const options = {
    chart: {
      height: 240,
      type: "area",
      toolbar: false,
      sparkline: {
        enabled: true,
      },
      parentHeightOffset: 0,
    },

    dataLabels: {
      enabled: false,
    },
    series: [
      {
        // name: `${headerMenu[0].toUpperCase() + headerMenu.slice(1)}`,
        // data: [0, 20, 5, 35, 25, 45],
      },
    ],

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 1,
        stops: [0, 100],
      },
      colors: "#DF3814",
    },
    // stroke: {
    //   width: 2,
    // },
    stroke: {
      curve: "smooth", // Use smooth curves for the area chart
      width: 2,
    },
    plotOptions: {
      area: {
        // Adjust padding settings
        dataLabels: {
          padding: 0, // Remove padding for data labels
        },
        markers: {
          size: 0, // Remove markers (data point indicators)
        },
      },
    },
    grid: {
      borderColor: "#F6F8F9",
      strokeDashArray: 1,
    },
    colors: ["#DF3814", "#DF3814", "#DF3814", "#DF3814", "#DF3814"],
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
      labels: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 10,
      min: 0,
      max: 100,
      labels: {
        show: false,
      },
    },
  };
  return (
    <div className="flex flex-col  md:flex-row justify-between gap-4">
      {eventSourced.map((event, key) => (
        <div
          key={key}
          className="w-full md:w-[380px] overflow-hidden  rounded-xl shadow-md border-2 cursor-pointer hover:border-primaryColC "
        >
          <div className="absolute md:top-4 mx-4 my-6">
            <p className="">{event.percent}</p>

            <h4 className="text-2xl">{event.value}</h4>

            <p className="">{event.type}</p>
          </div>
          <Chart
            options={options}
            // series={options.series}
            series={[
              {
                data: event.data,
                name: word,
              },
            ]}
            type="area"
            width={"110%"}
            height={180}
          />
        </div>
      ))}
    </div>
  );
};

export default AreaChart;
