import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABannerSection from "@/components/CTABannerSection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Portfolio – Goa Event Architects",
    description: "Browse our gallery of beautifully executed weddings, cultural ceremonies, and social celebrations across Goa.",
};

const portfolioItems = [
    {
        title: "Beachside Wedding",
        category: "Weddings",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM2NjTQAWYNttBsjg6eFbE3oZE-Qq0IfQ-rB9AwDUNuCaaIFiKp1SQXf1kCltnPekpUYstRfEdAOYFdTgftuV6gPqM0sYpBluPTsrzh_iHTzyrnDpwLzJshYB1wzB4erBjlwfDDeC7_QffJdWPlC2K_0p3PeUWo_jgLIBw6cNMrFrdHopW9-VXUv44pa1ZNr0h6THL6vhgeDmaDwCuYA4VnVLJkXM23MLWohdlWLoCzy_ueJ6CcrLmcoBCvcRpct0wKu5lUr0RjbGt",
    },
    {
        title: "Baptism Celebration",
        category: "Religious",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXmo3cATka17htzwd_Hvkuhqn_mAx9sKtZNDsKtiCvfIUaundiDOLT9gNxxBamUGrIbPp2ekxslmvZOMDWO821DbVzVnJsTl0SlBun94q_-54tPfe9z4KKz_eF9OFMK4YcWGivceyA97VLzWIwHnkWYbR-yFWhyBgG-MO4tcvsOOcm7h5ys1vzP55mLHZXgr7wTBsWMuFzM1f0xYlWoz9gLwYbhsOp7bg3hLVtIEqOvebYbKIy1wqhl7z5SvLEXtWM9XnpOW6EFPNo",
    },
    {
        title: "Ros Ceremony",
        category: "Cultural",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeWWbnWB8B1i9zUk6eAcJslU45rtL7VOQ-n5sjVYGoKLdVZVCOD-GMEfkXRRazql1upVuRGarHMQfmPkK_wsj9jKFyag6lWafRoBjYQ9qbbwAMfhqkJrGG1rJjq7JqEKy8F3PTad5r2nHhtPC1kHHcyohdktz2_61_H3GTGWrfrfYLOKMiaeq75gOuRdRQZ79KXWWpJWDHUQkYA5jBT1SVAnr7b5ajpkWp5OjbWJAMY-AdK-t3C-qRCTgACti_EGukAzvqHMXrEitG",
    },
    {
        title: "Holy Communion",
        category: "Religious",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0NA6I0K6Mz_UdfHV0i2aQmilPjN4cxlvvEorcvz3ZhhZZSJ4l2G3OBjj2phXbqQHf2tuqzuus8nB40WMoQ7ct4_45bDrsmJCyK19ps134vYpL2ihCDVvVe4RI3zk_99crHQjFxr7LrF-XKAz0ndsdkHmQuj7m8DDPXaw3AyXCYoTBQv8x_SB6JnNaGzlJseQSOPMQhdf_ouhnMev4o8X4t6sbqDxoKp4GaS7gDDTRvrP2XkxSWjPSQje2aO12AeHr0i9PXSj02-tH",
    },
    {
        title: "Confirmation Gala",
        category: "Religious",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiS_BzayP-JbDFKZderdUvVY_iCV3K3-aRZImG4ihDNr9TC5VPuX-CCzts5UG12Ly5ZTr_9CgZGzcDF5yfuROeHrexMYMscnp7Qzwr-2vnW0FvUkoB_LlLHqzdUfYECsce3arxujaC6lUGYRjnK_WHmsUpx0xvrRKHUYUIMO1jmD_qTU7XqBHPEqP4QKkWQpZXFo4xkGZlem4PJtQ63vQVAPazAKqWAVNWGxs_S7PKrK5F3HTUpkY1_r5ETp9OpFZnsh1GHGfN_vqc",
    },
    {
        title: "Bar Services Event",
        category: "Social",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSbuV8NazzxG7YOCkwv9sy6WKOuch-hE8aJSkfnUPeVrJ6F7wUCWztQReU9N1Gio3laZds-BXUreCS3vzSt-54QmzAiVZXWyzIsyhRp7pEbpM_-PM3cBIJLP0ZoPsNCj9-CUPoYarRtkjdNQGRdPhpBuwtHnXgaDAlxZntCNLhgH55XeklFSxGZ7MONXn9GN33_loDXRaOP9qwssvbIOQ5bRsM9QkJntV3n6EVmHC6zLAkgW5f4v7Wnl-sJZuoDNNGTqoSyHPeNp0S",
    },
];

export default function PortfolioPage() {
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
                            Our Work
                            <span className="h-px w-8 bg-primary" />
                        </div>
                        <h1 className="text-obsidian text-5xl md:text-6xl font-serif font-bold mb-5 tracking-tight">
                            Portfolio
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-display">
                            A glimpse at the memories we&apos;ve crafted across Goa&apos;s most stunning venues.
                        </p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-16 bg-white">
                    <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolioItems.map(({ title, category, image }) => (
                                <div key={title} className="group relative rounded-2xl overflow-hidden aspect-[4/3] card-hoverable border border-slate-100 shadow-md">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                                    <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                                        <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest mb-1 font-display">{category}</span>
                                        <h3 className="text-white font-serif text-xl">{title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTABannerSection />
            </main>
            <Footer />
        </div>
    );
}
