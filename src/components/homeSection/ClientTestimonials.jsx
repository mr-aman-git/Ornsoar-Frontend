"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Driver - UAE",
    image: "/clients/client1.jpg",
    review:
      "Ornsoar Consultancy helped me secure a driver job in Dubai within 2 months. The process was transparent and smooth.",
  },
  {
    name: "Imran Khan",
    role: "Welder - Saudi Arabia",
    image: "/clients/client2.jpg",
    review:
      "Very professional team. They guided me properly with documentation and visa process. Highly recommended!",
  },
  {
    name: "Sanjay Kumar",
    role: "Electrician - Qatar",
    image: "/clients/client3.jpg",
    review:
      "I got placed in Qatar with a good salary package. Thank you Ornsoar for this opportunity.",
  },
  {
    name: "Amit Verma",
    role: "Warehouse Staff - UAE",
    image: "/clients/client4.jpg",
    review:
      "Reliable consultancy with genuine overseas job offers. My experience was safe and hassle-free.",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          What Our <span className="text-blue-600">Clients Say</span>
        </motion.h2>

        <p className="mt-4 text-gray-600">
          Trusted by hundreds of candidates placed successfully abroad
        </p>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="mt-12 md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden mt-14 gap-10 md:block">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            loop
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

function TestimonialCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 leading-relaxed mb-6">"{item.review}"</p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-gray-500">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
