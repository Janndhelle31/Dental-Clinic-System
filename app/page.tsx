import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}