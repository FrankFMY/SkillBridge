"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    quote:
      "Ментор помог мне перейти из маркетинга в продакт-менеджмент за 3 месяца. Лучшая инвестиция в карьеру!",
    name: "Елена Козлова",
    role: "Product Manager",
    photo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "Благодаря менторству наконец разобрался в системном дизайне. Получил оффер в FAANG.",
    name: "Артём Новиков",
    role: "Software Engineer",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "Регулярные сессии с ментором дали мне уверенность и структуру в работе. Рекомендую!",
    name: "Дарья Белова",
    role: "UX Designer",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "За полгода менторства вырос от джуниора до мидла. Ментор давал реальные задачи и ревью кода.",
    name: "Максим Орлов",
    role: "Frontend Developer",
    photo:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };

  const next = () => go((active + 1) % reviews.length);
  const prev = () => go((active - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setActive((cur) => (cur + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const review = reviews[active];

  return (
    <section id="reviews" className="py-20 lg:py-28 px-5 lg:px-8 overflow-x-clip">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Отзывы менти
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Истории тех, кто уже сделал шаг к карьере мечты
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-14 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-light hover:border-orange hover:text-orange transition-colors shadow-sm"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden px-4 min-h-[18rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center py-6"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange/20 mb-5">
                  <Image
                    src={review.photo}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill="currentColor"
                      className="text-amber"
                    />
                  ))}
                </div>

                <p className="text-lg text-navy leading-relaxed italic max-w-lg">
                  &ldquo;{review.quote}&rdquo;
                </p>

                <p className="mt-5 font-semibold text-navy">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-14 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-light hover:border-orange hover:text-orange transition-colors shadow-sm"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? "bg-orange" : "bg-gray-300"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
