import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { SubjectsList } from "./_components/SubjectsList/SubjectsList";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <SubjectsList />
      <Footer />
    </main>
  );
}
