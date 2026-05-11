import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';

export default function HomeCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      id="home-cta"
      aria-label="Call to action"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-dark-card to-electric/20" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="glow-dot w-96 h-96 bg-accent/30 -top-20 -left-20" />
      <div className="glow-dot w-80 h-80 bg-electric/20 -bottom-20 -right-20" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="badge-amber mb-6 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Limited Time Offer
          </div>

          <h2 className="section-title mb-6">
            Get a <span className="gradient-text">FREE</span> Battery Health Check{' '}
            <span className="text-electric-light">Today!</span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            Don't wait for a breakdown. Visit us or call now for a free battery diagnostic.
            Our experts will check your battery health and give honest recommendations — no pressure, no charge.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href={getWhatsAppUrl('Hi! I want to book a FREE battery health check.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4"
              id="cta-whatsapp-btn"
            >
              <FaWhatsapp size={22} />
              Book via WhatsApp
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="btn-call text-base px-8 py-4"
              id="cta-call-btn"
            >
              <FiPhone size={18} />
              Call Now
            </a>
            <Link
              to="/contact"
              className="btn-secondary text-base px-8 py-4"
              id="cta-contact-btn"
            >
              Contact Us
              <FiArrowRight size={18} />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            {['✅ No Appointment Needed', '✅ 100% Free', '✅ Expert Technicians', '✅ Same Day Service'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
