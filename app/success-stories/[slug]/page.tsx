import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Breadcrumb, PageShell, RingArc, WrapLabel } from "@/components/pages/kit";
import { ShareStory } from "@/components/pages/ShareStory";
import { getStory, programmes, stories } from "@/content/stories";

/*
  One success story: her full published words, attributed exactly as the source does, the programmes she names
  as the source describes them, and links to every source. Driven by content/stories.ts.
*/

export const dynamicParams = false;

export function generateStaticParams() {
    return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const story = getStory(slug);
    if (!story) return {};
    return {
        title: `${story.name}, ${story.business} | Success Stories | Ndiara`,
        description: story.pull,
    };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const story = getStory(slug);
    if (!story) notFound();

    return (
        <PageShell>
            <article aria-labelledby="story-title">
                {/* Header on the navy field */}
                <header className="relative overflow-hidden bg-navy">
                    <RingArc id="story-head-arc" className="pointer-events-none absolute -right-20 bottom-0 w-[min(520px,90vw)] translate-y-[45%]" />
                    <div className="wrap relative pt-12 pb-28 md:pt-16 lg:pt-20 lg:pb-36">
                        <Breadcrumb
                            onDark
                            items={[{ label: "Home", href: "/" }, { label: "Success Stories", href: "/success-stories" }, { label: story.name }]}
                        />
                        <p className="mt-12 text-sm font-semibold text-primary">{story.theme}</p>
                        <h1 id="story-title" className="mt-4 font-display text-[clamp(3.25rem,1.6rem+5vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.01em] text-white">
                            {story.business}
                        </h1>
                        <p className="mt-6 text-xl font-medium text-white">
                            {story.name}, {story.role}
                        </p>
                        {story.businessNote && <p className="mt-1 text-[1.0625rem] text-white/80">{story.businessNote}</p>}
                    </div>
                </header>

                {/* Her words */}
                <section className="section bg-white" aria-label={`In ${story.name}'s words`}>
                    <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                        <figure className="lg:col-span-8">
                            <span aria-hidden="true" className="block font-display text-[7rem] leading-[0.6] text-primary-ink">
                                “
                            </span>
                            <blockquote className="mt-2 flex flex-col gap-6 text-[1.375rem] font-medium leading-[1.5] text-navy md:text-[1.625rem]">
                                {story.quote.map((p) => (
                                    <p key={p}>{p}</p>
                                ))}
                            </blockquote>
                            <figcaption className="mt-8 text-[15px] text-muted">
                                {story.name}, {story.role}, {story.business}
                            </figcaption>
                        </figure>
                        <aside className="lg:col-span-3 lg:col-start-10 lg:pt-16" aria-labelledby="story-sources">
                            <h2 id="story-sources" className="font-sans text-sm font-semibold text-navy">
                                Sources
                            </h2>
                            <ul className="mt-3 flex flex-col gap-1">
                                {story.sources.map((src) => (
                                    <li key={src.url}>
                                        <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-link inline-block min-h-11 py-2.5 text-[15px]">
                                            <WrapLabel text={src.label} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </section>

                {/* The programmes she names, as the source describes them */}
                <section className="section band" aria-labelledby="story-programmes">
                    <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-4">
                            <h2 id="story-programmes" className="title-section">
                                About the programmes
                            </h2>
                            <p className="mt-4 text-[15px] leading-relaxed text-muted">{story.programme}</p>
                        </div>
                        <div className="flex flex-col gap-3 lg:col-span-8">
                            {programmes.map((p) => (
                                <figure key={p.name} className="bg-white p-7 md:p-9">
                                    <h3 className="title-card">{p.name}</h3>
                                    <blockquote className="mt-3 leading-relaxed text-muted">
                                        <p>{p.text}</p>
                                    </blockquote>
                                    <figcaption className="mt-4 text-sm text-muted">
                                        <a href={story.sources[0].url} target="_blank" rel="noopener noreferrer" className="text-link inline-block min-h-11 py-2.5 text-sm font-normal text-muted">
                                            <WrapLabel text={story.sources[0].label} />
                                        </a>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="bg-white py-12">
                    <div className="wrap">
                        <Link href="/success-stories" className="text-link min-h-11">
                            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                            All success stories
                        </Link>
                    </div>
                </div>
            </article>

            <ShareStory />
        </PageShell>
    );
}
