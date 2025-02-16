"use client";
import { useSubscription } from "../context/SubscriptionContext";

const Summary = ({ setStep }) => {
  const { formData, planPrices, addOnPrices, addOnsList, calculateTotalPrice } =
    useSubscription();

  const billingSuffix = formData.billing === "monthly" ? "mo" : "yr";
  const billingPeriod =
    formData.billing.charAt(0).toUpperCase() + formData.billing.slice(1);

  return (
    <div className="bg-white rounded-xl w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold title mb-2">Finishing up</h2>
      <p  className="info text-lg my-7 mt-2 pr-6">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-addons p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-medium title text-lg">
              {formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)} (
              {billingPeriod})
            </h3>
            <button
              className="info underline hover:text-blue-600 text-md font-medium info"
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>
          <p className="font-semibold title text-md">
            ${planPrices[formData.plan][formData.billing]}/{billingSuffix}
          </p>
        </div>

        {/* Add-ons List */}
        <hr className="my-4" />
        <div className="space-y-3">
          {console.log(formData.addOns)}
          {formData.addOns.map((addOnId) => {
            const addOn = addOnsList.find((item) => item.id === addOnId);
            return (
              <div key={addOnId} className="flex justify-between items-center">
                <span className="info text-md font-medium">{addOn?.name}</span>
                <span className="title text-md font-medium">
                  +${addOnPrices[addOnId][formData.billing]}/{billingSuffix}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center px-4 mt-6">
        <span className="info text-lg font-medium">
          Total (per {formData.billing === "monthly" ? "month" : "year"})
        </span>
        <span className="extras font-semibold text-lg">
          ${calculateTotalPrice()}/{billingSuffix}
        </span>
      </div>
    </div>
  );
};

export default Summary;
