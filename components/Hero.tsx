"use client";
import Link from "next/link";
type Heroprop = {
    highlight: string;
    bottomText: string;
    title: string;
    description: string;
    image: {
        url: string;
        alt: string;
    };
    cta: {
        link: string;
        text: string;
    };

}

export const Hero = ({data}:{data : Heroprop}) => {
    return (
        <section className="bg-primary" id="home">
            <div className="section-container h-full">
                <div className="grid lg:grid-cols-3 gap-8 w-full h-full items-center">
                    <div className="flex flex-col justify-normal p-6 text-white gap-4 w-full h-full">
                        <p className="font-body font-medium text-lg tracking-wide ">{data.highlight}</p>
                        <h1 className="text-9xl font-display font-bold">{data.title}</h1>
                        <p className="font-body font-medium text-lg tracking-wide">{data.bottomText}</p>
                        <div className="h-px w-1/5 p-px rounded-full container bg-white"></div>
                    </div>

                    <div className="bg-pink h-full lg:h-9/10 rounded-full lg:rounded-none lg:rounded-b-full border border-pink p-0.5 flex flex-col items-center justify-end">
                        <img
                            src={data.image.url}
                            alt={data.image.alt}
                            className="w-full h-full lg:h-11/12 object-cover rounded-full lg:rounded-b-full mix-blend"
                        />
                    </div>
                    <div className="flex flex-col justify-normal p-6 text-white gap-6 w-full h-full">
                        <p className="font-body font-normal text-lg tracking-wide ">{data.description}</p>
                       <div className="h-px w-1/5 p-px rounded-full container bg-white"></div>
                        <Link
                            href={data.cta.link}
                            className="
    group
    inline-flex
    w-fit
    items-center
    gap-3
    rounded-full
    border
    border-border
    px-6
    py-2
    transition-all
    duration-300
    hover:border-pink
    hover:bg-pink
    hover:text-primary
  "
                        >
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                {data.cta.text}
                            </span>

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
                                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}