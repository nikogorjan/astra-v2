import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { Header } from "./_components/Header/Header";
import { Schools } from "./_components/Schools/Schools";
import Separator from "@/components/Separator/Separator";
import { Subjects } from "./_components/Subjects/Subjects";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <Header />
      <Schools />
      <Separator />
      <Subjects />
      <Footer />
    </main>
  );
}
