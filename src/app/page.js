import AboutMe from "@/components/About/about";
import Experience from "@/components/Experience/experience";
import Hero from "@/components/Hero/hero";
import Projects from "@/components/Projects/projects";
import Quote from "@/components/Quote/quote";
import MySkills from "@/components/Skills/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 overflow-x-hidden ">
      <Hero />
      <Quote />
      <AboutMe />
      <MySkills />
      <Projects />
      <Experience />
    </main>
  );
}
