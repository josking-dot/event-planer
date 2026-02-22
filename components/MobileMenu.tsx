"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="md:hidden p-2 text-obsidian"
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {open && (
                <div className="absolute top-20 left-0 right-0 glass-panel border-t border-white/20 py-6 px-6 flex flex-col gap-4 md:hidden">
                    {[
                        { label: "Home", href: "/" },
                        { label: "Services", href: "/services" },
                        { label: "Portfolio", href: "/portfolio" },
                        { label: "Contact", href: "/contact" },
                    ].map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="text-sm font-bold text-obsidian hover:text-primary transition-colors font-display"
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="flex h-10 px-6 w-fit items-center justify-center rounded-lg bg-primary text-white text-sm font-bold transition-all"
                    >
                        Plan Your Event
                    </Link>
                </div>
            )}
        </>
    );
}
