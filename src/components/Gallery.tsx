import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

import before1 from "../assets/images/before-woman-1.png";
import after1 from "../assets/images/after-woman-1.png";
import before2 from "../assets/images/before-man.png";
import after2 from "../assets/images/after-man.png";
import before3 from "../assets/images/before-woman-2.png";
import after3 from "../assets/images/after-woman-2.png";

const transformations = [
  {
    beforeSrc: before1,
    afterSrc: after1,
    label: "Blowout & Styling",
    category: "Hair Treatment",
  },
  {
    beforeSrc: before2,
    afterSrc: after2,
    label: "Haircut & Beard Grooming",
    category: "Men's Grooming",
  },
  {
    beforeSrc: before3,
    afterSrc: after3,
    label: "Balayage Coloring",
    category: "Hair Coloring",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4 font-sans">Real Results</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Transformations</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <div className="w-2 h-2 rotate-45 bg-gold"></div>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
          <p className="text-muted-foreground text-sm font-sans max-w-md mx-auto">
            Drag the slider on each image to reveal the transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="overflow-hidden border border-white/5 hover:border-gold/30 transition-colors duration-500"
              data-testid={`transformation-card-${idx}`}
            >
              <BeforeAfterSlider
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
                label={item.label}
                category={item.category}
              />
            </motion.div>
          ))}
        </div>

        {/* Hint row */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground/50 text-xs uppercase tracking-widest mt-8 font-sans"
        >
          ← Drag to compare before & after →
        </motion.p>
      </div>
    </section>
  );
}
