"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import testimonials from "@/data/testimonial";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const current = testimonials[index];

  return (
    <section className="w-full px-4 py-12 bg-sky-500 text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Student Testimonials
      </h2>

      <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center w-full"
          >
            <div className="flex flex-col items-center space-y-4">
              <Image
                src={current.image}
                alt={current.name}
                width={80}
                height={80}
                className="rounded-full border-2 border-white"
              />
              <h3 className="text-xl font-bold">{current.name}</h3>
              <p className="text-white/90 text-base">{current.message}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mt-8 px-4">
          <button
            onClick={handlePrev}
            className="bg-white/20 hover:bg-white/30 transition-all p-3 rounded-full"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/20 hover:bg-white/30 transition-all p-3 rounded-full"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
