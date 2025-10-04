import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import { WhyChoose } from "@/components/WhyChoose";
import { TestimonialsPage } from "@/components/TestimonialsPage";
import { Webinars } from "@/components/Webinars";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChoose/>
    <TestimonialsPage/>
    <Webinars/>
    </>
  );
}
