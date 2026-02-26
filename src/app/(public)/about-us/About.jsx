"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="w-full bg-white mt-20">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-r from-blue-500 to-indigo-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            About Ornsoar Consultancy
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            Connecting skilled professionals with trusted employers across the
            globe. Your gateway to secure and verified overseas job
            opportunities.
          </p>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ornsoar Consultancy is a trusted recruitment agency specializing
              in overseas job placements. We help individuals secure reliable
              employment opportunities in countries like UAE, Qatar, Saudi
              Arabia, and other international markets.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team works closely with verified employers to ensure
              transparency, security, and long-term career growth for every
              candidate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <Globe className="text-blue-500" size={40} />
              <div>
                <h3 className="font-semibold text-lg">Global Reach</h3>
                <p className="text-gray-500 text-sm">
                  Providing international job opportunities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Briefcase className="text-blue-500" size={40} />
              <div>
                <h3 className="font-semibold text-lg">Verified Employers</h3>
                <p className="text-gray-500 text-sm">
                  Direct hiring companies with transparent process
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-500" size={32} />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower skilled professionals by providing
              ethical, transparent, and efficient overseas job placements. We
              aim to bridge the gap between talent and global opportunities
              while ensuring safety and career growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-blue-500" size={32} />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become a globally recognized recruitment consultancy known for
              trust, quality placements, and long-term partnerships with both
              candidates and employers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Start Your Global Career?
        </motion.h2>
        <p className="text-gray-600 mb-8">
          Explore verified overseas job opportunities today with Ornsoar
          Consultancy.
        </p>
        <button className="bg-blue-500 hover:bg-orange-500 text-white px-8 py-3 rounded-xl transition duration-300 shadow-md">
          Explore Jobs
        </button>
      </section>
    </div>
  );
};

export default About;
