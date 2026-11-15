import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink, Breadcrumb, ClosingBand, PageShell, RingArc, SolutionsRail, TextLink, cutTopRight } from "@/components/pages/kit";
import { solutions } from "@/content/solutions";

const s = solutions.community;

export const metadata: Metadata = {
    title: "Ndiara Community (Nhanga) | Ndiara",
    description:
        "A community bringing African women of different generations and backgrounds together to connect, share knowledge, support one another and grow in their businesses, professions and everyday lives.",
};

/*
  Ndiara Community (Nhanga): "room for you here". The warmest page: the headline set across the full width,
  then a wide celebration photograph with the orange ring segment rising behind it; one full orange field
  ("Every Woman Has a Story.") with navy text.
  Copy: community.md, verbatim.
*/

const find = [
    {
        t: "Meet Women Beyond Your Usual Circles",
        d: ["Get to know women from different generations, professions, industries and places. Exchange ideas, discover shared interests and make connections you might never have made otherwise."],
    },
    {
        t: "Ask, Share and Learn",
        d: [
            "Have a question about your business? Something you've learned that could help another woman? A challenge you'd like to hear different perspectives on?",
            "Bring it to the community. There's value in both asking and answering.",
        ],
    },
    {
        t: "Find Your People",
        d: ["Join smaller circles around your interests, profession, industry or location. Meet women who understand the kind of work you do and the things that matter to you."],
    },
    {
        t: "Make Things Happen Together",
        d: [
            "Find people to collaborate with, exchange services, explore business partnerships or work on ideas together.",
            "A conversation could be the beginning of something worth pursuing.",
        ],
    },
];

