import data from "@/content/data.json";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Process } from "@/components/Process";
export default function Home() {
  return (
    <>
      <Hero data={data.hero} />
      <About data={data.about} />
      <TechStack data={data.skills}/>
      <Education data={data.education}/>
      <Process data={data.process}/>
      <Contact data={data.contact}/>
    </>
  );
}
