"use client"
import React from "react"
import Link from "next/link";
import { useState } from "react";


type NavItem = {
    label: string;
    link: string;
};

type MobileNavProps = {
    items: NavItem[];
};
const navItems = [
    {
        "label": "Home",
        "link": "#home"
    },
    {
        "label": "About",
        "link": "#about"
    },
    {
        "label": "Skills",
        "link": "#skills"
    },
    {
        "label": "Education",
        "link": "#education"
    },
    {
        "label": "Experience",
        "link": "#experience"
    },
    {
        "label": "Projects",
        "link": "#projects"
    },
    {
        "label": 'Work Style',
        "link": "#work-style"
    },
    {
        "label": "Contact",
        "link": "#contact"
    }
]

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-primary">
            <nav className="mx-auto flex w-full max-w-6xl lg:justify-normal jutify-between items-center gap-4 px-6 py-4">

                {/* Logo / Name */}
                <div className="w-full lg:w-[30%] border-l border-border px-8">
                    <span className="font-display font-medium capitalize! text-white text-2xl">
                        Sadhna Singh
                    </span>
                </div>

                {/* Navigation */}
                <ul className="hidden lg:flex w-full items-center justify-end gap-6">
                    {navItems.map((item) => (
                        <li key={item.link}>
                            <Link
                                href={item.link}
                                className="font-body text-sm font-normal uppercase text-white transition-opacity hover:opacity-70"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Mobile Navigation */}
                <MobileNav items={navItems} />
            </nav>
        </header>
    );
};


export const MobileNav = ({ items }: MobileNavProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="lg:hidden">
            {/* Menu Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="flex h-10 w-10 items-center cursor-pointer justify-center border border-border text-white"
            >
                {isOpen ? (
                    <span className="text-2xl leading-none">×</span>
                ) : (
                    <span className="flex flex-col gap-1.5">
                        <span className="block h-px w-5 bg-white" />
                        <span className="block h-px w-5 bg-white" />
                        <span className="block h-px w-5 bg-white" />
                    </span>
                )}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute left-0 top-full w-full border-t border-border bg-primary">
                    <ul className="mx-auto max-w-6xl px-6 py-6">
                        {items.map((item, index) => (
                            <li
                                key={item.link}
                                className="border-b border-border last:border-b-0"
                            >
                                <Link
                                    href={item.link}
                                    onClick={handleLinkClick}
                                    className="
      group
      flex
      items-center
      justify-between
      px-3
      py-4
      font-body
      text-base
      text-white
      transition-all
      duration-300
      hover:bg-pink
      hover:text-primary
    "
                                >
                                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                                        {item.label}
                                    </span>

                                    <span
                                        className="
        text-xl
        transition-transform
        duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
                                    >
                                        ↗
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};