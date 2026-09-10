import Image from "next/image";
import data from "@/content/data.json";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
export default function Home() {
  return (
    <>
      <Hero data={data.hero} />
      <About data={data.about} />
    </>
  );
}
