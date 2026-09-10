import Image from "next/image";
import data from "@/content/data.json";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Education } from "@/components/Education";
export default function Home() {
  return (
    <>
      <Hero data={data.hero} />
      <About data={data.about} />
      <TechStack data={data.skills}/>
      <Education data={data.education}/>
    </>
  );
}
