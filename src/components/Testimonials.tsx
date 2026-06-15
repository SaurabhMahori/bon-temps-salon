import { motion } from "framer-motion";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";

const testimonials = [
  {
    quote: "Best salon in Noida! The team is incredibly skilled and the ambiance is absolutely stunning.",
    author: "Priya Sharma"
  },
  {
    quote: "Got my bridal makeup done here and I looked absolutely ethereal. Highly recommend!",
    author: "Neha Gupta"
  },
  {
    quote: "My go-to salon for keratin treatment. Results last for months and the service is top-notch.",
    author: "Rahul Verma"
  },
  {
    quote: "The hair spa here is a true luxury experience. Left feeling completely rejuvenated.",
    author: "Anjali Singh"
  },
  {
    quote: "Exceptional service, premium products, and a team that truly cares about your look.",
    author: "Vikram Malhotra"
  },
  {
    quote: "Finally found a salon that takes beard grooming seriously. The craft here is unmatched.",
    author: "Arjun Kapoor"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Client Love</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <div className="w-2 h-2 rotate-45 bg-gold"></div>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                  <div className="bg-card border border-white/5 p-8 md:p-12 text-center h-full flex flex-col justify-center relative">
                    {/* Quotation marks decoration */}
                    <div className="absolute top-4 left-6 text-6xl font-serif text-gold/20 select-none pointer-events-none">"</div>
                    
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                    
                    <p className="font-subheading text-xl md:text-2xl text-foreground/90 italic mb-8 relative z-10 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="mt-auto">
                      <div className="w-10 h-[1px] bg-gold mx-auto mb-4"></div>
                      <p className="text-foreground tracking-widest uppercase text-sm font-medium">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === selectedIndex ? "bg-gold w-6" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
