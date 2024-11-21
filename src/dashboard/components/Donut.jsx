import Chart from "react-apexcharts";

function Donut() {
  var options = {
    chart: {
      width: 380,
      type: "donut",
    },
    colors: ["#AF290B", "#049561", "#9FF1CA"],
    labels: ["Completed events", "Pending Events", "Pending events"],

    dataLabels: {
      enabled: false,
    },

    legend: {
      offsetY: 0,

      show: false,
    },
  };
  return (
    <div>
      <Chart
        options={options}
        series={[54, 24, 44]}
        type="donut"
        width={"120%"}
        height={150}
      />
    </div>
  );
}

export default Donut;
