import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { stats } from '../../data/testimonials';

const iconColors = [
  'from-accent/20 to-accent/5 border-accent/20',
  'from-electric/20 to-electric/5 border-electric/20',
  'from-solar/20 to-solar/5 border-solar/20',
  'from-accent/20 to-accent/5 border-accent/20',
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      id="stats"
      aria-label="Business statistics"
      ref={ref}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(232,168,56,0.05), var(--color-card), rgba(45,127,234,0.05))' }} />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="container-max relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div key={stat.id} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.12, duration: 0.6 }}
              className="text-center glass-card p-6 md:p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300">
              <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-b ${iconColors[index]} border rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="font-display font-black text-3xl md:text-4xl mb-2">
                {inView ? (
                  <span className="gradient-text"><CountUp end={stat.value} duration={2.5} delay={index * 0.15} suffix={stat.suffix} /></span>
                ) : (
                  <span className="gradient-text">0{stat.suffix}</span>
                )}
              </div>
              <p className="text-sm font-medium theme-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
