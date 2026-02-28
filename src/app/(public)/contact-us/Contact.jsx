"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaBuilding,
} from "react-icons/fa";
import { toast } from "react-toastify";
// import { addContact } from "../../../routes/userApi.js";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Branch Data - Add more here easily
  const branches = [
    {
      city: "Madurai",
      address:
        "4/2A, Dr.Thagaraj Salai, Near Raja Muthiah Mandram, K.K. Nager, Madurai - 625 020",
    },
    {
      city: "Chennai",
      address:
        "4M 4th floor century plaza, indimet pvt ltd., no:560 to 562, anna salai, thiru vi ka kudiyiruppu, teynampet, chennai - 600017",
    },
    {
      city: "Coimbatore",
      address:
        "2, Bharathi Colony Rd, Peelamedu, Coimbatore, Tamil Nadu 641004",
    },
    {
      city: "Ramanathapuram",
      address:
        "511-7, Muthu Bakery Upstairs, Bus Stop, No. #1, opp. Bharathi Nagar, Ramanathapuram - 623503",
    },
    {
      city: "Delhi",
      address:
        "1103 11th floor, Antriskh Bhawan Barakhamba Road, CP, New Delhi",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // try {
    //   await addContact(form);
    //   toast.success("Message Sent Successfully!");
    //   setForm({ name: "", email: "", phone: "", message: "" });
    //   setLoading(false);
    // } catch (error) {
    //   console.error(error);
    //   toast.error("Technical Error");
    //   setLoading(false);
    // }
  };

  return (
    <section className="bg-slate-50 py-16 mt-15">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg italic">
            Reach out to us for MBBS admission guidance, counseling, university
            selection, and visa assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* ================= LEFT: QUICK CONTACT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Info
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-orange-500 rounded-xl">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-semibold text-gray-800 break-all">
                      hr@ornsoar.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="font-semibold text-gray-800">
                      +91 9626096262
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Head Office</p>
                    <p className="font-semibold text-gray-800">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Send Us a Message{" "}
                <FaPaperPlane className="text-orange-500 text-sm" />
              </h3>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    placeholder="email@example.com"
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    placeholder="+91 00000 00000"
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    placeholder="How can we help you?"
                    rows="4"
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl bg-blue-500 hover:bg-orange-500 text-white font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-blue-900/20 ${
                      loading
                        ? "opacity-70 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                    {!loading && <FaPaperPlane size={14} />}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ================= BRANCHES SECTION ================= */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-0.5 flex-1 bg-gray-200"></div>
            <h4 className="text-3xl font-bold text-blue-500 px-4 text-center">
              Our Regional <span className="text-orange-500">Branches</span>
            </h4>
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-orange-500 transition-all duration-300" />
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FaBuilding size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 underline decoration-red-700/30 underline-offset-4">
                      {branch.city}
                    </h5>
                    <div className="flex gap-2 text-gray-600">
                      <FaMapMarkerAlt
                        className="shrink-0 mt-1 text-orange-500/70"
                        size={14}
                      />
                      <p className="text-sm leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= MAP SECTION ================= */}
        <div className="mt-24">
          <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4692.432072339135!2d78.1410918!3d9.9359693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c7615b8ec3%3A0x7b28785d111220a6!2s4%2F2a%2C%20Dr%20Thangaraj%20Salai%2C%20Mellur%2C%20KK%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e1!3m2!1sen!2sin!4v1769492727078!5m2!1sen!2sin"
              className="w-full h-80 md:h-112.5 rounded-4xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
