"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Lightbulb, LineChart, Wallet } from "lucide-react";
import FeatureSlider from "./FeatureSlider";
const HeroSection = () => {
  return (
    <section className="relative bg-[#f4f7fa] pt-42 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-semibold mb-3"
          >
            One of the Best Abroad Job Consultancy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Get Global <br />
            <span className="text-blue-500">Career Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 mt-6 max-w-lg"
          >
            We help professionals secure verified overseas jobs with trusted
            employers. From documentation to placement — we handle everything.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-18"
          >
            <button className="bg-blue-500 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
              Get Started →
            </button>

            <button className=" hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg border border-blue-500 text-orange-500 font-semibold transition">
              Learn More →
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative md:flex justify-center md:justify-end hidden">
          {/* Background Circle */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full -z-10"></div>

          {/* Small Accent Circle */}
          <div className="absolute top-5 right-16 w-12 h-12 bg-orange-400 rounded-full"></div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className=" rounded-full overflow-hidden w-72 h-72 md:w-96 md:h-96 shadow-2xl"
          >
            <Image
              src="/heroImage.jpg"
              alt="Consultant"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      {/* <div className="mt-20">
        <FeatureSlider />
      </div> */}
    </section>
  );
};

export default HeroSection;
