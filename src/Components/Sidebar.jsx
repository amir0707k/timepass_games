import React from "react";
import sidebarMobile from "/assets/images/bg-sidebar-mobile.svg";
import sidebarDesktop from "/assets/images/bg-sidebar-desktop.svg";

function Sidebar({ className, step }) {
  const steps = [
    { number: 1, label: "YOUR INFO" },
    { number: 2, label: "SELECT PLAN" },
    { number: 3, label: "ADD-ONS" },
    { number: 4, label: "SUMMARY" },
  ];

  return (
    <div className={`absolute top-0 left-0 w-full xl:h-full xl:w-fit xl:block xl:relative ${className}`}>
      <img
        src={sidebarMobile}
        className="w-full h-full xl:hidden"
        alt="Sidebar Background"
      />
      <img
        src={sidebarDesktop}
        className= "h-full hidden xl:block"
        alt="Sidebar Background"
      />
      <div className="absolute top-10 flex px-40 gap-4 items-center justify-center  w-full xl:flex-col xl:left-8 xl:gap-12 xl:px-0">
        {steps.map((s) => (
          <div key={s.number} className="flex items-center gap-4 mx-auto w-full">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                step === s.number
                  ? "bg-blue-100 border-blue-100 text-blue-900"
                  : "border-white text-white"
              } font-bold`}
            >
              {s.number}
            </div>
            <div className="hidden xl:flex xl:flex-col">
              <p className="text-sm text-gray-300">STEP {s.number}</p>
              <p className="text-sm text-white font-bold whitespace-nowrap">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;