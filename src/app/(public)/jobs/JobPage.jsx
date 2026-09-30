"use client";

import React, { useState } from "react";
import Link from "next/link";
import ApplyModal from "./ApplyModal";

const abroadJobs = [
  {
    id: 1,
    title: "Warehouse Picker",
    location: "Abroad / UAE & Dubai",
    type: "Full Time",
    desc: "Responsible for picking, packing, sorting items, and maintaining warehouse inventory standards.",
  },
  {
    id: 2,
    title: "Cyclist",
    location: "Abroad / UAE & Dubai",
    type: "Full Time",
    desc: "Short-distance inner-city deliveries and eco-friendly delivery operations.",
  },
  {
    id: 3,
    title: "Bike Rider",
    location: "Abroad / UAE & Dubai",
    type: "Full Time",
    desc: "Food & parcel delivery services. Valid international or national driving license required.",
  },
  {
    id: 4,
    title: "Construction Worker",
    location: "Abroad / UAE & Dubai",
    type: "Full Time",
    desc: "General site labor, assisting mason/carpentry teams, and material handling.",
  },
];

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="rounded-full bg-blue-100 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-600 inline-block mb-4">
          ✈️ Verified Overseas Opportunities
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Current <span className="text-blue-600">Abroad Jobs</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Apply directly via WhatsApp. Select your role below and submit your
          details to start the verification process.
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {abroadJobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-xs hover:shadow-lg transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  {job.type}
                </span>
                <span className="text-xs font-medium text-gray-500">
                  📍 {job.location}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-gray-900">
                {job.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {job.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => handleApplyClick(job.title)}
                className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer shadow-md shadow-blue-600/10"
              >
                Apply Now →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* WhatsApp Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob}
      />
    </div>
  );
}
