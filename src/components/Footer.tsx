import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-gold relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex flex-col items-center mb-8">
            <span className="font-serif text-3xl tracking-wide text-foreground">Bon Temps</span>
            <span className="text-[12px] tracking-[0.4em] text-gold mt-2">SALON</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm tracking-widest uppercase text-muted-foreground">
            <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold transition-colors">Services</button>
            <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold transition-colors">Experience</button>
            <button onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold transition-colors">Gallery</button>
            <button onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold transition-colors">Book Now</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left py-10 border-y border-white/5 mb-10">
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Location</h4>
            <p className="text-muted-foreground text-sm leading-loose">
              Shop No 3, Ground Floor,<br />
              Skymark One, Sector 98,<br />
              Noida, UP 201304
            </p>
          </div>
          
          <div className="md:text-center">
            <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm leading-loose">
              <a href="tel:+919871843877" className="hover:text-white transition-colors block">+91 9871843877</a>
              <a href="https://wa.me/919871843877" className="hover:text-white transition-colors block">WhatsApp Us</a>
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Hours</h4>
            <p className="text-muted-foreground text-sm leading-loose">
              Mon – Sat: 10AM – 8PM<br />
              Sun: 11AM – 7PM
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 text-xs">
            © {new Date().getFullYear()} Bon Temps Salon. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/bontemps.salon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
