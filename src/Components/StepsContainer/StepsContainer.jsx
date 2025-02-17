import React, { useState } from "react";
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

  return (
    <div className="main-container relative h-full w-full flex flex-col items-center justify-between xl:flex-row xl:p-6 xl:bg-white xl:w-[80%] xl:rounded-xl xl:h-[75%] xl:mx-auto xl:justify-between">
      <Sidebar className="z-0" step={step} />
      <div className="h-full xl:p-0 xl:flex xl:flex-col xl:justify-between xl:mx-auto">
        <div className="relative mb-24 z-10 w-[90%] md:w-full mx-auto top-28 bg-white p-6 pb-10 rounded-xl shadow-xl xl:px-0 xl:mx-0 xl:shadow-none xl:static xl:m-0">
          {renderStep()}
        </div>

        {step > 4 ? (
          ""
        ) : (
          <div className="justify-between hidden w-full text-right pb-5 bg-white xl:flex">
            <button
              onClick={prevStep}
              className={`${
                step > 1 ? "" : "invisible"
              } visibility-hidden back-button text-xl`}
            >
              Go Back
            </button>

            <button
              onClick={nextStep}
              className={`${
                step === 4 ? "checkbox" : "bg-title"
              } text-white py-3 px-6 rounded-sm hover:bg-purple-700 transition self-end`}
            >
              {step === 4 ? "Confirm" : "Next Step"}
            </button>
          </div>
        )}
      </div>
      
      {step > 4 ? (
        ""
      ) : (
        <div className="flex justify-between sticky z-20 w-full bottom-0 mt-6 text-right p-5 bg-white xl:hidden">
          <button
            onClick={prevStep}
            className={`${
              step > 1 ? "" : "invisible"
            } visibility-hidden back-button text-xl`}
          >
            Go Back
          </button>

          <button
            onClick={nextStep}
            className={`${
              step === 4 ? "checkbox" : "bg-title"
            } text-white py-3 px-6 rounded-sm hover:bg-purple-700 transition self-end`}
          >
            {step === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      )}
    </div>
  );
}

export default StepsContainer;
