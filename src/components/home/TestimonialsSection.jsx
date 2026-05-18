import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '../../data/testimonials';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar key={i} size={14} className={i < rating ? 'text-accent fill-current' : 'theme-text-muted'} fill={i < rating ? 'currentColor' : 'none'} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="testimonials"
      aria-label="Customer testimonials"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="container-max relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="badge-amber mb-4 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Customer Reviews
          </div>
          <h2 className="section-title mb-4">What Our <span className="gradient-text">Customers</span> Say</h2>
          <p className="text-lg max-w-2xl mx-auto theme-text-secondary">Thousands of satisfied customers trust BM Battery Zone for their power needs.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}>
          <Swiper modules={[Pagination, Autoplay]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-14">
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="glass-card p-7 rounded-2xl h-full flex flex-col gap-5 hover:border-accent/25 transition-all duration-300 group">
                  <div className="text-accent/20 text-4xl font-serif leading-none">"</div>
                  <StarRating rating={t.rating} />
                  <p className="text-sm leading-relaxed flex-1 theme-text-secondary">{t.text}</p>
                  <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--card-glass-border)' }}>
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>{t.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm theme-text truncate">{t.name}</p>
                      <p className="text-xs theme-text-muted truncate">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.6 }} className="text-center mt-2">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => <FiStar key={i} size={14} className="text-accent fill-current" fill="currentColor" />)}
            </div>
            <span className="text-sm theme-text-secondary">Rated <span className="font-semibold theme-text">4.9/5</span> by 500+ customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
