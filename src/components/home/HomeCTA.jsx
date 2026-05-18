import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';

const benefits = ['No Appointment Needed', '100% Free', 'Expert Technicians', 'Same Day Service'];

export default function HomeCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="home-cta" aria-label="Call to action" ref={ref}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(232,168,56,0.08), var(--color-card), rgba(45,127,234,0.08))' }} />
      <div className="glow-dot w-[500px] h-[500px] bg-accent/15 -top-40 -left-40" />
      <div className="glow-dot w-[400px] h-[400px] bg-electric/10 -bottom-40 -right-40" />

      <div className="container-max relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto">
          <div className="badge-amber mb-6 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Limited Time Offer
          </div>
          <h2 className="section-title mb-6">Get a <span className="gradient-text">FREE</span> Battery Health Check <span className="text-electric-light">Today!</span></h2>
          <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto theme-text-secondary">
            Don't wait for a breakdown. Visit us or call now for a free battery diagnostic. No pressure, no charge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a href={getWhatsAppUrl('Hi! I want to book a FREE battery health check.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4" id="cta-whatsapp-btn">
              <FaWhatsapp size={22} /> Book via WhatsApp
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-call text-base px-8 py-4" id="cta-call-btn">
              <FiPhone size={18} /> Call Now
            </a>
            <Link to="/contact" className="btn-secondary text-base px-8 py-4" id="cta-contact-btn">
              Contact Us <FiArrowRight size={18} />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {benefits.map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm theme-text-secondary">
                <FiCheckCircle className="text-solar flex-shrink-0" size={15} /> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
