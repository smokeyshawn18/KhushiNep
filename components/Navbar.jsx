"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Study and Work in Japan", href: "/japan" },
  { name: "About Us", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = ({ translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallHovered, setIsCallHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top Contact Bar - Simple Call Animation */}
      <div className="bg-sky-700 text-white font-bold text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link
            href="tel:+977 1-5926262"
            className="flex items-center gap-2 font-medium transition-all duration-300 hover:scale-105 group relative overflow-hidden"
          >
            <Phone
              size={14}
              className="text-blue-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
            />
            <span className="hidden xs:inline group-hover:translate-x-1 transition-transform duration-300">
              +977-1-5926262
            </span>
            <span className="xs:hidden">Click to Call</span>
          </Link>
          <div className="flex items-center gap-2 text-gray-100 tracking-wide">
            <MapPin size={14} className="text-blue-300" />
            <span>Saraswatinagar-6, Chabahil, Kathmandu</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-200"
            : "bg-white/95 backdrop-blur-lg shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 py-3">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <Image
                  src="/IMAGES/LOGO.jpg"
                  alt="Logo"
                  width={52}
                  height={52}
                  className="rounded-full shadow-md group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-gray-800 leading-tight">
                  Khushi Edu
                </span>
                <span className="text-xs text-gray-700 font-semibold -mt-0.5">
                  Consultancy Pvt. Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Menu + Call Button */}
            <div className="hidden xl:flex items-center gap-4">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${
                        pathname === item.href
                          ? "text-sky-800 bg-blue-50"
                          : "text-gray-700 hover:text-slate-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Desktop Call Button - Simple Animation */}
              <Link
                href="tel:+977 1-5926262"
                className="group relative flex items-center gap-2 bg-sky-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 border border-sky-500 hover:border-sky-400 overflow-hidden"
              >
                <Phone
                  size={18}
                  className="group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
                />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Call Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="xl:hidden relative p-3 rounded-2xl bg-gradient-to-r from-sky-800 to-sky-900 text-white shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {isMenuOpen ? <X size={20} className="" /> : <Menu size={20} />}
              </div>
              {!isMenuOpen && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white shadow-2xl border-t border-gray-100 overflow-hidden">
            {/* Mobile Header with Call Button */}
            <div className="bg-gradient-to-r from-sky-800 to-sky-900 text-white p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">
                  Khushi Edu
                </h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-200"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Mobile Call Button - Simple Animation */}
              <Link
                href="tel:+977 1-5926262"
                className="group relative block bg-white text-sky-800 px-6 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-white/50 hover:border-white text-center overflow-hidden"
              >
                <div className="flex items-center justify-center gap-3">
                  <Phone
                    size={24}
                    className="text-sky-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                  />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    Call Now +977 1-5926262
                  </span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
              </Link>
            </div>

            {/* Rest of mobile menu unchanged... */}
            <div className="divide-y divide-gray-100">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-4 p-6 font-bold text-lg text-gray-900 hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent hover:border-sky-600 hover:shadow-sm ${
                    pathname === item.href
                      ? "bg-sky-50 border-sky-600 text-sky-900 shadow-sm"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-200 flex-shrink-0 ${
                      pathname === item.href
                        ? "bg-sky-600 scale-125 shadow-md"
                        : "bg-gray-300 group-hover:bg-sky-500"
                    }`}
                  />
                  <span className="flex-1 font-bold">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Quick Actions - unchanged */}
            <div className="p-6 space-y-4 border-t border-gray-100">
              <Link
                href="/counseling"
                className="group block w-full bg-gradient-to-r from-sky-600 to-sky-700 text-white p-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sky-500"
                onClick={closeMenu}
              >
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-6 h-6 text-sky-100" />
                  <span>Book Free Counseling</span>
                  <ArrowRight className="w-5 h-5 text-sky-100 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-sky-600" />
                  <h3 className="font-bold text-xl text-gray-900">
                    Working Hours
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-700 font-medium">Sun - Fri</span>
                    <span className="font-bold text-gray-900">
                      06:00 - 17:00
                    </span>
                  </div>

                  <div className="flex justify-between py-1 pt-2 border-t border-gray-200">
                    <span className="text-gray-700 font-semibold">
                      24/7 Support
                    </span>
                    <span className="font-bold text-sky-600">Available</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="tel:+977 1-5926262"
                  className="flex items-center justify-center gap-2 bg-sky-600 text-white p-4 rounded-xl font-semibold text-sm hover:bg-sky-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Telephone
                </Link>
                <Link
                  href="https://wa.me/9851363063"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white p-4 rounded-xl font-semibold text-sm hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
