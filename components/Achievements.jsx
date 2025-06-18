"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const counters = [
    { label: "Visa Applications Lodged", target: 700 },
    { label: "Students Enrolled", target: 1000 },
    { label: "Universities Represented", target: 800 },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCounts((prev) =>
          prev.map((val, i) => {
            if (val < counters[i].target)
              return val + Math.ceil(counters[i].target / 60);
            return counters[i].target;
          })
        );
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="bg-gray-100 py-20 px-6" id="achievement" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-[#010066]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
          {counters.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-4xl font-bold text-blue-900 mb-2">
                {counts[i]}+
              </h3>
              <p className="text-gray-700 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
