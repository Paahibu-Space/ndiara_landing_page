import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb, PageShell, RingArc, WrapLabel, cutTopRight } from "@/components/pages/kit";
import { ShareStory } from "@/components/pages/ShareStory";
import { stories, type Story } from "@/content/stories";

export const metadata: Metadata = {
    title: "Success Stories | Ndiara",
    description: "Behind every business is a woman with a story worth telling.",
};

/*
  /success-stories: real stories only.
  The entrepreneur is the central character: her business name is set at poster scale, her own words follow,
  attributed exactly as the source does and linked to it. No ratings, no portraits we do not have, no padding.
  Copy: general_landing.md section 12 ("Real Stories, Real Growth."), community.md section 10; stories quoted
  verbatim from Paahibu Space's 2024 Annual Report.
*/

function StoryFeature({ story, onNavy = false, index }: { story: Story; onNavy?: boolean; index: number }) {
    const body = onNavy ? "text-white/80" : "text-muted";
    const head = onNavy ? "text-white" : "text-navy";
    const href = `/success-stories/${story.slug}`;
    return (
        <article aria-labelledby={`story-${index}`} className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <header className="lg:col-span-5">
                <p className={`text-sm font-semibold ${onNavy ? "text-primary" : "text-primary-ink"}`}>{story.theme}</p>
                <h2 id={`story-${index}`} className={`mt-4 font-display text-[clamp(3rem,1.6rem+4vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.01em] ${head}`}>
                    {story.business}
                </h2>
                <p className={`mt-6 text-lg font-medium ${head}`}>
                    {story.name}, {story.role}
                </p>
                {story.businessNote && <p className={`mt-1 text-[15px] leading-relaxed ${body}`}>{story.businessNote}</p>}
            </header>
            <figure className="lg:col-span-7 lg:pt-2">
                <span aria-hidden="true" className={`block font-display text-[6rem] leading-[0.6] ${onNavy ? "text-primary" : "text-primary-ink"}`}>
                    “
                </span>
                <blockquote className={`mt-2 text-[1.375rem] font-medium leading-[1.45] md:text-[1.625rem] ${head}`}>
                    <p>{story.pull}</p>
                </blockquote>
                <figcaption className={`mt-6 text-[15px] ${body}`}>
                    {story.name}, {story.role}, {story.business}
                </figcaption>
                <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-8">
                    <Link href={href} className={`text-link min-h-11 ${onNavy ? "text-white" : ""}`}>
                        Read her story<span className="sr-only">: {story.name}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <a href={story.sources[0].url} target="_blank" rel="noopener noreferrer" className={`text-link inline-block min-h-11 py-2.5 font-normal ${onNavy ? "text-white/80" : "text-muted"}`}>
                        <WrapLabel text={`Source: ${story.sources[0].label}`} />
                    </a>
                </div>
            </figure>
        </article>
    );
}

export default function SuccessStoriesPage() {
    return (
        <PageShell>
            {/* Hero */}
            <section className="bg-white" aria-labelledby="stories-title">
                <div className="wrap pt-12 pb-20 md:pt-16 lg:pt-20 lg:pb-28">
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Success Stories" }]} />
                    <span className="eyebrow mt-12 mb-6">OUR ENTREPRENEURS</span>
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                        <h1 id="stories-title" className="title-xl lg:col-span-6">
                            Real Stories, Real Growth.
                        </h1>
                        <div className="flex flex-col gap-4 lg:col-span-6 lg:pt-2">
                            <p className="text-[1.25rem] font-medium leading-snug text-navy sm:text-[1.375rem]">Behind every business is a woman with a story worth telling.</p>
                            <p className="lead">
                                {"From taking the first steps in entrepreneurship to managing everyday challenges and finding new opportunities to grow, African women entrepreneurs are building businesses through determination, creativity, experience, and hard work."}
                            </p>
                        </div>
                    </div>
                    <div className="relative mt-16 lg:mt-20">
                        <div className="media aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
                            <Image
                                src="/images/paahibu/grow-session-hands-raised.jpg"
                                alt="Women raise their hands to answer a question during a GROW Network training session"
                                fill
                                preload
                                fetchPriority="high"
                                sizes="(min-width: 1200px) 1136px, 100vw"
                                className="object-cover object-[50%_45%]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why these stories */}
            <section className="bg-white pb-20 lg:pb-28" aria-label="About these stories">
                <div className="wrap grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <p className="lead lg:col-span-6">
                        {"At Ndiara, their journeys matter. Explore the experiences of women entrepreneurs, the challenges they've navigated, the lessons they've learned, and how access to practical tools, knowledge, and meaningful connections supports their businesses."}
                    </p>
                    <div className="lg:col-span-5 lg:col-start-8">
                        <p className="font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] font-medium leading-[1.05] text-primary-ink">
                            Because growth looks different for every entrepreneur, and every experience has something to teach us.
                        </p>
                        <p className="mt-6 text-[15px] leading-relaxed text-muted">From Paahibu Space programmes, in the entrepreneurs&apos; own words.</p>
                    </div>
                </div>
            </section>

            {/* The stories: the first on white, the second on the navy field */}
            {stories.map((story, i) =>
                i % 2 === 0 ? (
                    <section key={story.slug} className="section band" aria-label={`${story.name}, ${story.business}`}>
                        <div className="wrap">
                            <StoryFeature story={story} index={i} />
                        </div>
                    </section>
                ) : (
                    <div key={story.slug} className="band">
                        <section className="relative overflow-hidden bg-navy" style={cutTopRight(88)} aria-label={`${story.name}, ${story.business}`}>
                            <RingArc id={`story-arc-${i}`} className="pointer-events-none absolute -left-24 bottom-0 hidden w-[460px] translate-y-[55%] lg:block" />
                            <div className="wrap relative py-24 lg:py-32">
                                <StoryFeature story={story} index={i} onNavy />
                            </div>
                        </section>
                    </div>
                ),
            )}

            {/* Keep a band strip between the navy field and the orange invitation so the two never touch */}
            {stories.length % 2 === 0 && <div className="band h-20 lg:h-28" aria-hidden="true" />}
            <ShareStory ground="band" />
        </PageShell>
    );
}
