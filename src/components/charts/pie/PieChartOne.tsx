import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PieChartOne() {
  const options: ApexOptions = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [44, 55, 13, 43, 22];

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div id="chartEight-1" className="min-w-[1000px] mb-4">
        <Chart options={options} series={series} type="pie" height={310} />
      </div>
      <hr />
      <div id="chartEight-2" className="min-w-[1000px] mt-4">
        <Chart options={options} series={series} type="donut" height={310} />
      </div>
    </div>
  );
}
