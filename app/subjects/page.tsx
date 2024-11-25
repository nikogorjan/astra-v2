import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { Hero } from "./_components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <Hero />
      <Footer />
    </main>
  );
}
