"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRupeeSign, FaWhatsapp, FaBriefcase } from "react-icons/fa";
import { useState } from "react";

const jobs = [
  {
    title: "Video Editor",
    salary: "₹15,000 - ₹20,000",
    location: "Barakhambha, KG Marg, Connaught Place (CP), New Delhi",
    description:
      "Create engaging promotional videos, reels, and marketing content for overseas job campaigns. Must know basic editing tools like Premiere Pro or CapCut. Creativity and attention to detail required.",
  },
  {
    title: "Telecalling Executive",
    salary: "₹12,000 - ₹18,000",
    location: "Barakhambha, KG Marg, Connaught Place (CP), New Delhi",
    description:
      "Handle inbound and outbound calls, explain overseas job opportunities, and guide candidates about the application process. Good communication skills required.",
  },
  {
    title: "Education Counsellor",
    salary: "₹15,000 - ₹20,000",
    location: "Barakhambha, KG Marg, Connaught Place (CP), New Delhi",
    description:
      "Counsel students and job seekers about overseas opportunities, documentation, and career guidance. Strong interpersonal and convincing skills preferred.",
  },
];

export default function Career() {
  const [name, setName] = useState("");

  const handleApply = (jobTitle) => {
    if (!name) {
      alert("Please enter your name");
      return;
    }

    const message = `Hello, I want to apply for ${jobTitle}.
Name: ${name}
Location: Barakhambha, KG Marg, Connaught Place (CP), New Delhi
Fresher: Yes`;

    const whatsappURL = `https://wa.me/919334735831?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden mt-10">

      {/* HERO */}
      <section className="bg-white py-24 text-center px-6 border-b">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Build Your Career With <span className="text-blue-500">Ornsoar</span>
        </motion.h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Ornsoar Consultancy is a growing overseas job recruitment company helping
          candidates build successful international careers. Join our team and
          grow with us.
        </p>
      </section>

      {/* ABOUT WORK CULTURE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FaBriefcase className="text-orange-500 text-4xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900">
            Why Work With Us?
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            We provide a supportive and growth-oriented environment where freshers
            and experienced professionals can enhance their skills. At Ornsoar,
            you will work closely with industry experts, interact with international
            clients, and gain real-world exposure in overseas recruitment services.
          </p>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-8">

                {/* LEFT CONTENT */}
                <div className="md:col-span-2">
                  <h2 className="md:text-2xl text-xl font-bold text-gray-900">
                    {job.title}
                  </h2>

                  <div className="flex items-center gap-2 mt-3 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-gray-600">
                    <FaRupeeSign className="text-orange-500" />
                    <span>{job.salary}</span>
                  </div>

                  <span className="inline-block mt-4 bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full">
                    Fresher Can Apply
                  </span>

                  <p className="mt-6 text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* APPLY SECTION */}
                <div className="bg-gray-50 p-6 rounded-2xl flex flex-col justify-center">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full mb-4 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <button
                    onClick={() => handleApply(job.title)}
                    className="w-full bg-blue-500 hover:bg-orange-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <FaWhatsapp />
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}