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
        <FiStar
          key={i}
          size={16}
          className={i < rating ? 'text-accent fill-current' : 'text-slate-600'}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-dark-bg bg-grid" id="testimonials" aria-label="Customer testimonials">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-amber mb-4 mx-auto inline-flex">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Customer Reviews
          </div>
          <h2 className="section-title mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Thousands of satisfied customers trust BM Battery Zone for their power needs.
            Here's what some of them have to say.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="glass-card p-7 rounded-2xl h-full flex flex-col gap-5 border border-white/10 hover:border-accent/30 transition-colors">
                  {/* Rating */}
                  <StarRating rating={t.rating} />

                  {/* Quote */}
                  <p className="text-slate-300 text-sm leading-relaxed flex-1">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role} · {t.location}</p>
                    </div>
                    <div className="ml-auto">
                      <FiStar className="text-accent fill-current" fill="currentColor" size={20} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-4"
        >
          <p className="text-slate-500 text-sm">
            ⭐ Rated 4.9/5 by 500+ customers on Google
          </p>
        </motion.div>
      </div>
    </section>
  );
}
