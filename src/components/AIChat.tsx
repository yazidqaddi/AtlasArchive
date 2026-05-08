import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Loader2, Sparkles, Bot } from "lucide-react";
import { ai } from "../lib/gemini";
import ReactMarkdown from "react-markdown";

export default function AIChat() {
  const [messages, setMessages] = useState<{ role: "model" | "user"; text: string }[]>([
    {
      role: "model",
      text: "I am the digital spirit of the Atlas Lion. Ask me about my history, the Atlas Mountains, or why we vanished from the wild."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      // Create a specific instruction for the chat
      const systemInstruction = 
        "You are the spirit of the extinct Atlas Lion (Barbary Lion) speaking to a human. " +
        "You speak with a majestic, ancient, and slightly melancholy tone. " +
        "Answer questions about your history, Roman colosseums, the Atlas mountains, " +
        "your extinction, and modern conservation. Keep responses concise, cinematic, and educational. " +
        "If they ask about an unrelated topic, gently remind them of your nature.";

      const chat = ai.chats.create({
        model: "gemini-3.1-pro-preview",
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      // Send the history first if we want full context, but for simplicity we just send the new message 
      // in a fresh chat instance for this demo, or we can use the chat session properly.
      // Since it's a simple component, we will just send the single message with the system prompt context.
      const response = await chat.sendMessage({ message: userMessage });
      
      if (response.text) {
        setMessages(prev => [...prev, { role: "model", text: response.text! }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: "model", text: "My ancient memory fades... it seems the connection was lost. (Error connecting to AI)" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="chat">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-sand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-sand-gold border border-sand-gold/30 bg-sand-gold/10 px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest text-[10px] font-semibold">Gemini 3.1 Pro Powered</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Speak with the Legend</h2>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-xl mx-auto">
            Our AI has been trained on historical archives, biological data, and Moroccan heritage to bring the Atlas Lion back to life.
          </p>
        </div>

        <div className="bg-charcoal border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === "model" ? "bg-sand-gold text-black" : "bg-white/10 text-white"}`}>
                    {msg.role === "model" ? <Bot className="w-5 h-5" /> : <div className="text-xs font-sans">You</div>}
                  </div>
                  <div className={`p-4 rounded-2xl ${msg.role === "user" ? "bg-white/10 text-white rounded-tr-none" : "bg-black border border-white/5 text-sand rounded-tl-none font-serif md:text-lg"}`}>
                    <div className="markdown-body leading-relaxed">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-sand-gold text-black flex items-center justify-center">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="p-4 rounded-2xl bg-black border border-white/5 rounded-tl-none flex items-center">
                    <div className="flex gap-1">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-sand-gold rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-sand-gold rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-sand-gold rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-black border-t border-white/5">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about its size, its life in the mountains..."
                className="w-full bg-charcoal text-white placeholder-white/30 rounded-full py-4 pl-6 pr-14 border border-white/10 focus:outline-none focus:border-sand-gold/50 transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-sand-gold rounded-full flex items-center justify-center text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
              >
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
