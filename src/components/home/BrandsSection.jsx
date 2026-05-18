import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { brands } from '../../data/brands';

const brandsDuplicated = [...brands, ...brands];

export default function BrandsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="py-20 overflow-hidden relative"
      id="brands"
      aria-label="Brands we carry"
      style={{ background: 'var(--color-card)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="container-max px-4 mb-10 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="badge-amber mb-4 mx-auto inline-flex">Authorized Dealer</div>
          <h2 className="section-title mb-3">
            Trusted <span className="gradient-text">Brands</span> We Carry
          </h2>
          <p className="max-w-xl mx-auto theme-text-secondary">
            We are authorized dealers for all top battery and power solution brands. Only genuine, warranty-backed products.
          </p>
        </motion.div>
      </div>

      {/* Marquee with brand logos */}
      <div className="relative mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, var(--color-card), transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, var(--color-card), transparent)` }} />
        <div className="flex gap-5 animate-marquee whitespace-nowrap">
          {brandsDuplicated.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:border-accent/30 transition-all cursor-default group"
            >
              <img
                src={`/images/brands/${brand.id}.svg`}
                alt={brand.name}
                className="h-7 w-auto object-contain"
                loading="lazy"
              />
              <span className="font-display font-semibold text-sm theme-text-secondary group-hover:text-accent transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Grid with logos */}
      <div className="container-max px-4 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.04 }}
              className="glass-card p-4 rounded-xl flex flex-col items-center gap-2.5 hover:border-accent/30 hover:scale-105 transition-all cursor-default group"
            >
              <div className="w-full h-8 flex items-center justify-center">
                <img
                  src={`/images/brands/${brand.id}.svg`}
                  alt={brand.name}
                  className="h-7 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
              <span className="text-xs theme-text-muted group-hover:text-accent font-medium text-center transition-colors">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
