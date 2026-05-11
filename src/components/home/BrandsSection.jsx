import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const brands = [
  { name: 'Exide', color: '#E31E24' }, { name: 'Amaron', color: '#0066CC' }, { name: 'Luminous', color: '#FF6600' },
  { name: 'Okaya', color: '#009933' }, { name: 'SF Sonic', color: '#FFD700' }, { name: 'Su-Kam', color: '#CC0000' },
  { name: 'Microtek', color: '#003399' }, { name: 'APC', color: '#004F9F' }, { name: 'Livguard', color: '#E63B2E' },
  { name: 'Tata Green', color: '#00A651' }, { name: 'Waaree', color: '#1A78C2' }, { name: 'Havells', color: '#E10000' },
];
const brandsDuplicated = [...brands, ...brands];

export default function BrandsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-dark-card border-y border-dark-border overflow-hidden relative" id="brands" aria-label="Brands we carry">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="container-max px-4 mb-10 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="badge-amber mb-4 mx-auto inline-flex">Authorized Dealer</div>
          <h2 className="section-title mb-3">Trusted <span className="gradient-text">Brands</span> We Carry</h2>
          <p className="text-slate-400 max-w-xl mx-auto">We are authorized dealers for all top battery and power solution brands. Only genuine, warranty-backed products.</p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-card to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee whitespace-nowrap">
          {brandsDuplicated.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="flex-shrink-0 glass-card px-6 py-3.5 rounded-xl flex items-center gap-3 hover:border-accent/30 transition-all cursor-default group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110" style={{ backgroundColor: brand.color }}>
                {brand.name[0]}
              </div>
              <span className="font-display font-semibold text-slate-300 text-sm group-hover:text-white transition-colors">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Grid */}
      <div className="container-max px-4 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {brands.map((brand, index) => (
            <motion.div key={brand.name} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: index * 0.04 }}
              className="glass-card p-4 rounded-xl flex flex-col items-center gap-2.5 hover:border-accent/30 hover:scale-105 transition-all cursor-default group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg transition-shadow" style={{ backgroundColor: brand.color }}>
                {brand.name[0]}
              </div>
              <span className="text-xs text-slate-400 group-hover:text-slate-300 font-medium text-center transition-colors">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
