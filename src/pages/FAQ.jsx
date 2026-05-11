import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { faqs, faqCategories } from '../data/faq';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl } from '../data/config';

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`glass-card rounded-2xl overflow-hidden transition-all ${isOpen ? 'border-accent/40 shadow-glow-amber' : 'border-white/10'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
        id={`faq-${faq.id}`}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <span className="badge-amber text-xs flex-shrink-0 mt-0.5">{faq.category}</span>
          <h3 className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? 'text-accent' : 'text-white group-hover:text-accent'}`}>
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`ml-4 flex-shrink-0 ${isOpen ? 'text-accent' : 'text-slate-500'}`}
        >
          <FiChevronDown size={20} />
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
            <div className="px-6 pb-6 border-t border-white/10 pt-4">
              <p className="text-slate-400 leading-relaxed text-sm pl-16">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = faqs.filter((f) => {
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>FAQ | BM Battery Zone - Common Questions About Batteries, UPS & Solar</title>
        <meta name="description" content="Find answers to common questions about batteries, inverters, UPS systems, solar panels, installation, warranty, and more at BM Battery Zone Salem." />
      </Helmet>

      {/* Header */}
      <div className="pt-24 pb-12 px-4 bg-dark-card border-b border-white/10 bg-grid">
        <div className="container-max text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Find answers to the most common questions about our products and services.
          </p>
        </div>
      </div>

      <main className="section-padding bg-dark-bg">
        <div className="container-max max-w-4xl">
          {/* Search */}
          <div className="relative mb-8">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-card rounded-2xl pl-14 pr-5 py-4 text-white placeholder-slate-500 bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none transition-colors"
              id="faq-search"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`faq-cat-${cat}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                    ? 'bg-accent text-dark-bg shadow-glow-amber'
                    : 'glass-card text-slate-400 hover:text-accent hover:border-accent/40'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filtered.length > 0 ? (
              filtered.map((faq, index) => (
                <FAQItem key={faq.id} faq={faq} index={index} />
              ))
            ) : (
              <div className="text-center py-16 glass-card rounded-2xl">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-slate-400">No questions found. Try a different search.</p>
              </div>
            )}
          </div>

          {/* Still have questions */}
          <div className="mt-16 glass-card p-10 rounded-2xl text-center border border-accent/20">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-display font-bold text-2xl text-white mb-3">Still have questions?</h3>
            <p className="text-slate-400 mb-6">
              Our experts are ready to help. Chat with us on WhatsApp for instant answers.
            </p>
            <a
              href={getWhatsAppUrl('Hi! I have a question that I could not find in the FAQ.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
              id="faq-whatsapp-btn"
            >
              <FaWhatsapp size={20} />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
