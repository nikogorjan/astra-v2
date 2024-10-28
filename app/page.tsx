import { Hero } from "./_components/Hero/Hero";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";

export default function Home() {
  return (
    <main>
      <Lines />
      {/*<Banner />*/}
      <Navbar5 />
      <Hero />
    </main>
  );
}
