import React, { useState } from "react";
import YourInfo from "../YourInfo";
import SelectPlan from "../SelectPlan";
import AddOns from "../AddOns";
import Summary from "../Summary";
import Finish from "../Finish";
import Sidebar from "../sidebar";
import { useSubscription } from "../../context/SubscriptionContext";

function StepsContainer() {
  const { formData,validateName, validateEmail, validatePhone } = useSubscription();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });



  const nextStep = () => {
    // Validate all fields before proceeding
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    console.log(nameError,emailError,phoneError);
    
    if (nameError || emailError || phoneError) {
      setErrors({
        name: nameError,
        email: emailError,
        phone: phoneError,
      });
      return; // Stop if there are errors
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const styling = 'min-w-full bg-white rounded-lg mx-auto xl:mx-0';
  const renderStep = () => {
    switch (step) {
      case 1:
        return <YourInfo className={styling} setErrors={setErrors} errors={errors} />;
      case 2:
        return <SelectPlan className={styling} />;
      case 3:
        return <AddOns className={styling} />;
      case 4:
        return <Summary className={styling} setStep={setStep} />;
      case 5:
        return <Finish className={styling} />;
      default:
        return null;
    }
  };

  return (
    <div className="main-container relative h-full w-full flex flex-col items-center justify-between xl:flex-row xl:p-4 xl:bg-white xl:w-[80%] xl:rounded-xl xl:h-[75%] xl:mx-auto xl:justify-between">
      <Sidebar className="z-0" step={step} />
      <div className="xl:h-full xl:min-w-[521px] xl:p-0 xl:flex xl:flex-col xl:justify-between xl:mx-auto">
        <div className="relative mb-24 z-10 w-[90%] mx-auto top-28 bg-white p-6 pb-10 rounded-xl shadow-xl xl:w-full xl:h-full xl:px-0 xl:mx-0 xl:shadow-none xl:static xl:m-0">
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
              } visibility-hidden back-button text-xl cursor-pointer`}
            >
              Go Back
            </button>

            <button
              onClick={nextStep}
              className={`${
                step === 4 ? "checkbox" : "bg-title"
              } text-white py-3 cursor-pointer px-6 rounded-sm hover:bg-[#164B8B] hover:bg-[hsl(228, 100%, 84%)] transition self-end`}
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
            } text-white py-3 px-6 rounded-sm hover:bg-[#164B8B] transition self-end`}
          >
            {step === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      )}
    </div>
  );
}

export default StepsContainer;
