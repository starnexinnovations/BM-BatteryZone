import { useState, useMemo, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiFilter, FiShield, FiZap, FiStar, FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi';
import { products, categories, getStockInfo, getDiscount, brandData } from '../data/products';
import { getWhatsAppUrl } from '../data/config';
import ProductImage from '../components/shared/ProductImage';

const highlightColors = {
  amber: { bg: 'bg-accent/15 border-accent/25', text: 'text-accent' },
  blue: { bg: 'bg-electric/15 border-electric/25', text: 'text-electric-light' },
  green: { bg: 'bg-solar/15 border-solar/25', text: 'text-solar-light' },
};

const ProductCard = memo(function ProductCard({ product }) {
  const msg = `Hi! I'm interested in ${product.brand} ${product.name} (${product.capacity}). Please send details and price.`;
  const stock = getStockInfo(product.stockStatus);
  const discount = getDiscount(product.mrp, product.sellingPrice);
  const brand = brandData[product.brandKey];

  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.35 }}
      className="product-card group" id={`product-${product.id}`}>

      {/* Image Section */}
      <div className="relative">
        <ProductImage
          src={product.imageUrl}
          alt={`${product.brand} ${product.name} - ${product.capacity} battery`}
        />

        {/* Overlay Actions */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.highlight && (
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${highlightColors[product.highlightColor]?.bg} ${highlightColors[product.highlightColor]?.text}`}>
              {product.highlight}
            </span>
          )}
          {discount > 0 && (
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-red-500/90 text-white">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Quick Actions — visible on hover */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 z-10">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-black/40 backdrop-blur-sm hover:bg-accent hover:text-black transition-colors" title="Add to Wishlist">
            <FiHeart size={14} />
          </button>
          <a href={getWhatsAppUrl(msg)} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-green-500/80 backdrop-blur-sm hover:bg-green-500 transition-colors" title="Quick Enquiry">
            <FaWhatsapp size={14} />
          </a>
        </div>

        {/* Brand Badge */}
        {brand && (
          <div className="absolute bottom-3 left-3 z-10">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md text-white text-[11px] font-bold" style={{ background: `${brand.color}CC` }}>
              {brand.name}
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Name & Category */}
        <div className="mb-3">
          <p className="text-[11px] uppercase tracking-wider font-medium theme-text-muted">{product.brand}</p>
          <h3 className="font-display font-bold text-base group-hover:text-accent transition-colors theme-text">{product.name}</h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar key={i} size={12} className={i < Math.floor(product.rating) ? 'text-accent fill-current' : 'theme-text-muted'} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
            ))}
          </div>
          <span className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>{product.rating}</span>
          <span className="text-[11px] theme-text-muted">({product.reviewCount})</span>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-lg p-2.5 text-center" style={{ background: 'var(--card-glass-bg)', border: '1px solid var(--card-glass-border)' }}>
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <FiZap size={10} className="text-accent" />
              <p className="text-[9px] uppercase tracking-wider theme-text-muted">Capacity</p>
            </div>
            <p className="font-bold text-accent text-sm">{product.capacity}</p>
          </div>
          <div className="rounded-lg p-2.5 text-center" style={{ background: 'var(--card-glass-bg)', border: '1px solid var(--card-glass-border)' }}>
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <FiShield size={10} className="text-solar" />
              <p className="text-[9px] uppercase tracking-wider theme-text-muted">Warranty</p>
            </div>
            <p className="font-bold text-solar text-sm">{product.warranty}</p>
          </div>
        </div>

        {/* Spec Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {Object.entries(product.specs).map(([, val]) => (
            <span key={val} className="text-[10px] px-2 py-0.5 rounded-md theme-text-muted" style={{ background: 'var(--card-glass-bg)', border: '1px solid var(--card-glass-border)' }}>{val}</span>
          ))}
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-2 h-2 rounded-full ${stock.dot}`} />
          <span className={`text-xs font-medium ${stock.color}`}>{stock.label}</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between pt-3" style={{ borderTop: '1px solid var(--card-glass-border)' }}>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg theme-text">₹{product.sellingPrice?.toLocaleString('en-IN')}</p>
              {product.mrp > product.sellingPrice && (
                <p className="text-xs line-through theme-text-muted">₹{product.mrp?.toLocaleString('en-IN')}</p>
              )}
            </div>
            <p className="text-[10px] theme-text-muted">Incl. all taxes</p>
          </div>
          <a href={getWhatsAppUrl(msg)} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all hover:scale-105 shadow-sm"
            id={`product-enquire-${product.id}`}>
            <FaWhatsapp size={14} /> Enquire
          </a>
        </div>
      </div>
    </motion.div>
  );
});

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let result = activeCategory === 'all' ? [...products] : products.filter(p => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      );
    }
    switch (sortBy) {
      case 'price-low': return result.sort((a, b) => a.sellingPrice - b.sellingPrice);
      case 'price-high': return result.sort((a, b) => b.sellingPrice - a.sellingPrice);
      case 'rating': return result.sort((a, b) => b.rating - a.rating);
      case 'popular': return result.sort((a, b) => b.reviewCount - a.reviewCount);
      default: return result;
    }
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <>
      <Helmet>
        <title>Products | BM Battery Zone - Batteries for Car, Bike, Inverter, Solar & UPS</title>
        <meta name="description" content="Browse our wide range of batteries - car, bike, inverter, solar, and UPS batteries from top brands like Exide, Amaron, Luminous, Okaya. Best prices in Coimbatore." />
      </Helmet>

      <div className="page-header">
        <div className="container-max text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge-amber mb-4 mx-auto inline-flex">Our Products</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title mb-4">
            Premium <span className="gradient-text">Battery</span> Collection
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl mx-auto theme-text-secondary">
            All products come with manufacturer warranty, professional installation, and expert after-sales support.
          </motion.p>
        </div>
      </div>

      <main className="section-padding relative" style={{ background: 'var(--color-bg)' }}>
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="container-max relative z-10">

          {/* Search & Sort Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 theme-text-muted" size={18} />
              <input
                type="text"
                placeholder="Search batteries by brand, name, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-12 pr-4"
                id="product-search"
              />
            </div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="form-select w-full md:w-52" id="product-sort">
              <option value="default">Sort: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2.5 mb-8 justify-center">
            <div className="flex items-center gap-2 mr-2 theme-text-muted"><FiFilter size={16} /><span className="text-sm font-medium">Filter:</span></div>
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} id={`filter-${cat.id}`}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-accent to-accent-dark shadow-glow-amber scale-105'
                    : 'glass-card theme-text-secondary hover:text-accent'
                }`}
                style={activeCategory === cat.id ? { color: '#0A1628' } : {}}
              >{cat.icon} {cat.label}</button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm mb-6 theme-text-muted">
            Showing <span className="text-accent font-semibold">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
            {searchQuery && <span> for "<span className="text-accent">{searchQuery}</span>"</span>}
          </p>

          {/* Product Grid */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 glass-card rounded-2xl">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'var(--card-glass-bg)', border: '1px solid var(--color-accent)' }}>
                  <span className="text-4xl">🔍</span>
                </div>
                <p className="font-display font-bold text-xl theme-text mb-2">No products found</p>
                <p className="theme-text-muted">Try a different search term or filter category.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom CTA */}
          <div className="mt-16 glass-card p-8 md:p-10 rounded-2xl text-center gradient-border">
            <h3 className="font-display font-bold text-2xl theme-text mb-3">Can't find what you need?</h3>
            <p className="theme-text-secondary mb-6 max-w-lg mx-auto">We stock a much wider range. Contact us and we'll source the exact battery you need.</p>
            <a href={getWhatsAppUrl('Hi! I need a specific battery not listed on your website. Can you help?')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex" id="products-custom-whatsapp">
              <FaWhatsapp size={20} /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
