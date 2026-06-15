"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Loader2 } from "lucide-react"; // Loading spinner ke liye

export default function ApplyModal({ job, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    age: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApply = async (e) => {
    e.preventDefault();

    const { name, mobile, age, location } = formData;

    // Validation
    if (!name || !mobile || !age || !location) {
      alert("Please fill in all details (Name, Mobile, Age)");
      return;
    }

    setLoading(true);

    // Google Form Action URL (formResponse endpoints badalna padta hai background submit ke liye)
    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdf3bM6VelZYRHNtTFfuwmA0WY2fuaJOfjOi83t11px9Vx4hQ/formResponse";

    // Google Form Fields Mapping (Aapke FB_LOAD_DATA_ se nikale huye exact IDs)
    const formBody = new URLSearchParams();
    formBody.append("entry.2047254529", name); // Name field entry ID
    formBody.append("entry.2025401693", mobile); // Mobile no entry ID
    formBody.append("entry.1764946353", age); // Age entry ID
    formBody.append("entry.1", location); // location entry ID
    formBody.append("entry.1749605671", job?.title || ""); // Jobtitle entry ID
    formBody.append("entry.801756122", job?.country || ""); // Job Country entry ID
    formBody.append("entry.1892928777", job?.salary || ""); // Salary entry ID
    formBody.append("entry.1232499190", job?.incentive || ""); // Incentive entry ID

    try {
      // Background submit using no-cors mode (Google response block bypass karne ke liye)
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // WhatsApp Message Formation
      const message =
        `*👋 New Job Application Submitted!* \n\n` +
        `*Job Details:* \n` +
        `• Job Title: ${job.title} \n` +
        `• Country: ${job.country} \n` +
        `• Salary: ${job.salary} \n` +
        `• Incentive: ${job.incentive} \n\n` +
        `*Applicant Details:* \n` +
        `• Name: ${name} \n` +
        `• Mobile: ${mobile} \n` +
        `• Age: ${age}`;

      const whatsappURL = `https://wa.me/919626096262?text=${encodeURIComponent(message)}`;

      alert("Application submitted successfully! Redirecting to WhatsApp...");
      window.open(whatsappURL, "_blank");
      onClose(); // Modal automatic close ho jayega
    } catch (error) {
      console.error("Google Form Submission Error:", error);
      alert("Something went wrong while submitting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border-t-4 border-blue-900"
      >
        <div className="mb-4">
          <span className="text-xs bg-red-100 text-red-600 font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
            Applying for
          </span>
          <h2 className="text-xl font-extrabold text-blue-900 mt-1">
            {job.title}
          </h2>
          <p className="text-xs text-slate-500">
            {job.country} • {job.salary}
          </p>
        </div>

        <form onSubmit={handleApply} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-blue-900 block mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-900 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-blue-900 block mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              required
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-900 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-blue-900 block mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              required
              placeholder="Enter Your Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-900 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-blue-900 block mb-1">
              Location
            </label>
            <input
              type="location"
              name="location"
              required
              placeholder="Enter Your Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-900 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-red-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-50 text-sm mt-2"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <>
                <FaWhatsapp size={18} />
                Submit & Apply via WhatsApp
              </>
            )}
          </button>
        </form>

        <button
          onClick={onClose}
          disabled={loading}
          className="w-full text-center text-xs text-slate-400 hover:text-red-600 font-semibold mt-4 block"
        >
          Cancel Application
        </button>
      </motion.div>
    </div>
  );
}
