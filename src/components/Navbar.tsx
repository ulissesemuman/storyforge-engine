import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Biblioteca", href: "#biblioteca" },
  { label: "Motor", href: "#motor" },
  { label: "Editor", href: "#editor" },
  { label: "Marketplace", href: "#marketplace" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="GaBoMa" className="w-24 h-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Começar Grátis
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
