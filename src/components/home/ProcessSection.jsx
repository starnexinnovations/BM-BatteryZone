import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  { step: '01', icon: '📞', title: 'Contact Us', description: 'Call or WhatsApp us with your requirement. Our team responds instantly.', color: 'accent' },
  { step: '02', icon: '🔍', title: 'Free Diagnosis', description: 'We test your existing battery or assess your power needs — completely free.', color: 'electric' },
  { step: '03', icon: '💡', title: 'Get Best Quote', description: 'Receive a transparent, competitive quote with no hidden charges.', color: 'solar' },
  { step: '04', icon: '⚡', title: 'Installation & Support', description: 'Professional installation at your doorstep. Full warranty & after-sales support.', color: 'accent' },
];

const stepColors = {
  accent: { bg: 'bg-accent', badge: 'bg-accent/15 border-accent/25' },
  electric: { bg: 'bg-electric', badge: 'bg-electric/15 border-electric/25' },
  solar: { bg: 'bg-solar', badge: 'bg-solar/15 border-solar/25' },
};

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="process"
      aria-label="How we work"
      style={{ background: 'var(--color-card)' }}
    >
      <div className="container-max relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="badge-blue mb-4 mx-auto inline-flex">Simple & Fast</div>
          <h2 className="section-title mb-4">How It <span className="gradient-text">Works</span></h2>
          <p className="text-lg max-w-2xl mx-auto theme-text-secondary">Getting your power solution is quick and hassle-free. Just 4 simple steps.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/30 via-electric/30 to-solar/30" />
          {steps.map((step, index) => {
            const colors = stepColors[step.color];
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.15, duration: 0.6 }}
                className="glass-card p-7 rounded-2xl text-center relative group hover:border-accent/30 transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 ${colors.bg} rounded-xl flex items-center justify-center font-display font-black text-xs shadow-lg`}
                  style={{ color: 'var(--color-bg)' }}>
                  {step.step}
                </div>
                <div className={`w-16 h-16 mx-auto mt-4 mb-4 ${colors.badge} border rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-3 theme-text">{step.title}</h3>
                <p className="text-sm leading-relaxed theme-text-secondary">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
