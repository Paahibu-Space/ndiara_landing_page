"use client";

import { motion } from "framer-motion";
import { ArrowRight, Store, Terminal, Users, Calculator, GraduationCap, Network, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        color: "bg-orange-50 text-primary",
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
        color: "bg-blue-50 text-blue-600",
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
        color: "bg-purple-50 text-purple-600",
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
        color: "bg-green-50 text-green-600",
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
        color: "bg-orange-50 text-primary",
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
        color: "bg-blue-50 text-blue-600",
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
        color: "bg-purple-50 text-purple-600",
        cta: "Explore Opportunities",
        // TODO(content): add the Ndiara Growth & Opportunities destination URL (none confirmed in the doc).
        href: "#",
    },
];

export function EverythingGrid() {
    return (
        <section id="solutions" className="py-24 bg-white dark:bg-[#1f1022] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6">
                        Find the Right Tools for Your <span className="text-primary">Business</span>.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        {"From your first sale to managing a growing business, explore Ndiara's digital solutions designed to help you work smarter, build your skills, and pursue new opportunities."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, i) => {
                        const isExternal = product.href.startsWith("http");
                        return (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                className={`bg-background-light dark:bg-[#2d1b32] p-8 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-lg transition-all flex flex-col ${i === products.length - 1 ? "md:col-span-2 md:w-1/2 md:justify-self-center lg:col-span-1 lg:w-auto lg:col-start-2" : ""}`}
                            >
                                <div className={`w-14 h-14 rounded-xl ${product.color} flex items-center justify-center mb-6`} aria-hidden="true">
                                    <product.icon className="w-7 h-7" />
                                </div>
                                <span className="text-primary font-bold tracking-wider text-xs mb-2 block">
                                    {product.name}
                                </span>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{product.heading}</h3>
                                <div className="flex flex-col gap-2 mb-5">
                                    {product.body.map((para) => (
                                        <p key={para} className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {product.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden="true"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild variant="link" className="mt-auto p-0 h-auto justify-start text-primary font-bold">
                                    <a
                                        href={product.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                    >
                                        {product.cta} <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                                    </a>
                                </Button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
