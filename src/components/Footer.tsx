import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-[8rem] font-display uppercase tracking-tighter text-white/5 mb-8">
            The Last Roar
          </h2>
          <p className="font-serif italic text-xl md:text-3xl text-sand max-w-2xl mx-auto mb-16">
            "Though the Atlas lion disappeared from the wild, its legend still echoes through the mountains of Morocco."
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6 mb-32">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-sand-gold text-black px-8 py-4 rounded-full font-sans font-medium uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300">
                Join Newsletter
              </button>
              <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-sans font-medium uppercase tracking-widest text-xs hover:bg-white/10 transition-colors duration-300">
                Support Conservation
              </button>
            </div>
            
            {/* Sponsorship section removed */}
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/40 uppercase tracking-widest">
          <p>© 2026 Atlas Lion Archive.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
