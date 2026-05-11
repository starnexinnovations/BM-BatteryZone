import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { products, categories } from '../data/products';
import { getWhatsAppUrl } from '../data/config';

const highlightColors = {
  amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  green: 'bg-green-500/20 text-green-400 border-green-500/30',
};

function ProductCard({ product }) {
  const msg = `Hi! I'm interested in ${product.brand} ${product.name} (${product.capacity}). Please send details and availability.`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="product-card group"
      id={`product-${product.id}`}
    >
      {/* Top */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs text-slate-500 uppercase tracking-wider">{product.brand}</span>
          <h3 className="font-display font-bold text-white text-base group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </div>
        {product.highlight && (
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${highlightColors[product.highlightColor]}`}>
            {product.highlight}
          </span>
        )}
      </div>

      {/* Specs */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <p className="text-xs text-slate-500 mb-1">Capacity</p>
          <p className="font-bold text-accent text-sm">{product.capacity}</p>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <p className="text-xs text-slate-500 mb-1">Warranty</p>
          <p className="font-bold text-green-400 text-sm">{product.warranty}</p>
        </div>
      </div>

      {/* Additional specs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(product.specs).map(([key, val]) => (
          <span key={key} className="text-xs bg-white/5 text-slate-400 px-2.5 py-1 rounded-full">
            {val}
          </span>
        ))}
      </div>

      <p className="text-slate-400 text-xs leading-relaxed mb-5">{product.description}</p>

      {/* Price & CTA */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <div>
          <p className="text-xs text-slate-500">Price Range</p>
          <p className="font-bold text-white">{product.price}</p>
        </div>
        <a
          href={getWhatsAppUrl(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 transition-all hover:scale-105"
          id={`product-enquire-${product.id}`}
        >
          <FaWhatsapp size={14} />
          Enquire
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Products | BM Battery Zone - Batteries for Car, Bike, Inverter, Solar & UPS</title>
        <meta name="description" content="Browse our wide range of batteries - car, bike, inverter, solar, and UPS batteries from top brands like Exide, Amaron, Luminous, Okaya. Best prices in Salem." />
      </Helmet>

      {/* Page Header */}
      <div className="pt-24 pb-12 px-4 bg-dark-card border-b border-white/10 bg-grid">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-amber mb-4 mx-auto inline-flex"
          >
            Our Products
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Premium <span className="gradient-text">Battery</span> Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            All products come with manufacturer warranty, professional installation, and expert after-sales support.
          </motion.p>
        </div>
      </div>

      <main className="section-padding bg-dark-bg">
        <div className="container-max">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <div className="flex items-center gap-2 text-slate-500 mr-2">
              <FiFilter size={16} />
              <span className="text-sm">Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-${cat.id}`}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.id
                    ? 'bg-accent text-dark-bg shadow-glow-amber scale-105'
                    : 'glass-card text-slate-400 hover:text-accent hover:border-accent/40'
                  }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-slate-500 text-sm mb-6">
            Showing <span className="text-accent font-semibold">{filtered.length}</span> products
          </p>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Custom Order CTA */}
          <div className="mt-16 glass-card p-8 rounded-2xl text-center border border-accent/20">
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Can't find what you need?
            </h3>
            <p className="text-slate-400 mb-6">
              We stock a much wider range. Contact us and we'll source the exact battery you need.
            </p>
            <a
              href={getWhatsAppUrl('Hi! I need a specific battery that is not listed. Can you help?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
              id="products-custom-whatsapp"
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
