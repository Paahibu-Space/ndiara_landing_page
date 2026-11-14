"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Users, GraduationCap } from "lucide-react";

const ctaOptions = [
    {
        title: "Sell Online",
        tagline: "Your Products Deserve to Be Seen.",
        description: "Take your business online, showcase your products, reach more customers, and make it easier for people to shop from you.",
        icon: Store,
        href: "https://ndiara.shop/",
        color: "text-primary",
        bg: "bg-orange-50",
        button_text: "Start Selling",
    },
    {
        title: "Join Community",
        tagline: "Find Your People in Business.",
        description: "Connect with fellow entrepreneurs, exchange experiences, share ideas, and build relationships that open doors to new opportunities.",
        icon: Users,
        href: "https://nhanga.ndiara.africa/",
        color: "text-blue-600",
        bg: "bg-blue-50",
        button_text: "Join the Community",
    },
    {
        title: "Ndiara Academy",
        tagline: "Learn From Experience. Grow With Knowledge.",
        description: "Access practical business courses and masterclasses led by industry experts and experienced African women entrepreneurs who share knowledge gained from building and managing businesses.",
        icon: GraduationCap,
        href: "https://guubu.ndiara.africa/",
        color: "text-purple-600",
        bg: "bg-purple-50",
        button_text: "Explore the Academy",
    }
];

export function CTASection() {
    return (
        <section id="get-started" className="py-24 relative overflow-hidden bg-white dark:bg-background-dark scroll-mt-24">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-orange-100 blur-3xl"></div>
                <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-50 blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
                >
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-bold tracking-wider uppercase text-gray-600">
                        YOUR NEXT STEP STARTS HERE
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight text-navy dark:text-white mb-6 leading-tight"
                >
                    Your Business Has Places to Go. <br />
                    <span className="text-primary">{"Let's Get You There."}</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed flex flex-col gap-4"
                >
                    <p>
                        Every business has its own journey, and wherever you are in yours, Ndiara is here to help you move forward.
                    </p>
                    <p>
                        Access practical business tools, develop new skills, connect with fellow entrepreneurs, and discover opportunities to reach more customers and grow your business.
                    </p>
                    <p className="font-semibold text-navy dark:text-white">
                        {"Choose where you'd like to begin. Your business best friend is right here."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ctaOptions.map((card, i) => {
                        const isExternal = card.href.startsWith("http");
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-6`} aria-hidden="true">
                                    <card.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{card.title}</h3>
                                <p className="text-navy dark:text-white font-semibold mb-3">{card.tagline}</p>
                                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                    {card.description}
                                </p>
                                <Button asChild className="mt-auto w-full rounded-full font-bold h-12" variant={i === 0 ? "default" : "outline"}>
                                    <a
                                        href={card.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        className="flex items-center justify-center gap-2"
                                    >
                                        {card.button_text} <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
