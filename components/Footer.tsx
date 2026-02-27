const footerLinks = {
  platform: {
    title: "Платформа",
    links: [
      { label: "Как это работает", href: "#how-it-works" },
      { label: "Категории", href: "#categories" },
      { label: "Менторы", href: "#mentors" },
      { label: "Отзывы", href: "#reviews" },
    ],
  },
  mentors: {
    title: "Менторам",
    links: [
      { label: "Стать ментором", href: "#cta" },
      { label: "Правила", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  contacts: {
    title: "Контакты",
    links: [
      { label: "hello@skillbridge.io", href: "mailto:hello@skillbridge.io" },
      { label: "Москва, Россия", href: "#" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-14 lg:py-20 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#" className="text-xl font-bold">
            Skill<span className="text-orange">Bridge</span>
          </a>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
            Платформа для менторства. Найди эксперта, получи знания, ускорь
            карьеру.
          </p>
        </div>

        {Object.values(footerLinks).map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold text-white mb-4">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-8 border-t border-white/10">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
