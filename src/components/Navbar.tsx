import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-display uppercase text-2xl tracking-tighter text-white">
          Atlas <span className="text-sand-gold">Archive</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Timeline", href: "#timeline" },
            { name: "Science", href: "#science" },
            { name: "Conservation", href: "#conservation" },
            { name: "AI AI", href: "#chat" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.15em] text-white/70 hover:text-sand-gold transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <a 
          href="#gallery"
          className="text-xs font-medium uppercase tracking-widest text-black bg-sand px-6 py-2 rounded-full hover:bg-white transition-colors"
        >
          Gallery
        </a>
      </div>
    </motion.nav>
  );
}
