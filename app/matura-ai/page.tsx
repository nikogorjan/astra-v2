import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { Hero } from "./_components/Hero/Hero";
import { Success } from "./_components/Success/Success";
import { Testimonials } from "./_components/Testimonials/Testimonial18";
import { Mockups } from "./_components/Mockups/Mockups";
import { Ric } from "./_components/Ric/Ric";
import { Pricing } from "./_components/Pricing/Pricing";
import { Instructors } from "./_components/Instructors/Instructors";
import { Faq } from "../_components/Faq/Faq";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <Hero />
      <Success />
      <Testimonials />
      <Mockups />
      <Ric />
      <Pricing />
      <Instructors />
      <Faq />
      <Footer />
    </main>
  );
}
