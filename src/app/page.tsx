import { HeroHomepage } from "@/components/hero-homepage";
import { InfoHomepage } from "@/components/info-homepage";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroHomepage />
      <InfoHomepage />
      <Testimonials />
    </>
  );
}
