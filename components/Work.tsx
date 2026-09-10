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

                    <div className="flex col-span-2 h-full w-full flex-row items-center justify-between gap-3">
                        {data.items.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="flex h-full w-full flex-col text-white justify-between"
                            >
                                {/* Company */}
                                <div>
                                    <h3 className="font-display text-4xl uppercase">
                                        {item.company}
                                    </h3>

                                    <p className="mt-1 text-sm text-white font-body">
                                        {item.location}
                                    </p>
                                </div>

                                {/* Roles */}
                                <div className="mt-4 space-y-2">
                                    {item.roles.map((role: any, roleIndex: number) => (
                                        <div
                                            key={roleIndex}
                                            className="flex items-start justify-between gap-6 border-b border-primary/20 pb-4"
                                        >
                                            <div>
                                                <h4 className="text-sm font-semibold">
                                                    {role.designation}
                                                </h4>

                                                <p className="mt-1 text-xs text-white font-body">
                                                    {role.type}
                                                </p>
                                            </div>

                                            <span className="shrink-0 text-xs text-white">
                                                {role.duration}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
                                    {item.description}
                                </p>

                                {/* Responsibilities */}
                                <div className="mt-4">
                                    <ul className="space-y-2 list-disc pl-3">
                                        {item.responsibilities.map((responsibility: any, responsibilityIndex: number) => (
                                            <li
                                                key={responsibilityIndex}
                                                className="text-sm leading-relaxed text-white/60"
                                            >
                                                       <span>{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="flex flex-row w-full items-end justify-center font-hand overflow-hidden">
                        <div className="bg-pink w-40 h-64 mb-12 rounded-t-full border border-white translate-x-24 flex flex-col items-center justify-center">
                            <img
                                src={data.image}
                                alt="image"
                                className="w-full h-full object-cover rounded-t-full"
                            />
                        </div>
                        <div className="bg-pink w-40 h-80 rounded-b-full border border-pink p-0.5 flex flex-col items-center justify-end">
                        </div>
                    </div> */}

                </div>
            </div>
        </section >
    )
}