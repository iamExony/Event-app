import Chart from "react-apexcharts";
function BarChart() {
    let options = {
        
        chart: {
        type: 'bar',
        
      },
      colors: "#DF3602",
      plotOptions: {
        bar: {
          columnWidth: '45%',
    
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          '4','5','6','7','8','9','10','11',"12",'13','14',"15",'16','17','18','19'
        ],
        labels: {
          style: {
            
            fontSize: '12px'
          }
        }
      }
      };
      let series =[{
        data: [21, 22, 10, 28, 16, 21, 13, 30, 32, 12, 42, 23, 24 ,45, 23, 50]
      }]
    return (
        <div>
             <Chart options={options} series={series} height={300} type="bar" />
        </div>
    )
}

export default BarChart
