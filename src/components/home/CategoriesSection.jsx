import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { categoryShowcase } from '../../data/categories';

const colorMap = {
  amber: {
    icon: 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20',
    hover: 'hover:border-accent/40 hover:shadow-glow-amber',
    text: 'text-accent',
    line: 'bg-gradient-to-r from-accent to-accent-light',
  },
  blue: {
    icon: 'bg-gradient-to-br from-electric/20 to-electric/5 border-electric/20',
    hover: 'hover:border-electric/40 hover:shadow-glow-blue',
    text: 'text-electric-light',
    line: 'bg-gradient-to-r from-electric to-electric-light',
  },
  green: {
    icon: 'bg-gradient-to-br from-solar/20 to-solar/5 border-solar/20',
    hover: 'hover:border-solar/40 hover:shadow-glow-green',
    text: 'text-solar-light',
    line: 'bg-gradient-to-r from-solar to-solar-light',
  },
};

export default function CategoriesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="categories"
      aria-label="Battery categories"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="container-max relative z-10" ref={ref}>
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
            Browse our complete range of batteries for every need — from cars and bikes to home inverters, solar systems, and UPS.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categoryShowcase.map((cat, index) => {
            const colors = colorMap[cat.color];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link
                  to={`/products?category=${cat.id}`}
                  className={`glass-card-hover p-6 rounded-2xl flex flex-col h-full group cursor-pointer ${colors.hover}`}
                  id={`category-card-${cat.id}`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-4 ${colors.icon} border rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {cat.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-base mb-1 theme-text group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <p className={`text-xs font-semibold mb-3 ${colors.text}`}>{cat.subtitle}</p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4 flex-1 theme-text-secondary">
                    {cat.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] px-2 py-0.5 rounded-md theme-text-muted"
                        style={{ background: 'var(--card-glass-bg)', border: '1px solid var(--card-glass-border)' }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-300 mt-auto">
                    Browse {cat.productCount} Products <FiArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
