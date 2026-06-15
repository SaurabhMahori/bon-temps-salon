import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export function InstagramShowcase() {
  const posts = Array.from({ length: 6 });

  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Follow Our Work</h2>
          <a 
            href="https://www.instagram.com/bontemps.salon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            <span>@bontemps.salon</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {posts.map((_, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/bontemps.salon"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group aspect-square overflow-hidden block bg-background"
            >
              {/* CSS gradient placeholder for Instagram posts */}
              <div className={`w-full h-full bg-gradient-to-tr from-[#1a1814] to-[#2d281f] transition-transform duration-700 group-hover:scale-110`}></div>
              
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]"></div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <Instagram className="w-8 h-8 text-gold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="text-sm text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  View on Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
