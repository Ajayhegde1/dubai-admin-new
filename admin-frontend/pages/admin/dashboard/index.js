import { MainSideBar } from "@/Components/MainSideBar/MainSideBar";

// import AdminControlDiv from "@/Components/DashBoard/AdminPage/AdminControlDiv/AdminControlDiv";
import PassportDiv from "@/Components/DashBoard/AdminPage/PassportDiv/PassportDiv";
import PaymentStatsDiv from "@/Components/DashBoard/AdminPage/PaymentStatsDiv/PaymentStatsDiv";
import RegistrationDiv from "@/Components/DashBoard/AdminPage/RegistrationsDiv/RegistrationDiv";
import RevenueDiv from "@/Components/DashBoard/AdminPage/RevenueDiv/RevenueDiv";
import VisaDiv from "@/Components/DashBoard/AdminPage/VisaDiv/VisaDiv";

export default function dashboard() {
  return (
    <section className=" w-[100vw] min-h-[100vh] flex py-[4vh]">
      <MainSideBar />

      <div className="w-[100vw]">
        <h1 className="text-3xl font-extrabold px-[2vw]">DashBoard</h1>
        {/* <AdminControlDiv /> */}
        <h1 className="text-xl font-bold w-full bg-[#0C1E33] text-white px-[2vw] py-[12px] mt-[36px]">
          Registrations and Payment Status
        </h1>
        <PaymentStatsDiv />
        {/* <RegistrationDiv /> */}
        <h1 className="text-xl font-bold w-full bg-[#0C1E33] text-white px-[2vw] py-[12px] ">
          Registrations and Payment Status
        </h1>
        <RevenueDiv />
        <h1 className="text-xl font-bold w-full bg-[#0C1E33] text-white px-[2vw] py-[12px] mt-[36px]">
          Registrations and Payment Status
        </h1>
        <div className="flex gap-[24px] px-[2vw] mt-[24px]">
          <VisaDiv />
          <PassportDiv />
        </div>
      </div>
    </section>
  );
}
