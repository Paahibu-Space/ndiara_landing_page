import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink, Breadcrumb, ClosingBand, PageShell, SolutionsRail, TextLink, hairline } from "@/components/pages/kit";
import { solutions } from "@/content/solutions";

const s = solutions.academy;

export const metadata: Metadata = {
    title: "Ndiara Academy | Ndiara",
    description:
        "Ndiara Academy brings together business education, digital skills training, and professional development opportunities to help entrepreneurs, employees, and aspiring professionals grow.",
};

/*
  Ndiara Academy (GUUBU): "the training hall".
  The one hero on the site set over a full-bleed photograph: a packed training hall blended into the navy field
  (white text; a flat 72% navy overlay keeps white text at 5:1 or better over the brightest pixel). A real lesson tile from the
  live academy sits beside the featured topic list.
  Copy: edtech.md, verbatim. Skills2Work and the employer-facing section are left out until their status is confirmed.
*/

const benefits = [
    {
        t: "Practical Lessons",
        d: "Learn how to handle everyday business challenges, from pricing your products and keeping financial records to managing stock and finding new customers.",
    },
    {
        t: "Learn From People Who Know Business",
        d: "Gain insights from entrepreneurs and professionals who understand what it takes to build and manage businesses in African markets.",
    },
    {
        t: "Learning That Fits Your Schedule",
        d: "Build your skills through short, focused lessons you can explore between customers, after work, or whenever you find time.",
    },
    {
        t: "Learning That Speaks Your Language",
        d: "We're working towards making business education more accessible through familiar languages, relatable examples, and learning materials designed for different needs.",
    },
];

const approach = [
    {
        n: "01",
        t: "Learn in Small, Manageable Steps",
        d: "Explore focused lessons that break down business topics into clear, practical ideas. Learn at a pace that works for you, without putting your business on hold.",
    },
    {
        n: "02",
        t: "Learn Through Real Business Experiences",
        d: "Discover lessons, examples, and insights drawn from entrepreneurs and professionals who understand the opportunities and challenges of doing business in Africa.",
    },
    {
        n: "03",
        t: "Find Learning Relevant to Your Goals",
        d: "Whether you want to improve your sales, manage your finances, strengthen your customer relationships, or explore funding opportunities, find learning opportunities connected to your business priorities.",
    },
    {
        n: "04",
        t: "Turn Knowledge Into Action",
        d: "Move beyond watching lessons. Use practical exercises, examples, and relevant Ndiara business tools to apply what you learn to your own enterprise.",
    },
];

const courses = [
    {
        t: "Selling on WhatsApp Business",
        d: "Learn how to present your products, communicate professionally with customers, organise enquiries, and make better use of WhatsApp Business.",
    },
    {
        t: "Track Your Daily Sales",
        d: "Understand how to record your sales, keep track of business expenses, and build a clearer picture of how your business is performing.",
    },
    {
        t: "Organise Your Shop for Better Sales",
        d: "Explore practical ways to manage stock, arrange products, improve customer experience, and make everyday business operations more efficient.",
    },
];

