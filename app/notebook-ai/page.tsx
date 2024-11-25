import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { Hero } from "./_components/Hero/Hero";
import Separator from "@/components/Separator/Separator";
import { Testimonials } from "./_components/Testimonials/Testimonials";
import { Mockups } from "./_components/Mockups/Mockups";
import { Classmates } from "./_components/Classmates/Classmates";
import { Faq } from "../_components/Faq/Faq";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <Hero />
      <Separator />
      <Testimonials />
      <Mockups />
      <Classmates />
      <Faq />
      <Footer />
    </main>
  );
}
