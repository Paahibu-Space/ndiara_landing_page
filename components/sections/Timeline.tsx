"use client";

import { motion } from "framer-motion";
import { Sprout, TrendingUp, Award, ArrowRight } from "lucide-react";

type StageLink = { label: string; href: string };

const stages: {
    stage: string;
    title: string;
    icon: typeof Sprout;
    desc: string;
    color: string;
    links: StageLink[];
}[] = [
    {
        stage: "Stage 1: Getting Started",
        title: "Turning Your Idea Into a Business",
        icon: Sprout,
        desc: "Explore practical learning resources, connect with other entrepreneurs, and build the knowledge and confidence to bring your business idea to life.",
        color: "bg-green-100 text-green-600",
        links: [
            { label: "Ndiara Academy", href: "https://guubu.ndiara.africa/" },
            { label: "Ndiara Community", href: "https://nhanga.ndiara.africa/" },
        ],
    },
    {
        stage: "Stage 2: Building Your Business",
        title: "Making Everyday Business Easier",
        icon: TrendingUp,
        desc: "Organise your operations, manage sales and customers, strengthen your business skills, and discover new ways to reach your market.",
        color: "bg-primary/10 text-primary",
        links: [
            { label: "Ndiara E-Commerce", href: "https://ndiara.shop/" },
            { label: "Ndiara POS", href: "https://pos.ndiara.africa/" },
        ],
    },
    {
        stage: "Stage 3: Growing Further",
        title: "Preparing for Your Next Opportunity",
        icon: Award,
        desc: "Use business insights, connections, learning opportunities, and growth resources to make informed decisions and pursue your next stage of expansion.",
        color: "bg-purple-100 text-purple-600",
        links: [{ label: "Ndiara HRM", href: "https://hrm.ndiara.africa/" }],
    },
];

export function Timeline() {
    return (
        <section className="py-20 bg-white dark:bg-[#2a2018]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-4">
                        {"Wherever You Are in Business, There's Room to Grow."}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Starting something new? Finding your feet? Ready to take your business further? Ndiara is designed to support entrepreneurs at different stages of their journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

                    {stages.map((stage, i) => (
                        <motion.div
                            key={stage.stage}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`w-24 h-24 rounded-full ${stage.color} flex items-center justify-center mb-6 shadow-sm border-4 border-white dark:border-[#2a2018] relative z-10 transition-transform group-hover:scale-110`} aria-hidden="true">
                                <stage.icon className="w-10 h-10" />
                            </div>
                            <span className="text-primary font-bold tracking-wider text-xs mb-2 block">
                                {stage.stage}
                            </span>
                            <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                                {stage.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed px-4 mb-5">
                                {stage.desc}
                            </p>
                            <ul className="mt-auto flex flex-wrap justify-center gap-3">
                                {stage.links.map((link) => {
                                    const isExternal = link.href.startsWith("http");
                                    return (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target={isExternal ? "_blank" : undefined}
                                                rel={isExternal ? "noopener noreferrer" : undefined}
                                                className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 text-sm font-bold text-navy dark:text-white hover:border-primary hover:text-primary transition-colors"
                                            >
                                                {link.label}
                                                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
