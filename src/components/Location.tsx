import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export function Location() {
  return (
    <section className="py-0 flex flex-col lg:flex-row bg-background">
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px] bg-card border-r border-white/5 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.686520336054!2d77.34842101508075!3d28.549141082450893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5cf86dfa7cb%3A0xcda6b73a7d2b45bd!2sSkymarkOne!5e0!3m2!1sen!2sin!4v1680123456789!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
          title="Bon Temps Salon Location"
        ></iframe>
      </div>
      
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex items-center bg-card/50">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-md"
        >
          <h2 className="font-serif text-4xl text-foreground mb-12">Find Us</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <MapPin className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground tracking-widest uppercase text-sm mb-2 font-semibold">Address</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Shop No 3, Ground Floor,<br />
                  Skymark One, Sector 98,<br />
                  Noida, Uttar Pradesh 201304
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Clock className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground tracking-widest uppercase text-sm mb-2 font-semibold">Hours</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Mon – Sat: 10:00 AM – 8:00 PM<br />
                  Sunday: 11:00 AM – 7:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Phone className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground tracking-widest uppercase text-sm mb-2 font-semibold">Contact</h4>
                <a href="tel:+919871843877" className="text-muted-foreground hover:text-gold block mb-1 transition-colors">+91 9871843877</a>
                <a href="https://wa.me/919871843877" className="text-muted-foreground hover:text-gold block transition-colors">WhatsApp Us</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Instagram className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground tracking-widest uppercase text-sm mb-2 font-semibold">Social</h4>
                <a href="https://www.instagram.com/bontemps.salon" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                  @bontemps.salon
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
