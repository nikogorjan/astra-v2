import { Footer } from "@/components/Footer/Footer";
import { Lines } from "@/components/Lines/Lines";
import { Navbar5 } from "@/components/Navbar/Navbar5";
import { Hero } from "./_components/Hero/Hero";
import { Donors } from "./_components/Donors/Donors";
import Separator from "@/components/Separator/Separator";
import { AllDonors } from "./_components/AllDonors/AllDonors";
import { PartnersVideo } from "./_components/PartnersVideo/PartnersVideo";
import { NumberOfDonations } from "./_components/NumberOfDonations/NumberOfDonations";
import { Donate } from "./_components/Donate/Donate";
import { Individuals } from "./_components/Individuals/Individuals";

export default function Home() {
  return (
    <main>
      <Lines />
      <Navbar5 />
      <Hero />
      <Donors />
      <Separator />
      <AllDonors />
      <PartnersVideo />
      <NumberOfDonations />
      <Separator />
      <Donate />
      <Individuals />
      <Footer />
    </main>
  );
}
