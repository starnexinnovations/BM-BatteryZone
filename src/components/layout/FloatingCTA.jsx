import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
          role="complementary"
          aria-label="Quick contact buttons"
        >
          <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-btn"
            className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={26} />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-dark-card border border-dark-border text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-elevated">
              WhatsApp Us
            </span>
          </motion.a>

          <motion.a
            href={`tel:${SITE_CONFIG.phone}`}
            id="floating-call-btn"
            className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-electric to-electric-dark text-white rounded-2xl shadow-lg shadow-electric/25 hover:shadow-electric/40 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Call Now"
            aria-label="Call Now"
          >
            <FiPhone size={22} />
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-dark-card border border-dark-border text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-elevated">
              Call Now
            </span>
          </motion.a>

          <div className="absolute -top-1 -right-1 w-3.5 h-3.5">
            <span className="absolute inset-0 bg-solar rounded-full animate-ping opacity-60" />
            <span className="absolute inset-0.5 bg-solar rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
