import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "Antiquity",
    title: "Roman Colosseums",
    desc: "Exported in thousands by the Roman Empire to fight gladiators. Their dark, massive manes made them prized beasts of the arena.",
    img: "https://opentheword.org/wp-content/uploads/2025/04/christian-martyrs-praying-in-the-roman-collosseum-by-jean-leon-gerome-1863-wikipedia-public-domain.jpg.jpg?w=1000"
  },
  {
    year: "1800s",
    title: "Royal Menageries",
    desc: "Gifted to Moroccan royalty and kept in the Royal Palace in Rabat. These bloodlines proved critical for their legacy.",
    img: "https://mail.google.com/mail/u/0?ui=2&ik=6e45b96ba2&attid=0.1&permmsgid=msg-f:1864588586871653792&th=19e05970d4bb85a0&view=att&zw&disp=safe"
  },
  {
    year: "1920s",
    title: "Last Sights in the Wild",
    desc: "The last recorded wild Atlas lion was allegedly shot in 1942 in the Tizi n'Tichka pass, though some claim sightings until the 1960s.",
    img: "https://tse3.mm.bing.net/th/id/OIP.3ewKXYkbr1HOVP6kkasYAwHaF6?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    year: "1970s",
    title: "The Royal Discovery",
    desc: "Researchers realized the lions in the Rabat Zoo were direct descendants of the original Atlas lions gifted to the sultans.",
    img: "https://mail.google.com/mail/u/0?ui=2&ik=6e45b96ba2&attid=0.1&permmsgid=msg-f:1864589028466151214&th=19e059d7a5d0cf2e&view=att&zw&disp=safe"
  },
  {
    year: "Today",
    title: "Conservation",
    desc: "A small captive population remains. Modern DNA research proves their genetic uniqueness, driving hopes for future reintroduction.",
    img: "https://cdn.shopify.com/s/files/1/0265/7330/7978/files/lion-atlas.png?v=1574843255"
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-charcoal relative" id="timeline" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sand-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4">Chronology</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white">The Fall of a King</h3>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-sand-gold shadow-[0_0_15px_rgba(201,162,39,0.5)] origin-top" 
          />

          <div className="space-y-32">
            {timelineEvents.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-12 relative z-10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-[16px] md:left-1/2 w-2.5 h-2.5 bg-black border-2 border-sand-gold rounded-full -translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_10px_rgba(201,162,39,0.8)]" />
                  
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className={`flex flex-col ${isEven ? 'md:text-left' : 'md:text-right'}`}
                    >
                      <span className="text-sand-gold font-display text-2xl md:text-4xl mb-2 tracking-wide">{event.year}</span>
                      <h4 className="text-2xl font-serif text-white mb-4">{event.title}</h4>
                      <p className="text-white/60 font-sans leading-relaxed text-sm md:text-base">
                        {event.desc}
                      </p>
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className="relative overflow-hidden rounded-xl border border-white/5 aspect-[4/3] group"
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={event.img} 
                        alt={event.title}
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
