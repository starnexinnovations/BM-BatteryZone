import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryItems = [
  { id: 1, emoji: '☀️', title: 'Rooftop Solar Installation', location: 'Salem City', category: 'solar', desc: '5KW grid-tie solar system for residential home' },
  { id: 2, emoji: '🔋', title: 'Car Battery Replacement', location: 'Salem', category: 'battery', desc: 'Professional Amaron battery installation for SUV' },
  { id: 3, emoji: '⚡', title: 'Office UPS Setup', location: 'Attur', category: 'ups', desc: '3KVA online UPS setup for office floor' },
  { id: 4, emoji: '🌞', title: 'Commercial Solar Project', location: 'Mettur', category: 'solar', desc: '10KW solar plant for commercial building' },
  { id: 5, emoji: '🔌', title: 'Home Inverter Installation', location: 'Salem', category: 'ups', desc: 'Complete inverter + battery setup for 2BHK home' },
  { id: 6, emoji: '🚗', title: 'Multi-Brand Battery Display', location: 'Our Store', category: 'battery', desc: 'Wide collection of car batteries at our showroom' },
  { id: 7, emoji: '☀️', title: 'Solar Street Light Project', location: 'Omalur', category: 'solar', desc: 'Solar street light installation for residential colony' },
  { id: 8, emoji: '🏭', title: 'Industrial UPS Installation', location: 'Salem', category: 'ups', desc: '20KVA UPS system for manufacturing unit' },
  { id: 9, emoji: '🔋', title: 'Inverter Battery Stockroom', location: 'Our Warehouse', category: 'battery', desc: 'Largest inverter battery stock in Salem region' },
];

const galleryCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'solar', label: '☀️ Solar' },
  { id: 'battery', label: '🔋 Battery' },
  { id: 'ups', label: '⚡ UPS' },
];

const colorMap = {
  solar: 'from-amber-500/30 to-yellow-500/10',
  battery: 'from-blue-500/30 to-electric/10',
  ups: 'from-green-500/30 to-emerald-500/10',
};

export default function Gallery() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <>
      <Helmet>
        <title>Gallery | BM Battery Zone - Solar, UPS & Battery Installation Projects</title>
        <meta name="description" content="View our completed solar panel installations, UPS setups, and battery replacement projects across Salem, Attur, Mettur and surrounding areas." />
      </Helmet>

      {/* Header */}
      <div className="pt-24 pb-12 px-4 bg-dark-card border-b border-white/10 bg-grid">
        <div className="container-max text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-4">
            Our <span className="gradient-text">Projects</span> Gallery
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of our completed installations and projects across Salem and surrounding regions.
          </p>
        </div>
      </div>

      <main className="section-padding bg-dark-bg">
        <div className="container-max">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                id={`gallery-filter-${cat.id}`}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${active === cat.id
                    ? 'bg-accent text-dark-bg shadow-glow-amber'
                    : 'glass-card text-slate-400 hover:text-accent hover:border-accent/40'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className={`glass-card rounded-2xl overflow-hidden group hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                id={`gallery-item-${item.id}`}
              >
                {/* Visual */}
                <div className={`h-48 bg-gradient-to-br ${colorMap[item.category]} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500">
                    {item.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
                  <div className="absolute bottom-3 right-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${item.category === 'solar' ? 'bg-amber-500/80 text-white' :
                        item.category === 'battery' ? 'bg-blue-500/80 text-white' :
                          'bg-green-500/80 text-white'
                      }`}>
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-white text-base mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs mb-2">📍 {item.location}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 glass-card p-10 rounded-2xl text-center border border-accent/20">
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Want a similar project done?
            </h3>
            <p className="text-slate-400 mb-6">
              We'll design and install the perfect power solution for your home or business.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi! I saw your gallery and I want a solar/UPS/battery installation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
              id="gallery-whatsapp-btn"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
