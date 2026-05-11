import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { services } from '../../data/services';

const colorMap = {
  amber: {
    icon: 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-400',
    line: 'bg-amber-500',
  },
  blue: {
    icon: 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30',
    badge: 'bg-blue-500/10 text-blue-400',
    line: 'bg-blue-500',
  },
  green: {
    icon: 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30',
    badge: 'bg-green-500/10 text-green-400',
    line: 'bg-green-500',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-dark-bg bg-grid" id="services" aria-label="Our services">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="badge-amber mb-4 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            What We Offer
          </div>
          <h2 className="section-title mb-4">
            Complete <span className="gradient-text">Power Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From automotive batteries to advanced solar systems — we provide everything you need
            to keep your world powered, reliably and efficiently.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="service-card group"
                id={`service-card-${service.id}`}
              >
                {/* Top line */}
                <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${colors.line} mb-6 rounded-full`} />

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 ${colors.icon}`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.line}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={service.link}
                  className="flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300"
                >
                  Learn More <FiArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
