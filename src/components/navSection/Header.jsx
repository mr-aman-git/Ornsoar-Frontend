"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Jobs", href: "/jobs" },
    { name: "Carrers", href: "/carrers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="Ornsoar Consultancy"
              width={110}
              height={50}
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="text-gray-900 font-semibold hover:text-blue-500 transition"
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        {/* <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-linear-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
          >
            Apply Now
          </motion.button>
        </div> */}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="block text-gray-900 font-semibold text-lg text-center">
                  {link.name}
                </span>
              </Link>
            ))}
            {/* <button className="bg-linear-to-r from-blue-600 to-orange-500 text-white px-5 py-2 rounded-full">
              Apply Now
            </button> */}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
