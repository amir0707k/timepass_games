import React from "react";
import sidebarMobile from "/assets/images/bg-sidebar-mobile.svg";
import sidebarDesktop from "/assets/images/bg-sidebar-desktop.svg";

function Sidebar({ className, step }) {
  const steps = [
    { number: 1, label: "Your Info" },
    { number: 2, label: "Select Plan" },
    { number: 3, label: "Add-Ons" },
    { number: 4, label: "Summary" },
  ];

  return (
    <div className={`absolute top-0 left-0 w-full ${className}`}>
      <img
        src={sidebarMobile}
        className="w-full h-full md:hidden"
        alt="Sidebar Background"
      />
      <img
        src={sidebarDesktop}
        className="w-full h-full object-cover hidden md:block"
        alt="Sidebar Background"
      />
      <div className="absolute top-10 flex px-40 gap-4 items-center justify-center md:flex-row w-full">
        {steps.map((s) => (
          <div key={s.number} className="flex items-center gap-4 mx-auto ">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                step === s.number
                  ? "bg-blue-100 border-blue-100 text-blue-900"
                  : "border-white text-white"
              } font-bold`}
            >
              {s.number}
            </div>
            <div className="hidden md:block">
              <p className="text-sm text-gray-300">STEP {s.number}</p>
              <p className="text-sm text-white font-bold">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
