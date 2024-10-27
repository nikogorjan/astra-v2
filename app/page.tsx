import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "./_components/Hero/Hero";
import { Lines } from "@/components/Lines/Lines";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar />
      <Hero />
    </main>
  );
}
