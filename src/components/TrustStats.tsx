import { motion } from "framer-motion";
import { Star, Users, Gem, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Simple count up hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = false) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  return { count, ref };
}

export function TrustStats() {
  const { count: ratingCount, ref: ratingRef } = useCountUp(46, 2000, true);
  const { count: reviewCount } = useCountUp(347, 2500, true);
  
  const stats = [
    {
      icon: <Star className="text-gold w-6 h-6 mb-3 mx-auto" />,
      title: "4.6 Rating",
      subtitle: `(${reviewCount} Reviews)`,
      value: (ratingCount / 10).toFixed(1)
    },
    {
      icon: <Users className="text-gold w-6 h-6 mb-3 mx-auto" />,
      title: "Expert Stylists",
      subtitle: "Master Trained"
    },
    {
      icon: <Gem className="text-gold w-6 h-6 mb-3 mx-auto" />,
      title: "Premium Products",
      subtitle: "Global Brands"
    },
    {
      icon: <Sparkles className="text-gold w-6 h-6 mb-3 mx-auto" />,
      title: "Luxury Experience",
      subtitle: "Unmatched Ambience"
    }
  ];

  return (
    <section className="bg-card py-16 border-y border-white/5 relative z-20">
      <div className="container mx-auto px-4" ref={ratingRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="text-center px-4"
            >
              {stat.icon}
              <h3 className="font-serif text-xl text-foreground mb-1">
                {stat.value ? `${stat.value} Rating` : stat.title}
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
