import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import FeaturedProductsSection from '../components/home/FeaturedProductsSection';
import StatsSection from '../components/home/StatsSection';
import CategoriesSection from '../components/home/CategoriesSection';
import ServicesSection from '../components/home/ServicesSection';
import BrandsSection from '../components/home/BrandsSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import HomeFAQSection from '../components/home/HomeFAQSection';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>BM Battery Zone | Batteries, UPS & Solar Solutions in Coimbatore</title>
        <meta name="description" content="BM Battery Zone - Coimbatore's trusted battery shop for car, bike, inverter, solar batteries, UPS systems, and solar installations. Free delivery, expert service, 12+ years experience." />
      </Helmet>
      <main>
        <HeroSection />
        <FeaturedProductsSection />
        <StatsSection />
        <CategoriesSection />
        <ServicesSection />
        <BrandsSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <HomeFAQSection />
        <HomeCTA />
      </main>
    </>
  );
}
