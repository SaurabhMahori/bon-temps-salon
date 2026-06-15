import { motion } from "framer-motion";
import { Scissors, Droplets, Paintbrush, Wind, Sparkles, Smile, Flower, Heart, Sparkle } from "lucide-react";

const services = [
  { name: "Haircut & Styling", icon: <Scissors className="w-6 h-6" /> },
  { name: "Hair Spa", icon: <Droplets className="w-6 h-6" /> },
  { name: "Hair Coloring", icon: <Paintbrush className="w-6 h-6" /> },
  { name: "Keratin Treatment", icon: <Wind className="w-6 h-6" /> },
  { name: "Smoothening", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Beard Grooming", icon: <Scissors className="w-6 h-6" /> },
  { name: "Facial Treatments", icon: <Smile className="w-6 h-6" /> },
  { name: "Makeup Services", icon: <Sparkle className="w-6 h-6" /> },
  { name: "Bridal Makeup", icon: <Heart className="w-6 h-6" /> },
  { name: "Manicure & Pedicure", icon: <Flower className="w-6 h-6" /> },
  { name: "Skin Care Treatments", icon: <Droplets className="w-6 h-6" /> },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Services</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <div className="w-2 h-2 rotate-45 bg-gold"></div>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-card border border-white/5 p-8 flex flex-col items-center justify-center text-center overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors">
                {service.name}
              </h3>
              
              {/* Bottom decorative border */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            className="text-gold uppercase tracking-widest text-sm hover:text-white transition-colors pb-1 border-b border-gold hover:border-white"
          >
            View Full Menu & Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
