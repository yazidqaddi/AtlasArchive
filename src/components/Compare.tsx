import { motion } from "motion/react";

export default function Compare() {
  const stats = [
    { trait: "Weight", atlas: "up to 600 lbs", african: "up to 420 lbs", winner: "atlas" },
    { trait: "Mane Size", atlas: "Extensive (chest & belly)", african: "Moderate", winner: "atlas" },
    { trait: "Habitat", atlas: "Mountain/Forest/Snow", african: "Savannah/Grassland", winner: "neutral" },
    { trait: "Social Structure", atlas: "Pairs or small family", african: "Large prides", winner: "neutral" },
  ];

  return (
    <section className="py-32 bg-charcoal border-t border-white/5" id="science">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sand-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4">Scientific Analysis</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white">Compare the Kings</h3>
        </div>

        <div className="bg-black/50 border border-white/5 rounded-3xl p-6 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-4 mb-8 text-xs font-sans uppercase tracking-widest text-white/40 pb-6 border-b border-white/5">
            <div>Trait</div>
            <div className="text-sand-gold">Atlas Lion</div>
            <div>African Lion</div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-3 gap-4 border-b border-white/5 pb-6 last:border-0 last:pb-0 items-center"
              >
                <div className="font-serif text-white text-lg md:text-xl">{stat.trait}</div>
                <div className={`font-sans text-sm md:text-base ${stat.winner === "atlas" ? "text-white font-medium" : "text-white/60"}`}>
                  {stat.atlas}
                </div>
                <div className="font-sans text-sm md:text-base text-white/60">
                  {stat.african}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
