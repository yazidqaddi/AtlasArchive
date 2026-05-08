import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facts from './components/Facts';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Compare from './components/Compare';
import Conservation from './components/Conservation';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-sand font-sans selection:bg-sand-gold selection:text-black">
      <Navbar />
      <Hero />
      <Facts />
      <Gallery />
      <Timeline />
      <Compare />
      <Conservation />
      <AIChat />
      <Footer />
    </div>
  );
}
