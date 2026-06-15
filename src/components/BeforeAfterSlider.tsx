import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  label: string;
  category: string;
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, label, category }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSlider(e.clientX);
  }, [updateSlider]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updateSlider(e.touches[0].clientX);
  }, [updateSlider]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      updateSlider(e.touches[0].clientX);
    };
    const handleTouchEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, updateSlider]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/4] overflow-hidden cursor-col-resize select-none group"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      data-testid={`slider-${label.toLowerCase().replace(/\s/g, "-")}`}
    >
      {/* AFTER image (base layer, full width) */}
      <img
        src={afterSrc}
        alt={`After - ${label}`}
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />

      {/* BEFORE image (clipped by sliderPos) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeSrc}
          alt={`Before - ${label}`}
          className="absolute inset-0 h-full object-cover object-top"
          style={{ width: `${100 / (sliderPos / 100)}%` }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gold z-20 pointer-events-none"
        style={{ left: `calc(${sliderPos}% - 1px)` }}
      >
        {/* Drag handle */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-xl transition-transform duration-150 ${isDragging ? "scale-110" : "scale-100"}`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 4L2 9L6 14" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 4L16 9L12 14" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="bg-black/70 text-ivory text-[10px] uppercase tracking-widest px-2 py-1 font-sans">
          Before
        </span>
      </div>
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span className="bg-gold/90 text-[#111] text-[10px] uppercase tracking-widest px-2 py-1 font-sans">
          After
        </span>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
        <p className="font-serif text-ivory text-sm">{label}</p>
        <p className="text-gold/80 text-[10px] uppercase tracking-widest mt-0.5">{category}</p>
      </div>

      {/* Hint on first render */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none opacity-0 group-hover:opacity-0 transition-opacity duration-500">
        <span className="bg-black/60 text-ivory text-xs px-3 py-1 rounded-full tracking-widest uppercase">Drag to reveal</span>
      </div>
    </div>
  );
}
