import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
          role="complementary"
          aria-label="Quick contact buttons"
        >
          {/* WhatsApp Button */}
          <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-btn"
            className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-green-500/40 transition-all duration-300 group"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={24} className="flex-shrink-0" />
            <span className="text-sm font-semibold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out">
              WhatsApp Us
            </span>
          </motion.a>

          {/* Call Button */}
          <motion.a
            href={`tel:${SITE_CONFIG.phone}`}
            id="floating-call-btn"
            className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-blue-500/40 transition-all duration-300 group"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            title="Call Now"
            aria-label="Call Now"
          >
            <FiPhone size={20} className="flex-shrink-0 animate-bounce-slow" />
            <span className="text-sm font-semibold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out">
              Call Now
            </span>
          </motion.a>

          {/* Pulse indicator */}
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
