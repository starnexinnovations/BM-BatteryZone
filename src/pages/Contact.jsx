import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';

const serviceOptions = ['Car Battery', 'Bike Battery', 'Inverter Battery', 'Solar Battery', 'UPS System', 'Solar Installation', 'Battery Exchange', 'Battery Repair', 'Other'];
const contactCards = [
  { icon: FiPhone, label: 'Phone / Call', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}`, iconBg: 'bg-electric/10 border-electric/20', iconColor: 'text-electric-light', hoverBorder: 'hover:border-electric/30' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: SITE_CONFIG.phone, href: getWhatsAppUrl(), external: true, iconBg: 'bg-green-500/10 border-green-500/20', iconColor: 'text-green-400', hoverBorder: 'hover:border-green-500/30' },
  { icon: FiMail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, iconBg: 'bg-accent/10 border-accent/20', iconColor: 'text-accent', hoverBorder: 'hover:border-accent/30' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello BM Battery Zone!\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}\n\nPlease help me.`;
    window.open(getWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | BM Battery Zone Coimbatore</title>
        <meta name="description" content="Contact BM Battery Zone Coimbatore. WhatsApp us, call, or visit our store at Uppilipalayam. Free battery health check." />
      </Helmet>
      <div className="page-header">
        <div className="container-max text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-4">Get In <span className="gradient-text">Touch</span></motion.h1>
          <p className="max-w-2xl mx-auto theme-text-secondary">Have a question or need a quote? Reach out via call, WhatsApp, or visit our store.</p>
        </div>
      </div>
      <main className="section-padding relative" style={{ background: 'var(--color-bg)' }}>
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-display font-bold theme-text mb-8">Contact <span className="gradient-text">Information</span></h2>
              <div className="space-y-4 mb-10">
                {contactCards.map((card) => (
                  <a key={card.label} href={card.href} {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`glass-card p-5 rounded-2xl flex items-center gap-5 ${card.hoverBorder} transition-all group`} id={`contact-${card.label.toLowerCase().replace(/[^a-z]/g, '')}-card`}>
                    <div className={`w-12 h-12 ${card.iconBg} border rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <card.icon className={card.iconColor} size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-medium mb-0.5 theme-text-muted">{card.label}</p>
                      <p className="font-semibold theme-text">{card.value}</p>
                    </div>
                  </a>
                ))}
                <div className="glass-card p-5 rounded-2xl flex items-start gap-5">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0"><FiMapPin className="text-orange-400" size={20} /></div>
                  <div><p className="text-[11px] uppercase tracking-wider font-medium mb-0.5 theme-text-muted">Address</p><p className="font-semibold theme-text">{SITE_CONFIG.address}</p></div>
                </div>
                <div className="glass-card p-5 rounded-2xl flex items-start gap-5">
                  <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0"><FiClock className="text-purple-400" size={20} /></div>
                  <div><p className="text-[11px] uppercase tracking-wider font-medium mb-0.5 theme-text-muted">Hours</p><p className="font-semibold theme-text">{SITE_CONFIG.hours.weekdays}</p><p className="text-sm theme-text-muted">{SITE_CONFIG.hours.sunday}</p></div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden h-64 shadow-card" style={{ border: '1px solid var(--color-border)' }}>
                <iframe src={SITE_CONFIG.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="BM Battery Zone Location" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="text-2xl font-display font-bold theme-text mb-8">Send Us a <span className="gradient-text">Message</span></h2>
              {submitted ? (
                <div className="glass-card p-12 rounded-2xl text-center gradient-border">
                  <div className="w-20 h-20 mx-auto mb-4 bg-solar/10 border border-solar/20 rounded-2xl flex items-center justify-center"><span className="text-5xl">✅</span></div>
                  <h3 className="font-display font-bold text-2xl theme-text mb-3">Message Sent!</h3>
                  <p className="theme-text-secondary">Your message has been sent via WhatsApp. We'll respond shortly.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }); }} className="mt-6 btn-secondary">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-5 gradient-border">
                  <div><label htmlFor="name" className="form-label">Your Name *</label><input id="name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" className="form-input" /></div>
                  <div><label htmlFor="phone" className="form-label">Phone Number *</label><input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 9047142757" className="form-input" /></div>
                  <div><label htmlFor="service" className="form-label">Service Required</label><select id="service" name="service" value={form.service} onChange={handleChange} className="form-select"><option value="">Select a service...</option>{serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                  <div><label htmlFor="message" className="form-label">Message</label><textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your requirement..." className="form-input resize-none" /></div>
                  <button type="submit" className="w-full btn-whatsapp justify-center py-4" id="contact-form-submit"><FaWhatsapp size={20} /> Send via WhatsApp <FiSend size={16} /></button>
                  <p className="text-xs text-center theme-text-muted">Clicking "Send" will open WhatsApp with your message pre-filled.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
