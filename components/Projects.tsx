"use client";
import React from "react";

export const Projects = ({ data }: any) => {
    return (
        <section id="projects" className="bg-background">
            <div className="section-container">
                <div className="grid lg:grid-cols-3 gap-6 w-full h-full items-center justify-center">
                    <div className="text-primary-dark h-full font-display font-semibold tracking-wider lg:border-r-2 border-border">
                        <h2 className="text-7xl">{data.title}</h2>
                        <div className="h-px w-1/3 p-px rounded-full container bg-primary-dark mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 h-full w-full flex-row items-center justify-between gap-3">
                        {data.items.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="flex flex-row gap-3 w-full h-full border border-border shadow-xl p-6 rounded items-start justify-between"
                            >
                                <div className="space-y-2">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <div className="flex flex-row flex-wrap text-primary justfiy-normal gap-2">
                                      {item.techStack.map((i:any,index:number)=>{
                                        return(
                                        <span className="border border-peach rounded p-1 font-medium bg-peach/30 text-xs">{i}</span>
                                        )
                                      })}
                                    </div>
                                    <p className="font-normal text-sm">{item.description}</p>
                                </div>
                             
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section >
    )
}