import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { Services } from "@/components/Services";
import { SignatureExperience } from "@/components/SignatureExperience";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { Booking } from "@/components/Booking";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Bon Temps Salon | Luxury Unisex Salon in Noida";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <TrustStats />
      <Services />
      <SignatureExperience />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <InstagramShowcase />
      <Booking />
      <FAQ />
      <Location />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
