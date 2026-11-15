import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink, Breadcrumb, ClosingBand, PageShell, SolutionsRail, SquareList, cutBottomLeft, hairline } from "@/components/pages/kit";
import { solutions } from "@/content/solutions";

const s = solutions.ecommerce;

export const metadata: Metadata = {
    title: "Ndiara E-Commerce | Ndiara",
    description: "Make it easier for customers to discover your products and shop from your business.",
};

/*
  Ndiara E-Commerce: "the shop window".
  The warmest page of the set: the hero is the brand orange field with navy text, a member holding her
  phone like a shop counter, and the real Store Link tile from the live dashboard pinned to the photo's edge.
  Copy: general_landing.md (section 7 product card, section 6 Commerce area, section 3 and section 14 "Sell Online"), verbatim.
*/

export default function EcommercePage() {
    return (
        <PageShell>
            {/* Hero: orange field, navy text (5:1) */}
            <section className="relative overflow-hidden bg-primary" aria-labelledby="ecommerce-title">
                <div className="wrap grid grid-cols-1 gap-14 pt-12 pb-20 md:pt-16 lg:grid-cols-12 lg:items-center lg:gap-16 lg:pt-20 lg:pb-28">
                    <div className="lg:col-span-6">
                        <Breadcrumb
                            items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: s.name }]}
                            onOrange
                        />
                        <span className="eyebrow mt-12 mb-6 uppercase text-navy">{s.name}</span>
                        <h1 id="ecommerce-title" className="title-xl max-w-[12ch]">
                            {s.heading}
                        </h1>
                        <p className="mt-8 max-w-xl text-[1.25rem] font-medium leading-snug text-navy sm:text-[1.375rem]">{s.summary[0]}</p>
                        <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.65] text-navy">{s.summary[1]}</p>
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <ActionLink href={s.liveUrl}>Start Selling</ActionLink>
                        </div>
                    </div>

                    <div className="relative lg:col-span-6">
                        <div className="media relative aspect-[4/5] w-full bg-navy sm:aspect-[5/4] lg:aspect-[4/5]" style={cutBottomLeft(72)}>
                            <Image
                                src={s.image.src}
                                alt={s.image.alt}
                                fill
                                priority
                                sizes="(min-width: 1024px) 560px, 100vw"
                                className="object-cover"
                                style={{ objectPosition: s.image.position }}
                            />
                        </div>
                        {/* The real Store Link tile from the live Ndiara E-Commerce dashboard */}
                        <div className={`media absolute -bottom-8 right-5 w-[112px] bg-white md:right-8 md:w-[132px] lg:-right-4 lg:bottom-16 ${hairline}`}>
                            <Image
                                src="/images/ecosystem/shop-store-link.jpg"
                                alt="Ndiara E-Commerce Store Link tile with the shop's QR code"
                                width={256}
                                height={320}
                                sizes="132px"
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Commerce: the area this product serves, its features beside a second photograph */}
            <section className="section bg-white" aria-labelledby="ecommerce-reach">
                <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
                    <div className="media order-2 aspect-[4/3] w-full lg:order-1 lg:col-span-6 lg:aspect-[4/5]">
                        <Image
                            src="/images/pages/ecommerce-women-learning-phones.jpg"
                            alt="Two women in patterned headwraps work on their phones while a Paahibu Space facilitator leans in to help"
                            fill
                            sizes="(min-width: 1024px) 560px, 100vw"
                            className="object-cover object-[40%_50%]"
                        />
                    </div>
                    <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
                        <span className="eyebrow mb-6 uppercase">{s.area.name}</span>
                        <h2 id="ecommerce-reach" className="font-display text-[clamp(3.25rem,1.7rem+4.2vw,5.75rem)] font-medium leading-[0.9] tracking-[-0.01em] text-navy">
                            {s.area.verbs}
                        </h2>
                        <p className="lead mt-8">
                            Take your business beyond its current reach. Build your online presence, showcase your products, connect with more customers, and access new markets and opportunities to grow your sales.
                        </p>
                        <h3 className="title-card mt-12">Features</h3>
                        <SquareList items={s.features} className="mt-5 text-lg" />
                    </div>
                </div>
            </section>

            {/* Run it from anywhere */}
            <section className="section band relative overflow-hidden" aria-labelledby="ecommerce-anywhere">
                <div className="wrap relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6">
                        <span className="eyebrow mb-6">BUSINESS MANAGEMENT MADE EASIER</span>
                        <h2 id="ecommerce-anywhere" className="title-section">
                            Run Your Business <br className="hidden sm:block" />
                            From Anywhere.
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8 lg:pt-12">
                        <p className="lead">{"Your business doesn't stop when you are away from your shop, office, or workspace."}</p>
                        <p className="lead mt-4">
                            {"With Ndiara's mobile-friendly business tools, you can stay connected to your operations, manage products, track sales, and keep up with customer orders wherever you are."}
                        </p>
                        <SquareList
                            className="mt-10"
                            items={[
                                "Monitor sales and business performance.",
                                "Add products and manage inventory.",
                                "Share your online store with customers.",
                                "Track customer orders and business activities.",
                            ]}
                        />
                    </div>
                </div>
            </section>

            <ClosingBand
                id="ecommerce-close"
                afterBand
                eyebrow="Sell Online"
                title="Your Products Deserve to Be Seen."
                actions={
                    <ActionLink href={s.liveUrl} tone="navy">
                        Start Selling
                    </ActionLink>
                }
            >
                <p>Take your business online, showcase your products, reach more customers, and make it easier for people to shop from you.</p>
            </ClosingBand>

            <SolutionsRail current="ecommerce" />
        </PageShell>
    );
}
