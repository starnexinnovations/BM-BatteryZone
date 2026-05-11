import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone, FiMenu, FiX, FiZap } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
        }`}>
        <div className="container-max px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-display font-black text-dark-bg text-lg shadow-glow-amber group-hover:scale-110 transition-transform">
                  BM
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-base leading-tight">
                  BM Battery Zone
                </p>
                <p className="text-accent text-xs font-medium">Power • UPS • Solar</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-sm ${location.pathname === link.path
                      ? 'text-accent'
                      : ''
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="btn-call text-sm px-5 py-2.5"
                id="navbar-call-btn"
              >
                <FiPhone size={16} />
                Call Now
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-5 py-2.5"
                id="navbar-whatsapp-btn"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2 hover:text-accent transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-dark-bg/98 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${location.pathname === link.path
                        ? 'text-accent'
                        : 'text-slate-300 hover:text-accent'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="btn-call justify-center"
                    id="mobile-call-btn"
                  >
                    <FiPhone size={18} />
                    Call Now: {SITE_CONFIG.phone}
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp justify-center"
                    id="mobile-whatsapp-btn"
                  >
                    <FaWhatsapp size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
