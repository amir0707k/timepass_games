"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { useSubscription } from "../context/SubscriptionContext";

const AddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const { formData, setFormData, addOnPrices, addOnsList } = useSubscription();

 

  const handleToggle = (id) => {
    const updatedAddOns = selectedAddOns.includes(id)
      ? selectedAddOns.filter((addon) => addon !== id)
      : [...selectedAddOns, id];

    setSelectedAddOns(updatedAddOns);

    // Update the formData context with the selected add-ons
    setFormData((prevData) => ({
      ...prevData,
      addOns: updatedAddOns,
    }));
  };

  // Calculate the price based on billing type
  const getPrice = (id) => {
    console.log(id);
    
    return addOnPrices[id][formData.billing];
  };

  // Get the price suffix based on billing type
  const getPriceSuffix = () => {
    return formData.billing === "yearly" ? "/yr" : "/mo";
  };

  return (
    <div className="bg-white rounded-xl w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold title">Pick add-ons</h2>
      <p className="info font-normal text-lg my-7 mt-2">Add-ons help enhance your gaming experience.</p>

      <div className="flex flex-col gap-4">
        {addOnsList.map((addon) => (
          <Card
            key={addon.id}
            className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition ${
              selectedAddOns.includes(addon.id) ? "addons bg-addons" : "border-gray-300"
            }`}
            onClick={() => handleToggle(addon.id)}
          >
            <div className="flex gap-3 items-center">
              <Checkbox
                checked={selectedAddOns.includes(addon.id)}
                onCheckedChange={() => handleToggle(addon.id)}
                className={`flex items-center justify-center text-white p-3 cursor-pointer transition ${
                  selectedAddOns.includes(addon.id) ? "text-white checkbox" : "border-gray-300"
                }`}
              />
              <div>
                <h3 className="font-medium text-lg title">{addon.name}</h3>
                <p className="text-gray-500 text-sm">{addon.desc}</p>
              </div>
            </div>
            <p className="text-blue-600 text-sm">
              +${getPrice(addon.id)}
              {getPriceSuffix()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AddOns;