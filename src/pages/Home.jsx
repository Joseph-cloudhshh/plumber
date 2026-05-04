const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import HeroSection from "../components/home/HeroSection";
import ServicesGrid from "../components/home/ServicesGrid";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ServiceAreas from "../components/home/ServiceAreas";
import EmergencyBanner from "../components/home/EmergencyBanner";
import FAQSection from "../components/home/FAQSection";
import GallerySection from "../components/home/GallerySection";

const HERO_IMG = "https://media.db.com/images/public/69f7eeb56b614a729067a911/757f217a4_generated_ba08ac64.png";
const ABOUT_IMG = "https://media.db.com/images/public/69f7eeb56b614a729067a911/c9519ca1f_generated_9ef11f69.png";
const BANNER_IMG = "https://media.db.com/images/public/69f7eeb56b614a729067a911/95f2a86db_generated_76860ffe.png";

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMG} />
      <ServicesGrid />
      <AboutPreview aboutImage={ABOUT_IMG} />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServiceAreas />
      <GallerySection />
      <EmergencyBanner bannerImage={BANNER_IMG} />
      <FAQSection />
    </div>
  );
}