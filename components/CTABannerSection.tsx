import Link from "next/link";

export default function CTABannerSection() {
    return (
        <section className="relative py-28 px-6 bg-obsidian text-center overflow-hidden">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(183,134,11,0.3)_0%,_transparent_70%)]" />
            <div className="relative z-10 max-w-3xl mx-auto">
                {/* Diamond icon */}
                <div className="mb-6 flex justify-center text-primary">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5L2 9l10 12L22 9l-3-6zm-8.5 11.5L4.21 9h3.69l2.6 5.5zm2 0L10.1 9h3.8l-1.4 5.5zM9.63 7l1.37-2h2l1.37 2H9.63zM15.1 9h3.69L12.5 14.5 15.1 9z" />
                    </svg>
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
                    Ready to Architect<br />Your Memory?
                </h2>
                <p className="text-slate-400 text-lg mb-10 font-display">
                    From the first sketch to the final toast, we are with you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 font-display"
                    >
                        Start Planning Now
                    </Link>
                    <Link
                        href="/portfolio"
                        className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-lg hover:bg-white hover:text-obsidian transition-colors font-display"
                    >
                        View Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
