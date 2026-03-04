import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Hackathons from "@/components/portfolio/Hackathons";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Resume from "@/components/portfolio/Resume";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Certifications />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </>
  );
};

export default Index;
