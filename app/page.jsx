import FeaturedCars from "@/components/FeaturedCars";
import FeaturedSection from "@/components/FeaturedSection"; // Corrección del nombre
import Slider from "@/components/Slider";
import BrandCarousel from "@/components/Brands";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialSwiper from "@/components/Testimonial";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Home() {
  return (
    <div className="container mx-auto px-2 md:px-10">
      <Slider />
      <FeaturedCars />
      <FeaturedSection />
      <BrandCarousel />
      <HowItWorksSection />
      <TestimonialSwiper />
    </div>
  );
}
