"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const mentors = [
  {
    name: "Алексей Ковалёв",
    role: "Senior Developer",
    company: "Яндекс",
    rating: 4.9,
    sessions: 180,
    price: 45,
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Мария Иванова",
    role: "UX Lead",
    company: "VK",
    rating: 5.0,
    sessions: 220,
    price: 55,
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Дмитрий Петров",
    role: "Product Director",
    company: "Тинькофф",
    rating: 4.8,
    sessions: 150,
    price: 60,
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Анна Смирнова",
    role: "Marketing Head",
    company: "Сбер",
    rating: 4.9,
    sessions: 190,
    price: 50,
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

export default function TopMentors() {
  return (
    <section id="mentors" className="py-20 lg:py-28 px-5 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Топ менторы
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Эксперты с подтверждённым опытом и сотнями успешных сессий
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={mentor.photo}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-navy">{mentor.name}</h3>
                <p className="text-sm text-gray-500">
                  {mentor.role}, {mentor.company}
                </p>

                <div className="flex items-center gap-1 mt-3">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="currentColor"
                      className="text-amber"
                    />
                  ))}
                  <span className="ml-1 text-sm font-medium text-navy">
                    {mentor.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs font-medium bg-orange-light text-orange px-2.5 py-1 rounded-full">
                    {mentor.sessions} сессий
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    ${mentor.price}/сессия
                  </span>
                </div>

                <a
                  href="#cta"
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-orange text-white text-sm font-medium hover:bg-orange-dark transition-colors"
                >
                  Записаться
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
