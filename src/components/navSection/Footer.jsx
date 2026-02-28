"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-400">
            Ornsoar Consultancy
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            We specialize in providing verified overseas job opportunities.
            Helping professionals build successful careers abroad with trusted
            employers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>Overseas Job Placement</li>
            <li>Visa Assistance</li>
            <li>Interview Preparation</li>
            <li>Documentation Support</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <Phone size={16} /> +91 9626096262
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> hr@ornsoar.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> India
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-500 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Ornsoar Consultancy Services Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;