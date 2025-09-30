
import About from "./components/About";
import Hero from "./components/Hero";
import ScrollingBanner from "./components/Marque";


import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import WorkWithMe from "./components/WorkWithMe";

export default function Home() {
  return (
   <div className="bg-amber-50 font-raleway">
    <Hero/>
    
    <About/>
    <Skills/>
    <Projects/>
    <Testimonials/>
    <WorkWithMe/>
    
   </div>
  );
}
