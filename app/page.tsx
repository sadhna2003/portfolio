import Image from "next/image";
import data from "@/content/data.json";
import {Hero} from "@/components/Hero";
export default function Home() {
  return (
   <>
   <Hero data = {data.hero}/>
   </>
  );
}
