
import About from "./components/About";
import Hero from "./components/Hero";


import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkWithMe from "./components/WorkWithMe";

export default function Home() {
  return (
   <div className="bg-amber-50">
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    
    <WorkWithMe/>
   </div>
  );
}
