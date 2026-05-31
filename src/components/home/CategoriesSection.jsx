import { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { categoryShowcase } from '../../data/categories';
import { FALLBACK_IMAGE } from '../../data/products';

// Color accent map per category color key
const colorAccent = {
  amber: {
    glow: 'rgba(232,168,56,0.35)',
    border: 'rgba(232,168,56,0.5)',
    badge: 'bg-accent/20 text-accent border-accent/30',
    gradient: 'from-accent/80 to-accent-dark/60',
    dot: 'bg-accent',
    ring: 'ring-accent/40',
  },
  blue: {
    glow: 'rgba(45,127,234,0.35)',
    border: 'rgba(45,127,234,0.5)',
    badge: 'bg-electric/20 text-electric-light border-electric/30',
    gradient: 'from-electric/80 to-blue-900/60',
    dot: 'bg-electric',
    ring: 'ring-electric/40',
  },
  green: {
    glow: 'rgba(34,197,94,0.35)',
    border: 'rgba(34,197,94,0.5)',
    badge: 'bg-solar/20 text-solar-light border-solar/30',
    gradient: 'from-solar/80 to-green-900/60',
    dot: 'bg-solar',
    ring: 'ring-solar/40',
  },
};

const CategoryCard = memo(function CategoryCard({ cat, index, inView }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const accent = colorAccent[cat.color] || colorAccent.amber;

  const handleLoad = useCallback(() => setImgLoaded(true), []);
  const handleError = useCallback(() => { setImgError(true); setImgLoaded(true); }, []);

  const imgSrc = imgError ? FALLBACK_IMAGE : (cat.imageUrl || FALLBACK_IMAGE);

  return (
    <motion.div
      key={cat.id}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: 'easeOut' }}
      className="h-full"
    >
      <Link
        to={`/products?category=${cat.id}`}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-400 cursor-pointer"
        id={`category-card-${cat.id}`}
        style={{
          background: 'var(--color-card)',
          border: `1px solid var(--card-glass-border)`,
          boxShadow: 'var(--shadow-card)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = accent.border;
          e.currentTarget.style.boxShadow = `0 8px 40px ${accent.glow}, 0 0 0 1px ${accent.border}`;
          e.currentTarget.style.transform = 'translateY(-6px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--card-glass-border)';
          e.currentTarget.style.boxShadow = 'var(--shadow-card)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* ── IMAGE HERO ─────────────────────────────────── */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          {/* Skeleton */}
          {!imgLoaded && (
            <div
              className="absolute inset-0 animate-pulse"
              style={{ background: 'var(--card-glass-bg)' }}
            />
          )}

          {/* Actual image */}
          <img
            src={imgSrc}
            alt={`${cat.title} — ${cat.subtitle}`}
            loading="lazy"
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-contain p-6 transition-all duration-500 group-hover:scale-110 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: 'var(--product-img-bg)' }}
          />

          {/* Subtle radial glow behind image */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 50% 60%, ${accent.glow}, transparent)`,
            }}
          />

          {/* Bottom gradient fade into card body */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, var(--color-card) 10%, transparent)',
            }}
          />

          {/* Category badge — top left */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${accent.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
              {cat.subtitle}
            </span>
          </div>

          {/* Product count — top right */}
          <div className="absolute top-3 right-3 z-10">
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md"
              style={{
                background: 'rgba(0,0,0,0.45)',
                color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {cat.productCount} items
            </span>
          </div>
        </div>

        {/* ── CONTENT ────────────────────────────────────── */}
        <div className="flex flex-col flex-1 p-5 pt-3">
          {/* Title */}
          <h3
            className="font-display font-bold text-lg mb-1.5 theme-text transition-colors duration-300"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {cat.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4 flex-1 theme-text-secondary">
            {cat.description}
          </p>

          {/* Brands */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cat.brands.map((b) => (
              <span
                key={b}
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md"
                style={{
                  background: 'var(--card-glass-bg)',
                  border: '1px solid var(--card-glass-border)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div
            className="mb-4"
            style={{ height: '1px', background: 'var(--card-glass-border)' }}
          />

          {/* CTA */}
          <div
            className="flex items-center justify-between text-sm font-bold transition-all duration-300"
            style={{ color: 'var(--color-accent)' }}
          >
            <span className="group-hover:underline underline-offset-2">Shop Now</span>
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
              style={{
                background: `${accent.glow}`,
                border: `1px solid ${accent.border}`,
              }}
            >
              <FiArrowRight size={13} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

export default function CategoriesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="categories"
      aria-label="Battery categories"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-amber mb-4 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Shop by Category
          </div>
          <h2 className="section-title mb-4">
            Find the Right <span className="gradient-text">Battery</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto theme-text-secondary">
            Browse our complete range — cars, bikes, home inverters, solar systems, and online UPS.
            Every product backed by expert installation &amp; warranty.
          </p>
        </motion.div>

        {/* Category Grid — image-first cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categoryShowcase.map((cat, index) => (
            <CategoryCard key={cat.id} cat={cat} index={index} inView={inView} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors duration-300 theme-text-secondary"
            id="categories-view-all"
          >
            View All Products
            <FiChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
