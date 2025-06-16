"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import services from "@/data/service";
import Image from "next/image";
import { Smile } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#f9f9f9] text-gray-900"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-sky-800 mb-16 tracking-tight">
        Our Services
      </h1>
      <h2 className="text-2xl md:text-5xl font-extrabold text-center text-sky-800 mb-6 tracking-tight">
        What We Offer :
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-lg border border-sky-100 hover:shadow-2xl hover:border-sky-300 transition duration-300 bg-white">
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="w-20 h-20 mb-6 rounded-full bg-sky-800/10 flex items-center justify-center">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-sky-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base font-medium leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
