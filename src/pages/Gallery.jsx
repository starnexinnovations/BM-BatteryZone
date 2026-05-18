import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl } from '../data/config';
import { galleryItems, galleryCategories, galleryCategoryColors } from '../data/gallery';

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
          <p className="max-w-2xl mx-auto theme-text-secondary">A showcase of our completed installations across Coimbatore and surrounding regions.</p>
        </div>
      </div>
      <main className="section-padding relative" style={{ background: 'var(--color-bg)' }}>
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {galleryCategories.map((cat) => (
              <button key={cat.id} onClick={() => setActive(cat.id)} id={`gallery-filter-${cat.id}`}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active === cat.id ? 'bg-gradient-to-r from-accent to-accent-dark shadow-glow-amber' : 'glass-card theme-text-secondary hover:text-accent hover:border-accent/30'
                }`}
                style={active === cat.id ? { color: '#0A1628' } : {}}>{cat.label}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => {
              const colors = galleryCategoryColors[item.category];
              return (
                <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="glass-card rounded-2xl overflow-hidden group hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer" id={`gallery-item-${item.id}`}>
                  <div className={`h-48 bg-gradient-to-br ${colors.bg} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-7xl opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500 relative z-10">{item.icon}</div>
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-bg), transparent 60%)' }} />
                    <div className="absolute bottom-3 right-3">
                      <span className={`text-[10px] px-2.5 py-1 rounded-lg font-semibold uppercase tracking-wider text-white ${colors.badge}`}>{item.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-base mb-1 theme-text group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-xs mb-2 flex items-center gap-1 theme-text-muted"><span className="w-1 h-1 rounded-full bg-accent" />{item.location}</p>
                    <p className="text-sm theme-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-16 glass-card p-10 rounded-2xl text-center gradient-border">
            <h3 className="font-display font-bold text-2xl theme-text mb-3">Want a similar project done?</h3>
            <p className="mb-6 max-w-lg mx-auto theme-text-secondary">We'll design and install the perfect power solution for your home or business.</p>
            <a href={getWhatsAppUrl('Hi! I saw your gallery and want a solar/UPS/battery installation.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex" id="gallery-whatsapp-btn">
              <FaWhatsapp size={20} /> Get a Free Quote
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
