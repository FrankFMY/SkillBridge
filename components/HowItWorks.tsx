"use client";

import { motion } from "framer-motion";
import { UserSearch, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: UserSearch,
    title: "Выбери ментора",
    description:
      "Фильтруй по навыкам, опыту и отзывам. Найди идеального эксперта для своих целей.",
  },
  {
    num: 2,
    icon: CalendarCheck,
    title: "Забронируй сессию",
    description:
      "Выбери удобное время и формат. Видеозвонок, чат или ревью кода — решать тебе.",
  },
  {
    num: 3,
    icon: TrendingUp,
    title: "Расти",
    description:
      "Получай знания, обратную связь и поддержку. Отслеживай свой прогресс.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 px-5 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Как это работает
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Три простых шага до первой сессии с ментором
          </p>
        </motion.div>

        <div className="relative grid lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="hidden lg:block absolute top-16 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-gray-300" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-orange text-white text-lg font-bold flex items-center justify-center mb-5 relative z-10">
                {step.num}
              </div>
              <div className="mx-auto w-14 h-14 rounded-xl bg-orange-muted flex items-center justify-center mb-4">
                <step.icon size={26} className="text-orange" />
              </div>
              <h3 className="text-xl font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-gray-500 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
