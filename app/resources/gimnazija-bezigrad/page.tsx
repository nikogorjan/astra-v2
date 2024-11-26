import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { Header } from "./_components/Header/Header";
import { List } from "./_components/List/List";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <Header />
      <List />
      <Footer />
    </main>
  );
}
