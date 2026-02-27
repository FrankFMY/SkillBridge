"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section
      id="cta"
      className="py-20 lg:py-28 px-5 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Первая сессия — бесплатно
        </h2>
        <p className="mt-5 text-white/80 text-lg">
          Зарегистрируйся и получи бесплатную 30-минутную сессию с любым
          ментором. Без привязки карты.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center px-8 py-4 rounded-xl bg-white text-orange font-medium text-lg hover:bg-gray-50 transition-colors shadow-lg"
        >
          Начать бесплатно
        </a>
      </motion.div>
    </section>
  );
}
