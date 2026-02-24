"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, Briefcase } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Transparent",
    desc: "We maintain complete transparency in documentation, job offers, and visa processing.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    desc: "We connect you with verified employers across multiple international destinations.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Our experienced team provides step-by-step career support from application to placement.",
  },
  {
    icon: Briefcase,
    title: "Verified Employers",
    desc: "All overseas job opportunities are carefully screened for authenticity and reliability.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-14 bg-linear-to-b from-white to-blue-50 relative overflow-hidden">

      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold mb-3">
            Why Choose ORNSOAR
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Why You Should Choose{" "}
            <span className="text-blue-500">ORNSOAR</span> for Your Career
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We provide professional overseas job consultancy with a focus on
            trust, transparency, and successful global placements.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white mb-6">
                <item.icon size={26} />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;