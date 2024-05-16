import Script from "next/script";
import FlyingInformations from "./_components/UI/FlyingInformations";
import StartUpAnimation from "./_components/UI/StartUpAnimation";
import HeroSection from "./_components/UI/HeroSection";
import BentoSection from "./_components/UI/BentoSection";
import Skills from "./_components/UI/Skills";
import CVSection from "./_components/UI/CVSection";

export default function Home() {
  return (
    <>
      {/* <FlyingInformations/> */}
      {/* <HeroSection/> */}
      <p className="text-3xl font-bold my-8">Tobias Meyhöfer</p>
      <p className="font-light">Junior Web Developer</p>
      {/* <CVSection/>
      <Skills/> */}
      {/* <BentoSection/> */}
      {/* <StartUpAnimation/> */}
    </>
  );
}
