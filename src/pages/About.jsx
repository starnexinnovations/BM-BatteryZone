import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl } from '../data/config';

const values = [
  { icon: '🏆', title: 'Quality First', description: 'Only genuine, warranty-backed products from authorized distributors.', color: 'accent' },
  { icon: '⚡', title: 'Fast Service', description: 'Same-day delivery and installation within city limits. Emergency services available.', color: 'electric' },
  { icon: '🤝', title: 'Customer Trust', description: 'Transparent pricing, honest advice, and no pressure selling.', color: 'solar' },
  { icon: '🌱', title: 'Eco-Friendly', description: 'Proper old battery disposal and promoting solar energy for a greener tomorrow.', color: 'accent' },
];
const team = [
  { name: 'Mr. Balamurugan', role: 'Founder & CEO', exp: '15+ Years', icon: '👨‍💼', color: 'from-accent/20 to-accent/5 border-accent/20' },
  { name: 'Mr. Mahesh', role: 'Technical Head', exp: '10+ Years', icon: '🔧', color: 'from-electric/20 to-electric/5 border-electric/20' },
  { name: 'Mr. Arjun', role: 'Solar Specialist', exp: '8+ Years', icon: '☀️', color: 'from-solar/20 to-solar/5 border-solar/20' },
  { name: 'Ms. Preethi', role: 'Customer Relations', exp: '6+ Years', icon: '👩‍💼', color: 'from-accent/20 to-accent/5 border-accent/20' },
];
const milestones = [
  { year: '2012', event: 'BM Battery Zone founded in Coimbatore' },
  { year: '2015', event: 'Became authorized Exide & Amaron dealer' },
  { year: '2018', event: 'Expanded to solar power solutions' },
  { year: '2020', event: 'Launched doorstep delivery services' },
  { year: '2022', event: 'Crossed 5000+ satisfied customers' },
  { year: '2024', event: 'Now offering government solar subsidy assistance' },
];
const valueColors = {
  accent: { icon: 'from-accent/20 to-accent/5 border-accent/20' },
  electric: { icon: 'from-electric/20 to-electric/5 border-electric/20' },
  solar: { icon: 'from-solar/20 to-solar/5 border-solar/20' },
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | BM Battery Zone - 12+ Years of Power Excellence</title>
        <meta name="description" content="Learn about BM Battery Zone - Coimbatore's trusted battery and solar power specialist with 12+ years of serving customers." />
      </Helmet>
      <div className="page-header">
        <div className="container-max text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge-amber mb-4 mx-auto inline-flex">Our Story</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title mb-4">
            About <span className="gradient-text">BM Battery Zone</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl mx-auto text-lg theme-text-secondary">
            Powering Coimbatore since 2012. Your trusted partner for batteries, UPS, and solar solutions.
          </motion.p>
        </div>
      </div>
      <main style={{ background: 'var(--color-bg)' }}>
        {/* Story */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-display font-bold mb-6 theme-text">Coimbatore's Most Trusted <span className="gradient-text">Power Solutions</span> Provider</h2>
                <div className="space-y-5 leading-relaxed theme-text-secondary">
                  <p>Founded in 2012 by Mr. Balamurugan, BM Battery Zone started as a small battery shop with a simple mission: provide quality power solutions at honest prices with expert service.</p>
                  <p>Over 12 years, we've grown into one of Coimbatore's most trusted one-stop power solution centers, serving over 5000+ satisfied customers across Coimbatore, Tirupur, Pollachi, Mettupalayam, and surrounding regions.</p>
                  <p>We are authorized dealers for Exide, Amaron, Luminous, Okaya, and many more top brands.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: 'Years in Business', value: '12+', icon: '🏆', color: 'from-accent/20 to-accent/5 border-accent/20' },
                    { label: 'Happy Customers', value: '5000+', icon: '😊', color: 'from-solar/20 to-solar/5 border-solar/20' },
                    { label: 'Brands Available', value: '50+', icon: '🔋', color: 'from-electric/20 to-electric/5 border-electric/20' },
                    { label: 'Solar Projects', value: '200+', icon: '☀️', color: 'from-accent/20 to-accent/5 border-accent/20' },
                  ].map((s) => (
                    <div key={s.label} className="glass-card p-5 rounded-xl text-center">
                      <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-b ${s.color} border rounded-xl flex items-center justify-center text-xl`}>{s.icon}</div>
                      <p className="font-display font-bold text-2xl gradient-text">{s.value}</p>
                      <p className="text-xs theme-text-muted">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-10 gradient-border">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-b from-accent/20 to-accent/5 border border-accent/20 rounded-3xl flex items-center justify-center"><span className="text-6xl">🔋</span></div>
                  <h3 className="font-display font-bold text-2xl theme-text">BM Battery Zone</h3>
                  <p className="text-accent/80 text-sm">Uppilipalayam, Coimbatore</p>
                </div>
                <div className="space-y-3">
                  {['Authorized Multi-Brand Dealer', 'Free Battery Health Testing', 'Same Day Delivery & Installation', 'Government Subsidy Assistance', 'Annual Maintenance Contracts', 'Emergency Roadside Assistance'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm theme-text-secondary">
                      <div className="w-5 h-5 rounded-md bg-solar/10 flex items-center justify-center flex-shrink-0"><FiCheckCircle className="text-solar" size={12} /></div> {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--color-card)' }}>
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
          <div className="container-max relative z-10">
            <div className="text-center mb-12"><h2 className="section-title mb-4">Our <span className="gradient-text">Core Values</span></h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <motion.div key={val.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="glass-card p-7 rounded-2xl text-center hover:border-accent/30 transition-all duration-300 group">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-b ${valueColors[val.color].icon} border rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>{val.icon}</div>
                  <h3 className="font-display font-bold text-base mb-2 theme-text">{val.title}</h3>
                  <p className="text-sm theme-text-secondary">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="container-max relative z-10">
            <div className="text-center mb-12"><h2 className="section-title mb-4">Our <span className="gradient-text">Journey</span></h2></div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-electric to-transparent" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div key={m.year} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-6 pl-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center font-display font-black text-sm flex-shrink-0 relative z-10 shadow-glow-amber"
                      style={{ color: '#0A1628' }}>{m.year}</div>
                    <div className="glass-card p-5 rounded-xl flex-1 hover:border-accent/25 transition-colors"><p className="font-medium theme-text">{m.event}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--color-card)' }}>
          <div className="container-max relative z-10">
            <div className="text-center mb-12"><h2 className="section-title mb-4">Meet Our <span className="gradient-text">Team</span></h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="glass-card p-7 rounded-2xl text-center hover:border-accent/30 transition-all duration-300 group">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-b ${m.color} border rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>{m.icon}</div>
                  <h3 className="font-display font-bold text-base mb-1 theme-text">{m.name}</h3>
                  <p className="text-accent text-sm mb-1">{m.role}</p>
                  <p className="text-xs theme-text-muted">{m.exp} Experience</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 text-center">
          <h3 className="font-display font-bold text-2xl theme-text mb-4">Ready to work with us?</h3>
          <p className="mb-6 theme-text-secondary">Contact us today for the best battery and solar solutions in Coimbatore.</p>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex" id="about-whatsapp-btn"><FaWhatsapp size={20} /> Chat with Us</a>
        </section>
      </main>
    </>
  );
}
