"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dashboard from "../../page/Dashboard/Dashboard";

export default function DashboardShell() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV = [
    { key: "dashboard", label: "Dashboard" },
    { key: "products",  label: "Products" },
    { key: "landings",  label: "Landings" },
    { key: "orders", label: "Orders" },
    { key: "insights",      label: "Insights" },
    { key: "delivery",  label: "Delivery" },
    { key: "customerData",      label: "Customer Data" },
    { key: "apps",   label: "App’s" },
   
  ];

  return (
    <div className="flex gap-1">
     {/* Sidebar */}

     <aside
     className={` inset-y-0 left-0 z-30 w-52  backdrop-blur p-4 transition-transform md:translate-x-0 ${
       mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
     }`}
   >
     <div className="flex items-center justify-between mb-6">
       <div className="flex items-center gap-2">
         <img src="logoz.svg" alt="" />
       </div>
       <button
         onClick={() => setMobileMenuOpen(false)}
         className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border"
         aria-label="Close menu"
       >
         ×
       </button>
     </div>

     <nav className="space-y-2">
       {NAV.map((item) => (
         <button
           key={item.key}
           onClick={() => setActiveTab(item.key)}
           className={`w-full text-[#C4C4C4] text-left px-3 py-2 rounded-xl ${
             activeTab === item.key
               ? " text-black  border-black"
               : "hover:bg-gray-100"
           }`}
         >
           {item.label}
         </button>
       ))}
     </nav>

     {/* Main */}
     <main className=" flex-1 md:ml-72 p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border bg-white"
            aria-label="Open menu"
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold">{titleForTab(activeTab)}</h1>
          <div className="hidden md:block" />
        </div>

        {/* 🧩 المحتوى: خاوي دابا — ركب فيه كومبونوناتك من بعد */}
        {/* <EmptyPanel /> */}

        {/*
          🔌 منين تبغي تركّب كومبونونت:
          import OrdersTable from "@/componentsDashboard/orders/OrdersTable";
          ثم بدّل <EmptyPanel /> بـ:
          {activeTab === "orders" && <OrdersTable />}
          وهاكذا لباقي التابات...
        */}
      </main>
   </aside>



    <div className="w-screen h-full px-5">
    <div className="min-h-screen w-full bg-[#F4F4F4] p-4 rounded-[30px] flex">
     <div className="flex gap-[10px]">
     <button className="w-[59px] h-[59px] border border-[#E6E6E6] rounded-full flex justify-center items-center">
        <Image width={24} height={24} src={"icons/search.svg"} />
    </button>
       <input 
       placeholder="Search here"
       type="text" 
       
       className="text-[#8A8A8A] w-[100px] h-[39px] rounded-full mt-[10px] text-[10px]" />
     </div>
     <div className="flex justify-end ">
      <div className="">
      <button className="bg-white w-[59px] h-[50px] rounded-full "></button>
      <button className="bg-white w-[59px] h-[50px] rounded-full "></button>
      <button className="bg-white w-[59px] h-[50px] rounded-full "></button>
      <button className="bg-white w-[59px] h-[50px] rounded-full "></button>
      </div>
    </div>

    </div>



    </div>
    </div>
  );
}

function titleForTab(key) {
  switch (key) {
    case "dashboard": return < Dashboard />;
    case "orders": return "Orders22";
    case "services": return "Services";
    case "closed": return "Closed";
    case "paid": return "Paid";
    case "products": return "Products";
    case "delivery": return "Delivery";
    case "customers": return "Customers";
    case "meta": return "Meta";
    case "whatsapp": return "Whatsapp";
    case "team": return "Team";
    case "finance": return "Finance";
    case "email": return "Email";
  }
}

// function EmptyPanel() {
//   return (
//     <div className="grid place-items-center h-[60vh] rounded-2xl border bg-white text-gray-500">
//       <div className="text-center space-y-2">
//         <div className="text-sm uppercase tracking-wide text-gray-400">Empty</div>
//         <p className="text-base">ركّب الكومبونونت ديالك هنا من بعد.</p>
//       </div>
//     </div>
//   );
// }
