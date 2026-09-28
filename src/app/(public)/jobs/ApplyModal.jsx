"use client";

import React, { useState } from "react";

const WHATSAPP_NUMBER = "919626096262"; // Country code + 10 digit number

export default function ApplyModal({ isOpen, onClose, jobTitle }) {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please fill all fields");
      return;
    }

    // WhatsApp structured message
    const message = `*New Job Application (Abroad)*%0A%0A*Job Title:* ${jobTitle}%0A*Candidate Name:* ${formData.name}%0A*Phone Number:* ${formData.phone}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset and close modal
    setFormData({ name: "", phone: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Apply for Job</h3>
            <p className="text-xs font-semibold text-blue-600">{jobTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile / WhatsApp Number
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 9876543210"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-700 cursor-pointer flex items-center justify-center gap-1.5"
            >
              Apply via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
