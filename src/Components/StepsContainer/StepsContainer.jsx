import React, { useEffect, useRef, useState } from "react";
import YourInfo from "../YourInfo";
import SelectPlan from "../SelectPlan";
import AddOns from "../AddOns";
import Summary from "../Summary";
import Finish from "../Finish";
import Sidebar from "../sidebar";

function StepsContainer() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <YourInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary setStep={setStep} />;
      case 5:
        return <Finish />;
      default:
        return null;
    }
  };


  const [dynamicMinHeight, setDynamicMinHeight] = useState("100vh");
  const containerRef = useRef(null);

  useEffect(() => {
    const checkHeight = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // If content is shorter than viewport, apply extra height
        if (containerHeight < viewportHeight) {
          setDynamicMinHeight("calc(100vh + 175px)");
        } else {
          setDynamicMinHeight("100vh"); // Reset if content is already tall enough
        }
      }
    };

    checkHeight(); // Run initially
    window.addEventListener("resize", checkHeight); // Adjust on window resize

    return () => window.removeEventListener("resize", checkHeight);
  }, []);
  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center"
      style={{ minHeight: dynamicMinHeight }}
    >
      <Sidebar className="z-0" step={step} />
      <div className="relative mb-52 z-10 w-[90%] md:w-[60%] lg:w-[40%] mx-auto top-28 md:mt-10 bg-white px-6 py-10 rounded-xl shadow-lg">
        {renderStep()}
      </div>
      {step>4 ? "" : <div className="flex justify-between fixed z-20 w-full bottom-0 mt-6 text-right p-5 bg-white">
        <button
          onClick={prevStep}
          className={`${step > 1 ? "" : "invisible"} visibility-hidden back-button text-lg`}
        >
          Go Back
        </button>

        <button
          onClick={nextStep}
          className={`${step === 4 ? 'checkbox' : 'bg-title'} text-white py-3 px-6 rounded-sm hover:bg-purple-700 transition self-end`}
        >
          {step === 4 ? 'Confirm' : 'Next Step'}
        </button>
      </div>}
      
    </div>
  );
}

export default StepsContainer;