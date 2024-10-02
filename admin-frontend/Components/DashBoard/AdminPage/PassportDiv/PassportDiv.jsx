import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Data for the pie chart
const chartData = [
  { name: "Applied for Passports (Self)", y: 3000 },
  { name: "Passport Available", y: 8000 },
  { name: "Applied for Passports (rotary)", y: 9000 },
];

const options = {
  chart: {
    type: "pie",
    width: 600, // Adjust width as needed
    height: 300, // Adjust height as needed
    backgroundColor: "rgba(0,0,0,0)",
  },
  title: {
    text: "PassPort Application Status",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false, // Disable data labels
      },
      showInLegend: true,
      colors: ["#1900ff", "#029eff", "#b937ff"], // Custom colors
    },
  },
  tooltip: {
    pointFormat: "<b>{point.name}</b>: Rs. {point.y}",
  },
  series: [
    {
      name: "Payments",
      data: chartData.map((item) => ({ name: item.name, y: item.y })),
    },
  ],
};

export default function PassportDiv() {
  return (
    <section className="flex w-full">
      <div className="w-[100%]">
        <h1 className="text-2xl font-bold">Passport Applications</h1>
        <div className="flex bg-slate-100 rounded-[4px] border-[1px] border-[#989696] shadow-xl justify-center items-center">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </section>
  );
}
