"use client";
import Image from "next/image";
import Testimonial from "../components/Testimonial";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="w-full text-[#010066] bg-white">
      {/* Fullscreen Hero Image with Overlay Content */}
      <section className="relative w-full h-screen">
        <Image
          src="/IMAGES/home.jpg"
          alt="Japanese learning background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="w-full h-full"
        />

        {/* Floating Header + CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col justify-center items-center px-4 w-full"
        >
          {/* Top-Left Company Name (Floating) */}

          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="absolute top-4  text-white  font-extrabold text-lg sm:text-xl md:text-2xl "
          >
            सपना पुरा पार्ने सेतु — खुशी एजु कन्सल्टेन्सी।
          </motion.h1>
          {/* Slogan + Button Centered */}
          <div className="mt-20 sm:mt-32 w-full max-w-sm sm:max-w-md text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="bg-[#fe0000]/90 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold shadow-lg mb-4 backdrop-blur-sm"
            >
              नेपाल, तपाईको खुशी नै हाम्रो खुशी
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00295e] mt-3 hover:bg-[#d40000] text-white font-bold px-5 py-2 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base shadow-md transition-all duration-300"
            >
              Submit Agreement
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Content Below Image */}
      <div className="w-full flex flex-col items-center gap-12 px-6 py-16">
        {/* Heading */}

        {/* Why Choose Us Section */}
        <section className="w-full max-w-3xl bg-sky-600 text-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-3 text-lg font-semibold">
            <li>Experienced Japanese language instructors</li>
            <li>Comprehensive study and work programs in Japan</li>
            <li>Personalized guidance and support throughout your journey</li>
            <li>Strong network with Japanese institutions and employers</li>
            <li>Affordable and flexible course options</li>
          </ul>
        </section>

        {/* Testimonials Section */}
        <Testimonial />
      </div>
    </main>
  );
}
