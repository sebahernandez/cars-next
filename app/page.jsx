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
    <div style={{ padding: "0px 20px 0px 20px" }}>
      <Slider />
      <FeaturedCars />
      <FeaturedSection />
      <BrandCarousel />
      <HowItWorksSection />
      <TestimonialSwiper />
    </div>
  );
}
