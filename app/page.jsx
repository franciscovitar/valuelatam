// app/page.jsx (o src/app/page.jsx)
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Solutions from "../components/Solutions";
import Steps from "../components/Steps";
import WhyUs from "../components/WhyUs";
import ResearchBlock from "../components/ResearchBlock";
import CaseStudies from "../components/CaseStudies";
import TeamPreview from "../components/TeamPreview";
import FAQ from "../components/FAQ";
import CTAContact from "../components/CTAContact";

export default function Page() {
  return (
    <>
      <Hero />
      {/* <TrustBar /> */}
      <Solutions />
      {/* <Steps /> */}

      {/* <ResearchBlock /> */}
      {/* <CaseStudies /> */}
      {/* <WhyUs /> */}
      <TeamPreview />
      {/* <FAQ /> */}
      <CTAContact />
    </>
  );
}
