"use client"
import React from "react";

export type Education = {
    title: string;
    decorativeText: string;
    education: {
        degree: string;
        duration: string;
        college: string;
        cgpa: string;
        description: string;
    };
};
export const Education = ({ data }: { data: Education }) => {
    return (
        <section id="education" className="bg-background">
            <div className="section-container">
                <div className="grid lg:grid-cols-3 gap-6 w-full h-full items-center justify-center">
                    <div className="text-primary-dark h-full font-display font-semibold tracking-wider lg:border-r-2 border-border">
                        <h2 className="text-7xl">{data.title}</h2>
                        <div className="h-px w-1/3 p-px rounded-full container bg-primary-dark mt-4"></div>
                    </div>

                    <div className="flex flex-col gap-3 w-full h-full">
                        <p className="text-lg font-semibold tracking-tight text-primary-dark">{data.education.degree}</p>
                        <p className="font-normal tracking-tight text-text-muted">{data.education.college}</p>
                        <p className="font-medium tracking-tight text-text-muted">CGPA: {data.education.cgpa}</p>
                        <p className="font-medium tracking-tight text-text-muted">{data.education.duration}</p>
                        <p className="font-normal tracking-tight text-text-muted">{data.education.description}</p>
                    </div>
                    <div className="flex flex-row w-full items-end justify-end font-hand overflow-hidden">
                        <div className="bg-pink w-64 h-80 rounded-t-full border border-pink p-0.5 flex flex-col items-center justify-end">
                            <div
                                className="w-full flex flex-col justify-center items-center h-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-24 h-24 text-primary">
                                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                </svg>
                                <p className="text-3xl w-20 -rotate-30 font-semibold tracking-wider italic text-primary mx-auto">{data.decorativeText}</p>
                                <div className="h-px w-12 translate-x-7 p-px -rotate-30 rounded-full container bg-primary-dark mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}