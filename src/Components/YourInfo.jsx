import React from "react";
import { useSubscription } from "../context/SubscriptionContext";

const YourInfo = () => {
  const { formData, setFormData } = useSubscription(); 
  return (
    <div className={`w-full bg-white rounded-lg mx-auto`}>
      <h2 className="text-2xl font-stretch-200% font-bold title">Personal info</h2>
      <p className="info font-normal text-lg my-3 pr-6" >
        Please provide your name, email address, and phone number.
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium title">Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-field inputs"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium title">Email Address</label>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-field inputs"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium title">Phone Number</label>
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="input-field inputs"
          />
        </div>
      </div>
      
     
    </div>
  );
};

export default YourInfo;