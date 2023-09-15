import AboutMe from "@/components/About/about";
import Experience from "@/components/Experience/experience";
import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/navbar";
import Projects from "@/components/Projects/projects";
import MySkills from "@/components/Skills/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <MySkills />
      <Projects />
      <Experience />
    </main>
  );
}
