import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram, FiYoutube, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG, getWhatsAppUrl } from '../../data/config';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Car Battery', path: '/products' },
  { name: 'Bike Battery', path: '/products' },
  { name: 'Inverter Battery', path: '/products' },
  { name: 'Solar Battery', path: '/products' },
  { name: 'UPS Systems', path: '/services' },
  { name: 'Solar Installation', path: '/services' },
  { name: 'Battery Exchange', path: '/services' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden theme-transition" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
      {/* Top CTA Banner */}
      <div className="relative bg-gradient-to-r from-accent/15 via-accent/8 to-electric/15 border-b py-8 px-4" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-display font-bold text-xl mb-1 theme-text">Need Help? We're Just a Call Away!</h3>
            <p className="text-sm theme-text-secondary">Battery emergencies? Solar queries? UPS issues? Contact us now.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-call text-sm px-6 py-3" id="footer-call-btn">
              <FiPhone size={16} /> {SITE_CONFIG.phone}
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-6 py-3" id="footer-whatsapp-btn">
              <FaWhatsapp size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-16 relative">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center font-display font-black text-xl shadow-glow-amber group-hover:scale-110 transition-transform" style={{ color: '#0A1628' }}>BM</div>
                <div>
                  <p className="font-display font-bold text-lg leading-tight theme-text">BM Battery Zone</p>
                  <p className="text-accent/70 text-[11px] font-medium tracking-widest uppercase">Power • UPS • Solar</p>
                </div>
              </Link>
              <p className="text-sm leading-relaxed mb-6 theme-text-secondary">
                Your trusted partner for all power solutions. Quality batteries, UPS systems, and solar installations with expert service since 2012.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FiFacebook, href: SITE_CONFIG.social.facebook, label: 'Facebook', hover: 'hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10' },
                  { icon: FiInstagram, href: SITE_CONFIG.social.instagram, label: 'Instagram', hover: 'hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/10' },
                  { icon: FiYoutube, href: SITE_CONFIG.social.youtube, label: 'YouTube', hover: 'hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/10' },
                  { icon: FaWhatsapp, href: getWhatsAppUrl(), label: 'WhatsApp', hover: 'hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/10', external: true },
                ].map((s) => (
                  <a key={s.label} href={s.href} {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 theme-text-muted ${s.hover}`} style={{ border: '1px solid var(--card-glass-border)' }} aria-label={s.label}>
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-base theme-text mb-5 flex items-center gap-2.5">
                <span className="w-6 h-0.5 bg-gradient-to-r from-accent to-accent-light rounded-full" /> Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-accent transition-colors text-sm theme-text-secondary flex items-center gap-2.5 group">
                      <FiArrowRight size={12} className="theme-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-display font-semibold text-base theme-text mb-5 flex items-center gap-2.5">
                <span className="w-6 h-0.5 bg-gradient-to-r from-accent to-accent-light rounded-full" /> Our Products
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-accent transition-colors text-sm theme-text-secondary flex items-center gap-2.5 group">
                      <FiArrowRight size={12} className="theme-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-base theme-text mb-5 flex items-center gap-2.5">
                <span className="w-6 h-0.5 bg-gradient-to-r from-accent to-accent-light rounded-full" /> Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm theme-text-secondary">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><FiMapPin size={14} className="text-accent" /></div>
                  <span className="leading-relaxed">{SITE_CONFIG.address}</span>
                </li>
                <li>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 hover:text-accent text-sm transition-colors theme-text-secondary">
                    <div className="w-8 h-8 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0"><FiPhone size={14} className="text-electric-light" /></div>
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 hover:text-accent text-sm transition-colors theme-text-secondary">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><FiMail size={14} className="text-accent" /></div>
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm theme-text-secondary">
                  <div className="w-8 h-8 bg-solar/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><FiClock size={14} className="text-solar" /></div>
                  <div>
                    <p>{SITE_CONFIG.hours.weekdays}</p>
                    <p className="theme-text-muted">{SITE_CONFIG.hours.sunday}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-5 px-4 relative" style={{ borderTop: '1px solid var(--card-glass-border)' }}>
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-3 text-sm theme-text-muted">
          <p>© {new Date().getFullYear()} BM Battery Zone. All rights reserved.</p>
          <p className="flex items-center gap-2">Designed with <span className="text-red-400">❤️</span> for quality power solutions</p>
        </div>
      </div>
    </footer>
  );
}
