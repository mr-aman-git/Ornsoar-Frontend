"use client";

import { motion } from "framer-motion";
import { Briefcase, Lightbulb, LineChart, Wallet } from "lucide-react";

const features = [
  { icon: Briefcase, title: "Overseas Jobs" },
  { icon: Lightbulb, title: "Visa Assistance" },
  { icon: LineChart, title: "Career Growth" },
  { icon: Wallet, title: "High Salary Roles" },
];

// Duplicate items for smooth infinite loop
const duplicatedFeatures = [...features, ...features];

const FeatureSlider = () => {
  return (
    <div className="relative mt-18 py-5 overflow-hidden">
      {/* Gradient Blur Edges */}
      {/* <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10"></div> */}

      <motion.div
        className="flex gap-18 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {duplicatedFeatures.map((item, index) => (
          <div
            key={index}
            className="min-w-32.5 md:min-w-55 bg-white/10 md:gap-5 gap-2 flex justify-center items-center  p-3 rounded-2xl shadow border border-blue-500 text-center"
          >
            <item.icon size={28} />
            <h3 className="text-md md:font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureSlider;
