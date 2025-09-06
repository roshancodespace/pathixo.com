import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}
