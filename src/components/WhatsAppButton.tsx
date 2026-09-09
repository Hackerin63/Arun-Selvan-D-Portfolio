import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 sm:bottom-6 sm:right-6"
      style={{ height: 52, width: 52 }}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <WhatsAppIcon size={24} />
    </motion.a>
  );
}
