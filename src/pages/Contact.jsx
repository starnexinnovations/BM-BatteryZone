import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';

const services = ['Car Battery', 'Bike Battery', 'Inverter Battery', 'Solar Battery', 'UPS System', 'Solar Installation', 'Battery Exchange', 'Battery Repair', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello BM Battery Zone!

Name: ${form.name}
Phone: ${form.phone}
Service Needed: ${form.service}
Message: ${form.message}

Please help me with my requirement.`;
    window.open(getWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | BM Battery Zone Salem - Call, WhatsApp or Visit</title>
        <meta name="description" content="Contact BM Battery Zone Salem. Call +91 98765 43210, WhatsApp us, or visit our store. Free battery health check. Open Mon-Sat 9AM-8PM." />
      </Helmet>

      {/* Header */}
      <div className="pt-24 pb-12 px-4 bg-dark-card border-b border-white/10 bg-grid">
        <div className="container-max text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-4">
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a question or need a quote? Reach out to us via call, WhatsApp, or visit our store.
          </p>
        </div>
      </div>

      <main className="section-padding bg-dark-bg">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-display font-bold text-white mb-8">
                Contact <span className="gradient-text">Information</span>
              </h2>

              <div className="space-y-5 mb-10">
                <a href={`tel:${SITE_CONFIG.phone}`} className="glass-card p-5 rounded-2xl flex items-center gap-5 hover:border-accent/40 transition-all group" id="contact-call-card">
                  <div className="w-12 h-12 bg-electric/20 border border-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FiPhone className="text-electric-light" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Phone / Call</p>
                    <p className="text-white font-semibold">{SITE_CONFIG.phone}</p>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 rounded-2xl flex items-center gap-5 hover:border-green-500/40 transition-all group"
                  id="contact-whatsapp-card"
                >
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-green-400" size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="text-white font-semibold">{SITE_CONFIG.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${SITE_CONFIG.email}`} className="glass-card p-5 rounded-2xl flex items-center gap-5 hover:border-accent/40 transition-all group" id="contact-email-card">
                  <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FiMail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white font-semibold">{SITE_CONFIG.email}</p>
                  </div>
                </a>

                <div className="glass-card p-5 rounded-2xl flex items-start gap-5">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-orange-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-white font-semibold">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl flex items-start gap-5">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Business Hours</p>
                    <p className="text-white font-semibold">{SITE_CONFIG.hours.weekdays}</p>
                    <p className="text-slate-400 text-sm">{SITE_CONFIG.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                <iframe
                  src={SITE_CONFIG.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BM Battery Zone Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 className="text-2xl font-display font-bold text-white mb-8">
                Send Us a <span className="gradient-text">Message</span>
              </h2>

              {submitted ? (
                <div className="glass-card p-12 rounded-2xl text-center border border-green-500/30">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                  <p className="text-slate-400">Your message has been sent via WhatsApp. We'll respond shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }); }}
                    className="mt-6 btn-secondary"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} className="glass-card p-8 rounded-2xl space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-400 mb-2">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-slate-400 mb-2">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm text-slate-400 mb-2">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-dark-bg border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-slate-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirement..."
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-whatsapp justify-center py-4"
                    id="contact-form-submit"
                  >
                    <FaWhatsapp size={20} />
                    Send via WhatsApp
                    <FiSend size={16} />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Clicking "Send" will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
