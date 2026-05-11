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
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-accent/30 shadow-card-hover' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left group" id={`faq-${faq.id}`} aria-expanded={isOpen}>
        <div className="flex items-start gap-4 flex-1">
          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-accent/10 text-accent border border-accent/20 flex-shrink-0 mt-0.5 uppercase tracking-wider">{faq.category}</span>
          <h3 className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? 'text-accent' : 'text-white group-hover:text-accent'}`}>{faq.question}</h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}
          className={`ml-4 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'text-accent bg-accent/10' : 'text-slate-500 bg-white/[0.04]'}`}>
          <FiChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-6 pb-6 border-t border-white/[0.06] pt-4">
              <p className="text-slate-400 leading-relaxed text-sm pl-[4.5rem]">{faq.answer}</p>
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
    const matchCat = activeCategory === 'All' || f.category === activeCategory;
    const matchSearch = !searchQuery || f.question.toLowerCase().includes(searchQuery.toLowerCase()) || f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>FAQ | BM Battery Zone - Common Questions About Batteries, UPS & Solar</title>
        <meta name="description" content="Find answers to common questions about batteries, inverters, UPS systems, solar panels, installation, warranty at BM Battery Zone Coimbatore." />
      </Helmet>
      <div className="page-header">
        <div className="container-max text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-4">Frequently Asked <span className="gradient-text">Questions</span></motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Find answers to the most common questions about our products and services.</p>
        </div>
      </div>
      <main className="section-padding bg-dark-bg relative">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="container-max max-w-4xl relative z-10">
          <div className="relative mb-8">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input type="text" placeholder="Search questions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="form-input pl-14 pr-5 py-4 rounded-2xl" id="faq-search" />
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} id={`faq-cat-${cat}`}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat ? 'bg-gradient-to-r from-accent to-accent-dark text-dark-bg shadow-glow-amber' : 'glass-card text-slate-400 hover:text-accent hover:border-accent/30'
                }`}>{cat}</button>
            ))}
          </div>
          <div className="space-y-3">
            {filtered.length > 0 ? filtered.map((faq, i) => <FAQItem key={faq.id} faq={faq} index={i} />) : (
              <div className="text-center py-16 glass-card rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center"><span className="text-3xl">🔍</span></div>
                <p className="text-slate-400">No questions found. Try a different search.</p>
              </div>
            )}
          </div>
          <div className="mt-16 glass-card p-10 rounded-2xl text-center gradient-border">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center"><span className="text-3xl">💬</span></div>
            <h3 className="font-display font-bold text-2xl text-white mb-3">Still have questions?</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">Our experts are ready to help. Chat with us on WhatsApp for instant answers.</p>
            <a href={getWhatsAppUrl('Hi! I have a question not covered in the FAQ.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex" id="faq-whatsapp-btn">
              <FaWhatsapp size={20} /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
