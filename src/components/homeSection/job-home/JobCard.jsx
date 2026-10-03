"use client";

import React from "react";

export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            {job.type}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
        <p className="text-sm text-gray-600 mb-6 flex items-center gap-1.5">
          <span>📍</span>
          <span>{job.location}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => onApply(job.title)}
        className="w-full py-2.5 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <span>Apply Now</span>
        <span>↑</span>
      </button>
    </div>
  );
}
