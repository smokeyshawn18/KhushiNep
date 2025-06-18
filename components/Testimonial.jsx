"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonials from "@/data/testimonial";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setIndex((prev) => (prev + 1) % total);

  return (
    <section className="w-full px-4 py-20 bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 text-center mb-16">
          What Our Students Say
        </h2>

        <div className="relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-3xl bg-white p-6 sm:p-10 rounded-3xl shadow-xl text-gray-800 relative z-10"
            >
              {/* Quotation Icon */}
              <div className="absolute -top-6 left-6 bg-sky-400 p-3 rounded-full shadow-md">
                <Quote className="text-white w-6 h-6" />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={90}
                  height={90}
                  className="rounded-full  object-cover shadow-md"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-sky-800">
                    {current.name}
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed text-base sm:text-lg">
                    {current.message}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              className="bg-sky-600 hover:bg-sky-700 text-white p-3 rounded-full shadow-md transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-sky-600 hover:bg-sky-700 text-white p-3 rounded-full shadow-md transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
