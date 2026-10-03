"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Users,
} from "lucide-react";
import FeatureSlider from "./FeatureSlider";

const HeroSection = () => {
  return (
    <section className="relative pt-34 lg:px-12 px-3  overflow-hidden bg-linear-to-b from-blue-50/40 via-white to-slate-50">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-96 bg-linear-to-tr from-blue-200/30 via-orange-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-orange-600">
                Premier Overseas Recruitment Consultancy
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]"
            >
              Unlock Global Work <br className="hidden sm:inline" />
              Opportunities in{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-500">
                UAE & Dubai
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              We connect skilled and hardworking professionals directly with
              verified overseas employers. From visa paperwork to onboarding, we
              ensure a seamless and transparent career transition abroad.
            </motion.p>

            {/* Quick Benefits Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-1 text-xs sm:text-sm text-gray-700 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Govt. Verified Employers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Complete Visa Guidance</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link href="#apply-form" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-7 py-3.5 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 text-sm group cursor-pointer"
                >
                  <span>Explore Vacancies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="tel:+919626096262" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-orange-50 active:scale-[0.98] text-orange-500 border border-orange-200 hover:border-orange-400 font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center text-sm cursor-pointer"
                >
                  <span>Consult with Expert</span>
                </button>
              </Link>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-gray-200/70 md:flex items-center justify-center lg:justify-start gap-8 hidden"
            >
              <div>
                <p className="text-2xl font-bold text-gray-900">1,500+</p>
                <p className="text-xs text-gray-500">Candidates Deployed</p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-xs text-gray-500">Visa Approval Rate</p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-gray-900">40+</p>
                <p className="text-xs text-gray-500">Overseas Partners</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL SECTION */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Background Circles */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-100 to-orange-100 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400/20 rounded-full blur-xl" />

            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white to-slate-100 border border-gray-200/80 shadow-2xl"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/heroImage.jpg"
                  alt="Overseas Career Consultant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Trust Badge: Verified Placements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -left-4 sm:-left-8 bottom-10 bg-white/95 backdrop-blur-md border border-gray-100 p-3.5 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 leading-tight">
                  100% Verified
                </p>
                <p className="text-[11px] text-gray-500">
                  Government Registered
                </p>
              </div>
            </motion.div>

            {/* Floating Trust Badge: UAE & Dubai Placements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute -right-2 sm:-right-6 top-8 bg-white/95 backdrop-blur-md border border-gray-100 p-3.5 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 leading-tight">
                  UAE & Dubai
                </p>
                <p className="text-[11px] text-gray-500">
                  Fast Visa Processing
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Slider integration */}
        <div className="mt-14 sm:mt-20">
          <FeatureSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
