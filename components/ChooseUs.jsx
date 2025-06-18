"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    "Expert Japanese Language Teachers",
    "Visa & Career Support Throughout Your Journey",
    "Quality language classes by our experienced Teachers",
    "Direct Partnership with Japanese Universities",
    "Flexible & Affordable Program Options",
    "Scholarship & Work Opportunities in Japan",
    "Trusted by 1000+ Successful Students",
  ];

  return (
    <section className="w-full py-16 px-6 sm:px-12 bg-sky-100">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl px-8 sm:px-14 py-12 text-center"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/IMAGES/LOGO.jpg"
            alt="Logo"
            width={80}
            height={70}
            className="rounded-full object-cover "
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00295e] mb-8">
          Why Choose Us
        </h2>

        {/* List of Benefits */}
        <ul className="grid gap-5 sm:grid-cols-2 text-left max-w-3xl mx-auto">
          {features.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 text-lg text-gray-800 font-medium"
            >
              <CheckCircle className="text-[#16305f] mt-1 w-6 h-6" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
