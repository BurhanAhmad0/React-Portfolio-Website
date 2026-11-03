import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Work from "../components/Work.jsx";
import Process from "../components/Process.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import FinalCta from "../components/FinalCta.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
