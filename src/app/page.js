import Header from "./components/header"
import HeroSection from "./components/herosection"
import FastGrowing from "./fastgrowing"
import Delivery from "./delivery"
import Testimonial from "./testimonialSlider"
import ImageComparePage from "./imageCompare"
import Together from "./together"
import ClientsSection from "./components/clientsSection"
import Trusted from "./components/trusted"
import Footer from "./components/footer"
export default function Home() {
  return (
   <>
   <Header />
   <HeroSection />
   <FastGrowing />
   <Delivery />
   <ImageComparePage />
   <Together />
   <Testimonial />
   <ClientsSection />
   <Trusted />
   <Footer />
   </>
  );
}
