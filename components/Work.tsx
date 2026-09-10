"use client";
import React from "react";

export const Work = ({ data }: any) => {
    return (
        <section id="experience" className="bg-primary">
            <div className="section-container">
                <div className="grid grid-cols-3 gap-6 w-full h-full items-center justify-center">
                    <div className="text-white h-full font-display font-semibold tracking-wider border-r-2 border-border">
                        <h2 className="text-7xl">{data.title}</h2>
                        <div className="h-px w-1/3 p-px rounded-full container bg-white mt-4"></div>
                    </div>

                    <div className="flex flex-row gap-3 justify-between items-center h-full w-full ">

                    </div>

                    <div className="flex flex-row w-full items-end justify-center font-hand overflow-hidden">
                        <div className="bg-pink w-40 h-64 mb-12 rounded-t-full border border-white translate-x-24 flex flex-col items-center justify-center">
                          <img
                           src={data.image}
                           alt="image"
                           className="w-full h-full object-cover rounded-t-full"
                          />
                        </div>
                         <div className="bg-pink w-40 h-80 rounded-b-full border border-pink p-0.5 flex flex-col items-center justify-end">
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}