import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-32 bg-card relative overflow-hidden border-t border-gold/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-tight">
            Ready for Your <br />
            <span className="italic text-gold">Transformation?</span>
          </h2>
          
          <button 
            onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-5 bg-gold text-background hover:bg-white hover:text-background transition-all duration-300 uppercase tracking-[0.2em] text-sm group relative overflow-hidden"
          >
            <span className="relative z-10">Book Your Appointment Today</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
