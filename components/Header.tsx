"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Категории", href: "#categories" },
  { label: "Менторы", href: "#mentors" },
  { label: "Отзывы", href: "#reviews" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-5 lg:px-8">
        <a href="#" className="text-xl font-bold text-navy">
          Skill<span className="text-orange">Bridge</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-light hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#cta"
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-navy-light hover:border-orange hover:text-orange transition-colors"
          >
            Стать ментором
          </a>
          <a
            href="#cta"
            className="px-4 py-2 rounded-lg bg-orange text-white text-sm font-medium hover:bg-orange-dark transition-colors"
          >
            Найти ментора
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-navy-light"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <nav className="flex flex-col px-5 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-navy-light hover:text-orange transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-navy-light hover:text-orange transition-colors mt-1"
              >
                Стать ментором
              </a>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-orange text-white text-sm font-medium hover:bg-orange-dark transition-colors"
              >
                Найти ментора
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
