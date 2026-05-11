import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const brands = [
  { name: 'Exide', color: '#E31E24' },
  { name: 'Amaron', color: '#0066CC' },
  { name: 'Luminous', color: '#FF6600' },
  { name: 'Okaya', color: '#009933' },
  { name: 'SF Sonic', color: '#FFD700' },
  { name: 'Su-Kam', color: '#CC0000' },
  { name: 'Microtek', color: '#003399' },
  { name: 'APC', color: '#004F9F' },
  { name: 'Livguard', color: '#E63B2E' },
  { name: 'Tata Green', color: '#00A651' },
  { name: 'Waaree', color: '#1A78C2' },
  { name: 'Havells', color: '#E10000' },
];

// Duplicate for infinite scroll
const brandsDuplicated = [...brands, ...brands];

export default function BrandsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 bg-dark-card border-y border-white/5 overflow-hidden" id="brands" aria-label="Brands we carry">
      <div className="container-max px-4 mb-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="badge-amber mb-4 mx-auto inline-flex">
            Authorized Dealer
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Trusted <span className="gradient-text">Brands</span> We Carry
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We are authorized dealers for all top battery and power solution brands.
            Only genuine, warranty-backed products.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-card to-transparent z-10 pointer-events-none" />
        <div
          className="flex gap-6 animate-marquee whitespace-nowrap"
          aria-label="Scrolling brand list"
        >
          {brandsDuplicated.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 glass-card px-8 py-4 rounded-2xl flex items-center gap-3 hover:border-accent/40 transition-colors cursor-default"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: brand.color }}
              />
              <span className="font-display font-bold text-white text-sm">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Grid (below marquee) */}
      <div className="container-max px-4 mt-10">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 hover:border-accent/40 hover:scale-105 transition-all cursor-default"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: brand.color }}
              >
                {brand.name[0]}
              </div>
              <span className="text-xs text-slate-400 font-medium text-center">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
