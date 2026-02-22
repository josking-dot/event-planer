import Image from "next/image";

const culturalEvents = [
    {
        title: "Baptism",
        description: "Celebrate new beginnings with grace. We handle everything from the church decor to the intimate reception lunch.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXmo3cATka17htzwd_Hvkuhqn_mAx9sKtZNDsKtiCvfIUaundiDOLT9gNxxBamUGrIbPp2ekxslmvZOMDWO821DbVzVnJsTl0SlBun94q_-54tPfe9z4KKz_eF9OFMK4YcWGivceyA97VLzWIwHnkWYbR-yFWhyBgG-MO4tcvsOOcm7h5ys1vzP55mLHZXgr7wTBsWMuFzM1f0xYlWoz9gLwYbhsOp7bg3hLVtIEqOvebYbKIy1wqhl7z5SvLEXtWM9XnpOW6EFPNo",
        alt: "Traditional Baptism ceremony with white garments",
    },
    {
        title: "Holy Communion",
        description: "A milestone of faith. Our themes range from angelic white purity to soft floral pastels tailored for the occasion.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0NA6I0K6Mz_UdfHV0i2aQmilPjN4cxlvvEorcvz3ZhhZZSJ4l2G3OBjj2phXbqQHf2tuqzuus8nB40WMoQ7ct4_45bDrsmJCyK19ps134vYpL2ihCDVvVe4RI3zk_99crHQjFxr7LrF-XKAz0ndsdkHmQuj7m8DDPXaw3AyXCYoTBQv8x_SB6JnNaGzlJseQSOPMQhdf_ouhnMev4o8X4t6sbqDxoKp4GaS7gDDTRvrP2XkxSWjPSQje2aO12AeHr0i9PXSj02-tH",
        alt: "Child receiving First Holy Communion in white dress",
    },
    {
        title: "Ros Ceremony",
        description: "Honoring Goan roots. Traditional coconut milk blessings organized with authentic decor and cultural music.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeWWbnWB8B1i9zUk6eAcJslU45rtL7VOQ-n5sjVYGoKLdVZVCOD-GMEfkXRRazql1upVuRGarHMQfmPkK_wsj9jKFyag6lWafRoBjYQ9qbbwAMfhqkJrGG1rJjq7JqEKy8F3PTad5r2nHhtPC1kHHcyohdktz2_61_H3GTGWrfrfYLOKMiaeq75gOuRdRQZ79KXWWpJWDHUQkYA5jBT1SVAnr7b5ajpkWp5OjbWJAMY-AdK-t3C-qRCTgACti_EGukAzvqHMXrEitG",
        alt: "Traditional Goan Ros ceremony",
    },
    {
        title: "Confirmation",
        description: "Stepping into adulthood. Sophisticated evening setups for family gatherings and celebrations.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiS_BzayP-JbDFKZderdUvVY_iCV3K3-aRZImG4ihDNr9TC5VPuX-CCzts5UG12Ly5ZTr_9CgZGzcDF5yfuROeHrexMYMscnp7Qzwr-2vnW0FvUkoB_LlLHqzdUfYECsce3arxujaC6lUGYRjnK_WHmsUpx0xvrRKHUYUIMO1jmD_qTU7XqBHPEqP4QKkWQpZXFo4xkGZlem4PJtQ63vQVAPazAKqWAVNWGxs_S7PKrK5F3HTUpkY1_r5ETp9OpFZnsh1GHGfN_vqc",
        alt: "Elegant Confirmation party setting",
    },
];

export default function CulturalEventsSection() {
    return (
        <section id="cultural" className="py-24 bg-background-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
                <div>
                    <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2 font-display">
                        Cultural &amp; Religious
                    </h2>
                    <h3 className="font-serif text-4xl text-obsidian">Tradition Meets Elegance</h3>
                </div>
            </div>

            {/* Horizontal scroll gallery */}
            <div className="flex overflow-x-auto gap-6 px-6 pb-10 no-scrollbar snap-x snap-mandatory">
                {culturalEvents.map(({ title, description, image, alt }) => (
                    <div
                        key={title}
                        className="min-w-[85vw] md:min-w-[400px] snap-center relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer flex-shrink-0"
                    >
                        <Image
                            src={image}
                            alt={alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h4 className="text-white font-serif text-3xl italic mb-2">{title}</h4>
                            <p className="text-white/80 text-sm line-clamp-2 font-display">{description}</p>
                            {/* Hover underline accent */}
                            <div className="mt-4 w-full h-0.5 bg-white/30 rounded-full overflow-hidden">
                                <div className="w-0 h-full bg-primary group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
