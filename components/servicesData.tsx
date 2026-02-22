// Inline SVG icon components — no font dependency
const BuildingIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
);

const CelebrationIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
);

const ConsultingIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

const services = [
    {
        Icon: BuildingIcon,
        title: "Corporate Events",
        badge: "Most Popular",
        badgeColor: "bg-amber-100 text-amber-700",
        accentColor: "from-amber-500 to-orange-500",
        description:
            "Full-service management for conferences, award ceremonies, product launches, and company retreats. We handle venue sourcing, AV production, catering coordination, and on-the-day logistics.",
        features: [
            "Venue scouting & negotiation",
            "Branded AV & stage design",
            "Catering & dietary management",
            "Guest registration & badging",
            "Post-event analytics report",
        ],
    },
    {
        Icon: CelebrationIcon,
        title: "Social Gatherings",
        badge: "Most Personal",
        badgeColor: "bg-rose-100 text-rose-700",
        accentColor: "from-rose-500 to-pink-500",
        description:
            "Intimate to grand — we design unforgettable weddings, milestone birthdays, anniversary galas, and private parties that authentically reflect your personal story and style.",
        features: [
            "Concept & mood board design",
            "Vendor curation & management",
            "Floral & décor styling",
            "Entertainment sourcing",
            "Day-of coordination",
        ],
    },
    {
        Icon: ConsultingIcon,
        title: "Event Consulting",
        badge: "Expert Guidance",
        badgeColor: "bg-violet-100 text-violet-700",
        accentColor: "from-violet-500 to-indigo-500",
        description:
            "Already have a team but need a professional eye? Strategic direction on concept, budget, timeline, vendor selection, and risk management — so your event runs flawlessly.",
        features: [
            "Event concept workshops",
            "Budget planning & optimisation",
            "Vendor vetting & recommendations",
            "Timeline & run-of-show creation",
            "Contingency planning",
        ],
    },
];

export const servicesData = services;
export { BuildingIcon, CelebrationIcon, ConsultingIcon, CheckIcon };
