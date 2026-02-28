"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile main menu
  const [jobDropdown, setJobDropdown] = useState(false); // Desktop hover
  const [mobileJobOpen, setMobileJobOpen] = useState(false); // Mobile accordion
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
  ];

  const jobLinks = [
    { name: "Job in Dubai", href: "/jobs" },
    { name: "Job in Kuwait", href: "/jobs" },
    { name: "Job in Qatar", href: "/jobs" },
  ];

  // Helper to close everything on link click
  const closeAll = () => {
    setIsOpen(false);
    setMobileJobOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ornsoar Consultancy"
            width={120}
            height={45}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="group relative">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}

          {/* Desktop Jobs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setJobDropdown(true)}
            onMouseLeave={() => setJobDropdown(false)}
          >
            <Link href="/jobs">
            <div className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Jobs
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${jobDropdown ? "rotate-180" : ""}`}
              />
            </div>
            </Link>

            <AnimatePresence>
              {jobDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden py-2"
                >
                  {jobLinks.map((job) => (
                    <Link key={job.name} href={job.href}>
                      <span className="block px-5 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        {job.name}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact-us" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>

          <Link href="/career" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
            Careers
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeAll}>
                  <span className="text-lg font-semibold text-gray-900">{link.name}</span>
                </Link>
              ))}

              {/* Mobile Accordion for Jobs */}
              <div className="space-y-4">
                <Link href="/jobs">
                <button 
                  onClick={() => setMobileJobOpen(!mobileJobOpen)}
                  className="flex items-center justify-between w-full text-lg font-semibold text-gray-900"
                >
                  Jobs
                  <ChevronDown size={20} className={`transition-transform duration-300 ${mobileJobOpen ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                </Link>
                
                <AnimatePresence>
                  {mobileJobOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden grid grid-cols-1 gap-4 border-l-2 border-blue-100 ml-1 pl-4"
                    >
                      {jobLinks.map((job) => (
                        <Link key={job.name} href={job.href} onClick={closeAll}>
                          <span className="text-gray-600 font-medium block py-1">
                            {job.name}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact-us" onClick={closeAll}>
                <span className="text-lg font-semibold text-gray-900">Contact</span>
              </Link>

              <Link href="/career" onClick={closeAll}>
                <span className="text-lg font-semibold text-gray-900">Careers</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;