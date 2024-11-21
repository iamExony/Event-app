import Chart from "react-apexcharts";
function AreaChart() {
    let series = [
        {
          name: "Expenses",
          data: [31, 400, 280, 251, 142, 209, 100, 432, 123, 425, 263],
        },
        {
          name: "Income",
          data: [111, 322, 453, 324, 345, 52, 416, 233, 233, 123, 224],
        },
      ];
      let options = {
        chart: {
         
          type: "area",
        },
        colors: ["#AF290B", "#049561"],
        fill: {
          type: "solid",
          strokeWidth: undefined,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "category",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
          ],
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 500,
          labels: {
            show: true,
          },
        },
      };
    
    return (
        <div>
            <Chart options={options} series={series} height={220} type="area" />
        </div>
    )
}

export default AreaChart
