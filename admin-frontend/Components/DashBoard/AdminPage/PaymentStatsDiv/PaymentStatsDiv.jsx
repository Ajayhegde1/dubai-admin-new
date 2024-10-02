import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HCMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import RegistrationDiv from "../RegistrationsDiv/RegistrationDiv";
import { Padding } from "@mui/icons-material";
// HCMore(Highcharts);
// HighchartsExporting(Highcharts);
// HighchartsExportData(Highcharts);
const chartData = [
  { name: "Registered & not Paid", y: 1000 },
  { name: "Registered & partially Paid", y: 4000 },
  { name: "Registered & Fully Paid", y: 15000 },
];

const options = {
  chart: {
    type: "pie",
    width: 600, // Adjust width as needed
    height: 300, // Adjust height as needed
    backgroundColor: "rgba(0,0,0,0)",
  },
  title: {
    text: " Payment Registration Status",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false, // Disable data labels
      },
      showInLegend: true,
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

export default function PaymentStatsDiv() {
  return (
    <section className="w-full mt-[-10px]">
      <div className=" p-[2vw] flex w-full gap-[24px]">
        <RegistrationDiv />
        <div className="flex bg-slate-100 rounded-[4px] border-[1px] border-[#989696] shadow-xl justify-center items-center">
          <HighchartsReact highcharts={Highcharts} options={options} />

          {/* <div className=" bg-white flex flex-col justify-center">
            <h3 className="text-sm font-semibold ">Registered but not Paid</h3>
            <p className="text-gray-700">1,000</p>
            <div className="">
              <h3 className="text-sm font-semibold ">
                Registered but partially Paid
              </h3>
              <p className="text-gray-700">Rs. 4,000</p>
            </div>
            <div className="w-full ">
              <h3 className="text-sm font-semibold mb-2">
                Registered and Fully Paid
              </h3>
              <p className="text-gray-700">15,000</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
