import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb, ClosingBand, ActionLink, PageShell, RingArc, SquareList, TextLink, cutBottomRight } from "@/components/pages/kit";
import { solutionOrder, solutionPath, solutions, type SolutionSlug } from "@/content/solutions";

export const metadata: Metadata = {
    title: "Solutions | Ndiara",
    description:
        "From your first sale to managing a growing business, explore Ndiara's digital solutions designed to help you work smarter, build your skills, and pursue new opportunities.",
};

/*
  /solutions: an editorial map of the live ecosystem.
  1. Navy field (the brand's 45° cut) holding the five live solutions as one big typographic index,
     each tagged with its ecosystem area.
  2. The journey: the three approved stages ("Growth at Every Stage"), each pointing to the solutions
     the copy author recommended for it (Academy + Community / E-Commerce + POS / HRM).
  3. The approved final call to action.
  Copy: general_landing.md sections 5, 6, 7 and 14, verbatim.
*/

type Stage = {
    n: number;
    label: string;
    title: string;
    text: string;
    picks: SolutionSlug[];
};

const stages: Stage[] = [
    {
        n: 1,
        label: "Getting Started",
        title: "Turning Your Idea Into a Business",
        text: "Explore practical learning resources, connect with other entrepreneurs, and build the knowledge and confidence to bring your business idea to life.",
        picks: ["academy", "community"],
    },
    {
        n: 2,
        label: "Building Your Business",
        title: "Making Everyday Business Easier",
        text: "Organise your operations, manage sales and customers, strengthen your business skills, and discover new ways to reach your market.",
        picks: ["ecommerce", "pos"],
    },
    {
        n: 3,
        label: "Growing Further",
        title: "Preparing for Your Next Opportunity",
        text: "Use business insights, connections, learning opportunities, and growth resources to make informed decisions and pursue your next stage of expansion.",
        picks: ["hrm"],
    },
];

/* Where each solution's call to action goes from this overview: its own page, except "Join the Community", which joins. */
const overviewHref = (slug: SolutionSlug) => (slug === "community" ? solutions.community.liveUrl : solutionPath(slug));

