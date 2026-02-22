import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CTABannerSection from "@/components/CTABannerSection";
import Link from "next/link";
import Image from "next/image";

// ── Stats Strip ─────────────────────────────────────────────
const stats = [
  { value: "10+", label: "Years in Goa" },
  { value: "500+", label: "Events Hosted" },
  { value: "7", label: "Service Verticals" },
  { value: "98%", label: "Client Satisfaction" },
];

// ── Teaser Service Cards (4 of 7) ───────────────────────────
const teaserServices = [
  { name: "Professional Bar Services", emoji: "🍹" },
  { name: "Cinematography & Photography", emoji: "🎬" },
  { name: "Decor & Floral Bouquets", emoji: "🌸" },
  { name: "Live DJ & Bands", emoji: "🎵" },
];

// ── Portfolio Teaser Images ─────────────────────────────────
const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM2NjTQAWYNttBsjg6eFbE3oZE-Qq0IfQ-rB9AwDUNuCaaIFiKp1SQXf1kCltnPekpUYstRfEdAOYFdTgftuV6gPqM0sYpBluPTsrzh_iHTzyrnDpwLzJshYB1wzB4erBjlwfDDeC7_QffJdWPlC2K_0p3PeUWo_jgLIBw6cNMrFrdHopW9-VXUv44pa1ZNr0h6THL6vhgeDmaDwCuYA4VnVLJkXM23MLWohdlWLoCzy_ueJ6CcrLmcoBCvcRpct0wKu5lUr0RjbGt",
    alt: "Beachside Wedding",
    label: "Weddings",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeWWbnWB8B1i9zUk6eAcJslU45rtL7VOQ-n5sjVYGoKLdVZVCOD-GMEfkXRRazql1upVuRGarHMQfmPkK_wsj9jKFyag6lWafRoBjYQ9qbbwAMfhqkJrGG1rJjq7JqEKy8F3PTad5r2nHhtPC1kHHcyohdktz2_61_H3GTGWrfrfYLOKMiaeq75gOuRdRQZ79KXWWpJWDHUQkYA5jBT1SVAnr7b5ajpkWp5OjbWJAMY-AdK-t3C-qRCTgACti_EGukAzvqHMXrEitG",
    alt: "Ros Ceremony",
    label: "Cultural",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXmo3cATka17htzwd_Hvkuhqn_mAx9sKtZNDsKtiCvfIUaundiDOLT9gNxxBamUGrIbPp2ekxslmvZOMDWO821DbVzVnJsTl0SlBun94q_-54tPfe9z4KKz_eF9OFMK4YcWGivceyA97VLzWIwHnkWYbR-yFWhyBgG-MO4tcvsOOcm7h5ys1vzP55mLHZXgr7wTBsWMuFzM1f0xYlWoz9gLwYbhsOp7bg3hLVtIEqOvebYbKIy1wqhl7z5SvLEXtWM9XnpOW6EFPNo",
    alt: "Baptism Celebration",
    label: "Religious",
  },
];

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      {/* ── Hero ─────────────────────────────────────── */}
      <HeroSection />

      {/* ── Main content lifts over hero ─────────────── */}
      <main className="relative z-20 -mt-20 pt-20 bg-background-light rounded-t-[2.5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">

        {/* ── Stats Strip ────────────────────────────── */}
        <section className="py-12 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-4xl font-bold text-primary mb-1">{value}</p>
                <p className="text-slate-500 text-sm font-display">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services Teaser ────────────────────────── */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2 font-display">
                What We Do
              </h2>
              <h3 className="font-serif text-4xl text-obsidian">Our Services</h3>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all font-display"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {teaserServices.map(({ name, emoji }) => (
              <div
                key={name}
                className="group p-6 border border-slate-100 rounded-2xl hover:bg-white hover:border-primary/20 hover:shadow-md transition-all duration-300 bg-white card-hoverable"
              >
                <span className="text-2xl mb-4 block">{emoji}</span>
                <p className="font-semibold text-slate-700 text-sm leading-snug font-display group-hover:text-obsidian transition-colors">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Wedding Highlight ──────────────────────── */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            {/* Photo */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM2NjTQAWYNttBsjg6eFbE3oZE-Qq0IfQ-rB9AwDUNuCaaIFiKp1SQXf1kCltnPekpUYstRfEdAOYFdTgftuV6gPqM0sYpBluPTsrzh_iHTzyrnDpwLzJshYB1wzB4erBjlwfDDeC7_QffJdWPlC2K_0p3PeUWo_jgLIBw6cNMrFrdHopW9-VXUv44pa1ZNr0h6THL6vhgeDmaDwCuYA4VnVLJkXM23MLWohdlWLoCzy_ueJ6CcrLmcoBCvcRpct0wKu5lUr0RjbGt"
                alt="Goa beach wedding at golden hour"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-5 left-5 glass-panel py-2.5 px-4 rounded-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-primary font-display">Signature</p>
                <p className="text-sm font-semibold text-obsidian font-display">Double-Team Management</p>
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary" />
                <span className="text-primary font-bold tracking-widest text-sm uppercase font-display">Weddings</span>
              </div>
              <h2 className="font-serif text-4xl text-obsidian leading-tight mb-5">
                Flawless Execution,<br />Double the Care.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8 font-display">
                Every wedding gets two senior architects — one for the couple, one for vendors — ensuring zero gaps and absolute peace of mind on your special day.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-obsidian text-white font-bold text-sm hover:bg-primary transition-colors font-display"
              >
                Plan Your Wedding
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Portfolio Teaser ───────────────────────── */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2 font-display">
                Our Work
              </h2>
              <h3 className="font-serif text-4xl text-obsidian">Portfolio Highlights</h3>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all font-display"
            >
              View Full Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {galleryItems.map(({ src, alt, label }) => (
              <div key={alt} className="group relative rounded-2xl overflow-hidden aspect-[4/3] card-hoverable border border-slate-100 shadow-md">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest font-display">{label}</span>
                  <p className="text-white font-serif text-lg">{alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABannerSection />
      </main>

      <Footer />
    </div>
  );
}
