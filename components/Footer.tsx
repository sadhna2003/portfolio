"use client"
import React from "react"
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full bg-primary">
            <div className="mx-auto flex md:flex-row flex-col w-full max-w-6xl jutify-center md:jutify-between items-center md:gap-4 px-6 py-4">
                {/* Logo / Name */}
                <div className="w-full md:w-[30%] md:border-r text-center md:text-left border-border px-8">
                    <span className="font-display  font-medium capitalize! text-white text-lg md:text-2xl">
                        Sadhna Singh
                    </span>
                </div>
                <div className="w-full flex flex-row justify-center md:justify-end gap-3 items-center">
                    <span className="font-body font-light text-white text-sm">
                        Thank you for visting!
                    </span>
                    <div className="text-red-500">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="red" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-heart">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                    </div>
                </div>

            </div>
        </footer>
    )
}