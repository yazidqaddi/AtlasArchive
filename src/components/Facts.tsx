import { motion } from "motion/react";
import { Info, MapPin, Ruler, Bone, AlertTriangle, GitBranch } from "lucide-react";

export default function Facts() {
  const facts = [
    {
      icon: <Info className="w-6 h-6" />,
      title: "Scientific Name",
      value: "Panthera leo leo"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Habitat",
      value: "Atlas Mountains & North Africa"
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Estimated Size",
      value: "10-11 ft length, up to 600 lbs"
    },
    {
      icon: <Bone className="w-6 h-6" />,
      title: "Primary Diet",
      value: "Barbary macaque, wild boar, deer"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Status",
      value: "Extinct in the Wild (Since 1920s)"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Closest Relatives",
      value: "Asiatic Lion (India)"
    }
  ];

  return (
    <section className="py-32 bg-black border-t border-white/5 relative z-10" id="facts">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sand-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4">Quick Fact File</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white">Anatomy of a Legend</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-charcoal p-8 rounded-2xl border border-white/5 hover:border-sand-gold/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-sand-gold mb-6 group-hover:scale-110 transition-transform">
                {fact.icon}
              </div>
              <p className="text-xs font-sans uppercase tracking-widest text-white/50 mb-2">
                {fact.title}
              </p>
              <p className="text-xl font-serif text-sand">
                {fact.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
