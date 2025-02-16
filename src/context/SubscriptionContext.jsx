import { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "arcade", // 'arcade' | 'advanced' | 'pro'
    billing: "monthly", // 'monthly' | 'yearly'
    addOns: [], // e.g. ['online-service', 'larger-storage']
  });

  // Plan prices
  const planPrices = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  };

  // Add-on prices
  const addOnPrices = {
    "online-service": { monthly: 1, yearly: 10 },
    "larger-storage": { monthly: 2, yearly: 20 },
    "custom-profile": { monthly: 2, yearly: 20 },
  };

  const addOnsList = [
    { id: "online-service", name: "Online service", desc: "Access to multiplayer games" },
    { id: "larger-storage", name: "Larger storage", desc: "Extra 1TB of cloud save" },
    { id: "custom-profile", name: "Customizable profile", desc: "Custom theme on your profile" },
  ];

  // Calculate total price
  const calculateTotalPrice = () => {
    const planPrice = planPrices[formData.plan][formData.billing];
    const addOnsPrice = formData.addOns.reduce((total, addOn) => {
      return total + addOnPrices[addOn][formData.billing];
    }, 0);
    return planPrice + addOnsPrice;
  };

  return (
    <SubscriptionContext.Provider
      value={{ formData, setFormData, planPrices, addOnPrices, calculateTotalPrice, addOnsList }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

// Custom Hook for easy access
export const useSubscription = () => useContext(SubscriptionContext);