"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import WhatsappSticky from "./WhatsappSticky";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            Ornsoar Consultancy
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We specialize in providing verified overseas job opportunities.
            Helping professionals build successful careers abroad with trusted
            employers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-blue-500 transition">
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-blue-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-orange-500 transition">
              Overseas Job Placement
            </li>
            <li className="hover:text-orange-500 transition">
              Visa Assistance
            </li>
            <li className="hover:text-orange-500 transition">
              Interview Preparation
            </li>
            <li className="hover:text-orange-500 transition">
              Documentation Support
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Contact Us
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-500" />
              +91 9626096262
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-500" />
              hr@ornsoar.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-500" />
              India
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ornsoar Consultancy Services Pvt Ltd. All
        rights reserved.
      </div>
      <WhatsappSticky/>
    </footer>
  );
};

export default Footer;
