import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export default function RevenueDiv() {
  useEffect(() => {
    // Example chart configuration
    const options = {
      chart: {
        width: 1000,
        type: "bar",
        height: 400,
        backgroundColor: "rgba(0,0,0,0)",
      },
      title: {
        text: "Revenue Breakdown",
      },
      xAxis: {
        categories: [
          "Total Revenue",
          "Ad Revenue",
          "Revenue from Registrations",
        ],
      },
      yAxis: {
        title: {
          text: "Amount (Rs.)",
        },
      },
      series: [
        {
          name: "Amount",
          data: [
            {
              y: 1700000,
              color: "#4572A7", // Color for Total Revenue
            },
            {
              y: 200000,
              color: "#AA4643", // Color for Ad Revenue
            },
            {
              y: 1500000,
              color: "#89A54E", // Color for Revenue from Registrations
            },
          ],
        },
      ],
    };

    // Render the chart
    Highcharts.chart("chart-container", options);

    // Clean up
    return () => {
      // Clean up any resources if necessary
    };
  }, []);

  return (
    <section className="flex px-[2vw] mt-[24px]">
      <div className="bg-white w-full  rounded-[4px] pl-[5vw]  border-[1px] border-[#989696]">
        <div id="chart-container">{/* Chart will be rendered here */}</div>
      </div>
    </section>
  );
}
