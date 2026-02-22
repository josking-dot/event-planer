import Link from "next/link";
import Image from "next/image";

export default function WeddingsFeatureSection() {
    return (
        <section id="weddings" className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] group">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM2NjTQAWYNttBsjg6eFbE3oZE-Qq0IfQ-rB9AwDUNuCaaIFiKp1SQXf1kCltnPekpUYstRfEdAOYFdTgftuV6gPqM0sYpBluPTsrzh_iHTzyrnDpwLzJshYB1wzB4erBjlwfDDeC7_QffJdWPlC2K_0p3PeUWo_jgLIBw6cNMrFrdHopW9-VXUv44pa1ZNr0h6THL6vhgeDmaDwCuYA4VnVLJkXM23MLWohdlWLoCzy_ueJ6CcrLmcoBCvcRpct0wKu5lUr0RjbGt"
                                alt="Bride and Groom walking on a Goa beach at sunset"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Glass overlay badge */}
                            <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/20 p-2 rounded-full text-primary">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-primary font-display">Signature Service</p>
                                        <p className="text-sm font-semibold text-obsidian font-display">Double-Team Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative border */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-2xl hidden lg:block" />
                    </div>

                    {/* Text side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-primary" />
                            <span className="text-primary font-bold tracking-widest text-sm uppercase font-display">Weddings</span>
                        </div>
                        <h2 className="font-serif text-4xl lg:text-6xl text-obsidian leading-tight mb-6">
                            Flawless Execution,<br />Double the Care.
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed font-display">
                            We believe one lead planner isn&apos;t enough for the most important day of your life. Our signature{" "}
                            <span className="text-primary font-semibold">Double-Team Management Strategy</span>{" "}
                            assigns two senior architects to every wedding.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "One dedicated to the couple & family needs.",
                                "One focused purely on vendor logistics & timeline.",
                                "Zero gaps in communication, absolute peace of mind.",
                            ].map((point) => (
                                <li key={point} className="flex items-start gap-3 font-display">
                                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                        <path d="M10 16.5l6-4.5-6-4.5v9z" fill="none" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm8.5 3.5 5-3.5-5-3.5v7z" fill="none" />
                                    </svg>
                                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span className="text-slate-600">{point}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/contact"
                            className="w-fit px-8 py-4 rounded-lg bg-obsidian text-white font-bold hover:bg-primary transition-colors flex items-center gap-2 font-display"
                        >
                            Plan Your Dream Wedding
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
