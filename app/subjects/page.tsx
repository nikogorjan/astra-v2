import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { Hero } from "./_components/Hero/Hero";
import { SubjectVideo } from "./_components/SubjectVideo/SubjectVideo";
import Separator from "@/components/Separator/Separator";
import { Testimonials } from "./_components/Testimonials/Testimonials";
import { Solutions } from "./_components/Solutions/Solutions";
import { Faq } from "../_components/Faq/Faq";
import { Pricing } from "../_components/Pricing/Pricing";
import { Hook } from "../_components/Hook/Hook";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <Hero />
      <SubjectVideo />
      <Separator />
      <Testimonials />
      <Separator />
      <Solutions />
      <Faq />
      <Pricing />
      <Hook />
      <Footer />
    </main>
  );
}
