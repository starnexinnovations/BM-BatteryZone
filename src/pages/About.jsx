import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiUsers, FiStar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl, SITE_CONFIG } from '../data/config';

const values = [
  { icon: '🏆', title: 'Quality First', description: 'We stock only genuine, warranty-backed products from authorized distributors.' },
  { icon: '⚡', title: 'Fast Service', description: 'Same-day delivery and installation within city limits. Emergency services available.' },
  { icon: '🤝', title: 'Customer Trust', description: 'Transparent pricing, honest advice, and no pressure selling. Your satisfaction is our priority.' },
  { icon: '🌱', title: 'Eco-Friendly', description: 'Proper old battery disposal and promoting solar energy for a greener tomorrow.' },
];

const team = [
  { name: 'Mr. Balamurugan', role: 'Founder & CEO', exp: '15+ Years', icon: '👨‍💼' },
  { name: 'Mr. Mahesh', role: 'Technical Head', exp: '10+ Years', icon: '🔧' },
  { name: 'Mr. Arjun', role: 'Solar Specialist', exp: '8+ Years', icon: '☀️' },
  { name: 'Ms. Preethi', role: 'Customer Relations', exp: '6+ Years', icon: '👩‍💼' },
];

const milestones = [
  { year: '2012', event: 'BM Battery Zone founded in Salem' },
  { year: '2015', event: 'Became authorized Exide & Amaron dealer' },
  { year: '2018', event: 'Expanded to solar power solutions' },
  { year: '2020', event: 'Launched doorstep delivery services' },
  { year: '2022', event: 'Crossed 5000+ satisfied customers' },
  { year: '2024', event: 'Now offering government solar subsidy assistance' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | BM Battery Zone - 12+ Years of Power Excellence</title>
        <meta name="description" content="Learn about BM Battery Zone - Salem's trusted battery and solar power specialist with 12+ years of serving customers with quality products and expert service." />
      </Helmet>

      {/* Header */}
      <div className="pt-24 pb-12 px-4 bg-dark-card border-b border-white/10 bg-grid">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge-amber mb-4 mx-auto inline-flex">
            Our Story
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title mb-4">
            About <span className="gradient-text">BM Battery Zone</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto text-lg">
            Powering Salem since 2012. Your trusted partner for batteries, UPS, and solar solutions.
          </motion.p>
        </div>
      </div>

      <main className="bg-dark-bg">
        {/* Story Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-display font-bold text-white mb-6">
                  Salem's Most Trusted <span className="gradient-text">Power Solutions</span> Provider
                </h2>
                <div className="space-y-5 text-slate-400 leading-relaxed">
                  <p>
                    Founded in 2012 by Mr. Balamurugan, BM Battery Zone started as a small battery shop with a simple mission:
                    provide quality power solutions at honest prices with expert service.
                  </p>
                  <p>
                    Over 12 years, we've grown into one of Salem's most trusted one-stop power solution centers,
                    serving over 5000+ satisfied customers across Salem, Attur, Mettur, Omalur, and surrounding regions.
                  </p>
                  <p>
                    We are authorized dealers for Exide, Amaron, Luminous, Okaya, and many more top brands.
                    From car batteries to complete solar systems — we handle everything with professionalism and care.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: 'Years in Business', value: '12+', icon: '🏆' },
                    { label: 'Happy Customers', value: '5000+', icon: '😊' },
                    { label: 'Brands Available', value: '50+', icon: '🔋' },
                    { label: 'Solar Installations', value: '200+', icon: '☀️' },
                  ].map((s) => (
                    <div key={s.label} className="glass-card p-5 rounded-xl text-center">
                      <div className="text-2xl mb-1">{s.icon}</div>
                      <p className="font-display font-bold text-2xl gradient-text">{s.value}</p>
                      <p className="text-slate-500 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-10">
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">🔋</div>
                  <h3 className="font-display font-bold text-2xl text-white">BM Battery Zone</h3>
                  <p className="text-accent">Salem, Tamil Nadu</p>
                </div>
                <div className="space-y-3">
                  {[
                    '✅ Authorized Multi-Brand Dealer',
                    '✅ Free Battery Health Testing',
                    '✅ Same Day Delivery & Installation',
                    '✅ Government Subsidy Assistance',
                    '✅ Annual Maintenance Contracts',
                    '✅ Emergency Roadside Assistance',
                  ].map((item) => (
                    <p key={item} className="text-sm text-slate-300">{item}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-dark-card">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our <span className="gradient-text">Core Values</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, index) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="glass-card p-7 rounded-2xl text-center hover:border-accent/40 transition-all group"
                >
                  <div className="text-4xl mb-4">{val.icon}</div>
                  <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-accent transition-colors">{val.title}</h3>
                  <p className="text-slate-400 text-sm">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-dark-bg">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our <span className="gradient-text">Journey</span></h2>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent" />
              <div className="space-y-8">
                {milestones.map((m, index) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6 pl-4"
                  >
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-dark-bg font-display font-black text-sm flex-shrink-0 relative z-10 shadow-glow-amber">
                      {m.year}
                    </div>
                    <div className="glass-card p-5 rounded-xl flex-1">
                      <p className="text-white font-medium">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-dark-card">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Meet Our <span className="gradient-text">Team</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="glass-card p-7 rounded-2xl text-center hover:border-accent/40 transition-all"
                >
                  <div className="text-5xl mb-4">{member.icon}</div>
                  <h3 className="font-display font-bold text-white text-base mb-1">{member.name}</h3>
                  <p className="text-accent text-sm mb-1">{member.role}</p>
                  <p className="text-slate-500 text-xs">{member.exp} Experience</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center">
          <h3 className="font-display font-bold text-2xl text-white mb-4">
            Ready to work with us?
          </h3>
          <p className="text-slate-400 mb-6">Contact us today for the best battery and solar solutions in Salem.</p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
            id="about-whatsapp-btn"
          >
            <FaWhatsapp size={20} />
            Chat with Us
          </a>
        </section>
      </main>
    </>
  );
}
