import Link from "next/link";
export type ContactSocial = {
    icon: string;
    label: string;
    link: string;
};

export type Contact = {
    title: string;
    description: string;
    cta: {
        text: string;
        link: string;
    };
    socials: ContactSocial[];
    decorativeText: string;
};

export const Contact = ({ data }: Contact) => {
    return (
        <section
            id="contact"
            className="bg-background"
        >
            <div className="section-container">
                <div className="grid grid-cols-3 gap-6 w-full h-full items-center justify-center">

                    {/* Title */}
                    <div className="text-white h-full font-display font-semibold tracking-wider border-r-2 border-border">
                        <h2 className="text-7xl text-primary-dark">{data.title}</h2>
                        <div className="h-px bg-primary-dark w-1/3 p-px rounded-full container mt-4"></div>
                    </div>


                    {/* Description + CTA */}
                    <div className="flex flex-col justify-between h-full border-border border-r">
                        <p className="max-w-xs font-body leading-relaxed text-text-muted">
                            {data.description}
                        </p>

                        <Link
                            href={data.cta.link}
                            className="group mt-5 flex w-fit items-center gap-3 rounded-full bg-pink px-5 py-2.5 font-body font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-peach"
                        >
                            <img
                                src="/mail.svg"
                                alt=""
                                width={18}
                                height={18}
                                className="h-[18px] w-[18px]"
                            />

                            <span>{data.cta.text}</span>

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

                    {/* Social Links */}
                    <div className="flex flex-row gap-3 w-full justify-between items-start">
                        <div className="flex flex-col justify-center gap-4">
                            {data.socials.map((social: ContactSocial) => (
                                <Link
                                    key={social.label}
                                    href={social.link}
                                    target={social.link.startsWith("http") ? "_blank" : undefined}
                                    rel={
                                        social.link.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="group flex items-center gap-4 font-body text-sm text-text-muted transition-colors duration-300 hover:text-primary"
                                >
                                    <img
                                        src={social.icon}
                                        alt=""
                                        width={22}
                                        height={22}
                                        className="h-[22px] w-[22px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />

                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        {social.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 160 160">
                            <rect width="160" height="160" fill="none" className=""/>
                            <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
                                <path d="M48 34 L61 11" />
                                <path d="M67 40 L76 14" />
                                <path d="M88 43 L98 18" />
                                <path d="M104 57 L126 40" />
                                <path d="M109 78 L137 69" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};