import Link from "next/link";

const services = [
    { name: "Professional Bar Services", emoji: "🍹" },
    { name: "Cinematography & Photography", emoji: "🎬" },
    { name: "Fashion Stylists", emoji: "✂️" },
    { name: "Live DJ & Bands", emoji: "🎵" },
    { name: "Decor & Floral (Bouquets)", emoji: "🌸" },
    { name: "Emcee & Event Hosting", emoji: "🎤" },
    { name: "Custom Invite Cards", emoji: "✉️" },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2 font-display">
                            The Network
                        </h2>
                        <h3 className="font-serif text-4xl md:text-5xl text-obsidian">
                            Our Professional Network
                        </h3>
                    </div>
                    <p className="text-slate-500 max-w-md text-sm leading-relaxed font-display">
                        Every element of your event, curated and managed by Goa&apos;s finest specialists — all under one roof.
                    </p>
                </div>

                {/* 4-column service grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {services.map((item) => (
                        <div
                            key={item.name}
                            className="group p-6 border border-slate-100 rounded-2xl hover:bg-background-light hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-default"
                        >
                            <span className="text-2xl mb-4 block">{item.emoji}</span>
                            <p className="font-semibold text-slate-700 text-sm leading-snug font-display group-hover:text-obsidian transition-colors">
                                {item.name}
                            </p>
                        </div>
                    ))}

                    {/* CTA card */}
                    <div className="p-6 rounded-2xl bg-obsidian flex flex-col justify-between group card-hoverable">
                        <p className="font-semibold text-white/70 text-sm font-display mb-4">
                            Need something bespoke?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 text-primary text-sm font-bold font-display group-hover:gap-2 transition-all"
                        >
                            Get a quote
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
