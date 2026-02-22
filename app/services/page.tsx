import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABannerSection from "@/components/CTABannerSection";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services – Goa Event Architects",
    description:
        "Explore our full professional services across weddings, corporate events, cultural ceremonies, and social gatherings in Goa.",
};

const categories = [
    {
        title: "Weddings",
        description:
            "End-to-end wedding management with our signature Double-Team Strategy — one architect for the couple, one for vendors.",
        icon: "💍",
        href: "/contact",
    },

    {
        title: "Cultural & Religious",
        description:
            "Baptisms, Holy Communion, Ros Ceremonies, and Confirmations — honouring tradition with elegance and authentic Goan flair.",
        icon: "🌺",
        href: "/contact",
    },
    {
        title: "Social Gatherings",
        description:
            "Milestone birthdays, anniversary galas, and private parties crafted to authentically reflect your personal story and style.",
        icon: "🎉",
        href: "/contact",
    },
];

export default function ServicesPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <Header />
            <main>
                {/* ── Page Hero ─────────────────────────────────── */}
                <section className="pt-40 pb-20 bg-background-light relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
                    </div>
                    <div className="relative px-4 md:px-10 lg:px-20 max-w-7xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-5 font-display">
                            <span className="h-px w-8 bg-primary" />
                            What We Offer
                            <span className="h-px w-8 bg-primary" />
                        </div>
                        <h1 className="text-obsidian text-5xl md:text-6xl font-serif font-bold mb-5 tracking-tight">
                            Services &amp; Packages
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-display">
                            From intimate gatherings to large-scale productions, we bring Goa&apos;s finest professionals together under one roof.
                        </p>
                    </div>
                </section>

                {/* ── Service Category Cards ─────────────────── */}
                <section className="py-20 bg-white">
                    <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {categories.map(({ title, description, icon, href }) => (
                                <div
                                    key={title}
                                    className="group flex flex-col rounded-2xl border border-slate-100 p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-400 card-hoverable bg-white"
                                >
                                    <span className="text-4xl mb-5 block">{icon}</span>
                                    <h3 className="font-serif text-2xl text-obsidian mb-3">{title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-display flex-1 mb-6">
                                        {description}
                                    </p>
                                    <Link
                                        href={href}
                                        className="inline-flex items-center gap-2 text-primary text-sm font-bold font-display group-hover:gap-3 transition-all"
                                    >
                                        Book a Consultation
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────── */}
                <CTABannerSection />
            </main>
            <Footer />
        </div>
    );
}
