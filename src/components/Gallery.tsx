import { motion } from "motion/react";

const images = [
  {
    url: "https://www.sciencing.com/img/gallery/the-tragic-reason-why-the-barbary-lion-went-extinct/barbary-lions-were-once-abundant-in-north-africa-1748619594.jpg",
    title: "The Gaze",
    desc: "Renowned for their piercing golden eyes and immense dark manes. (Leipzig, ~1890s)"
  },
  {
    url: "https://th.bing.com/th/id/OIP.H2WfmZdOYMa0zbYYm-vEXAHaHa?rs=1&pid=ImgDetMain",
    title: "Mountain Predator",
    desc: "Unlike savannah lions, they navigated snow in the Atlas mountains. (Bronx 1899)"
  },
  {
    url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    title: "Royal Bloodlines",
    desc: "Scientific illustrations recorded their unique morphology before their extinction in the wild."
  },
  {
    url: "https://th.bing.com/th/id/OIP.0L1bA0mqPnt4msanv28Q1wHaEo?rs=1&pid=ImgDetMain",
    title: "Silent Symphony",
    desc: "One of the last photographs of a Barbary lion in North Africa (Algiers, 1893)."
  }
];

export default function Gallery() {
  return (
    <section className="py-32 bg-black" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sand-gold font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4">Archives</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">Visual Records</h3>
          </div>
          <p className="text-white/50 max-w-sm text-sm font-sans">
            A curated collection of historical references, modern descendant photography, and majestic reconstructions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-xl bg-charcoal ${i === 0 || i === 3 ? 'md:aspect-video' : 'md:aspect-[4/5]'}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sand-gold text-[10px] uppercase tracking-widest mb-2 block">Record 0{i+1}</span>
                <h4 className="text-2xl font-serif text-white mb-2">{img.title}</h4>
                <p className="text-white/60 text-sm font-sans line-clamp-2">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
