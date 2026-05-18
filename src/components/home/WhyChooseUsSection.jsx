import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { whyChooseUs } from '../../data/whyChooseUs';

const colorMap = {
  amber: {
    icon: 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20',
    stat: 'gradient-text',
  },
  blue: {
    icon: 'bg-gradient-to-br from-electric/20 to-electric/5 border-electric/20',
    stat: 'text-electric-light',
  },
  green: {
    icon: 'bg-gradient-to-br from-solar/20 to-solar/5 border-solar/20',
    stat: 'text-solar-light',
  },
};

export default function WhyChooseUsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="why-choose-us"
      aria-label="Why choose us"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-green mb-4 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
            Why BM Battery Zone
          </div>
          <h2 className="section-title mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto theme-text-secondary">
            Over 12 years of powering Coimbatore — here's what makes us different from every other battery shop.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 ${colors.icon} border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <div className="text-right">
                    <p className={`font-display font-black text-2xl ${colors.stat}`}>{item.stat}</p>
                    <p className="text-[10px] uppercase tracking-wider font-medium theme-text-muted">{item.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg mb-3 theme-text group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed theme-text-secondary">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
