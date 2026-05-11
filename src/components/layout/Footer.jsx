import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp, FaBatteryFull } from 'react-icons/fa';
import { MdSolarPower } from 'react-icons/md';
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
    <footer className="bg-dark-bg border-t border-white/10">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-electric/20 border-b border-accent/20 py-6 px-4">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              Need Help? We're Just a Call Away!
            </h3>
            <p className="text-slate-400 text-sm">Battery emergencies? Solar queries? UPS issues? Contact us now.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="btn-call text-sm px-6 py-3"
              id="footer-call-btn"
            >
              <FiPhone size={16} />
              {SITE_CONFIG.phone}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-6 py-3"
              id="footer-whatsapp-btn"
            >
              <FaWhatsapp size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center font-display font-black text-dark-bg text-xl shadow-glow-amber">
                  BM
                </div>
                <div>
                  <p className="font-display font-bold text-white text-lg leading-tight">BM Battery Zone</p>
                  <p className="text-accent text-xs font-medium">Power • UPS • Solar</p>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Your trusted partner for all power solutions. Quality batteries, UPS systems, and solar installations with expert service since 2012.
              </p>
              <div className="flex gap-4">
                <a href={SITE_CONFIG.social.facebook} className="w-9 h-9 glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/40 transition-colors" aria-label="Facebook">
                  <FiFacebook size={18} />
                </a>
                <a href={SITE_CONFIG.social.instagram} className="w-9 h-9 glass-card flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/40 transition-colors" aria-label="Instagram">
                  <FiInstagram size={18} />
                </a>
                <a href={SITE_CONFIG.social.youtube} className="w-9 h-9 glass-card flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-400/40 transition-colors" aria-label="YouTube">
                  <FiYoutube size={18} />
                </a>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-9 h-9 glass-card flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400/40 transition-colors" aria-label="WhatsApp">
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-accent rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-accent rounded-full" />
                Our Products
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-accent rounded-full" />
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <FiMapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.address}</span>
                </li>
                <li>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-accent text-sm transition-colors">
                    <FiPhone size={16} className="text-accent flex-shrink-0" />
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-slate-400 hover:text-accent text-sm transition-colors">
                    <FiMail size={16} className="text-accent flex-shrink-0" />
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <FiClock size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p>{SITE_CONFIG.hours.weekdays}</p>
                    <p>{SITE_CONFIG.hours.sunday}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} BM Battery Zone. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed with <span className="text-red-400">❤️</span> for quality power solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
