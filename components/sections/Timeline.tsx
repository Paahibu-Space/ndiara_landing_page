import Image from "next/image";
import { Sprout, TrendingUp, Award, ArrowRight } from "lucide-react";

type StageLink = { label: string; href: string };

const stages: {
    stage: string;
    title: string;
    icon: typeof Sprout;
    desc: string;
    links: StageLink[];
}[] = [
    {
        stage: "Stage 1: Getting Started",
        title: "Turning Your Idea Into a Business",
        icon: Sprout,
        desc: "Explore practical learning resources, connect with other entrepreneurs, and build the knowledge and confidence to bring your business idea to life.",
        links: [
            { label: "Ndiara Academy", href: "https://guubu.ndiara.africa/" },
            { label: "Ndiara Community", href: "https://nhanga.ndiara.africa/" },
        ],
    },
    {
        stage: "Stage 2: Building Your Business",
        title: "Making Everyday Business Easier",
        icon: TrendingUp,
        desc: "Organise your operations, manage sales and customers, strengthen your business skills, and discover new ways to reach your market.",
        links: [
            { label: "Ndiara E-Commerce", href: "https://ndiara.shop/" },
            { label: "Ndiara POS", href: "https://pos.ndiara.africa/" },
        ],
    },
    {
        stage: "Stage 3: Growing Further",
        title: "Preparing for Your Next Opportunity",
        icon: Award,
        desc: "Use business insights, connections, learning opportunities, and growth resources to make informed decisions and pursue your next stage of expansion.",
        links: [{ label: "Ndiara HRM", href: "https://hrm.ndiara.africa/" }],
    },
];

export function Timeline() {
    return (
        <section className="section bg-white">
            <div className="wrap">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <h2 className="title-section lg:col-span-7">
                        {"Wherever You Are in Business, There's Room to Grow."}
                    </h2>
                    <p className="lead lg:col-span-5 lg:col-start-8 lg:pt-3">
                        Starting something new? Finding your feet? Ready to take your business further? Ndiara is designed to support entrepreneurs at different stages of their journey.
                    </p>
                </div>

                {/* Client photograph: a full Paahibu Space training hall (paahibuspace.org). */}
                <div className="media mt-16 aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
                    <Image
                        src="/images/paahibu/women-entrepreneurs-training-hall.jpg"
                        alt="A lecture hall full of women entrepreneurs in colourful head-wraps listening as a facilitator in an orange blazer walks down the aisle holding a phone"
                        fill
                        sizes="(min-width: 1200px) 1152px, 100vw"
                        className="object-cover object-[50%_45%]"
                    />
                </div>

                <ol className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-3">
                    {stages.map((stage) => (
                        <li key={stage.stage} className="flex flex-col">
                            <stage.icon className="mb-6 w-7 h-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                            <span className="mb-3 block text-sm font-semibold text-primary-ink">
                                {stage.stage}
                            </span>
                            <h3 className="title-card mb-3">
                                {stage.title}
                            </h3>
                            <p className="mb-6 leading-relaxed text-muted">
                                {stage.desc}
                            </p>
                            <ul className="mt-auto flex flex-wrap gap-2">
                                {stage.links.map((link) => {
                                    const isExternal = link.href.startsWith("http");
                                    return (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target={isExternal ? "_blank" : undefined}
                                                rel={isExternal ? "noopener noreferrer" : undefined}
                                                className="tag group gap-1.5 text-sm"
                                            >
                                                {link.label}
                                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
