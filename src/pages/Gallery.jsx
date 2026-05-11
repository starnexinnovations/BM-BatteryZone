import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl } from '../data/config';

const galleryItems = [
  { id: 1, emoji: '☀️', title: 'Rooftop Solar Installation', location: 'Coimbatore', category: 'solar', desc: '5KW grid-tie solar system for residential home' },
  { id: 2, emoji: '🔋', title: 'Car Battery Replacement', location: 'Coimbatore', category: 'battery', desc: 'Professional Amaron battery installation for SUV' },
  { id: 3, emoji: '⚡', title: 'Office UPS Setup', location: 'Tirupur', category: 'ups', desc: '3KVA online UPS setup for office floor' },
  { id: 4, emoji: '🌞', title: 'Commercial Solar Project', location: 'Pollachi', category: 'solar', desc: '10KW solar plant for commercial building' },
  { id: 5, emoji: '🔌', title: 'Home Inverter Installation', location: 'Coimbatore', category: 'ups', desc: 'Complete inverter + battery setup for 2BHK home' },
  { id: 6, emoji: '🚗', title: 'Multi-Brand Battery Display', location: 'Our Store', category: 'battery', desc: 'Wide collection of car batteries at our showroom' },
  { id: 7, emoji: '☀️', title: 'Solar Street Light Project', location: 'Mettupalayam', category: 'solar', desc: 'Solar street light installation for residential colony' },
  { id: 8, emoji: '🏭', title: 'Industrial UPS Installation', location: 'Coimbatore', category: 'ups', desc: '20KVA UPS system for manufacturing unit' },
  { id: 9, emoji: '🔋', title: 'Inverter Battery Stockroom', location: 'Our Warehouse', category: 'battery', desc: 'Largest inverter battery stock in Coimbatore region' },
];
const galleryCategories = [
  { id: 'all', label: 'All Projects' }, { id: 'solar', label: '☀️ Solar' }, { id: 'battery', label: '🔋 Battery' }, { id: 'ups', label: '⚡ UPS' },
];
const colorMap = {
  solar: { bg: 'from-accent/25 to-amber-600/10', badge: 'bg-accent/80 text-dark-bg' },
  battery: { bg: 'from-electric/25 to-blue-600/10', badge: 'bg-electric text-white' },
  ups: { bg: 'from-solar/25 to-emerald-600/10', badge: 'bg-solar text-dark-bg' },
};

export default function Gallery() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <>
      <Helmet>
        <title>Gallery | BM Battery Zone - Solar, UPS & Battery Installation Projects</title>
        <meta name="description" content="View our completed solar panel installations, UPS setups, and battery projects across Coimbatore, Tirupur, Pollachi." />
      </Helmet>
      <div className="page-header">
        <div className="container-max text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-4">Our <span className="gradient-text">Projects</span> Gallery</motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">A showcase of our completed installations across Coimbatore and surrounding regions.</p>
        </div>
      </div>
      <main className="section-padding bg-dark-bg relative">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {galleryCategories.map((cat) => (
              <button key={cat.id} onClick={() => setActive(cat.id)} id={`gallery-filter-${cat.id}`}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active === cat.id ? 'bg-gradient-to-r from-accent to-accent-dark text-dark-bg shadow-glow-amber' : 'glass-card text-slate-400 hover:text-accent hover:border-accent/30'
                }`}>{cat.label}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => {
              const colors = colorMap[item.category];
              return (
                <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="glass-card rounded-2xl overflow-hidden group hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer" id={`gallery-item-${item.id}`}>
                  <div className={`h-48 bg-gradient-to-br ${colors.bg} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-7xl opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 relative z-10">{item.emoji}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
                    <div className="absolute bottom-3 right-3">
                      <span className={`text-[10px] px-2.5 py-1 rounded-lg font-semibold uppercase tracking-wider ${colors.badge}`}>{item.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-white text-base mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-xs mb-2 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-accent" />{item.location}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-16 glass-card p-10 rounded-2xl text-center gradient-border">
            <h3 className="font-display font-bold text-2xl text-white mb-3">Want a similar project done?</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">We'll design and install the perfect power solution for your home or business.</p>
            <a href={getWhatsAppUrl('Hi! I saw your gallery and want a solar/UPS/battery installation.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex" id="gallery-whatsapp-btn">
              <FaWhatsapp size={20} /> Get a Free Quote
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
