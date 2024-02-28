import Image from "next/image";
import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import SkillText from "./components/sub/SkillText";
import Projects from "./components/main/Projects";
import ProjectCard from "./components/sub/Projectcard";
import Encryption from "./components/main/Encryption";
import Footer from "./components/main/About_me";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20"> 
     <Hero/>
     <SkillText/>
     <Skills/>
     <Encryption/>
     <Projects/>
     </div>
     
    </main>
  );
}
