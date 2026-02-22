import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTjuAzNILuSvtQpV00CpCjGExRivPm5Mklm8dDf8eydt6-XIFrNt7_D-Nhe5FXvrrIPAx_C-l17p0-yGeIPk92aiSOLklleLoHRY5G_ba38gwmQPN9DoJAkSWFfP9Km1QGdy2EB369aypwTtrdd-3HjYboBVul3Mjg8dJftXmvUmf21f9WD-vgA-i4Uh6xzsq9qb8oFKgt97E8SHCMeefaDTkOLLg3VLkX2xBq4o6aC0efZ0JZVloz6auikzvZGDDgNna7f_5pEkQ4",
        alt: "Wedding reception table setting",
        title: "The Wilson Wedding",
        location: "Napa Valley, CA",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmZu4RkxCVMe4Zdq7OlVCy_LWVfjPaw6J38BxwA9NoFkKfEUiRZMowZXOUaUPizGkYML-tx2tApMYHTRd5EQ0C7kOlXlNWOhAS6-u8vKscRioC_MC5LhmjRMBepLilGkIp3t-Td7xVEIGJ9Zvi8x98NethFE8Nyw0j8nkWnPWtt6R8NynCJJUUNBKWQL6KGvbL2Hs8rmFd-qpQvZWH9pIfbhXcKzm0kZyosNIiHaI17FWyUt14JeIPRKX9DlBN9_ATKWxTKf6FhXZk",
        alt: "Corporate conference stage",
        title: "TechSummit 2023",
        location: "San Francisco, CA",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzcEndBp5TCPeTi2Q-H3P4xs6DHMqCSMV4Nbn4jG3bnXw9so060Rpao2EkiyEheeOptONrskY0da0vSw1Ec5Fccp5sYKP0Q6hyXQb93XdBkQ35D_ZLZgKtgNfrp_3-RDp5eG4SmNfxSHIV95tRvmsGaKebMY4-IXJj2sNJP7GoTbDccfw_agFg_8h_rXCi8XSC60ufWEPYWshoXLLgoJE_5tR73YBKIa99XN1iDE6futtZrQ3W4EpMCyosIlZAkTYGgel5cFJ2g2Z_",
        alt: "Music festival crowd at night",
        title: "Summer Solstice Gala",
        location: "New York, NY",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyCAL8mZi1ljCrtzRPRWUzItss7XzAFNYwG6XccyGhnP70eVPqe-qekUjAwV-ia4t6mnHBljnzBqLyTxavIl-L5xj222mDzqwlofZpOPFZ4yNZbdxU3Y57Jw6X1dSYkCS8Iw2MZextr-B9-A6RyJYkZrPRyHA4BjbA1siUKSMoKSiP-vyEGgLyMvvYAV5VCRppxBJ9s8MlkOxzbNQOjmI2CLMEGV5-5LJ7JX6Jg8nTs5x3OT90HuM7MXOQJG80proEHh1yHJEkV3fE",
        alt: "Elegant dinner table setting",
        title: "Emerald Charity Dinner",
        location: "London, UK",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByxqmV5I2RydrbF4mdp9l2VW4NoyzyKssEocnYAIRJ1jEoiv0ZQvTVHSdRfQzg-8iFhIbc0xJiIevroa1O8VboMp4sS06iCaLz-knzLdPASFN5_UB_7f65WEjneQZJWY1NTvxImbAUCWpR2n3UBBlUYq1bchDYoNc1YVKiuUu0AyFTUaQjb2jFD2KsA1l1Tkw3Wbr9VCReQfq8yeT_tOEhev3wx6qGyLdnmHNgWxcb90YcS7yBBwZy916qco11TiSkSzyJ2nu_rDd8",
        alt: "Cocktail party social gathering",
        title: "Skyline Product Launch",
        location: "Chicago, IL",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF6nEhtB2DOuf6hTHLA_X9lFyTnsNxvQ2ovASBe7rETnSeq5vEVz_eW-yPLx19HcvGVFaA3KdAOBvK7gmrIeNe5iqFYO2b1bV4zcyROU2JcvI-5sYD6E4mHxpdId7Bj_2RB6IUN5GHEjUx_W8btux3YkJQQQ9fY4tOKtAhS8TdLdxdqVJYttF0tS961BEK0IFU-bxoExQ-_UTENPptMX7NkxE8zevc0waVRjMZDBXayvw9YN5CqtjNciy56TXaDj8r4p5H_C_Q9-Bp",
        alt: "Rustic wedding barn setup",
        title: "Autumn Harvest Feast",
        location: "Vermont, USA",
    },
];

interface PortfolioSectionProps {
    limit?: number;
}

export default function PortfolioSection({ limit }: PortfolioSectionProps) {
    const items = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-slate-900 text-4xl md:text-5xl font-serif font-bold mb-4">
                            Recent Works
                        </h2>
                        <p className="text-slate-500 max-w-xl">
                            A curated selection of our finest events, showcasing our attention
                            to detail and creative vision.
                        </p>
                    </div>
                    {limit && (
                        <Link
                            href="/portfolio"
                            className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors group"
                        >
                            View All Projects{" "}
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    )}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map(({ src, alt, title, location }) => (
                        <div
                            key={title}
                            className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                                <h3 className="text-white text-2xl font-serif font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    {title}
                                </h3>
                                <p className="text-white/80 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                                    {location}
                                </p>
                                <span className="mt-6 inline-block rounded-full bg-primary px-4 py-2 text-xs font-bold text-white uppercase tracking-wider translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 hover:bg-primary-hover hover:scale-105">
                                    View Project
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile view all link */}
                {limit && (
                    <div className="mt-8 text-center md:hidden">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors group"
                        >
                            View All Projects{" "}
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
