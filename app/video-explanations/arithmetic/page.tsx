import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { SubjectsData } from "./_components/subjectData/subjectData";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <SubjectsData />
      <Footer />
    </main>
  );
}
