"use client";

import abroadJobs from "./abroadJobs";
import { motion } from "framer-motion";
import { useState } from "react";
import ApplyModal from "./ApplyModal";
import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign } from "react-icons/fa";

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="w-full bg-gray-50 py-20 px-6 mt-20">

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Explore <span className="text-blue-500">Abroad Jobs</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Apply for overseas job opportunities in Qatar, Dubai, Kuwait & UAE.
        </p>
      </div>

      {/* JOB GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {abroadJobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {job.title}
            </h2>

            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" />
                {job.country}
              </p>

              <p className="flex items-center gap-2">
                <FaBriefcase className="text-orange-500" />
                {job.category}
              </p>

              <p className="flex items-center gap-2">
                <FaRupeeSign className="text-green-500" />
                {job.salary}
              </p>

              <p className="text-sm text-gray-500">
                Incentive: {job.incentive}
              </p>
            </div>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {job.description}
            </p>

            <button
              onClick={() => setSelectedJob(job)}
              className="mt-6 w-full bg-blue-500 hover:bg-orange-500 text-white py-2 rounded-lg font-semibold transition"
            >
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {selectedJob && (
        <ApplyModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}