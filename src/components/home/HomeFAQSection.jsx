import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { faqs } from '../../data/faq';

export default function HomeFAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const homeFaqs = faqs.slice(0, 6);

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="home-faq"
      aria-label="Frequently asked questions"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="container-max max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-blue mb-4 mx-auto inline-flex">Common Questions</div>
          <h2 className="section-title mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto theme-text-secondary">
            Quick answers to the most common questions about batteries, UPS, and solar solutions.
          </p>
        </motion.div>

        <div className="space-y-3">
          {homeFaqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/faq"
            className="inline-flex items-center gap-2.5 text-accent font-semibold hover:gap-3.5 transition-all duration-300"
            id="home-faq-view-all"
          >
            View All FAQs <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, inView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-accent/30' : ''}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1">
          <span
            className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-accent/10 text-accent border border-accent/20 flex-shrink-0 mt-0.5 uppercase tracking-wider"
          >
            {faq.category}
          </span>
          <h3 className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? 'text-accent' : 'theme-text group-hover:text-accent'}`}>
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`ml-4 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            isOpen ? 'text-accent bg-accent/10' : 'theme-text-muted'
          }`}
          style={!isOpen ? { background: 'var(--card-glass-bg)' } : {}}
        >
          <FiChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-3" style={{ borderTop: '1px solid var(--card-glass-border)' }}>
              <p className="theme-text-secondary leading-relaxed text-sm pl-[calc(2.5rem+0.75rem)]">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
