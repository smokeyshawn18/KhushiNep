"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Building2,
  Clock,
  Globe,
} from "lucide-react";
import MapEmbed from "./MapEmbed";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white p-2 rounded-xl">
                      <Image
                        src="/IMAGES/LOGO.jpg"
                        width={50}
                        height={50}
                        alt="Khushi"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Khushi Edu Consultancy Pvt. Ltd.
                    </h2>
                    <p className="text-slate-400 text-sm font-medium">
                      • Est. 2024
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed max-w-md">
                  Empowering students to achieve their academic and career
                  aspirations in Japan through comprehensive guidance,
                  personalized support, and proven expertise in international
                  education.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span>International Education</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>Career Guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                    <span>Visa Assistance</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Quick Links
                </h3>
                <nav className="space-y-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/services", label: "Our Services" },
                    { href: "/about", label: "About Us" },
                    { href: "/japan", label: "Study in Japan" },
                    { href: "/contact", label: "Contact" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-slate-400 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="group">
                    <div className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Office Location</p>
                        <p className="text-xs leading-relaxed">
                          Saraswatinagar-6, Chabahil
                          <br />
                          Kathmandu, Nepal
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <a
                      href="tel:+97715926262"
                      className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <Phone className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Phone</p>
                        <p className="text-xs">+977 1-5926262</p>
                      </div>
                    </a>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <a
                      href="mailto:info@khushiedu.com"
                      className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <p className="text-xs">info@khushiedu.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-400" />
                Find Us Here
              </h3>
              <MapEmbed />
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-slate-400 text-sm text-center sm:text-left">
                  <p>
                    © {new Date().getFullYear()} Khushi Edu Consultancy Pvt.
                    Ltd.
                  </p>
                  <p className="text-xs mt-1">
                    All rights reserved. Made with ❤️ in Nepal
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
