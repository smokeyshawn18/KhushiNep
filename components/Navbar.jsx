"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Globe } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa"; // FIXED: missing import

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
      {/* Top Contact Bar */}
      <div className="bg-sky-700 text-white font-bold text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <a
            href="tel:+9779812345678"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors font-medium"
          >
            <Phone size={14} className="text-blue-300" />
            <span className="hidden xs:inline">+977-1-5926262</span>
            <span className="xs:hidden">Call Us</span>
          </a>
          <div className="flex items-center gap-2 text-gray-100 tracking-wide">
            <MapPin size={14} className="text-blue-300" />
            <span className="hidden sm:inline">
              Saraswatinagar-6, Chabahil, Kathmandu
            </span>
            <span className="sm:hidden">
              Saraswatinagar-6, Chabahil, Kathmandu
            </span>
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
                  width={42}
                  height={42}
                  className="rounded-full  shadow-md group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-gray-800 leading-tight">
                  Khushi Edu
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-0.5">
                  Consultancy Pvt. Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${
                      pathname === item.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="xl:hidden relative p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
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

        {isMenuOpen && (
          <nav className="xl:hidden">
            <ul className="w-full bg-white shadow-md flex flex-col space-y-4 p-6 absolute left-0 right-0 top-full z-50">
              <li>
                <Link
                  href="/"
                  className={`text-black font-semibold text-lg hover:text-gray-700 transition-colors block py-2 ${
                    pathname === "/" ? "text-[#408EC6]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`text-black font-semibold text-lg hover:text-gray-700 transition-colors block py-2 ${
                    pathname === "/services" ? "text-[#408EC6]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/japan"
                  className={`text-black font-semibold text-lg hover:text-gray-700 transition-colors block py-2 ${
                    pathname === "/japan" ? "text-[#408EC6]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Study in Japan
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-black font-semibold text-lg hover:text-gray-700 transition-colors block py-2 ${
                    pathname === "/about" ? "text-[#408EC6]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`text-black font-semibold text-lg hover:text-gray-700 transition-colors block py-2 ${
                    pathname === "/news" ? "text-[#408EC6]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-black font-semibold text-lg hover:text-gray-700 transition-colors block py-2 ${
                    pathname === "/contact" ? "text-[#408EC6]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-200">
                <div className="flex flex-col items-start text-sky-900 space-y-1">
                  <a
                    href="tel:+81-03-6709-6711"
                    className="flex items-center space-x-2 hover:text-sky-700"
                  >
                    <Phone className="text-xl" />
                    <span className="font-bold text-lg">+977 1-5926262</span>
                  </a>
                  <span className="font-bold text-sm">Starting Time</span>
                  <span className="font-semibold text-sm">
                    Mon–Fri 06:00–17:00
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </>
  );
};

export default Navbar;
