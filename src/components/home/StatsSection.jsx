import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { stats } from '../../data/testimonials';

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      id="stats"
      aria-label="Business statistics"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-dark-card to-electric/10" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center glass-card p-8 rounded-2xl"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-display font-black text-4xl md:text-5xl mb-2">
                {inView ? (
                  <span className="gradient-text">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={index * 0.2}
                      suffix={stat.suffix}
                    />
                  </span>
                ) : (
                  <span className="gradient-text">0{stat.suffix}</span>
                )}
              </div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
