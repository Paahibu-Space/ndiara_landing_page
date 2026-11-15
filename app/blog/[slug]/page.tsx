import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Breadcrumb, PageShell } from "@/components/pages/kit";
import { formatDate, getPost, posts, type BlogBlock } from "@/content/blog";

/*
  The blog post template, driven by content/blog.ts. A post is a list of typed blocks
  (paragraph, heading, list, quote, image), so the client can add articles without touching this file.
  Only slugs listed in content/blog.ts are built; any other /blog/<slug> is a 404.
*/

export const dynamicParams = false;

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};
    return { title: `${post.title} | Ndiara Blog`, description: post.excerpt };
}

function Block({ block }: { block: BlogBlock }) {
    switch (block.type) {
        case "paragraph":
            return <p className="text-[1.0625rem] leading-[1.75] text-foreground">{block.text}</p>;
        case "heading":
            return <h2 className="title-section mt-6 text-[clamp(2rem,1.6rem+1.2vw,2.5rem)]">{block.text}</h2>;
        case "list":
            return (
                <ul className="flex flex-col gap-3">
                    {block.items.map((item) => (
                        <li key={item} className="flex items-baseline gap-3 text-[1.0625rem] leading-[1.7] text-foreground">
                            <span aria-hidden="true" className="size-2 shrink-0 -translate-y-[3px] bg-primary" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        case "quote":
            return (
                <figure className="my-4 bg-band px-7 py-8 md:px-10">
                    <blockquote className="text-xl font-medium leading-[1.5] text-navy">
                        <p>{block.text}</p>
                    </blockquote>
                    {block.cite && <figcaption className="mt-4 text-[15px] text-muted">{block.cite}</figcaption>}
                </figure>
            );
        case "image":
            return (
                <div className="media my-4 aspect-[16/10] w-full">
                    <Image src={block.src} alt={block.alt} fill sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
                </div>
            );
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    return (
        <PageShell>
            <article aria-labelledby="post-title">
                <header className="relative overflow-hidden bg-white">
                    <div className="wrap relative pt-12 pb-12 md:pt-16 lg:pt-20">
                        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
                        <div className="mt-12 max-w-[52rem]">
                            <p className="text-sm font-semibold text-primary-ink">{post.category}</p>
                            <h1 id="post-title" className="title-xl mt-4">
                                {post.title}
                            </h1>
                            <p className="lead mt-8">{post.excerpt}</p>
                            <p className="mt-6 text-sm text-muted">
                                <time dateTime={post.date}>{formatDate(post.date)}</time>
                                {post.author && (
                                    <>
                                        <span aria-hidden="true"> / </span>
                                        {post.author.name}
                                        {post.author.role ? `, ${post.author.role}` : ""}
                                    </>
                                )}
                            </p>
                        </div>
                        {post.cover && (
                            <div className="media mt-12 aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
                                <Image src={post.cover.src} alt={post.cover.alt} fill priority sizes="(min-width: 1200px) 1136px, 100vw" className="object-cover" />
                            </div>
                        )}
                    </div>
                </header>

                <div className="wrap pb-20 lg:pb-28">
                    <div className="mx-auto flex max-w-[45rem] flex-col gap-6 pt-8">
                        {post.body.map((block, i) => (
                            <Block key={i} block={block} />
                        ))}
                    </div>
                    <div className="mx-auto mt-16 max-w-[45rem]">
                        <Link href="/blog" className="text-link min-h-11">
                            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                            All articles
                        </Link>
                    </div>
                </div>
            </article>
        </PageShell>
    );
}
