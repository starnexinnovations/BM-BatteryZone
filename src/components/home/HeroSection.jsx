import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPhone, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';

const highlights = [
  'Free Battery Health Check',
  'Same Day Delivery',
  '12+ Years Experience',
  'All Top Brands',
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg bg-grid"
      id="hero"
      aria-label="Hero section"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="glow-dot w-96 h-96 bg-accent/20 top-10 -left-20 animate-float" />
      <div className="glow-dot w-80 h-80 bg-electric/15 bottom-10 right-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="glow-dot w-64 h-64 bg-solar/10 top-1/2 right-1/3 animate-float" style={{ animationDelay: '4s' }} />

      {/* Animated Battery Icon Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-[40rem] select-none animate-pulse-slow">🔋</div>
      </div>

      <div className="container-max section-padding relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="badge-amber mb-6 inline-flex">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Salem's #1 Battery & Solar Experts
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="section-title mb-6"
            >
              Power Your World.{' '}
              <span className="gradient-text">Anytime.</span>{' '}
              <span className="text-electric-light">Anywhere.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Your one-stop destination for premium batteries, UPS systems, and solar solutions.
              Expert installation, doorstep delivery, and trusted after-sales service — all under one roof.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <FiCheckCircle className="text-accent flex-shrink-0" size={16} />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={getWhatsAppUrl('Hi! I need battery/UPS/solar service. Please help.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
                id="hero-whatsapp-btn"
              >
                <FaWhatsapp size={22} />
                Get Free Quote
              </a>
              <Link
                to="/products"
                className="btn-secondary text-base px-8 py-4"
                id="hero-products-btn"
              >
                Explore Products
                <FiArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-electric/20 border border-electric/30 rounded-full flex items-center justify-center animate-bounce-slow">
                <FiPhone className="text-electric-light" size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Call Us Anytime</p>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-white font-bold text-lg hover:text-accent transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Glow Ring */}
            <div className="absolute w-96 h-96 rounded-full border border-accent/20 animate-spin-slow" />
            <div className="absolute w-80 h-80 rounded-full border border-electric/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

            {/* Center Glass Card */}
            <div className="glass-card p-8 rounded-3xl glow-border relative z-10 text-center max-w-xs">
              <div className="text-8xl mb-4">⚡</div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Power Solutions</h3>
              <p className="text-slate-400 text-sm mb-6">Batteries • UPS • Solar</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: 'Batteries', icon: '🔋' },
                  { label: 'UPS', icon: '⚡' },
                  { label: 'Solar', icon: '☀️' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-3">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-xs text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-10 -left-4 badge-amber text-xs"
            >
              🏆 12+ Years
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute bottom-10 -right-4 badge-green text-xs"
            >
              ☀️ Solar Experts
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-8 badge-blue text-xs"
            >
              ⚡ Free Install
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
      >
        <span>Scroll Down</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
