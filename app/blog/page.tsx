import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Breadcrumb, PageShell, RingArc } from "@/components/pages/kit";
import { formatDate, paahibuArticles, sortedPosts } from "@/content/blog";

export const metadata: Metadata = {
    title: "Blog | Ndiara",
    description:
        "Discover practical guides, expert perspectives, useful resources, and stories that help you make informed decisions and put new knowledge to work.",
};

/*
  /blog: the index of content/blog.ts.
  Ndiara has no published posts yet, so the page says so plainly and lists the one real article Paahibu Space
  has published on paahibuspace.org, linked to the original. When posts are added to content/blog.ts they are
  listed here (newest first) and open in the post template at /blog/<slug>.
  Copy: edtech.md "Blog Section" (Insights & Resources), verbatim; the rest is short structural microcopy.
*/

export default function BlogPage() {
    const posts = sortedPosts();
    const [lead, ...rest] = posts;

    return (
        <PageShell>
            {/* Header */}
            <section className="relative overflow-hidden bg-white" aria-labelledby="blog-title">
                <div className="wrap relative pt-12 pb-16 md:pt-16 lg:pt-20 lg:pb-24">
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
                    <span className="eyebrow mt-12 mb-6 uppercase">Insights &amp; Resources</span>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <h1 id="blog-title" className="title-xl lg:col-span-6">
                            Good Ideas Deserve to Be Shared
                        </h1>
                        <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-3">
                            <p className="lead">
                                {"There is always something new to learn, whether you're managing a business, building a career, leading a team, or exploring your next opportunity."}
                            </p>
                            <p className="lead">
                                Discover practical guides, expert perspectives, useful resources, and stories that help you make informed decisions and put new knowledge to work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ndiara posts */}
            <section className="bg-white pb-20 lg:pb-28" aria-labelledby="blog-posts">
                <div className="wrap">
                    <h2 id="blog-posts" className="sr-only">
                        Ndiara articles
                    </h2>
                    {posts.length === 0 ? (
                        <div className="band relative overflow-hidden px-7 py-10 md:px-12 md:py-14">
                            <RingArc id="blog-empty-arc" className="pointer-events-none absolute -right-10 bottom-0 hidden w-[320px] translate-y-[48%] md:block" />
                            <p className="font-display text-[clamp(2rem,1.5rem+1.6vw,2.75rem)] font-medium leading-[1.02] text-navy">
                                Ndiara articles are coming soon.
                            </p>
                            <p className="mt-4 max-w-xl leading-relaxed text-muted">Until then, read the latest from Paahibu Space below.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-16">
                            {/* The newest post leads, wide */}
                            <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
                                {lead.cover && (
                                    <div className="media aspect-[16/10] w-full lg:col-span-7">
                                        <Image src={lead.cover.src} alt={lead.cover.alt} fill sizes="(min-width: 1024px) 660px, 100vw" className="object-cover" />
                                    </div>
                                )}
                                <div className={lead.cover ? "lg:col-span-5" : "lg:col-span-8"}>
                                    <p className="text-sm font-semibold text-primary-ink">{lead.category}</p>
                                    <h3 className="mt-3 font-display text-[clamp(2.25rem,1.6rem+2vw,3.25rem)] font-medium leading-[1] text-navy">
                                        <Link href={`/blog/${lead.slug}`} className="underline decoration-transparent decoration-2 underline-offset-8 hover:decoration-primary">
                                            {lead.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-muted">{lead.excerpt}</p>
                                    <p className="mt-4 text-sm text-muted">
                                        <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                                    </p>
                                </div>
                            </article>
                            {rest.length > 0 && (
                                <ul className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                                    {rest.map((post) => (
                                        <li key={post.slug}>
                                            <article>
                                                {post.cover && (
                                                    <div className="media aspect-[4/3] w-full">
                                                        <Image src={post.cover.src} alt={post.cover.alt} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                                                    </div>
                                                )}
                                                <p className="mt-6 text-sm font-semibold text-primary-ink">{post.category}</p>
                                                <h3 className="title-card mt-2">
                                                    <Link href={`/blog/${post.slug}`} className="underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-primary">
                                                        {post.title}
                                                    </Link>
                                                </h3>
                                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
                                                <p className="mt-3 text-sm text-muted">
                                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                                </p>
                                            </article>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* From Paahibu Space: real articles, linked to the original */}
            {paahibuArticles.length > 0 && (
                <section className="section band" aria-labelledby="blog-paahibu">
                    <div className="wrap">
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <h2 id="blog-paahibu" className="title-section">
                                From Paahibu Space
                            </h2>
                            <a href="https://www.paahibuspace.org/blog" target="_blank" rel="noopener noreferrer" className="text-link min-h-11">
                                Visit the Paahibu Space blog
                                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                        </div>
                        <ul className="mt-12 grid grid-cols-1 gap-8">
                            {paahibuArticles.map((a) => (
                                <li key={a.url}>
                                    <article className="grid grid-cols-1 gap-8 bg-white md:grid-cols-12 md:gap-0">
                                        {a.image && (
                                            <div className="media aspect-[4/3] w-full md:col-span-5 md:aspect-auto md:min-h-[320px] md:rounded-r-none">
                                                <Image src={a.image.src} alt={a.image.alt} fill sizes="(min-width: 768px) 460px, 100vw" className="object-cover" />
                                            </div>
                                        )}
                                        <div className="flex flex-col justify-center px-7 pb-10 md:col-span-7 md:px-12 md:py-12">
                                            <p className="text-sm font-semibold text-primary-ink">{a.category}</p>
                                            <h3 className="mt-3 font-display text-[clamp(2rem,1.5rem+1.6vw,2.75rem)] font-medium leading-[1.02] text-navy">{a.title}</h3>
                                            <p className="mt-4 text-sm text-muted">
                                                <time dateTime={a.date}>{formatDate(a.date)}</time>
                                                <span aria-hidden="true"> / </span>
                                                {a.source}
                                            </p>
                                            <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-link mt-6 min-h-11">
                                                Read on {a.source}
                                                <span className="sr-only">: {a.title}</span>
                                                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {/* Where stories live */}
            <section className="section bg-white" aria-labelledby="blog-stories">
                <div className="wrap grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6">
                        <span className="eyebrow mb-6">OUR ENTREPRENEURS</span>
                        <h2 id="blog-stories" className="title-section">
                            Real Stories, Real Growth.
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8 lg:pt-14">
                        <p className="lead">Behind every business is a woman with a story worth telling.</p>
                        <Link href="/success-stories" className="text-link mt-6 min-h-11">
                            Explore Entrepreneur Stories
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
