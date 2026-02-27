"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Megaphone,
  Layout,
  DollarSign,
  Briefcase,
  Building2,
  BarChart3,
} from "lucide-react";

const categories = [
  { icon: Code, name: "IT и разработка" },
  { icon: Palette, name: "Дизайн" },
  { icon: Megaphone, name: "Маркетинг" },
  { icon: Layout, name: "Продукт" },
  { icon: DollarSign, name: "Финансы" },
  { icon: Briefcase, name: "Карьера" },
  { icon: Building2, name: "Бизнес" },
  { icon: BarChart3, name: "Аналитика" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Направления менторства
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Выбери область, в которой хочешь расти
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-orange/30 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-muted flex items-center justify-center">
                <cat.icon size={24} className="text-orange" />
              </div>
              <span className="text-sm font-semibold text-navy text-center">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
