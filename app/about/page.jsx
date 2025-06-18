"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BadgeCheck, BookOpenCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-sky-800 uppercase mb-6 tracking-wide">
          About Us
        </h2>

        {/* Logo */}
        <div className="w-42 h-32 mx-auto rounded-xl overflow-hidden mb-4">
          <Image
            src="/IMAGES/LOGO.jpg"
            alt="Logo"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-24 mx-auto my-6 border-t-4 border-sky-800" />

        {/* Intro */}
        <p className="text-lg sm:text-xl text-gray-900 dark:text-gray-200 mb-4">
          Welcome to <strong>Khushi Edu Consultancy Pvt. Ltd!</strong>
          <br />
          Your Gateway to Education and Career Opportunities in Japan.
        </p>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-4">
          We help students and professionals achieve their dreams of studying
          and working in Japan.
        </p>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-4">
          From university admissions to visa assistance — our team is here for
          you.
        </p>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-8">
          Our experienced consultants provide personalized support to guide your
          successful journey abroad.
        </p>

        <div className="w-24 mx-auto border-t-4 border-sky-800 mb-12" />

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="hover:shadow-xl transition-all duration-300 border border-sky-200 dark:border-sky-900">
            <CardContent className="p-6">
              <Image
                src="/IMAGES/study.jpg"
                alt="Study in Japan"
                width={400}
                height={240}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <div className="flex items-center gap-2 text-sky-800 font-semibold text-lg mb-2">
                <GraduationCap className="w-5 h-5" /> Study in Japan
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Explore world-class education and vibrant culture in Japan.
                Discover your potential and achieve your academic goals.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="hover:shadow-xl transition-all duration-300 border border-sky-200 dark:border-sky-900">
            <CardContent className="p-6">
              <Image
                src="/IMAGES/japanvisa.jpg"
                alt="Visa Services"
                width={400}
                height={240}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <div className="flex items-center gap-2 text-sky-800 font-semibold text-lg mb-2">
                <BadgeCheck className="w-5 h-5" /> Visa Services
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Expert support for student and work visas to Japan & Korea. We
                simplify the process so you can focus on your journey.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="hover:shadow-xl transition-all duration-300 border border-sky-200 dark:border-sky-900">
            <CardContent className="p-6">
              <Image
                src="/IMAGES/classroom.jpg"
                alt="JLPT Classes"
                width={400}
                height={240}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <div className="flex items-center gap-2 text-sky-800 font-semibold text-lg mb-2">
                <BookOpenCheck className="w-5 h-5" /> JLPT Classes
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We offer N5, N4, JLPT classes covering grammar, vocab, and
                listening skills needed to succeed in your language exams.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <p className="text-lg text-gray-800 dark:text-gray-200 mt-14">
          📞 Contact us today and start your journey to Japan with confidence
          and clarity.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
