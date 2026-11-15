import Image from "next/image";

/*
  Client photographs from Paahibu Space programmes (paahibuspace.org), each cropped 4:5.
  None of these shots appears anywhere else on the home page.
*/
const features = [
    {
        title: "Community-Driven",
        desc: "Build meaningful connections with entrepreneurs, mentors, and people who understand your journey. Share experiences, exchange ideas, and discover opportunities to grow together.",
        image: "/images/paahibu/women-comparing-phones-session.jpg",
        alt: "Two women in head-wraps lean in together to compare what is on their phones during a training session",
        position: "40% 50%",
    },
    {
        title: "Technology That Works With and for You",
        desc: "Spend less time juggling business tasks and more time doing what matters. Access practical digital tools to manage sales, customers, finances, and everyday operations.",
        image: "/images/paahibu/woman-working-on-phone-at-session.jpg",
        alt: "A woman in a plaid blazer works on her phone at a conference table during a business session",
        position: "40% 40%",
    },
    {
        title: "Growth That Lasts",
        desc: "Build the skills, confidence, and business foundations to pursue new opportunities, make informed decisions, and create a business that can thrive over time.",
        image: "/images/paahibu/widib-woman-smiling-with-phone.jpg",
        alt: "A smiling woman entrepreneur holding her phone among fellow participants",
        position: "50% 35%",
    },
];

export function FeatureCards() {
    return (
        <section className="section bg-white">
            <div className="wrap">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6">
                        <span className="eyebrow mb-6">
                            OUR PROMISE
                        </span>
                        <h2 className="title-section">
                            Built Around Your Business Journey
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-12">
                        <p className="lead">
                            Every business starts somewhere, and every entrepreneur deserves the tools, knowledge, and connections to move forward.
                        </p>
                        <p className="lead">
                            Whether you are turning an idea into a business, managing daily operations, or preparing for your next stage of growth, Ndiara is designed to support you along the way.
                        </p>
                    </div>
                </div>
                <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
                    {features.map((feature, i) => (
                        <li key={feature.title} className={`flex flex-col${i === 1 ? " md:mt-20" : ""}`}>
                            <div className="media aspect-[4/5] w-full">
                                <Image
                                    src={feature.image}
                                    alt={feature.alt}
                                    fill
                                    sizes="(min-width: 1200px) 384px, (min-width: 768px) 33vw, 100vw"
                                    className="object-cover"
                                    style={{ objectPosition: feature.position }}
                                />
                            </div>
                            <div className="mt-7">
                                <h3 className="title-card mb-3">
                                    {feature.title}
                                </h3>
                                <p className="max-w-[34rem] text-[17px] leading-relaxed text-muted">
                                    {feature.desc}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
