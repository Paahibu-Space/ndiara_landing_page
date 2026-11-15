import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Story card framework.
 * Each card shows: a real photograph, her name, business and location,
 * a short quotation in her own words, and a link to her full story where available.
 * No ratings. Never manufacture testimonials or attribute invented statements.
 */
type EntrepreneurStory = {
    name: string;
    business: string;
    location: string;
    image: string;
    quote: string;
    storyHref?: string;
};

// TODO(content): populate with verified entrepreneur stories (real photo, name, business,
// location, her own words, optional full-story link). Until then only the photo mosaic renders.
// TODO(content): optional future story filter ("All Stories | Selling Online | Business Management |
// Learning | Community | Growth") was a doc recommendation and is intentionally not built yet.
const stories: EntrepreneurStory[] = [];

/**
 * "Real moments" mosaic: unnamed documentary photographs from the client's own programmes
 * (paahibuspace.org). No names, quotes or captions are attached, so nothing is attributed to anyone.
 * Spans and crops are set per photo so each keeps its subjects in frame.
 */
const lead = {
    src: "/images/paahibu/women-entrepreneurs-celebrating-session.jpg",
    alt: "Women entrepreneurs of different ages smile and applaud during a training session, one pressing her hands together in delight",
    position: "24% 50%",
};

// From lg up the lead photo sits in the left column under the heading (beside the copy),
// so the mosaic below holds the remaining three in a single row.
const moments = [
    {
        src: "/images/paahibu/facilitator-helping-entrepreneur-phone.jpg",
        alt: "A facilitator helps a seated woman with her phone during a busy training session",
        position: "50% 60%",
        className: "col-span-2 aspect-[16/9] lg:col-span-6 lg:aspect-auto",
        sizes: "(min-width: 1024px) 600px, 100vw",
    },
    {
        src: "/images/paahibu/widib-women-learning-on-phones.jpg",
        alt: "Two women in head-wraps work on their phones during a WiDIB session",
        position: "22% 40%",
        className: "col-span-1 aspect-square lg:col-span-3 lg:aspect-auto",
        sizes: "(min-width: 1024px) 300px, 50vw",
    },
    {
        src: "/images/paahibu/grow-session-hands-raised.jpg",
        alt: "Women raise their hands to answer a question during a GROW Network training session",
        position: "50% 50%",
        className: "col-span-1 aspect-square lg:col-span-3 lg:aspect-auto",
        sizes: "(min-width: 1024px) 300px, 50vw",
    },
];

export function Testimonials() {
    return (
        <section className="section bg-white">
            <div className="wrap">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6 lg:flex lg:flex-col">
                        <span className="eyebrow mb-6">
                            OUR ENTREPRENEURS
                        </span>
                        <h2 className="title-section">
                            Real Stories, Real <span>Growth</span>.
                        </h2>
                        <div className="media mt-12 hidden min-h-[320px] flex-1 lg:block">
                            <Image
                                src={lead.src}
                                alt={lead.alt}
                                fill
                                sizes="(min-width: 1024px) 600px, 1px"
                                className="object-cover"
                                style={{ objectPosition: lead.position }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-12">
                        <p className="text-lg font-semibold leading-relaxed text-navy">
                            Behind every business is a woman with a story worth telling.
                        </p>
                        <p className="lead">
                            From taking the first steps in entrepreneurship to managing everyday challenges and finding new opportunities to grow, African women entrepreneurs are building businesses through determination, creativity, experience, and hard work.
                        </p>
                        <p className="lead">
                            {"At Ndiara, their journeys matter. Explore the experiences of women entrepreneurs, the challenges they've navigated, the lessons they've learned, and how access to practical tools, knowledge, and meaningful connections supports their businesses."}
                        </p>
                        <p className="lead">
                            Because growth looks different for every entrepreneur, and every experience has something to teach us.
                        </p>
                    </div>
                </div>

                {/* Real moments from the client's programmes */}
                <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:grid-rows-[320px] lg:gap-16">
                    <div className="media col-span-2 aspect-[4/5] lg:hidden">
                        <Image
                            src={lead.src}
                            alt={lead.alt}
                            fill
                            sizes="(min-width: 1024px) 1px, 100vw"
                            className="object-cover"
                            style={{ objectPosition: lead.position }}
                        />
                    </div>
                    {moments.map((moment) => (
                        <div key={moment.src} className={`media ${moment.className}`}>
                            <Image
                                src={moment.src}
                                alt={moment.alt}
                                fill
                                sizes={moment.sizes}
                                className="object-cover"
                                style={{ objectPosition: moment.position }}
                            />
                        </div>
                    ))}
                </div>

                {stories.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {stories.map((story) => (
                            <figure
                                key={story.name}
                                className="card relative flex flex-col p-8"
                            >
                                <Quote className="mb-6 w-7 h-7 text-primary" aria-hidden="true" />
                                <blockquote className="mb-8 text-lg font-medium leading-relaxed text-navy">
                                    {story.quote}
                                </blockquote>
                                <figcaption className="mt-auto flex items-center gap-4 pt-2">
                                    <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-band">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={story.image} alt={story.name} className="h-full w-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-sans text-base font-semibold text-navy">
                                            {story.storyHref ? (
                                                <a href={story.storyHref} className="underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-primary">
                                                    {story.name}
                                                </a>
                                            ) : (
                                                story.name
                                            )}
                                        </h3>
                                        <p className="text-sm text-muted">
                                            {story.business}, {story.location}
                                        </p>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                )}

                <div className="mt-12">
                    {/* TODO(content): link to the entrepreneur stories page once it exists. */}
                    <Button asChild className="w-full sm:w-auto">
                        <a href="#">
                            Explore Entrepreneur Stories
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
