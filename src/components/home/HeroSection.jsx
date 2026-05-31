import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPhone, FiArrowRight, FiCheckCircle, FiShield, FiTruck, FiZap } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';

const highlights = [
  { text: 'Free Battery Health Check', icon: FiShield },
  { text: 'Same Day Delivery', icon: FiTruck },
  { text: '12+ Years Experience', icon: FiCheckCircle },
  { text: 'All Top Brands', icon: FiZap },
];

const floatingCards = [
  { label: 'Batteries', icon: '🔋', color: 'from-accent/20 to-accent/5', border: 'border-accent/20' },
  { label: 'UPS', icon: '⚡', color: 'from-electric/20 to-electric/5', border: 'border-electric/20' },
  { label: 'Solar', icon: '☀️', color: 'from-solar/20 to-solar/5', border: 'border-solar/20' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero" aria-label="Hero section" style={{ background: 'var(--color-bg)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="glow-dot w-[500px] h-[500px] bg-accent/15 -top-40 -left-40 animate-float" />
      <div className="glow-dot w-[400px] h-[400px] bg-electric/10 bottom-0 right-0 animate-float" style={{ animationDelay: '2s' }} />
      <div className="glow-dot w-[300px] h-[300px] bg-solar/8 top-1/2 right-1/4 animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />

      <div className="container-max section-padding relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <div className="badge-amber mb-6 inline-flex">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Coimbatore's #1 Battery & Solar Experts
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="hero-title mb-6">
              Power Your World.{' '}
              <span className="gradient-text">Anytime.</span>{' '}
              <span className="text-electric-light">Anywhere.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="text-lg leading-relaxed mb-8 max-w-xl theme-text-secondary">
              Your one-stop destination for premium car & bike batteries, UPS systems, and solar solutions.
              Expert installation, doorstep delivery, and trusted after-sales service — all under one roof.
            </motion.p>

            {/* Highlights */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }} className="grid grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm theme-text-secondary">
                  <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-accent" size={13} />
                  </div>
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }} className="flex flex-wrap gap-4">
              <a href={getWhatsAppUrl('Hi! I need battery/UPS/solar service. Please help.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4" id="hero-whatsapp-btn">
                <FaWhatsapp size={22} /> Get Free Quote
              </a>
              <Link to="/products" className="btn-secondary text-base px-8 py-4" id="hero-products-btn">
                Explore Products <FiArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }} className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-electric/15 border border-electric/25 rounded-xl flex items-center justify-center">
                <FiPhone className="text-electric-light" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-medium theme-text-muted">Call Us Anytime</p>
                <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold text-lg hover:text-accent transition-colors theme-text">{SITE_CONFIG.phone}</a>
              </div>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden lg:flex items-center justify-center relative">
            <div className="absolute w-[380px] h-[380px] rounded-full border border-accent/15 animate-spin-slow" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-electric/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
            <div className="absolute w-[260px] h-[260px] rounded-full border border-solar/8 animate-spin-slow" style={{ animationDuration: '16s' }} />

            <div className="glass-card p-10 rounded-3xl gradient-border relative z-10 text-center max-w-[280px]">
              <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-accent/20">
                <span className="text-5xl">⚡</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2 theme-text">Power Solutions</h3>
              <p className="text-sm mb-6 theme-text-secondary">Batteries • UPS • Solar</p>
              <div className="grid grid-cols-3 gap-2.5">
                {floatingCards.map((item) => (
                  <div key={item.label} className={`bg-gradient-to-b ${item.color} border ${item.border} rounded-xl p-3`}>
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-[10px] font-medium theme-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }} className="absolute top-10 -left-4 badge-amber text-xs shadow-card">
              🏆 12+ Years
            </motion.div>
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} className="absolute bottom-10 -right-4 badge-green text-xs shadow-card">
              ☀️ Solar Experts
            </motion.div>
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} className="absolute top-1/2 -right-8 badge-blue text-xs shadow-card">
              ⚡ Free Install
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 theme-text-muted text-xs">
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
