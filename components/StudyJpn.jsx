"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Globe,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function StudyJapan() {
  const features = [
    {
      icon: GraduationCap,
      title: "Study in Japan",
      desc: "Access world-class universities with cutting-edge programs in technology, business, and research.",
      stats: "Top 100 Global Universities",
    },
    {
      icon: Briefcase,
      title: "Work Opportunities",
      desc: "Seamless transition from student to professional with Japan's growing job market for international talent.",
      stats: "95% Employment Rate",
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      desc: "Experience Japan's rich culture while building an international network in a safe, welcoming environment.",
      stats: "120+ Countries Represented",
    },
    {
      icon: Users,
      title: "Complete Support",
      desc: "From application to graduation and job placement - comprehensive guidance every step of the way.",
      stats: "24/7 Student Support",
    },
  ];

  return (
    <section
      id="japan"
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/IMAGES/japan-campus.avif"
          alt="Japanese University Campus"
          fill
          quality={100}
          className="object-cover object-center opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-6 py-2 mb-8"
          >
            <Star className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-800">
              Your Gateway to Japan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-sky-800 mb-8 leading-tight"
          >
            Study & Work
            <br />
            in Japan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-sky-700 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Transform your future with Japan's world-renowned education system
            and thriving job market. From university admission to career success
            - we guide you every step of the way.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/contact">
              <Button className="group bg-sky-800 hover:bg-sky-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link href="/japan">
              <Button
                variant="outline"
                className="border-2 border-sky-800 text-sky-800 hover:bg-sky-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Success Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center"
          >
            {[
              { number: "1000+", label: "Students Guided" },
              { number: "95%", label: "Success Rate" },
              { number: "50+", label: "Partner Universities" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl sm:text-4xl font-bold text-sky-800 mb-1 group-hover:text-sky-900 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-sky-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                type: "spring",
                bounce: 0.1,
              }}
              className="group relative bg-white rounded-2xl border border-sky-100 p-6 lg:p-8 hover:shadow-lg hover:border-sky-200 transition-all duration-300 h-full flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="bg-sky-50 rounded-2xl p-4 w-fit group-hover:bg-sky-100 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-sky-800" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-sky-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sky-700 leading-relaxed text-sm lg:text-base mb-4">
                  {feature.desc}
                </p>
                <div className="text-xs font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full w-fit">
                  {feature.stats}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight className="w-5 h-5 text-sky-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-sky-50 rounded-3xl p-8 lg:p-12 border border-sky-100"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-sky-800 mb-4">
            Ready to Transform Your Future?
          </h3>
          <p className="text-sky-700 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of successful students who have built amazing careers
            in Japan. Your journey to academic and professional excellence
            starts here.
          </p>
          <Link href="/contact">
            <Button className="group bg-sky-800 hover:bg-sky-900 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
