"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, LocateIcon, PhoneForwarded } from "lucide-react";
import MapEmbed from "./MapEmbed";

export default function Footer() {
  return (
    <footer className="bg-[#11181e] text-white pt-16 pb-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/IMAGES/LOGO.jpg"
            alt="Khushi Edu Consultancy Logo"
            width={160}
            height={60}
            className="rounded-2xl object-contain mb-4"
            priority
          />
          <p className="text-gray-100  font-bold tracking-wide text-sm text-center md:text-left">
            Helping students achieve their academic and career dreams in Japan
            with expert guidance and genuine support.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-sky-100/10 rounded-xl p-6  shadow-md">
          <h3 className="text-lg font-bold text-sky-400 mb-4 flex items-center gap-2">
            <LocateIcon className="w-5 h-5" />
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-sky-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-sky-300 transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/japan" className="hover:text-sky-300 transition">
                Study & Work in Japan
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sky-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="bg-sky-100/10 rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-sky-400 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Address
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed flex items-start gap-2">
            📍 Saraswatinagar-6, Chabahil, Kathmandu
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-sky-100/10 rounded-xl p-6  shadow-md">
          <h3 className="text-lg font-bold text-sky-400 mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Contact Us
          </h3>
          <div className="space-y-3 text-sm text-gray-300">
            <a
              href="tel:+97715926262"
              className="flex items-center gap-2 hover:text-sky-300 transition"
            >
              <PhoneForwarded className="w-4 h-4" />
              +977 1-5926262
            </a>
            <a
              href="mailto:info@khushiedu.com"
              className="flex items-center gap-2 hover:text-sky-300 transition"
            >
              <Mail className="w-4 h-4" />
              info@khushiedu.com
            </a>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-14 max-w-7xl mx-auto">
        <MapEmbed />
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs mt-12 border-t border-white/10 pt-6 text-white/60 tracking-wide">
        © {new Date().getFullYear()} Khushi Edu Consultancy Pvt. Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
