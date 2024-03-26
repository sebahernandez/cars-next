import FeaturedCars from "@/components/FeaturedCars";
import FeaturedSection from "@/components/FeaturedSection"; // Corrección del nombre
import Slider from "@/components/Slider";
import BrandCarousel from "@/components/Brands";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialSwiper from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturedCars />
      <FeaturedSection />
      <BrandCarousel />
      <HowItWorksSection />
      <TestimonialSwiper />
    </div>
  );
}
