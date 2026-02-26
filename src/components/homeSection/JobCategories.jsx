"use client";

import { motion } from "framer-motion";
import {
  Bike,
  Brush,
  Hammer,
  HardHat,
  Wrench,
  Truck,
  Construction,
  Zap,
  Package,
  Paintbrush,
  Building,
  Cog,
} from "lucide-react";

const categories = [
  { name: "Delivery", jobs: "600+ Jobs Available", icon: Bike },
  { name: "Housekeeping", jobs: "400+ Jobs Available", icon: Brush },
  { name: "Welder", jobs: "360+ Jobs Available", icon: Hammer },
  { name: "Labor/Helper", jobs: "360+ Jobs Available", icon: HardHat },
  { name: "Carpenter", jobs: "200+ Jobs Available", icon: Construction },
  { name: "Warehouse/Logistics", jobs: "120+ Jobs Available", icon: Package },
  { name: "Driver", jobs: "200+ Jobs Available", icon: Truck },
  { name: "Mason", jobs: "150+ Jobs Available", icon: Building },
  { name: "Electrician", jobs: "120+ Jobs Available", icon: Zap },
  { name: "Graphic Designer", jobs: "120+ Jobs Available", icon: Paintbrush },
  { name: "Scaffolding", jobs: "120+ Jobs Available", icon: Construction },
  { name: "Technician", jobs: "100+ Jobs Available", icon: Cog },
];

export default function JobCategories() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold"
        >
          <span className="text-blue-500">50+</span> Job Categories
        </motion.h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          With over 50+ job categories, find the right job with better salary in UAE
        </p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Circle Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow transition duration-300">
                  <Icon size={36} className="text-blue-500" />
                </div>

                {/* Text */}
                <h3 className="mt-5  font-semibold group-hover:text-blue-600 transition">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{cat.jobs}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}