function SolutionEntry({ slug, wide = false }: { slug: SolutionSlug; wide?: boolean }) {
    const s = solutions[slug];
    return (
        <article className={wide ? "grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-8" : "flex flex-col"}>
            <div className="media aspect-[4/3] w-full">
                <Image
                    src={(s.overviewImage ?? s.image).src}
                    alt={(s.overviewImage ?? s.image).alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: (s.overviewImage ?? s.image).position }}
                />
            </div>
            <div className={wide ? "" : "mt-7"}>
                <h4 className="text-sm font-semibold text-primary-ink">
                    <Link href={solutionPath(slug)} className="underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-primary">
                        {s.name}
                    </Link>
                </h4>
                <p className="mt-2 text-[1.375rem] font-medium leading-snug text-navy">{s.heading}</p>
                <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
                    {s.summary.map((p) => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
                <SquareList items={s.features} className="mt-6 text-[15px]" />
                <TextLink href={overviewHref(slug)} className="mt-5">
                    {s.cta}
                </TextLink>
            </div>
        </article>
    );
}

export default function SolutionsPage() {
    return (
        <PageShell>
            {/* 1. The map: navy field, bottom-right corner cut at 45° */}
            <section className="relative overflow-hidden bg-navy" style={cutBottomRight(96)} aria-labelledby="solutions-title">
                <RingArc id="solutions-hero" className="pointer-events-none absolute -right-16 bottom-[-2px] w-[min(620px,90vw)] translate-y-[40%] lg:right-[-4%]" />
                <div className="wrap relative grid grid-cols-1 gap-14 pt-12 pb-32 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20 lg:pb-40">
                    <div className="lg:col-span-5">
                        <Breadcrumb onDark items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
                        <span className="eyebrow mt-12 mb-6 uppercase text-primary">Business Solutions</span>
                        <h1 id="solutions-title" className="title-xl text-white">
                            Find the Right Tools for Your Business.
                        </h1>
                        <p className="mt-8 max-w-[34rem] text-[1.0625rem] leading-[1.65] text-white/80 lg:text-[1.1875rem]">
                            {"From your first sale to managing a growing business, explore Ndiara's digital solutions designed to help you work smarter, build your skills, and pursue new opportunities."}
                        </p>
                    </div>

                    {/* The five live solutions as one index, each with its ecosystem area */}
                    <nav aria-label="Ndiara solutions" className="lg:col-span-6 lg:col-start-7 lg:pt-24">
                        <ul className="flex flex-col gap-7 md:gap-8">
                            {solutionOrder.map((slug) => {
                                const s = solutions[slug];
                                return (
                                    <li key={slug}>
                                        <Link href={solutionPath(slug)} className="group inline-flex flex-col">
                                            <span className="text-sm font-semibold text-white/75">
                                                {s.area.name} <span aria-hidden="true">/</span> {s.area.verbs}
                                            </span>
                                            <span className="mt-1 inline-flex items-center gap-3 font-display text-[clamp(2.5rem,1.6rem+2.6vw,3.75rem)] font-medium leading-[0.95] text-white underline decoration-transparent decoration-[3px] underline-offset-[10px] transition-colors group-hover:decoration-primary group-focus-visible:decoration-primary">
                                                {s.name}
                                                <ArrowRight className="size-6 shrink-0 text-primary transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </section>

            {/* 2. The journey: three stages, each pointing to its solutions */}
            <section className="section bg-white" aria-labelledby="stages-title">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <h2 id="stages-title" className="title-section lg:col-span-6">
                            {"Wherever You Are in Business, There's Room to Grow."}
                        </h2>
                        <p className="lead lg:col-span-5 lg:col-start-8 lg:pt-3">
                            Starting something new? Finding your feet? Ready to take your business further? Ndiara is designed to support entrepreneurs at different stages of their journey.
                        </p>
                    </div>
                </div>
            </section>

            {stages.map((stage) => (
                <section
                    key={stage.n}
                    className={stage.n === 2 ? "band py-20 lg:py-28" : "bg-white pb-20 lg:pb-28" + (stage.n === 3 ? " pt-20 lg:pt-28" : "")}
                    aria-labelledby={`stage-${stage.n}-title`}
                >
                    <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                        <header className="lg:col-span-4 lg:pr-8">
                            <p className="font-display text-[2.25rem] font-medium leading-none text-primary-ink">
                                Stage {stage.n}: {stage.label}
                            </p>
                            <h3 id={`stage-${stage.n}-title`} className="title-card mt-8 text-[1.5rem]">
                                {stage.title}
                            </h3>
                            <p className="mt-4 leading-relaxed text-muted">{stage.text}</p>
                        </header>
                        <div
                            className={
                                stage.picks.length > 1
                                    ? "grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8 lg:col-span-8"
                                    : "lg:col-span-8"
                            }
                        >
                            {stage.picks.map((slug) => (
                                <SolutionEntry key={slug} slug={slug} wide={stage.picks.length === 1} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* 3. The approved final call to action */}
            <ClosingBand
                id="solutions-close"
                eyebrow="YOUR NEXT STEP STARTS HERE"
                title={
                    <>
                        Your Business Has Places to Go. <br className="hidden md:block" />
                        {"Let's Get You There."}
                    </>
                }
                actions={
                    <>
                        <ActionLink href={solutions.ecommerce.liveUrl} tone="navy">
                            Start Selling
                        </ActionLink>
                        <ActionLink href={solutions.community.liveUrl} tone="navy" variant="secondary">
                            Join the Community
                        </ActionLink>
                        <ActionLink href={solutions.academy.liveUrl} tone="navy" variant="secondary">
                            Explore the Academy
                        </ActionLink>
                    </>
                }
            >
                <p>Every business has its own journey, and wherever you are in yours, Ndiara is here to help you move forward.</p>
                <p className="font-semibold !text-white">{"Choose where you'd like to begin. Your business best friend is right here."}</p>
            </ClosingBand>
        </PageShell>
    );
}
