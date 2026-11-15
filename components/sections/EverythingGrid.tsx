import { ArrowRight, Store, Terminal, Users, Calculator, GraduationCap, Network, Rocket } from "lucide-react";

// Product copy is proposed in the content doc; the doc asks to verify which features are
// live, in development or planned before publication.
// TODO(content): confirm feature availability for each product card before launch.
const products = [
    {
        name: "Ndiara E-Commerce",
        heading: "Take Your Business Online",
        body: [
            "Make it easier for customers to discover your products and shop from your business.",
            "Create an online storefront, organise your product listings, and manage customer orders from one place.",
        ],
        icon: Store,
        items: ["Online Store Creation", "Product & Inventory Management", "Order Management"],
        cta: "Explore E-Commerce",
        href: "https://ndiara.shop/",
    },
    {
        name: "Ndiara POS",
        heading: "Make Every Sale Count",
        body: [
            "Keep track of your daily sales and manage transactions with greater ease.",
            "Ndiara POS helps you organise sales records, monitor products, and better understand how your business is performing.",
        ],
        icon: Terminal,
        items: ["Sales Tracking", "Inventory Management", "Transaction Records"],
        cta: "Explore Ndiara POS",
        href: "https://pos.ndiara.africa/",
    },
    {
        name: "Ndiara HRM",
        heading: "Manage Your Team With Confidence",
        body: [
            "As your business grows, managing people becomes just as important as managing products and sales.",
            "Ndiara HRM helps businesses organise employee information and simplify essential human resource processes.",
        ],
        icon: Users,
        items: ["Employee Records", "Staff Management", "HR Administration"],
        cta: "Explore Ndiara HRM",
        href: "https://hrm.ndiara.africa/",
    },
    {
        name: "Ndiara Accounts",
        heading: "Know Your Numbers. Make Better Decisions.",
        body: [
            "Understand what's coming into your business, what's going out, and where your money is going.",
            "Keep financial information organised to support better business planning and decision-making.",
        ],
        icon: Calculator,
        items: ["Income & Expense Tracking", "Financial Records", "Business Reporting"],
        cta: "Explore Ndiara Accounts",
        // TODO(content): add the live Ndiara Accounts URL (none confirmed in the doc).
        href: "#",
    },
    {
        name: "Ndiara Academy",
        heading: "Learn Skills That Move Your Business Forward",
        body: [
            "Build practical knowledge in entrepreneurship, digital marketing, financial literacy, and business management.",
            "Learn at your own pace and apply new skills to the everyday realities of running a business.",
        ],
        icon: GraduationCap,
        items: ["Entrepreneurship Education", "Digital Business Skills", "Learning Resources"],
        cta: "Explore Ndiara Academy",
        href: "https://guubu.ndiara.africa/",
    },
    {
        name: "Ndiara Community",
        heading: "You Don't Have to Build Alone.",
        body: [
            "Connect with other entrepreneurs who understand your journey.",
            "Share experiences, learn from others, exchange ideas, and discover opportunities to collaborate.",
        ],
        icon: Network,
        items: ["Entrepreneur Networking", "Knowledge Sharing", "Community Connections"],
        cta: "Join the Community",
        href: "https://nhanga.ndiara.africa/",
    },
    {
        name: "Ndiara Growth & Opportunities",
        heading: "Discover Opportunities to Take Your Business Further.",
        body: [
            "Access information and resources that can help you prepare for new opportunities, strengthen your business, and pursue growth.",
        ],
        icon: Rocket,
        items: ["Business Growth Resources", "Funding Opportunity Information", "Entrepreneurial Support"],
        cta: "Explore Opportunities",
        // TODO(content): add the Ndiara Growth & Opportunities destination URL (none confirmed in the doc).
        href: "#",
    },
];

export function EverythingGrid() {
    return (
        <section id="solutions" className="section bg-white scroll-mt-20">
            <div className="wrap">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <h2 className="title-section lg:col-span-7">
                        Find the Right Tools for Your <span>Business</span>.
                    </h2>
                    <p className="lead lg:col-span-5 lg:col-start-8 lg:pt-3">
                        {"From your first sale to managing a growing business, explore Ndiara's digital solutions designed to help you work smarter, build your skills, and pursue new opportunities."}
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, i) => {
                        const isExternal = product.href.startsWith("http");
                        const isLast = i === products.length - 1;
                        return (
                            <article
                                key={product.name}
                                className={`card flex flex-col p-8 ${isLast ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-x-12" : ""}`}
                            >
                                <div className={isLast ? "flex flex-col" : "contents"}>
                                    <product.icon className="mb-6 w-7 h-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                                    <span className="mb-2 block text-sm font-semibold text-primary-ink">
                                        {product.name}
                                    </span>
                                    <h3 className="title-card mb-4">{product.heading}</h3>
                                </div>
                                <div className={`mb-6 flex flex-col gap-2 ${isLast ? "lg:pt-[60px]" : ""}`}>
                                    {product.body.map((para) => (
                                        <p key={para} className="text-[15px] leading-relaxed text-muted">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                                <div className={`flex flex-1 flex-col ${isLast ? "lg:pt-[60px]" : ""}`}>
                                    <ul className="mb-8 flex flex-col gap-2">
                                        {product.items.map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-navy">
                                                <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={product.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        className="text-link mt-auto min-h-11 self-start"
                                    >
                                        {product.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