export default function AcademyPage() {
    return (
        <PageShell>
            {/* Hero: the training hall, blended into navy */}
            <section className="relative isolate overflow-hidden bg-navy" aria-labelledby="academy-title">
                <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="-z-20 object-cover grayscale"
                    style={{ objectPosition: s.image.position }}
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/[0.72]" />
                <div className="wrap grid grid-cols-1 gap-12 pt-12 pb-24 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20 lg:pb-32">
                    <div className="lg:col-span-8">
                        <Breadcrumb onDark items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: s.name }]} />
                        <span className="eyebrow mt-12 mb-6 text-primary">NDIARA ACADEMY</span>
                        <h1 id="academy-title" className="font-display text-[clamp(3.25rem,1.4rem+5.4vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.01em] text-white">
                            Learn. Build Skills. <br className="hidden sm:block" />
                            Grow Further.
                        </h1>
                    </div>
                    <div className="lg:col-span-6">
                        <p className="text-[1.25rem] font-medium leading-snug text-white sm:text-[1.375rem]">
                            Running a business takes more than a great idea. It takes knowledge, practical skills, and the confidence to make informed decisions.
                        </p>
                        <p className="mt-4 text-[1.0625rem] leading-[1.65] text-white/85">
                            Ndiara Academy brings together business education, digital skills training, and professional development opportunities to help entrepreneurs, employees, and aspiring professionals grow.
                        </p>
                    </div>
                    <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:col-start-8">
                        <p className="text-[1.0625rem] leading-[1.65] text-white/85">
                            Explore practical learning resources, courses, and programmes designed to help you apply what you learn.
                        </p>
                        <div>
                            <ActionLink href={s.liveUrl} tone="navy">
                                Explore Ndiara Academy
                            </ActionLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* The problem */}
            <section className="section bg-white" aria-labelledby="academy-problem">
                <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                    <h2 id="academy-problem" className="title-section lg:col-span-6">
                        Business Advice Is Everywhere. Finding What Works for You Is Harder.
                    </h2>
                    <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-3">
                        <p className="lead">
                            {"You've probably come across countless business tips, videos, and online courses. But how much of that advice speaks to the challenges you actually face?"}
                        </p>
                        <p className="lead">
                            What works for a large company may not work for someone managing a growing business with limited time, unpredictable sales, and competing responsibilities.
                        </p>
                        <p className="mt-4 text-xl font-semibold leading-snug text-navy">{"That's why we're building Ndiara Academy."}</p>
                        <p className="lead">A learning space where business education is practical, accessible, and connected to the decisions entrepreneurs make every day.</p>
                    </div>
                </div>
            </section>

            {/* Key benefits, beside a woman teaching from experience */}
            <section className="section band" aria-labelledby="academy-benefits">
                <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <h2 id="academy-benefits" className="title-section">
                            Business Learning That Understands Your World.
                        </h2>
                        <div className="media mt-12 aspect-[4/3] w-full">
                            <Image
                                src="/images/pages/academy-speaker-microphone.jpg"
                                alt="A woman with a microphone speaks to a workshop as seated participants listen"
                                fill
                                sizes="(min-width: 1024px) 460px, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:col-span-6 lg:col-start-7 lg:pt-4">
                        {benefits.map((b) => (
                            <article key={b.t} className="bg-white px-7 py-7 md:px-9 md:py-8">
                                <h3 className="title-card">{b.t}</h3>
                                <p className="mt-3 leading-relaxed text-muted">{b.d}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* The approach, numbered in the approved copy */}
            <section className="section bg-white" aria-labelledby="academy-approach">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <h2 id="academy-approach" className="title-section lg:col-span-6">
                            Learn Something Useful. Put It to Work.
                        </h2>
                        <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-3">
                            <p className="lead">Business learning should help you make better decisions, solve problems, and discover new possibilities.</p>
                            <p className="lead">{"Here's the approach behind Ndiara Academy."}</p>
                        </div>
                    </div>
                    <ol className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:mt-20">
                        {approach.map((a) => (
                            <li key={a.n} className="grid grid-cols-[4.5rem_1fr] gap-x-4">
                                <span className="font-display text-[3.25rem] font-medium leading-[0.85] text-primary-ink" aria-hidden="true">
                                    {a.n}
                                </span>
                                <div>
                                    <h3 className="title-card">
                                        <span className="sr-only">{a.n} </span>
                                        {a.t}
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-muted">{a.d}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Featured learning, with the real lesson tile from the live academy */}
            <section className="section band relative overflow-hidden" aria-labelledby="academy-featured">
                <div className="wrap relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
                    <div className="lg:col-span-5 lg:row-start-1">
                        <span className="eyebrow mb-6">FEATURED LEARNING</span>
                        <h2 id="academy-featured" className="title-section">
                            Start With Something You Can Use.
                        </h2>
                        <p className="lead mt-8">
                            Looking for a practical place to begin? Explore lessons on everyday business challenges and discover ideas you can start applying.
                        </p>
                        <TextLink href={s.liveUrl} className="mt-8">
                            Browse All Courses
                        </TextLink>
                    </div>
                    <div className="flex flex-col gap-3 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
                        <h3 className="title-card text-lg">Featured course topics</h3>
                        {courses.map((c) => (
                            <article key={c.t} className="mt-3 bg-white p-7 md:p-8">
                                <h4 className="text-xl font-medium leading-snug text-navy">{c.t}</h4>
                                <p className="mt-2 leading-relaxed text-muted">{c.d}</p>
                            </article>
                        ))}
                    </div>
                    {/* A real lesson tile from the live academy, beside the topic list */}
                    <div className={`media w-full max-w-[340px] bg-white lg:col-span-5 lg:row-start-2 lg:self-end ${hairline}`}>
                        <Image
                            src="/images/ecosystem/guubu-course-lesson.jpg"
                            alt="Ndiara Academy (Guubu) course: Track Your Daily Sales. Understand how to record your sales, keep track of business expenses, and build a clearer picture of how your business is performing."
                            width={384}
                            height={184}
                            sizes="340px"
                            className="h-auto w-full"
                        />
                    </div>
                </div>
            </section>

            {/* GUUBU */}
            <section className="section bg-white" aria-labelledby="academy-guubu">
                <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6">
                        <span className="eyebrow mb-6">GUUBU</span>
                        <h2 id="academy-guubu" className="title-section">
                            Skills for What Comes Next.
                        </h2>
                        <p className="mt-8 text-xl font-medium leading-snug text-navy">Interested in building skills for an increasingly digital world?</p>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-14">
                        <p className="lead">
                            GUUBU expands access to digital and professional learning opportunities, particularly for young women, through structured learning pathways in artificial intelligence, cybersecurity, data analytics, IT, project management, digital marketing, and UX design.
                        </p>
                        <p className="lead">Explore new fields, strengthen your capabilities, and learn alongside a community of people investing in their professional growth.</p>
                        <div className="mt-4">
                            <ActionLink href={s.liveUrl}>Explore GUUBU</ActionLink>
                        </div>
                    </div>
                </div>
            </section>

            <ClosingBand
                id="academy-close"
                eyebrow="Ndiara Academy"
                title="Learn Something. Build Something. Become Something."
                actions={
                    <ActionLink href={s.liveUrl} tone="navy">
                        Explore the Academy
                    </ActionLink>
                }
            >
                <p>Practical business education, digital skills, and professional development for people building businesses, careers, and stronger teams.</p>
            </ClosingBand>

            <SolutionsRail current="academy" />
        </PageShell>
    );
}
