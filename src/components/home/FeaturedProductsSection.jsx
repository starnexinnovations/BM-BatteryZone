import { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FiArrowRight,
  FiStar,
  FiShield,
  FiZap,
  FiPhoneCall,
  FiChevronRight,
} from 'react-icons/fi';
import { products, categories, getStockInfo, brandData, FALLBACK_IMAGE } from '../../data/products';
import { getWhatsAppUrl, SITE_CONFIG } from '../../data/config';

/* ─── Highlight colour mapping ──────────────────────────────── */
const highlightColors = {
  amber: { bg: 'bg-accent/15 border-accent/25', text: 'text-accent' },
  blue:  { bg: 'bg-electric/15 border-electric/25', text: 'text-electric-light' },
  green: { bg: 'bg-solar/15 border-solar/25', text: 'text-solar-light' },
};

/* ─── Single product card ───────────────────────────────────── */
const ProductCard = memo(function ProductCard({ product }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError]   = useState(false);

  const handleLoad  = useCallback(() => setImgLoaded(true), []);
  const handleError = useCallback(() => { setImgError(true); setImgLoaded(true); }, []);

  const imgSrc  = imgError ? FALLBACK_IMAGE : (product.imageUrl || FALLBACK_IMAGE);
  const stock   = getStockInfo(product.stockStatus);
  const brand   = brandData[product.brandKey];
  const msg     = `Hi! I'm interested in ${product.brand} ${product.name} (${product.capacity}). Please share details and availability.`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.35 }}
      className="product-card group"
      id={`home-product-${product.id}`}
    >
      {/* ── Image ───────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', background: 'var(--product-img-bg)' }}>
        {/* Skeleton */}
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse" style={{ background: 'var(--card-glass-bg)' }} />
        )}

        <img
          src={imgSrc}
          alt={`${product.brand} ${product.name} ${product.capacity}`}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-contain p-5 transition-all duration-500 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Highlight badge */}
        {product.highlight && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border backdrop-blur-sm ${highlightColors[product.highlightColor]?.bg} ${highlightColors[product.highlightColor]?.text}`}>
              {product.highlight}
            </span>
          </div>
        )}

        {/* Quick actions on hover */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 z-10">
          <a
            href={getWhatsAppUrl(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-green-500/80 backdrop-blur-sm hover:bg-green-500 transition-colors"
            title="Quick Enquiry"
          >
            <FaWhatsapp size={14} />
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-electric/80 backdrop-blur-sm hover:bg-electric transition-colors"
            title="Call Now"
          >
            <FiPhoneCall size={14} />
          </a>
        </div>

        {/* Brand badge */}
        {brand && (
          <div className="absolute bottom-3 left-3 z-10">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md text-white text-[11px] font-bold"
              style={{ background: `${brand.color}CC` }}
            >
              {brand.name}
            </div>
          </div>
        )}

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--color-card) 5%, transparent)' }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="p-4">
        {/* Name */}
        <div className="mb-2.5">
          <p className="text-[11px] uppercase tracking-wider font-medium theme-text-muted">{product.brand}</p>
          <h3 className="font-display font-bold text-base group-hover:text-accent transition-colors theme-text leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? 'text-accent fill-current' : 'theme-text-muted'}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          <span className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>
            {product.rating}
          </span>
          <span className="text-[11px] theme-text-muted">({product.reviewCount})</span>
        </div>

        {/* Capacity + Warranty */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div
            className="rounded-lg p-2.5 text-center"
            style={{ background: 'var(--card-glass-bg)', border: '1px solid var(--card-glass-border)' }}
          >
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <FiZap size={9} className="text-accent" />
              <p className="text-[9px] uppercase tracking-wider theme-text-muted">Capacity</p>
            </div>
            <p className="font-bold text-accent text-sm">{product.capacity}</p>
          </div>
          <div
            className="rounded-lg p-2.5 text-center"
            style={{ background: 'var(--card-glass-bg)', border: '1px solid var(--card-glass-border)' }}
          >
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <FiShield size={9} className="text-solar" />
              <p className="text-[9px] uppercase tracking-wider theme-text-muted">Warranty</p>
            </div>
            <p className="font-bold text-solar text-sm">{product.warranty}</p>
          </div>
        </div>

        {/* Stock + CTA */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid var(--card-glass-border)' }}
        >
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${stock.dot}`} />
            <span className={`text-xs font-medium ${stock.color}`}>{stock.label}</span>
          </div>
          <a
            href={getWhatsAppUrl(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all hover:scale-105 shadow-sm"
            id={`home-product-enquire-${product.id}`}
          >
            <FaWhatsapp size={13} /> Get Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
});

/* ─── Featured Products Section ─────────────────────────────── */
export default function FeaturedProductsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState('all');

  // Show 8 at a time on homepage
  const LIMIT = 8;

  const filtered = useMemo(() => {
    const base =
      activeCategory === 'all'
        ? products
        : products.filter((p) => p.category === activeCategory);
    return base.slice(0, LIMIT);
  }, [activeCategory]);

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="featured-products"
      aria-label="Featured battery products"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* BG texture */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,168,56,0.06), transparent)',
        }}
      />

      <div className="container-max relative z-10" ref={ref}>
        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="badge-amber mb-4 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Our Products
          </div>
          <h2 className="section-title mb-4">
            Premium <span className="gradient-text">Battery</span> Collection
          </h2>
          <p className="text-lg max-w-2xl mx-auto theme-text-secondary">
            All products include manufacturer warranty, professional installation &amp; expert
            after-sales support. Contact us for the best price.
          </p>
        </motion.div>

        {/* ── Category Tabs ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`home-filter-${cat.id}`}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-accent to-accent-dark shadow-glow-amber scale-105'
                  : 'glass-card theme-text-secondary hover:text-accent'
              }`}
              style={activeCategory === cat.id ? { color: '#0A1628' } : {}}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </motion.div>

        {/* ── Product Grid ───────────────────────────────── */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── View All CTA ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl gradient-border"
            style={{ background: 'var(--card-glass-bg)', border: '1px solid var(--card-glass-border)' }}
          >
            <div className="text-center sm:text-left">
              <p className="font-display font-bold text-lg theme-text">
                Explore our full collection
              </p>
              <p className="text-sm theme-text-muted">
                {products.length} batteries across 5 categories
              </p>
            </div>
            <Link
              to="/products"
              className="btn-primary whitespace-nowrap"
              id="home-view-all-products"
            >
              View All Products <FiArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
