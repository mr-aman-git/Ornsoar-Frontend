"use client";

import { motion } from "framer-motion";
import { FileText, Search, Plane, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Your Profile",
    desc: "Register with your resume and documents. Our team reviews your qualifications and experience.",
  },
  {
    icon: Search,
    title: "Job Matching & Interview",
    desc: "We match you with verified international employers and schedule interviews.",
  },
  {
    icon: BadgeCheck,
    title: "Offer & Documentation",
    desc: "Receive official job offer and complete visa, contract & legal paperwork securely.",
  },
  {
    icon: Plane,
    title: "Fly & Start Career",
    desc: "Travel abroad confidently and begin your new professional journey overseas.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-28 bg-linear-to-b from-white via-blue-50/40 to-orange-50/40 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-orange-500 font-semibold tracking-wide uppercase mb-4">
            Simple & Transparent Process
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            How <span className="text-blue-500">It Works</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            A secure and verified overseas placement journey — from application to international departure.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-orange-500"></div>

          <div className="grid md:grid-cols-4 gap-12">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Big Step Number Background */}
                <span className="absolute -top-20 left-0 text-8xl font-bold text-gray-400 z-0">
                  0{index+1}
                </span>

                {/* Card */}
                <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3">

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition duration-300">
                    <step.icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;