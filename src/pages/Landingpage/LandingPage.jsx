import Header from "../../components/Landing Page/Header.jsx";
import AboutSection from "../../components/Landing Page/AboutSection.jsx";
import SkillSection from "../../components/Landing Page/SkillSection.jsx";
import Testimonials from "../../components/Landing Page/Testimonials.jsx";
import ProjectSection from "../../components/Landing Page/ProjectSection.jsx";
import Footer from "../../components/Landing Page/Footer.jsx";

import { PiStarFourFill } from "react-icons/pi";

function LandingPage() {
  return (
    <>
      <Header />

      <section className="infiniteScrollAnim bg-secondary h-27 flex items-center justify-center gap-10 overflow-hidden whitespace-nowrap">
        <div className="icon">
          <PiStarFourFill size={50} color="brown" />
        </div>
        <h3 className="text-5xl text-black font-bold">Frontend</h3>
        <div className="icon">
          <PiStarFourFill size={50} color="brown" />
        </div>
        <h3 className="text-5xl text-black font-bold">Backend</h3>
        <div className="icon">
          <PiStarFourFill size={50} color="brown" />
        </div>
        <h3 className="text-5xl text-black font-bold">UI/UX</h3>
        <div className="icon">
          <PiStarFourFill size={50} color="brown" />
        </div>
        <h3 className="text-5xl text-black font-bold">Responsive Design</h3>
        <div className="icon">
          <PiStarFourFill size={50} color="brown" />
        </div>
      </section>

      <AboutSection />
      <SkillSection />
      <Testimonials />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default LandingPage;
