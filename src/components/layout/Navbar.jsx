import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';
import ThemeToggle from '../shared/ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export function BrandLogo() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center font-display font-black text-base shadow-glow-amber group-hover:scale-110 transition-transform duration-300" style={{ color: '#0A1628' }}>
          BM
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-solar rounded-full ring-2 animate-pulse" style={{ '--tw-ring-color': 'var(--color-bg)' }} />
      </div>
      <div>
        <p className="font-display font-bold text-base leading-tight tracking-tight theme-text">
          BM Battery Zone
        </p>
        <p className="text-[11px] font-medium tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>Power • UPS • Solar</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
          : 'bg-transparent'
        }`}
      style={scrolled ? {
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border-subtle)',
        opacity: 0.97,
      } : {}}
    >
      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" aria-label="BM Battery Zone Home">
            <BrandLogo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'theme-text-secondary hover:text-accent'
                  }`}
                style={location.pathname !== link.path ? { color: 'var(--color-text-secondary)' } : {}}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* <ThemeToggle /> */}
            <a href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-electric-light hover:text-electric transition-colors px-4 py-2.5 rounded-xl hover:bg-electric/10"
              id="navbar-call-btn">
              <FiPhone size={16} /> Call Now
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-5 py-2.5" id="navbar-whatsapp-btn">
              <FaWhatsapp size={18} /> WhatsApp
            </a>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2.5 hover:text-accent rounded-xl transition-all theme-text"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden backdrop-blur-2xl"
            style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border-subtle)' }}
          >
            <div className="px-4 py-6 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={link.path}
                    className={`block text-base font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === link.path
                        ? 'text-accent bg-accent/10'
                        : 'theme-text-secondary hover:text-accent'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-2" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                <a href={`tel:${SITE_CONFIG.phone}`} className="btn-call justify-center" id="mobile-call-btn">
                  <FiPhone size={18} /> Call Now: {SITE_CONFIG.phone}
                </a>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center" id="mobile-whatsapp-btn">
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
