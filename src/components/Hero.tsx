import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight tracking-tight">
            Where Style Meets <br />
            <span className="italic text-gold">Perfection</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="font-subheading text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 italic">
            Premium Hair, Beauty & Grooming Experiences For Every Occasion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gold text-background hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm w-full sm:w-auto"
          >
            Book Appointment
          </button>
          <a 
            href="tel:+919871843877"
            className="px-8 py-4 border border-foreground/30 text-foreground hover:border-gold hover:text-gold transition-colors duration-300 uppercase tracking-widest text-sm w-full sm:w-auto text-center"
          >
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
