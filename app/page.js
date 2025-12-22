
import HeroSection from "@/components/home/HeroSection"
import FastGrowing from "@/components/home/FastGrowing"
import Delivery from "@/components/home/Delivery"
import Testimonial from "@/components/home/TestimonialSlider"
import ImageComparePage from "@/components/home/ImageCompare"
import Together from "@/components/home/Together"
import ClientsSection from "@/components/home/ClientsSection"
import Trusted from "@/components/home/Trusted"

export default function Home() {
  return (
   <>
   <HeroSection />
   <FastGrowing />
   <Delivery />
   <ImageComparePage />
   <Together />
   <Testimonial />
   <ClientsSection />
   <Trusted />
   </>
  );
}