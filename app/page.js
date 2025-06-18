"use client";

import Achievements from "@/components/Achievements";
import Testimonial from "../components/Testimonial";

import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/ChooseUs";

export default function HomePage() {
  return (
    <main className="w-full text-[#010066] bg-white">
      {/* Fullscreen Hero Section*/}

      <Hero />

      <div className="w-full flex flex-col items-center gap-12 px-6 py-16">
        {/* Heading */}

        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonial />

        <Achievements />
      </div>
    </main>
  );
}
