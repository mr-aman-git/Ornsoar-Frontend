"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/heroImage.jpg"
            alt="About Ornsoar Consultancy"
            width={600}
            height={400}
            className="rounded-2xl object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 font-semibold mb-3">
            About Our Consultancy
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Trusted Partner for <span className="text-blue-500">Overseas Careers</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            We specialize in connecting skilled professionals with verified
            international employers. From job search to visa documentation,
            our expert team ensures a smooth and transparent process for your
            global career journey.
          </p>

          <Link href="/about">
            <button className="bg-blue-500 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
              Learn More →
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default About;