import { Hero } from "./_components/Hero/Hero";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { Testimonials } from "./_components/Testimonials/Testimonials";
import { Classes } from "./_components/Classes/Classes";
import { HowItWorks } from "./_components/HowItWorks/HowItWorks";
import { Stats } from "./_components/Stats/Stats";
import { Tutor } from "./_components/Tutor/Tutor";
import { Trusted } from "./_components/Trusted/Trusted";
import { Solutions } from "./_components/Solutions/Solutions";
import { Pricing } from "./_components/Pricing/Pricing";
import { Finals } from "./_components/Finals/Finals";
import { Faq } from "./_components/Faq/Faq";
import { Hook } from "./_components/Hook/Hook";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <Hero />
      <Testimonials />
      <Classes />
      <HowItWorks />
      <Stats />
      <Tutor />
      <Trusted />
      <Solutions />
      <Pricing />
      <Finals />
      <Faq />
      <Hook />
      <Footer />
    </main>
  );
}
