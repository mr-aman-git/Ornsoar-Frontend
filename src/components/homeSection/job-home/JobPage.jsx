"use client";

import { useRef } from "react";
import JobApplicationForm from "./JobApplicationForm";
import JobCard from "./JobCard";
import { JOBS_LIST } from "./jobsData";

export default function JobPage() {
  const formRef = useRef(null);

  const handleApplyClick = (jobTitle) => {
    formRef.current?.selectJob(jobTitle);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Left (Who We Are) & Right (Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Who We Are */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 pt-2 lg:sticky lg:top-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold tracking-wide w-fit">
              <span>🚀</span> Abroad Career Opportunities
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Build Your Future <br />
              <span className="text-blue-500">Abroad</span> with{" "}
              <span className="text-orange-500">Confidence</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                We help hardworking candidates secure the right jobs in the
                warehouse, logistics, and construction sectors in the UAE,
                Dubai, and abroad.
              </p>
              <p>
                We make your journey towards a career abroad easy with a
                transparent process, direct assistance, visa support, and
                complete guidance.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <span className="block text-2xl font-bold text-orange-500">
                  100%
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Verified Jobs
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <span className="block text-2xl font-bold text-blue-500">
                  Quick
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  WhatsApp Assistance
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <JobApplicationForm ref={formRef} />
          </div>
        </div>

        {/* Bottom Section: Jobs Grid */}
        <div className=" lg:mt-20 pt-10 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Open Abroad Positions
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Click on any position to fill out the application form directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOBS_LIST.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApplyClick} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
