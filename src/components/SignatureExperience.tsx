import { motion } from "framer-motion";

export function SignatureExperience() {
  const pillars = [
    {
      title: "Expert Stylists",
      desc: "Trained artisans who understand your unique beauty and personal style."
    },
    {
      title: "Personalized Consultation",
      desc: "Every visit begins with a conversation about you and your desired look."
    },
    {
      title: "Premium Products",
      desc: "Only the finest international brands grace our shelves for optimal results."
    },
    {
      title: "Relaxing Ambience",
      desc: "Step away from the world into pure tranquility in our beautifully designed space."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/images/signature-experience.png" 
                alt="Luxury Salon Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/50"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/50"></div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">The Signature Experience</h2>
              <p className="font-subheading text-xl text-muted-foreground italic mb-12">
                A transformative journey in a Parisian-inspired atelier.
              </p>
            </motion.div>

            <div className="space-y-8">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="pl-6 border-l border-gold/30 relative"
                >
                  {/* Indicator dot */}
                  <div className="absolute top-2 -left-[3px] w-[5px] h-[5px] bg-gold rounded-full"></div>
                  
                  <h3 className="font-serif text-2xl text-foreground mb-2">{pillar.title}</h3>
                  <p className="font-subheading text-lg text-muted-foreground">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
