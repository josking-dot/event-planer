import Link from "next/link";

export default function HeroSection() {
    return (
        <header className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Ken Burns Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center animate-[kenBurns_20s_ease-out_infinite_alternate]"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmBWSLIF-jxNbu5ACmeE0yQ9z1nL9hMmWLfpByzB-QkLDujsA941evmtJYT64YNOln_fNZYlJ0gn6fgXMvd5QdivTIR3sSpWoU9AQw0t2Q_159Fn4e8I5JSzsrTc6JX_b3Knk1ZAVia7rFq8W_PqNIfGbdzevF9fzElcGNn9Cb1ciHQ1BKj0zU4qhK8gEF7wj2eAWixgO9D6wTCUYGsq3UFo2btuVxAXJCvxxhJupE3ohyHIVwFOBLsa6_Rs4ql16o8EXtgGJGnv2i')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background-light" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 font-display">
                    Est. 2014 • Goa, India
                </span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] mb-6 drop-shadow-xl">
                    Goa&apos;s Premier<br />Event Architects
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed font-display">
                    Orchestrating unforgettable moments on the golden shores with precision, grace, and coastal professionalism.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/portfolio"
                        className="h-12 px-8 rounded-lg bg-white text-obsidian hover:bg-gray-50 font-bold transition-colors font-display flex items-center justify-center"
                    >
                        Explore Our Portfolio
                    </Link>
                    <Link
                        href="/contact"
                        className="h-12 px-8 rounded-lg border border-white/30 bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 font-bold transition-colors flex items-center justify-center gap-2 font-display"
                    >
                        {/* Play icon */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Plan Your Event
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
                <span className="text-xs uppercase tracking-widest font-display">Scroll</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 19l-7-7 1.41-1.41L12 16.17l5.59-5.59L19 12l-7 7z" />
                </svg>
            </div>
        </header>
    );
}
