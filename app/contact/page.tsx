import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
    title: "Contact – Goa Event Architects",
    description: "Get in touch to start planning your dream event in Goa. Free 20-minute consultation call available.",
};

export default function ContactPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-40 pb-20 bg-background-light relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
                    </div>
                    <div className="relative px-4 md:px-10 lg:px-20 max-w-7xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-5 font-display">
                            <span className="h-px w-8 bg-primary" />
                            Get In Touch
                            <span className="h-px w-8 bg-primary" />
                        </div>
                        <h1 className="text-obsidian text-5xl md:text-6xl font-serif font-bold mb-5 tracking-tight">
                            Plan Your Event
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-display">
                            Let&apos;s start with a free 20-minute consultation. Tell us about your vision and we&apos;ll craft the perfect plan.
                        </p>
                    </div>
                </section>

                {/* Contact Info + Form */}
                <section className="py-16 bg-white">
                    <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
                        {/* Info panel */}
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <div>
                                <h2 className="font-serif text-3xl text-obsidian mb-4">Miramar, Panjim, Goa</h2>
                                <p className="text-slate-500 text-sm leading-relaxed font-display">
                                    We&apos;re available Monday to Saturday, 9am – 7pm IST. Response time is within one business day.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {[
                                    {
                                        icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                        ),
                                        label: "Phone",
                                        value: "+91 98765 43210",
                                    },
                                    {
                                        icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                        ),
                                        label: "Email",
                                        value: "hello@goaevents.com",
                                    },
                                    {
                                        icon: (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                        ),
                                        label: "Location",
                                        value: "Miramar, Panjim, Goa 403001",
                                    },
                                ].map(({ icon, label, value }) => (
                                    <div key={label} className="flex items-start gap-4 p-5 rounded-xl bg-background-light border border-slate-100">
                                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">{icon}</div>
                                        <div>
                                            <p className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-0.5 font-display">{label}</p>
                                            <p className="text-sm font-semibold text-obsidian font-display">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <ContactSection />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
