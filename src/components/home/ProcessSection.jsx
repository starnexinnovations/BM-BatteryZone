import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    step: '01',
    icon: '📞',
    title: 'Contact Us',
    description: 'Call or WhatsApp us with your battery or power solution requirement. Our team responds instantly.',
  },
  {
    step: '02',
    icon: '🔍',
    title: 'Free Diagnosis',
    description: 'We test your existing battery or assess your power needs — completely free of charge.',
  },
  {
    step: '03',
    icon: '💡',
    title: 'Get Best Quote',
    description: 'Receive a transparent, competitive quote with no hidden charges. Best prices guaranteed.',
  },
  {
    step: '04',
    icon: '⚡',
    title: 'Installation & Support',
    description: 'Professional installation at your doorstep. Full warranty & after-sales support included.',
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-dark-card" id="process" aria-label="How we work">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-blue mb-4 mx-auto inline-flex">
            Simple & Fast
          </div>
          <h2 className="section-title mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Getting your power solution is quick and hassle-free. Just 4 simple steps to a fully powered life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card p-7 rounded-2xl text-center relative group hover:border-accent/40 transition-all hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-dark-bg font-display font-black text-xs">
                {step.step}
              </div>

              <div className="text-5xl mt-6 mb-4">{step.icon}</div>
              <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
