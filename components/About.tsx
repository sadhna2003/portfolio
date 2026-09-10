"use client";
import React from "react";
export type About = {
    title: string;
    subtitle: string;
    description: string;
    location: string;
    highlight: string[];
};
export const About = ({ data }: About) => {
    return (
        <section id="about" className="bg-background">
            <div className="section-container">
                <div className="grid grid-cols-3 gap-6 w-full h-full items-center justify-center">
                    <div className="text-primary-dark h-full font-display font-semibold tracking-wider border-r-2 border-border">
                        <h2 className="text-7xl">{data.title}</h2>
                    </div>
                    <div className="flex flex-col pr-3 gap-4 w-full h-full justify-normal items-start border-r-2 border-border">
                        <h3 className="font-display font-semibold text-4xl tracking-wider">{data.subtitle}</h3>
                        <p className="font-body font-normal text-text-muted">{data.description}</p>
                        <div className="flex flex-row gap-2 w-full items-center justify-normal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-7 h-7"
                            ><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="italic font-normal">{data.location}</span>
                        </div>

                    </div>
                    <ul className="flex h-full w-full flex-col items-start justify-normal gap-2 pr-3 font-body">
                        {data.highlight.map((item: string, index: number) => {
                            return (
                                <li key={index} className="font-medium inline-flex w-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 font-bold pr-2 text-primary-dark"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    <span className="text-text-muted">{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}