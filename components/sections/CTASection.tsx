"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Users, GraduationCap } from "lucide-react";

const ctaOptions = [
    {
        title: "Sell Online",
        description: "Create your online store in minutes.",
        icon: Store,
        href: "https://ecommerce.paahibuspace.org",
        color: "text-primary",
        bg: "bg-orange-50",
        button_text: "Sign Up",
    },
    {
        title: "Join Community",
        description: "Connect with fellow entrepreneurs.",
        icon: Users,
        href: "https://community.paahibuspace.org",
        color: "text-blue-600",
        bg: "bg-blue-50",
        button_text: "Join Now",
    },
    {
        title: "Ndiara Academy",
        description: "Master new skills with expert courses.",
        icon: GraduationCap,
        href: "https://academy.paahibuspace.org",
        color: "text-purple-600",
        bg: "bg-purple-50",
        button_text: "Learn More",
    }
];

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-background-dark">
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
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-medium text-gray-600">
                        Empowering African Women Entrepreneurs
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight text-navy dark:text-white mb-6 leading-tight"
                >
                    Ready to Build and Grow <br />{" "}
                    <span className="text-primary">Your Business</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Ndiara provides the essential tools, education, andcommunity support
                    you need to turn your vision into a thriving reality.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ctaOptions.map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-6`}>
                                <card.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{card.title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                {card.description}
                            </p>
                            <Button asChild className="w-full rounded-full font-bold h-12" variant={i === 0 ? "default" : "outline"}>
                                <a href={card.href} className="flex items-center justify-center gap-2">
                                    {card.button_text} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
