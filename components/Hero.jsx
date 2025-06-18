import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/IMAGES/home.jpg"
        alt="Japanese learning background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="w-full h-full"
      />

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Floating Header + CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 w-full z-10"
      >
        <div className="mt-4 sm:mt-2 max-w-md sm:max-w-lg text-left bg-white/10 backdrop-blur-md p-6 rounded-xl">
          {/* Tagline Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-[#fe0000]/90 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-xl text-sm sm:text-lg font-semibold shadow-lg mb-4 w-fit"
          >
            नेपाल, तपाईको खुशी नै हाम्रो खुशी
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl leading-snug mb-4 drop-shadow-md"
          >
            सपना पुरा पार्ने सेतु — <br className="hidden sm:block" />
            खुशी एजु कन्सल्टेन्सी।
          </motion.h1>

          {/* CTA Button */}
          <Link
            href="https://contract-form-khushi-rzdn.onrender.com"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00295e] hover:bg-[#d40000] text-white font-bold px-5 py-2 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base shadow-md transition-all duration-300"
            >
              Submit Agreement
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
