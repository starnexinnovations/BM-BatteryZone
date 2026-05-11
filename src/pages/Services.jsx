import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { serviceDetails, services } from '../data/services';
import { getWhatsAppUrl, SITE_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function ServiceDetail({ service, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center py-16 border-b border-white/5 ${isEven ? '' : 'lg:flex-row-reverse'}`}
      ref={ref}
      id={`service-${service.id}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={isEven ? '' : 'lg:order-2'}
      >
        <div className="badge-amber mb-4 inline-flex">{service.icon} {service.title}</div>
        <h2 className="section-title mb-5">{service.title}</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">{service.description}</p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
              <FiCheckCircle className="text-accent flex-shrink-0" size={18} />
              {feature}
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="mb-8">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Available Brands</p>
          <div className="flex flex-wrap gap-2">
            {service.brands.map((brand) => (
              <span key={brand} className="badge-amber text-xs">{brand}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={getWhatsAppUrl(`Hi! I need ${service.title} service. Please help.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            id={`service-whatsapp-${service.id}`}
          >
            <FaWhatsapp size={20} />
            Get Quote
          </a>
          <a href={`tel:${SITE_CONFIG.phone}`} className="btn-call" id={`service-call-${service.id}`}>
            <FiPhone size={16} />
            Call Now
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className={`glass-card rounded-3xl p-10 flex items-center justify-center ${isEven ? '' : 'lg:order-1'}`}
      >
        <div className="text-center">
          <div className="text-9xl mb-6">{service.icon}</div>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-electric mx-auto rounded-full mb-4" />
          <p className="text-slate-400 text-sm">{service.title}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | BM Battery Zone - UPS, Solar & Battery Services Salem</title>
        <meta name="description" content="Complete power services from BM Battery Zone: battery replacement, UPS installation and AMC, solar panel installation, home delivery, and old battery exchange." />
      </Helmet>

      {/* Page Header */}
      <div className="pt-24 pb-12 px-4 bg-dark-card border-b border-white/10 bg-grid">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title mb-4"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Comprehensive power solutions for homes, offices, and businesses.
            Expert installation, maintenance, and after-sales support.
          </motion.p>
        </div>
      </div>

      <main className="section-padding bg-dark-bg">
        <div className="container-max">
          {/* Quick Service Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:border-accent/40 transition-all hover:-translate-y-1 group"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Service Sections */}
          {serviceDetails.map((service, index) => (
            <ServiceDetail key={service.id} service={service} index={index} />
          ))}

          {/* AMC Banner */}
          <div className="mt-16 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-electric/30 via-dark-card to-accent/20" />
            <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="badge-blue mb-3 inline-flex">🛡️ AMC Plans</p>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                  Annual Maintenance Contracts Available
                </h3>
                <p className="text-slate-400 max-w-xl">
                  Protect your investment with our affordable AMC plans for UPS, solar systems, and inverters.
                  Priority support, quarterly checkups, and discounted parts included.
                </p>
              </div>
              <div className="flex-shrink-0 flex gap-3">
                <a
                  href={getWhatsAppUrl('Hi! I want to know about AMC plans for UPS/Solar.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp whitespace-nowrap"
                  id="amc-whatsapp-btn"
                >
                  <FaWhatsapp size={20} />
                  Enquire AMC
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
