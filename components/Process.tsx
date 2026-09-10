"use client";
import React from "react";

export const Process = ({ data }: any) => {
    return (
        <section id="work-style" className="bg-primary">
            <div className="section-container">
                <div className="grid grid-cols-3 gap-6 w-full h-full items-center justify-center">
                    <div className="text-white h-full font-display font-semibold tracking-wider border-r-2 border-border">
                        <h2 className="text-7xl">{data.title}</h2>
                        <div className="h-px w-1/3 p-px rounded-full container bg-white mt-4"></div>
                    </div>

                    <div className="flex flex-row col-span-2 gap-3 justify-between items-center h-full w-full ">
                        {data.process.map((item: any, index: number) => (
                            <div className="flex flex-col items-start justify-center w-full h-full gap-3">
                                <div className="flex flex-row gap-2 items-center w-full h-full">
                                    <div
                                        key={index}
                                        className="flex items-center justify-center border-pink rounded-full w-14 h-14 font-medium text-primary transition-all duration-300 bg-pink">


                                        0{index + 1}

                                    </div>
                                    {/* {index !== 4 &&
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
                                            className="h-5 w-20 text-peach"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    } */}
                                </div>
                                <h3 className="text-white font-medium text-base font-body">{item.text}</h3>
                                 <p className="text-white/50 font-normal text-base font-body">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}