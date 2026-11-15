import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink, Breadcrumb, ClosingBand, PageShell, SolutionsRail, TextLink, cutBottomLeft, hairline } from "@/components/pages/kit";
import { solutions } from "@/content/solutions";

const s = solutions.pos;

export const metadata: Metadata = {
    title: "Ndiara POS | Ndiara",
    description:
        "Record sales, manage inventory, organise customer orders, create invoices and keep track of your business performance from one easy-to-use platform.",
};

/*
  Ndiara POS: "the phone is the till".
  White hero split 7/5 with a tall photograph of two traders over their phones; the real POS menu from the
  live app is pinned across the photo's lower edge like a receipt. Orange appears as the step numerals.
  Copy: pos.md, verbatim (authors' notes and the "Talk to Our Team" button, which has no destination yet, are left out).
*/

const challenges = [
    {
        q: "Losing Track of Sales?",
        a: [
            "When transactions happen throughout the day, it's easy to forget what was sold or how much money came in.",
            "Keep your sales records organized so you can review your transactions and understand how your business is performing.",
        ],
    },
    {
        q: "Not Sure What's Still in Stock?",
        a: [
            "Selling products across different channels can make inventory difficult to manage.",
            "Keep track of your products, monitor available quantities and know when it's time to restock.",
        ],
    },
    {
        q: "Orders Coming From Everywhere?",
        a: [
            "A customer messages you on WhatsApp. Another orders through Instagram. Someone else walks into your shop.",
            "Keep your orders organized so you can follow up, fulfil purchases and reduce the chances of missing a sale.",
        ],
    },
    {
        q: "Spending Too Much Time on Manual Records?",
        a: [
            "Between notebooks, receipts and scattered messages, business administration can take up valuable time.",
            "Bring your essential business records into one place and spend less time searching for information.",
        ],
    },
];

const steps = [
    { n: "01.", t: "Create Your Account", d: "Sign up and set up your business profile to get started with Ndiara POS." },
    { n: "02.", t: "Add Your Products", d: "Create your product catalogue, enter prices and record available stock so you know what you're selling and what you have." },
    { n: "03.", t: "Record Sales and Manage Orders", d: "Keep track of transactions, organise customer orders and maintain records of what has been sold." },
    { n: "04.", t: "Keep an Eye on Your Business", d: "Review your sales and inventory records to understand what's happening in your business and make more informed decisions." },
];

const features = [
    {
        name: "Sales Management",
        t: "Every Sale Counts. Keep Track of Yours.",
        d: "Record transactions, organise sales information and review your sales history without having to search through notebooks or scattered records.",
    },
    {
        name: "Inventory Management",
        t: "Know What You Have. Know What You Need.",
        d: "Keep your product information organised, monitor stock levels and stay informed about what's available for sale.",
    },
    {
        name: "Order Management",
        t: "Every Order, Organised.",
        d: "Keep track of customer orders, their details and fulfilment status so you can manage purchases coming from different sales channels.",
    },
    {
        name: "Invoicing",
        t: "Make Every Transaction Easier to Document.",
        d: "Create and organise customer invoices, maintain transaction records and make it easier to follow up on purchases.",
    },
    {
        name: "Business Insights",
        t: "Understand Your Numbers. Make Better Decisions.",
        d: "Review sales activity and product performance to better understand what is happening in your business.",
    },
    {
        name: "Customer Records",
        t: "Keep Your Customer Information Within Reach.",
        d: "Organise customer details and purchase information to make follow-ups and customer service easier.",
    },
];

