import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of premium salon services including precision haircuts, advanced coloring, keratin treatments, hair spa, bridal makeup, facial treatments, and manicure/pedicure services."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website's booking form, call us directly at +91 9871843877, or send us a message on WhatsApp."
  },
  {
    question: "Do you offer bridal packages?",
    answer: "Yes, we specialize in bespoke bridal makeup and grooming packages. We recommend booking a consultation at least 2 months prior to your wedding date."
  },
  {
    question: "What hair care products do you use?",
    answer: "We exclusively use premium, internationally recognized brands such as L'Oréal Professionnel, Kérastase, Olaplex, and Moroccanoil to ensure the best results."
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday to Saturday from 10:00 AM to 8:00 PM, and Sundays from 11:00 AM to 7:00 PM."
  },
  {
    question: "Where are you located?",
    answer: "We are located at Shop No 3, Ground Floor, Skymark One, Sector 98, Noida, Uttar Pradesh 201304."
  },
  {
    question: "Do you take walk-ins?",
    answer: "While we try our best to accommodate walk-ins, we highly recommend booking an appointment in advance to ensure you receive our undivided attention without waiting."
  },
  {
    question: "How long does a typical appointment take?",
    answer: "Duration varies by service. A haircut usually takes 45-60 minutes, while coloring or treatments can take 2-4 hours. We'll provide a time estimate during booking."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our services.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full border-t border-white/10">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-gold transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
