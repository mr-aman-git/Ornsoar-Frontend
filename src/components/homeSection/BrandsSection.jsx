"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  { name: "Top Hand Cleaning Services", logo: "/partner/company1.webp" },
  { name: "SLM Interior", logo: "/partner/company2.webp" },
  { name: "Al Ghazal Transport", logo: "/partner/company3.webp" },
  { name: "One Road", logo: "/partner/company4.webp" },
  { name: "Rigid Industries", logo: "/partner/company5.webp" },
  { name: "Al Wasl", logo: "/partner/company6.webp" },
];

export default function BrandsSection() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold">
            <span className="text-blue-500">Brands</span> That Hire Through
            Ornsoar
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-lg">
            Jobs posted by the best direct companies in UAE. Check jobs now!
          </p>
        </motion.div>

        {/* ================= MOBILE SWIPER ================= */}
        <div className="mt-10 md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={90}
                    height={60}
                    className="object-contain h-10 w-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="hidden md:grid mt-12 grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={130}
                height={80}
                className="object-contain h-16 max-w-40"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
