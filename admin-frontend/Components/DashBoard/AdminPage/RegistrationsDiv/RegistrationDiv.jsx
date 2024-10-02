import React from "react";

export default function RegistrationDiv() {
  return (
    <section className="flex w-full">
      <div className=" w-[100%] ">
        {/* <h1 className="text-2xl font-bold">Registrations</h1> */}
        <div className=" gap-[1vw] flex flex-col gap-y-[12px] w-full">
          <div className="flex w-full">
            <div className="w-full bg-white rounded-[4px]  items-center justify-center flex flex-col text-center p-6 shadow-lg  border-[1px] border-[#989696]">
              <h3 className="text-2xl font-semibold ">Total Registered </h3>
              <p className="text-gray-700">20,000</p>
            </div>
          </div>
          <div className="flex  w-full gap-[12px]">
            <div className="w-full bg-white rounded-[4px] shadow-lg p-6  items-center justify-center flex flex-col text-center  border-[1px] border-[#989696]">
              <h3 className="text-lg font-semibold mb-2">Married</h3>
              <p className="text-gray-700">16,000</p>
            </div>

            <div className=" bg-white rounded-[4px]shadow-lg p-6 items-center justify-center flex flex-col text-center w-full  border-[1px] border-[#989696]">
              <h3 className="text-lg font-semibold mb-2">Single</h3>
              <p className="text-gray-700">4,000</p>
            </div>
          </div>
          <div className="flex w-full gap-[12px]">
            <div className=" bg-white rounded-[4px] shadow-lg p-6 w-full  border-[1px] border-[#989696]">
              <h3 className="text-lg font-semibold mb-2">Male</h3>
              <p className="text-gray-700">10,000</p>
            </div>
            <div className="  bg-white rounded-[4px] shadow-lg p-6 w-full  border-[1px] border-[#989696]">
              <h3 className="text-lg font-semibold mb-2">Female</h3>
              <p className="text-gray-700">9,000</p>
            </div>
            <div className="w-full bg-white rounded-[4px] shadow-lg p-6  border-[1px] border-[#989696]">
              <h3 className="text-lg font-semibold mb-2">Others</h3>
              <p className="text-gray-700">1,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
