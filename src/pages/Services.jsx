import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { serviceDetails, services } from '../data/services';
import { getWhatsAppUrl, SITE_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const serviceIconColors = {
  amber: 'from-accent/20 to-accent/5 border-accent/20',
  blue: 'from-electric/20 to-electric/5 border-electric/20',
  green: 'from-solar/20 to-solar/5 border-solar/20',
};

function ServiceDetail({ service, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center py-16" ref={ref} id={`service-${service.id}`}
      style={{ borderBottom: '1px solid var(--card-glass-border)' }}>
      <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className={isEven ? '' : 'lg:order-2'}>
        <div className="badge-amber mb-4 inline-flex">{service.icon} {service.title}</div>
        <h2 className="section-title mb-5">{service.title}</h2>
        <p className="text-lg leading-relaxed mb-8 theme-text-secondary">{service.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm theme-text-secondary">
              <div className="w-5 h-5 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0"><FiCheckCircle className="text-accent" size={12} /></div> {f}
            </div>
          ))}
        </div>
        <div className="mb-8">
          <p className="text-xs uppercase tracking-wider font-medium mb-3 theme-text-muted">Available Brands</p>
          <div className="flex flex-wrap gap-2">
            {service.brands.map((b) => <span key={b} className="text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-lg font-medium">{b}</span>)}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={getWhatsAppUrl(`Hi! I need ${service.title} service.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" id={`service-whatsapp-${service.id}`}><FaWhatsapp size={20} /> Get Quote</a>
          <a href={`tel:${SITE_CONFIG.phone}`} className="btn-call" id={`service-call-${service.id}`}><FiPhone size={16} /> Call Now</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: isEven ? 40 : -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
        className={`glass-card rounded-3xl p-10 flex items-center justify-center gradient-border ${isEven ? '' : 'lg:order-1'}`}>
        <div className="text-center">
          <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-b from-accent/15 to-accent/5 border border-accent/20 rounded-3xl flex items-center justify-center"><span className="text-7xl">{service.icon}</span></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-accent to-electric mx-auto rounded-full mb-4" />
          <p className="text-sm font-medium theme-text-secondary">{service.title}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | BM Battery Zone - UPS, Solar & Battery Services Coimbatore</title>
        <meta name="description" content="Complete power services: battery replacement, UPS installation, solar panel installation, home delivery, and old battery exchange in Coimbatore." />
      </Helmet>
      <div className="page-header">
        <div className="container-max text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-4">Our <span className="gradient-text">Services</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl mx-auto theme-text-secondary">
            Comprehensive power solutions for homes, offices, and businesses.
          </motion.p>
        </div>
      </div>
      <main className="section-padding relative" style={{ background: 'var(--color-bg)' }}>
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {services.slice(0, 6).map((s, i) => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="glass-card p-6 rounded-2xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-14 h-14 mb-4 bg-gradient-to-b ${serviceIconColors[s.color]} border rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>{s.icon}</div>
                <h3 className="font-display font-bold text-base mb-2 theme-text group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm theme-text-secondary">{s.description}</p>
              </motion.div>
            ))}
          </div>
          {serviceDetails.map((s, i) => <ServiceDetail key={s.id} service={s} index={i} />)}
          <div className="mt-16 rounded-3xl overflow-hidden relative gradient-border">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(45,127,234,0.1), var(--color-card), rgba(232,168,56,0.1))' }} />
            <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="badge-blue mb-3 inline-flex">🛡️ AMC Plans</p>
                <h3 className="font-display font-bold text-2xl md:text-3xl theme-text mb-3">Annual Maintenance Contracts Available</h3>
                <p className="max-w-xl theme-text-secondary">Protect your investment with affordable AMC plans for UPS, solar systems, and inverters.</p>
              </div>
              <a href={getWhatsAppUrl('Hi! I want to know about AMC plans.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp whitespace-nowrap flex-shrink-0" id="amc-whatsapp-btn">
                <FaWhatsapp size={20} /> Enquire AMC
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
