"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function ApplyModal({ job, onClose }) {
  const [name, setName] = useState("");

  const handleApply = () => {
    if (!name) {
      alert("Please enter your name");
      return;
    }

    const message = `
Hello, I want to apply for:

Job Title: ${job.title}
Country: ${job.country}
Category: ${job.category}
Salary: ${job.salary}
Incentive: ${job.incentive}

Applicant Name: ${name}
`;

    const whatsappURL = `https://wa.me/919626096262?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">{job.title}</h2>

        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleApply}
          className="w-full bg-blue-500 hover:bg-orange-500 text-white py-2 rounded-lg flex items-center justify-center gap-2"
        >
          <FaWhatsapp />
          Apply via WhatsApp
        </button>

        <button
          onClick={onClose}
          className="w-full mt-3 text-gray-500"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
}