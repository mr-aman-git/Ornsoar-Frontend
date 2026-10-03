"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { JOBS_LIST, INDIAN_STATES, AGE_GROUPS } from "./jobsData";

const JobApplicationForm = forwardRef((_, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    ageGroup: "",
    jobPosition: "",
    address: "",
  });

  // Parent component se job set karne ke liye
  useImperativeHandle(ref, () => ({
    selectJob: (jobTitle) => {
      setFormData((prev) => ({ ...prev, jobPosition: jobTitle }));
      const formElement = document.getElementById("apply-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetNumber = "919626096262";
    const message = `*--- New Job Application ---*
*Position:* ${formData.jobPosition}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Age Group:* ${formData.ageGroup}
*State:* ${formData.state}
*Address:* ${formData.address}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      id="apply-form"
      className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 md:p-10 mb-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Abraod Career Application
        </h2>
        
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Aman Sharma"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Job Position Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Select Job Position *
            </label>
            <select
              name="jobPosition"
              required
              value={formData.jobPosition}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition"
            >
              <option value="">-- Choose Position --</option>
              {JOBS_LIST.map((job) => (
                <option key={job.id} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>

          {/* Age Group */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Current Age *
            </label>
            <select
              name="ageGroup"
              required
              value={formData.ageGroup}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition"
            >
              <option value="">-- Select Age Range --</option>
              {AGE_GROUPS.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          {/* Indian States */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              State *
            </label>
            <select
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition"
            >
              <option value="">-- Select Indian State --</option>
              {INDIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Address *
          </label>
          <textarea
            name="address"
            required
            rows={3}
            value={formData.address}
            onChange={handleChange}
            placeholder="House / Flat no, Sector, City, Pincode"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 active:scale-[0.99] text-white font-semibold rounded-xl shadow-md shadow-emerald-500/20 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Send via WhatsApp</span>
        </button>
      </form>
    </div>
  );
});

JobApplicationForm.displayName = "JobApplicationForm";
export default JobApplicationForm;
