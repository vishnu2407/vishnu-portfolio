import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";


export default function Home() {
  return (
  <>
    <HeroSection />
    <AboutMe />
    <MySkills />
    <MyPortfolio />
    <ContactMe />
    </>
  );
}
