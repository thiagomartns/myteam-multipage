import { CallToAction } from "@/components/call-to-action";
import { HeroHomepage } from "@/components/pages/home/components/hero-homepage";
import { InfoHomepage } from "@/components/pages/home/components/info-homepage";
import { Testimonials } from "@/components/pages/home/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroHomepage />
      <InfoHomepage />
      <Testimonials />
      <CallToAction />
    </>
  );
}
