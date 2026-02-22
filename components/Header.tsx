import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/20">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="text-primary">
                        {/* Temple / lotus icon */}
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                        </svg>
                    </div>
                    <h1 className="text-lg font-bold tracking-tight text-obsidian uppercase font-display">
                        Goa Event Architects
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { label: "Home", href: "/" },
                        { label: "Services", href: "/services" },
                        { label: "Portfolio", href: "/portfolio" },
                        { label: "Contact", href: "/contact" },
                    ].map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="text-sm font-medium text-obsidian hover:text-primary transition-colors font-display"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* CTA + Mobile */}
                <div className="flex gap-4 items-center">
                    <Link
                        href="/contact"
                        className="hidden sm:flex h-10 px-6 items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-lg shadow-primary/20 font-display"
                    >
                        Plan Your Event
                    </Link>
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}
