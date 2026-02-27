"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const avatars = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", size: 80, top: "5%", left: "10%", delay: 0 },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face", size: 96, top: "10%", left: "65%", delay: 0.8 },
  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", size: 64, top: "45%", left: "5%", delay: 1.6 },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", size: 72, top: "40%", left: "75%", delay: 2.4 },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", size: 88, top: "70%", left: "25%", delay: 3.2 },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face", size: 68, top: "75%", left: "60%", delay: 4.0 },
];

export default function Hero() {
  return (
    <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight">
            Найди ментора.{" "}
            <span className="text-orange">Ускорь карьеру.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
            Персональные сессии с экспертами из топ-компаний. Развивай навыки,
            получай обратную связь, строй карьеру мечты.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#mentors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange text-white font-medium hover:bg-orange-dark transition-colors"
            >
              Найти ментора
              <ArrowRight size={18} />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-navy-light font-medium hover:border-orange hover:text-orange transition-colors"
            >
              Стать ментором
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-orange", "bg-amber", "bg-navy", "bg-orange-dark"].map(
                (bg, i) => (
                  <span
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-white`}
                  />
                ),
              )}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-navy">2 000+</span> менторов
              &middot; <span className="font-semibold text-navy">4.9</span>{" "}
              средний рейтинг
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden sm:block relative h-80 lg:h-96 overflow-hidden"
        >
          {avatars.map((av, i) => (
            <div
              key={i}
              className="absolute rounded-full border-4 border-white shadow-xl overflow-hidden"
              style={{
                width: av.size,
                height: av.size,
                top: av.top,
                left: av.left,
                animation: `float 6s ease-in-out ${av.delay}s infinite`,
              }}
            >
              <Image
                src={av.src}
                alt="Mentor"
                width={av.size}
                height={av.size}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
