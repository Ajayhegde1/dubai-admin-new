import { MainSideBar } from "@/Components/MainSideBar/MainSideBar";
import { PaymentTracker } from "@/Components/PaymentTracker/PaymentTracker";

export default function dashboard() {
  return (
    <section className=" w-[100vw] min-h-[100vh] flex py-[4vh]">
      <MainSideBar />

      <div className="w-[100vw]">
        <h1 className="text-3xl font-extrabold px-[2vw]">Payments</h1>
        <PaymentTracker />
      </div>
    </section>
  );
}
