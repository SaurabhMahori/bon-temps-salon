import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    "Premium Quality Service",
    "Experienced & Certified Team",
    "Modern Techniques & Tools",
    "Luxury Ambience & Environment",
    "347+ Satisfied Customers"
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.02] pointer-events-none select-none">
        <span className="font-serif text-[20rem] whitespace-nowrap">Bon Temps</span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Why Choose Bon Temps</h2>
            <p className="font-subheading text-xl text-muted-foreground italic">
              We don't just provide services; we craft experiences.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-background/50 backdrop-blur border border-white/5 px-6 py-4 rounded-none"
              >
                <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-foreground tracking-wide">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
