import React from "react";
import { Switch } from "@headlessui/react";
import arcade from "/assets/images/icon-arcade.svg";
import advanced from "/assets/images/icon-advanced.svg";
import pro from "/assets/images/icon-pro.svg";
import { useSubscription } from "../context/SubscriptionContext";

function SelectPlan() {
  const { formData, setFormData, planPrices } = useSubscription();

  const handlePlanChange = (plan) => {
    setFormData({ ...formData, plan });
  };

  const handleToggle = () => {
    setFormData({
      ...formData,
      billing: formData.billing === "monthly" ? "yearly" : "monthly",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 title">Select your plan</h2>
      <p className="info font-normal text-lg my-3 pr-6">
        You have the option of monthly or yearly billing.
      </p>

      {/* Plan options */}
      <div className="flex flex-col xl:flex-row gap-4 mb-6">
        {Object.entries(planPrices).map(([plan, price]) => (
          <div
            key={plan}
            onClick={() => handlePlanChange(plan)}
            className={`flex border gap-3 items-center p-4 rounded cursor-pointer w-full xl:w-1/3 xl:flex-col xl:items-start ${
              formData.plan === plan
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <img
              src={plan === "arcade" ? arcade : plan === "advanced" ? advanced : pro}
              alt={plan}
              className="mb-3 w-10"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-medium title text-lg">
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </h3>
              <p className="text-gray-500">
                ${price[formData.billing]}/{formData.billing === "monthly" ? "mo" : "yr"}
              </p>
              {formData.billing === "yearly" && (
                <p className="title text-sm font-medium">2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Toggle monthly / yearly */}
      <div className="flex items-center justify-center mb-6 py-4 toggler-bg">
        <span
          className={`mr-3 font-semibold ${
            formData.billing === "monthly" ? "title" : "text-gray-400"
          }`}
        >
          Monthly
        </span>
        <Switch
          checked={formData.billing === "yearly"}
          onChange={handleToggle}
          className={`bg relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              formData.billing === "yearly" ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <span
          className={`ml-3 font-semibold ${
            formData.billing === "yearly" ? "title" : "text-gray-400"
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}

export default SelectPlan;