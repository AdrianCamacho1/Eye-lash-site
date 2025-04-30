import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

// Lazy loaded components for better performance
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const GallerySection = lazy(() => import("./components/GallerySection"));
const PricingSection = lazy(() => import("./components/PricingSection"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const ContactSection = lazy(() =>
  import("./components/ContactAndBookingSection")
);
const BookingSection = lazy(() => import("./components/BookingSection"));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D9A7B3]"></div>
  </div>
);

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <div id="home">
      <HeroSection />
    </div>
    <Suspense fallback={<LoadingSpinner />}>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="booking">
        <BookingSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </Suspense>
    <Footer />
  </div>
);

export default App;
