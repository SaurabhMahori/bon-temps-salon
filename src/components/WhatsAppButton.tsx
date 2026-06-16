import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919871843877?text=Hi%20Bon%20Temps%20Salon,%20I%20am%20interested%20in%20your%20services.%20Please%20share%20details%20regarding%20appointments,%20pricing,%20and%20availability."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="w-8 h-8" />
    </a>
  );
}
