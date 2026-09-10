import data from "@/content/data.json";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
export default function Home() {
  return (
    <>
      <Hero data={data.hero} />
      <About data={data.about} />
      <TechStack data={data.skills}/>
      <Education data={data.education}/>
      <Work data={data.experience}/>
      <Projects data={data.projects}/>
      <Process data={data.process}/>
      <Contact data={data.contact}/>
    </>
  );
}
