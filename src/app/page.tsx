import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import SelectedWorksGrid from "@/components/SelectedWorksGrid";
import Services from "@/components/Services";
import CtrlDifference from "@/components/CtrlDifference";
import FinalCta from "@/components/FinalCta";

export default function Page() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SelectedWorksGrid />
      <Services />
      <CtrlDifference />
      <FinalCta />
    </>
  );
}
