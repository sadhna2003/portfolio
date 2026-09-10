"use client";
import React from "react";
export type SkillItem = {
    image: string;
    text: string;
};

export type Skills = {
    title: string;
    subtitle: string;
    items: SkillItem[];
    softskills: string[];
};

export type SkillsData = {
    skills: Skills;
};
export const TechStack = ({ data }: SkillsData) => {
    return (
        <section id="about" className="bg-primary">
            <div className="section-container">
                <div className="grid grid-cols-4 gap-6 w-full h-full items-center justify-center">
                    <div className="text-white h-full font-display font-semibold tracking-wider border-r-2 border-border">
                        <h2 className="text-7xl">{data.title}</h2>
                        <div className="h-px w-1/3 p-px rounded-full container bg-white mt-4"></div>
                    </div>

                    <div className="grid w-full col-span-2 grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 pr-5 border-r-2 border-border">
                         <h3 className="font-display font-medium text-2xl tracking-wider col-span-2 sm:col-span-4 lg:col-span-8 text-white">{data.subtitle}</h3>
                        {data.items.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="
              group
              flex
              items-center
              justify-center
              border-pink
              rounded-md
              p-4
              transition-all
              duration-300
              bg-white
            "
                            >
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div
                                     title={item.text}
                                        className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.text}
                                            className="h-8 w-8 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <ul className="flex h-full w-full flex-col items-start justify-normal gap-2 pr-3 font-body">
                        <h3 className="font-display font-medium text-2xl tracking-wider col-span-2 sm:col-span-4 lg:col-span-8 text-white">{data.subtitle2}</h3>
                        {data.softskills.map((item: string, index: number) => {
                            return (
                                <li key={index} className="font-medium inline-flex w-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 font-bold pr-2 text-pink"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    <span className="text-white">{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}