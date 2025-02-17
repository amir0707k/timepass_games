import React, { useState } from "react";
import { useSubscription } from "../context/SubscriptionContext";

const YourInfo = ({ className, errors, setErrors }) => {
  const { formData, setFormData } = useSubscription();

  // Validation functions

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({
      name: name == "name" ? "" : errors.name,
      email: name == "email" ? "" : errors.email,
      phone: name == "phone" ? "" : errors.phone,
    });
  };

  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-stretch-200% font-bold title">
        Personal info
      </h2>
      <p className="info font-normal text-lg my-3 pr-6">
        Please provide your name, email address, and phone number.
      </p>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium title">Name</label>

            {errors.name && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.name}
              </p>
            )}
          </div>
          <input
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={handleChange}
            className={`input-field inputs ${
              errors.name ? "inputs-error" : ""
            } inputs-focus focus:ring-0`}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium title">Email Address</label>

            {errors.email && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.email}
              </p>
            )}
          </div>
          <input
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={handleChange}
            className={`input-field inputs ${
              errors.email ? "inputs-error" : ""
            } inputs-focus focus:ring-0`}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium title">Phone Number</label>

            {errors.phone && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.phone}
              </p>
            )}
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={handleChange}
            className={`input-field border-0 inputs ${
              errors.phone ? "inputs-error" : ""
            } inputs-focus focus:ring-0`}
            
          
          />
          {console.log(errors.phone)
            }
        </div>
      </div>
    </div>
  );
};

export default YourInfo;
