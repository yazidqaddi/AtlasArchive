// src/components/Hero.tsx
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "../lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center pt-20"
      id="hero"
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-20" />
        <img 
          src="https://images.unsplash.com/photo-1549429402-dd40902c3321?auto=format&fit=crop&w=2600&q=80" 
          alt="Male Lion" 
          className="w-full h-full object-cover object-top opacity-70"
          crossOrigin="anonymous"
        />
      </motion.div>

      <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-sand-gold tracking-[0.2em] uppercase text-xs sm:text-sm font-semibold mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-sand-gold after:content-[''] after:w-8 after:h-[1px] after:bg-sand-gold">
            A Digital Museum
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-[8rem] font-display uppercase tracking-tighter text-white mb-6 drop-shadow-2xl">
            The Atlas Lion
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-sand font-serif italic max-w-2xl mb-12 drop-shadow-md">
            "The legendary king of North Africa — feared, admired, and nearly forgotten."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <a 
              href="#timeline"
              className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-sans font-medium uppercase tracking-widest text-xs hover:bg-sand-gold transition-colors duration-300"
            >
              Explore History
            </a>
            <a 
              href="#chat"
              className="group flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-sans font-medium uppercase tracking-widest text-xs hover:bg-white/10 transition-colors duration-300"
            >
              Ask The AI
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/50 uppercase tracking-widest font-sans">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-sand-gold absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
