import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Target, Users, Globe, Sparkles, ArrowRight, GraduationCap, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main className="pt-20">

                {/* Hero Section */}
                <section className="bg-white">
                    <div className="wrap pt-16 pb-20 md:pt-20 lg:pt-28 lg:pb-28">
                        <span className="eyebrow mb-8 uppercase">
                            Our Mission
                        </span>
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                            <h1 className="title-xl lg:col-span-7">
                                We Equip, Empower, and <br /> <span>Endow.</span>
                            </h1>
                            <p className="lead lg:col-span-5 lg:self-end">
                                Paahibu Space is an African tech and entrepreneurship development organization led by young people.
                                We are dedicated to equipping girls and women-led businesses with the competencies to leverage technology
                                and transform their communities.
                            </p>
                        </div>

                        {/* Client photograph: Paahibu Space's youth-led team (paahibuspace.org/about). */}
                        <div className="media mt-16 aspect-[4/3] w-full sm:aspect-[16/9] lg:mt-20 lg:aspect-[21/9]">
                            <Image
                                src="/images/paahibu/paahibu-youth-team-grow.jpg"
                                alt="Three young Paahibu Space team members in GROW Network t-shirts smile outdoors under trees, one of them standing on crutches"
                                fill
                                preload
                                fetchPriority="high"
                                sizes="(min-width: 1200px) 1136px, 100vw"
                                className="object-cover object-[50%_25%]"
                            />
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="section band">
                    <div className="wrap">
                        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
                            <div className="space-y-12 lg:col-span-6">
                                <div>
                                    <h2 className="title-section mb-6">Innovation Without Compromise</h2>
                                    <p className="lead">
                                        Whether you’ve been building from the basement or pushing ideas in the office,
                                        there’s a place for you at Ndiara. With a team of African entrepreneurs at the helm,
                                        we’re helping female professionals and founders amplify their ideas without compromise.
                                        Your professional experience doesn’t matter to us—we only see the future.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="title-card mb-3">The Digital Gender Gap</h3>
                                    <p className="leading-relaxed text-muted">
                                        Africa has the highest proportion of women entrepreneurs in the world, yet they often remain
                                        under-earning. The digital economy is booming, but women face barriers like lack of
                                        technical skills and unequal access to funding. Ndiara serves to bridge this divide.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-5 lg:col-start-8">
                                <div>
                                    <p className="font-display text-6xl font-medium leading-[0.9] tracking-[-0.01em] text-navy mb-3 md:text-7xl">58%</p>
                                    <p className="text-[15px] leading-snug text-muted">Of Africa&apos;s self-employed population are women</p>
                                </div>
                                <div>
                                    <p className="font-display text-6xl font-medium leading-[0.9] tracking-[-0.01em] text-navy mb-3 md:text-7xl">82%</p>
                                    <p className="text-[15px] leading-snug text-muted">Of businesses in Ghana&apos;s informal sector owned by women</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="font-display text-6xl font-medium leading-[0.9] tracking-[-0.01em] text-primary-ink mb-3 md:text-7xl">1000+</p>
                                    <p className="text-[15px] leading-snug text-muted">Micro-enterprises to be supported across Africa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section bg-white">
                    <div className="wrap">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                            <h2 className="title-section lg:col-span-6">Why Choose Ndiara?</h2>
                            <p className="lead lg:col-span-5 lg:col-start-8 lg:pt-3">
                                We understand you have choices. Here is why we stand out as the ideal partner for your entrepreneurial journey.
                            </p>
                        </div>

                        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Empowerment", desc: "Tools and strategies to thrive in the digital realm.", icon: Target },
                                { title: "Tailored Learning", desc: "Diverse courses catering to your unique business needs.", icon: Sparkles },
                                { title: "African Expertise", desc: "Insights developed by experts who know the local landscape.", icon: Globe },
                                { title: "Community", desc: "Connect, share, and collaborate with like-minded peers.", icon: Users },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                >
                                    <item.icon className="mb-6 w-7 h-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                                    <h3 className="title-card mb-3">{item.title}</h3>
                                    <p className="leading-relaxed text-muted">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="section bg-white">
                    <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-5">
                            <h2 className="title-section">Our 5-Year Vision</h2>
                            {/* Client photograph: community backing for the WiDEI programme (paahibuspace.org/about). */}
                            <div className="media mt-10 aspect-[4/3] w-full">
                                <Image
                                    src="/images/paahibu/paahibu-team-community-leader.jpg"
                                    alt="Paahibu Space and GROW Network team members stand with a traditional leader in a green robe in front of Women in Digital Economy Initiative banners"
                                    fill
                                    sizes="(min-width: 1024px) 460px, 100vw"
                                    className="object-cover object-[50%_40%]"
                                />
                            </div>
                        </div>
                        <ol className="flex list-none flex-col gap-3 lg:col-span-7">
                            <li className="card flex items-baseline gap-5 px-6 py-6 text-lg leading-relaxed text-foreground md:px-8">
                                <span className="font-display font-medium leading-none text-primary-ink text-[2rem] w-8 shrink-0">1.</span>
                                <span>Reaching over <strong className="font-semibold text-navy">500,000 users</strong> across multiple African countries.</span>
                            </li>
                            <li className="card flex items-baseline gap-5 px-6 py-6 text-lg leading-relaxed text-foreground md:px-8">
                                <span className="font-display font-medium leading-none text-primary-ink text-[2rem] w-8 shrink-0">2.</span>
                                <span>Partnering with major educational institutions, NGOs, and government bodies.</span>
                            </li>
                            <li className="card flex items-baseline gap-5 px-6 py-6 text-lg leading-relaxed text-foreground md:px-8">
                                <span className="font-display font-medium leading-none text-primary-ink text-[2rem] w-8 shrink-0">3.</span>
                                <span>Creating a measurable reduction in the gender gap in the digital economy.</span>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="section bg-white">
                    <div className="wrap">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                            <h2 className="title-section lg:col-span-6">Unleash Your Potential</h2>
                            <p className="lead lg:col-span-5 lg:col-start-8 lg:pt-3">
                                Join thousands of African women who are already building the future.
                                Get full access to Ndiara tools today.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: "Sell Online",
                                    description: "Create your online store in minutes.",
                                    icon: Store,
                                    href: "https://ndiara.shop/",
                                    button_text: "Sign Up",
                                },
                                {
                                    title: "Join Community",
                                    description: "Connect with fellow entrepreneurs.",
                                    icon: Users,
                                    href: "https://nhanga.ndiara.africa/",
                                    button_text: "Join Now",
                                },
                                {
                                    title: "Ndiara Academy",
                                    description: "Master new skills with expert courses.",
                                    icon: GraduationCap,
                                    href: "https://guubu.ndiara.africa/",
                                    button_text: "Learn More",
                                }
                            ].map((card, i) => (
                                <div key={i} className="card flex flex-col p-8 md:p-10">
                                    <card.icon className="mb-8 w-7 h-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                                    <h3 className="title-card mb-3">{card.title}</h3>
                                    <p className="mb-8 leading-relaxed text-muted">
                                        {card.description}
                                    </p>
                                    <Button
                                        asChild
                                        className="mt-auto w-full"
                                        variant={i === 0 ? "default" : "outline"}
                                    >
                                        <a href={card.href} target="_blank" rel="noopener noreferrer">
                                            {card.button_text} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                        </a>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
