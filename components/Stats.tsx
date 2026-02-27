"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2 000+", label: "менторов" },
  { value: "15 000+", label: "проведённых сессий" },
  { value: "4.9", label: "средний рейтинг" },
];

export default function Stats() {
  return (
    <section className="bg-navy py-16 lg:py-20 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <p className="text-4xl lg:text-5xl font-bold text-orange">
              {stat.value}
            </p>
            <p className="mt-2 text-white/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