export default function CommunityPage() {
    return (
        <PageShell>
            {/* Hero: the headline across the width, then the room */}
            <section className="relative overflow-hidden bg-white" aria-labelledby="community-title">
                <div className="wrap pt-12 md:pt-16 lg:pt-20">
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: s.name }]} />
                    <span className="eyebrow mt-12 mb-6 uppercase">Ndiara Nhanga</span>
                    <h1 id="community-title" className="font-display text-[clamp(3.5rem,1.2rem+7.4vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.015em] text-navy">
                        {"There's Room for You Here."}
                    </h1>
                </div>
                <div className="wrap relative mt-20 grid grid-cols-1 gap-12 pb-20 lg:mt-24 lg:grid-cols-12 lg:gap-16 lg:pb-28">
                    <div className="relative lg:col-span-7">
                        <RingArc id="community-hero-arc" className="pointer-events-none absolute -top-12 right-6 w-[62%] md:-top-16 md:right-10" />
                        <div className="media relative aspect-[4/3] w-full lg:aspect-[14/10]">
                            <Image
                                src={s.image.src}
                                alt={s.image.alt}
                                fill
                                preload
                                fetchPriority="high"
                                sizes="(min-width: 1024px) 680px, 100vw"
                                className="object-cover"
                                style={{ objectPosition: s.image.position }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-5 lg:pt-2">
                        <p className="text-[1.25rem] font-medium leading-snug text-navy sm:text-[1.375rem]">
                            Some women have spent decades building businesses and careers. Others are just getting started. Some work for themselves, others work for organizations, and many are still figuring out their next move.
                        </p>
                        <p className="lead">Nhanga brings these women together.</p>
                        <p className="lead">
                            {"It's a community where African women across generations and cultures can meet, share what they know, learn from one another, find support and build connections that matter to their lives and work."}
                        </p>
                        <p className="lead">{"Come as you are. There's room for your experiences, your ideas and everything you have yet to discover."}</p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <ActionLink href={s.liveUrl}>Join the Community</ActionLink>
                            <ActionLink href="#what-youll-find" variant="secondary">
                                Get to Know Nhanga
                            </ActionLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* What you'll find */}
            <section id="what-youll-find" className="section band scroll-mt-20" aria-labelledby="community-find">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <h2 id="community-find" className="title-section lg:col-span-6">
                            Good Company. Good Conversations. People Who Get It.
                        </h2>
                        <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-3">
                            <p className="lead">
                                {"Running a business, building a career or working independently comes with questions you won't always find answers to in a book or online."}
                            </p>
                            <p className="lead">
                                {"Sometimes, you need to speak to someone who's been there. Someone who understands your work, can introduce you to the right person or simply has a different way of looking at things."}
                            </p>
                            <p className="text-lg font-semibold leading-relaxed text-navy">{"That's the kind of community we're building with Nhanga."}</p>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-20">
                        {find.map((f) => (
                            <article key={f.t} className="bg-white p-8 md:p-10">
                                <h3 className="title-card">{f.t}</h3>
                                {f.d.map((p) => (
                                    <p key={p} className="mt-3 leading-relaxed text-muted">
                                        {p}
                                    </p>
                                ))}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tiama */}
            <section className="section bg-white" aria-labelledby="community-tiama">
                <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6">
                        <h2 id="community-tiama" className="title-section">
                            Tiama: Lift Someone Up
                        </h2>
                        <p className="mt-6 text-xl font-medium leading-snug text-primary-ink">We All Have Something to Teach. We All Have Something to Learn.</p>
                        <div className="media mt-12 aspect-[961/470] w-full">
                            <Image
                                src="/images/pages/community-women-training-room.jpg"
                                alt="A smiling woman in a navy hijab and a red and blue print dress sits among other women in a training room"
                                fill
                                sizes="(min-width: 1024px) 560px, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-3">
                        <p className="lead">There is a lot we can learn from women who have lived and worked through different times.</p>
                        <p className="lead">
                            The woman who has spent thirty years running a business knows things that someone starting out today may not. And the young woman who understands digital tools, new technologies and changing markets has knowledge that could help that same business grow.
                        </p>
                        <p className="text-lg font-semibold leading-relaxed text-navy">Tiama brings them together.</p>
                        <p className="lead">
                            {"Through Ndiara Nhanga's intergenerational mentorship programme, older, experienced and younger, experienced women share their experiences, skills, ideas and perspectives."}
                        </p>
                        <p className="lead">Neither has to know everything. Both have something valuable to offer.</p>
                        <TextLink href={s.liveUrl} className="mt-4">
                            Discover Tiama
                        </TextLink>
                    </div>
                </div>
            </section>

            {/* Find your circle */}
            <section className="section band" aria-labelledby="community-circle">
                <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
                    <div className="media order-2 aspect-[4/3] w-full lg:order-1 lg:col-span-7 lg:aspect-[1100/644]">
                        <Image
                            src="/images/pages/community-team-laughing-field.jpg"
                            alt="Five people in Paahibu Space and GROW t-shirts laugh and pose together on a grassy field under trees"
                            fill
                            sizes="(min-width: 1024px) 660px, 100vw"
                            className="object-cover object-[50%_50%]"
                        />
                    </div>
                    <div className="order-1 flex flex-col gap-4 lg:order-2 lg:col-span-5">
                        <h2 id="community-circle" className="title-section">
                            Find Your Circle
                        </h2>
                        <p className="lead mt-4">
                            Sometimes, you want to meet women from completely different backgrounds. Other times, you want to talk to someone who knows exactly what it&apos;s like to do the work you do.
                        </p>
                        <p className="text-lg font-semibold leading-relaxed text-navy">Nhanga makes room for both.</p>
                        <p className="lead">Connect through circles built around shared interests, professions, industries, locations and experiences.</p>
                        <p className="lead">{"And you don't have to stay in just one circle."}</p>
                        <TextLink href={s.liveUrl} className="mt-2">
                            Explore Community Circles
                        </TextLink>
                    </div>
                </div>
            </section>

            {/* Every woman has a story: the page's orange field, navy text */}
            <div className="band">
            <section className="relative overflow-hidden bg-primary" style={cutTopRight(88)} aria-labelledby="community-stories">
                <div className="wrap grid grid-cols-1 gap-10 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
                    <h2 id="community-stories" className="font-display text-[clamp(3.25rem,1.6rem+4.4vw,6rem)] font-medium leading-[0.9] tracking-[-0.01em] text-navy lg:col-span-6">
                        Every Woman Has a Story.
                    </h2>
                    <div className="flex flex-col gap-4 text-[1.0625rem] leading-[1.65] text-navy lg:col-span-5 lg:col-start-8 lg:pt-3">
                        <p>
                            {"Some stories are about starting over. Others are about taking a chance, making a difficult decision, learning a new skill or keeping a business going through uncertain times."}
                        </p>
                        <p>{"And sometimes, the most useful lessons come from the things that didn't work out."}</p>
                        <p>
                            {"Through member stories, women in Nhanga can share what they've experienced, what they've learned and what they wish someone had told them earlier."}
                        </p>
                        <p className="font-semibold">Your story might be just what another woman needs to hear.</p>
                        <div className="mt-4">
                            <ActionLink href={s.liveUrl}>Share Your Story</ActionLink>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            {/* Community values */}
            <section className="section bg-white" aria-labelledby="community-values">
                <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                    <h2 id="community-values" className="title-section lg:col-span-5">
                        The Kind of Community We Want to Build
                    </h2>
                    <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7 lg:pt-3">
                        <p className="text-[1.375rem] font-medium leading-snug text-navy">
                            We want Nhanga to be a place where women feel comfortable showing up as themselves.
                        </p>
                        <p className="lead">
                            Where younger women are taken seriously, older women are valued, different perspectives are welcomed and nobody is made to feel that she has nothing to contribute.
                        </p>
                        <p className="lead">
                            {"We believe in treating one another with respect, sharing knowledge generously, giving credit where it's due and being thoughtful about how we engage with others."}
                        </p>
                        <p className="lead">{"We won't always agree. That's okay."}</p>
                        <p className="lead">What matters is that we can listen, learn and disagree without making someone feel unwelcome.</p>
                    </div>
                </div>
            </section>

            <ClosingBand
                id="community-close"
                title={"We'd Love to Have You Here."}
                actions={
                    <ActionLink href={s.liveUrl} tone="navy">
                        Join Ndiara Nhanga
                    </ActionLink>
                }
            >
                <p>{"You don't need to have a successful business, an impressive job title or everything figured out to belong in Nhanga."}</p>
                <p>{"Bring your experience, your questions, your curiosity and whatever you're working towards."}</p>
                <p>There are women here you could learn from. And there are women who could learn something from you.</p>
            </ClosingBand>

            <SolutionsRail current="community" />
        </PageShell>
    );
}
