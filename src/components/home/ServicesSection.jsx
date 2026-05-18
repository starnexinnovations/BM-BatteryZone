import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { services } from '../../data/services';

const colorMap = {
  amber: { icon: 'bg-gradient-to-b from-accent/20 to-accent/5 border border-accent/20', line: 'bg-gradient-to-r from-accent to-accent-light', dot: 'bg-accent' },
  blue: { icon: 'bg-gradient-to-b from-electric/20 to-electric/5 border border-electric/20', line: 'bg-gradient-to-r from-electric to-electric-light', dot: 'bg-electric' },
  green: { icon: 'bg-gradient-to-b from-solar/20 to-solar/5 border border-solar/20', line: 'bg-gradient-to-r from-solar to-solar-light', dot: 'bg-solar' },
};

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="services"
      aria-label="Our services"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="container-max relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="badge-amber mb-4 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> What We Offer
          </div>
          <h2 className="section-title mb-4">Complete <span className="gradient-text">Power Solutions</span></h2>
          <p className="text-lg max-w-2xl mx-auto theme-text-secondary">
            From automotive batteries to advanced solar systems — we provide everything you need to keep your world powered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1, duration: 0.6 }}
                className="service-card group" id={`service-card-${service.id}`}>
                <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${colors.line} mb-6 rounded-full`} />
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 ${colors.icon}`}>{service.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3 theme-text group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-sm leading-relaxed mb-5 theme-text-secondary">{service.description}</p>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs theme-text-secondary">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300">
                  Learn More <FiArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