export default function PosPage() {
    return (
        <PageShell>
            {/* Hero */}
            <section className="bg-white" aria-labelledby="pos-title">
                <div className="wrap grid grid-cols-1 gap-14 pt-12 pb-24 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20 lg:pb-32">
                    <div className="flex flex-col items-start lg:col-span-7 lg:py-4">
                        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: s.name }]} />
                        <span className="eyebrow mt-12 mb-6">MEET NDIARA POS</span>
                        <h1 id="pos-title" className="title-xl sm:max-w-[15ch]">
                            Your Sales. Your Stock. Your Business. All in One Place.
                        </h1>
                        <p className="mt-8 max-w-xl text-[1.25rem] font-medium leading-snug text-navy sm:text-[1.375rem]">
                            Running a business means keeping track of a lot. Ndiara POS helps you bring it all together.
                        </p>
                        <p className="lead mt-4 max-w-xl">
                            Record sales, manage inventory, organise customer orders, create invoices and keep track of your business performance from one easy-to-use platform.
                        </p>
                        <p className="lead mt-4 max-w-xl">
                            Whether you sell from a physical shop, online or through WhatsApp, Ndiara POS is designed around the everyday realities of running a business in Africa.
                        </p>
                        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                            <ActionLink href={s.liveUrl}>Get Started</ActionLink>
                            <ActionLink href="#features" variant="secondary">
                                Explore Features
                            </ActionLink>
                        </div>
                        <p className="mt-6 text-sm text-muted">Built with African women entrepreneurs in mind.</p>
                    </div>

                    <div className="relative pb-16 lg:col-span-5 lg:pb-0">
                        <div className="media relative aspect-[4/5] w-full lg:h-full lg:min-h-[600px] lg:aspect-auto" style={cutBottomLeft(72)}>
                            <Image
                                src={s.image.src}
                                alt={s.image.alt}
                                fill
                                priority
                                sizes="(min-width: 1024px) 460px, 100vw"
                                className="object-cover"
                                style={{ objectPosition: s.image.position }}
                            />
                        </div>
                        {/* The real menu of the live Ndiara POS app */}
                        <div className={`media absolute bottom-0 left-6 w-[150px] bg-white md:w-[176px] lg:-left-12 lg:bottom-14 ${hairline}`}>
                            <Image
                                src="/images/ecosystem/pos-menu.jpg"
                                alt="Ndiara POS menu: Products, Purchases, Sales, Returns, Quotations, Expenses"
                                width={372}
                                height={524}
                                sizes="176px"
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The challenges */}
            <section className="section band" aria-labelledby="pos-challenges">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <h2 id="pos-challenges" className="title-section lg:col-span-6">
                            Running a Business Comes With Enough Challenges.
                        </h2>
                        <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
                            <p className="text-lg font-semibold leading-relaxed text-navy">{"Keeping track of your sales, stock and orders shouldn't be another one."}</p>
                            <p className="lead mt-4">
                                Whether you are managing a shop, fulfilling orders from WhatsApp or selling across different channels, Ndiara POS helps you stay organized and keep better records of your business.
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 lg:mt-20">
                        {challenges.map((c) => (
                            <article key={c.q} className="md:pr-6">
                                <h3 className="title-card">{c.q}</h3>
                                <p className="mt-3 leading-relaxed text-muted">{c.a[0]}</p>
                                <p className="mt-3 leading-relaxed text-foreground">{c.a[1]}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="section bg-white" aria-labelledby="pos-how">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-6">
                            <span className="eyebrow mb-6">HOW IT WORKS</span>
                            <h2 id="pos-how" className="title-section">
                                Getting Started Is Simple.
                            </h2>
                        </div>
                        <p className="lead lg:col-span-5 lg:col-start-8 lg:pt-14">
                            {"You don't need to be a technology expert to organize your business. Ndiara POS is designed to make everyday business management easier."}
                        </p>
                    </div>
                    <div className="media mt-14 aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
                        <Image
                            src="/images/pages/pos-steps-facilitator-room.jpg"
                            alt="A young facilitator with long braids shows a phone screen to women seated in a large training room"
                            fill
                            sizes="(min-width: 1200px) 1136px, 100vw"
                            className="object-cover object-[50%_62%]"
                        />
                    </div>
                    <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <li key={step.n}>
                                <span className="block font-display text-[3rem] font-medium leading-none text-primary-ink" aria-hidden="true">
                                    {step.n}
                                </span>
                                <h3 className="title-card mt-4 text-lg">
                                    <span className="sr-only">{step.n} </span>
                                    {step.t}
                                </h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-14">
                        <ActionLink href={s.liveUrl}>Get Started with Ndiara POS</ActionLink>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="section band scroll-mt-20" aria-labelledby="pos-features">
                <div className="wrap grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-4">
                        <div>
                            <span className="eyebrow mb-6">EXPLORE THE FEATURES</span>
                            <h2 id="pos-features" className="title-section">
                                The Tools You Need to Stay on Top of Your Business.
                            </h2>
                            <p className="lead mt-6">
                                From your first sale of the day to your last customer order, Ndiara POS brings essential business management tools together.
                            </p>
                            <TextLink href={s.liveUrl} className="mt-8">
                                Explore Ndiara POS
                            </TextLink>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:col-span-7 lg:col-start-6">
                        {features.map((f) => (
                            <article key={f.name}>
                                <p className="text-sm font-semibold text-primary-ink">{f.name}</p>
                                <h3 className="title-card mt-2">{f.t}</h3>
                                <p className="mt-3 leading-relaxed text-muted">{f.d}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Built for the way you sell */}
            <section className="section bg-white" aria-labelledby="pos-channels">
                <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <span className="eyebrow mb-6 uppercase">Built for the Way You Sell</span>
                        <h2 id="pos-channels" className="title-section">
                            {"Your Business Doesn't Happen in Just One Place."}
                        </h2>
                        <p className="mt-10 max-w-[30ch] font-display text-[clamp(2rem,1.4rem+1.6vw,2.75rem)] font-medium leading-[1.02] text-primary-ink">
                            Because good business management should fit the way you work.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-5 lg:pt-14">
                        <p className="lead">
                            Your customers might find you on Instagram, place an order through WhatsApp, pay through mobile money or walk straight into your shop.
                        </p>
                        <p className="lead font-semibold text-navy">However you sell, keeping track of your business matters.</p>
                        <p className="lead">
                            {"Ndiara POS is being designed with these everyday business realities in mind, helping entrepreneurs organise their sales, products and orders without losing sight of what's happening across their businesses."}
                        </p>
                    </div>
                </div>
            </section>

            {/* The thinking behind Ndiara */}
            <section className="section band" aria-labelledby="pos-thinking">
                <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
                    <div className="lg:col-span-5">
                        <span className="eyebrow mb-6">THE THINKING BEHIND NDIARA</span>
                        <h2 id="pos-thinking" className="title-section">
                            Built Around the Realities of African Entrepreneurs.
                        </h2>
                        <p className="lead mt-8">
                            Ndiara grew from conversations with women entrepreneurs about the challenges they face in starting, managing and growing their businesses.
                        </p>
                        <p className="lead mt-4">
                            From keeping reliable sales records to managing stock and customer orders, these conversations helped shape our understanding of what entrepreneurs need from digital business tools.
                        </p>
                        <p className="lead mt-4">
                            {"We're bringing those insights into Ndiara POS, with a focus on making business management more practical, accessible and relevant to the people using it."}
                        </p>
                        <TextLink href="/#ecosystem" className="mt-8">
                            Discover the Ndiara Ecosystem
                        </TextLink>
                    </div>
                    <div className="media aspect-[3/2] w-full lg:col-span-7">
                        <Image
                            src="/images/pages/pos-thinking-laughing-phones.jpg"
                            alt="A trainer in a GROW t-shirt and an older woman entrepreneur in a red cap laugh together while using their smartphones"
                            fill
                            sizes="(min-width: 1024px) 660px, 100vw"
                            className="object-cover object-[40%_40%]"
                        />
                    </div>
                </div>
            </section>

            <ClosingBand
                id="pos-close"
                afterBand
                title="Ready to Take Better Control of Your Business?"
                actions={
                    <ActionLink href={s.liveUrl} tone="navy">
                        Get Started with Ndiara POS
                    </ActionLink>
                }
            >
                <p>Your sales, inventory and orders deserve more than scattered records.</p>
                <p>Discover how Ndiara POS can help you stay organised, keep track of what matters and manage your business with greater confidence.</p>
            </ClosingBand>

            <SolutionsRail current="pos" />
        </PageShell>
    );
}
