"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Coins, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ecosystemTabs = [
    {
        id: "community",
        label: "Community",
        icon: Users,
        color: "bg-blue-500",
        link: "https://community.paahibuspace.org",
        content: {
            title: "Connect & Collaborate",
            desc: "Find partners, mentors, and friends who get it.",
            features: ["Mentorship Circles", "Marketplace", "Events"],
        },
    },
    {
        id: "finance",
        label: "Finance",
        icon: Coins,
        color: "bg-green-500",
        link: "https://baabuh.paahibuspace.org",
        content: {
            title: "Fund Your Future",
            desc: "Access capital and manage your cashflow with ease.",
            features: ["Micro-loans", "Invoicing", "Expense Tracking"],
        },
    },
    {
        id: "education",
        label: "Education",
        icon: GraduationCap,
        color: "bg-primary",
        link: "https://academy.paahibuspace.org",
        content: {
            title: "Learn & Grow",
            desc: "Master new skills with our expert-led academy.",
            features: ["Masterclasses", "Certifications", "Resources"],
        },
    },
];

export function EcosystemMap() {
    const [activeTab, setActiveTab] = useState("education");
    const activeData = ecosystemTabs.find((t) => t.id === activeTab)!;

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6 leading-tight">
                            One Ecosystem. <br />
                            <span className="text-primary">Infinite Possibilities.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                            Ndiara integrates every aspect of your business journey into one seamless platform. No more fragmented tools.
                        </p>

                        {/* Mobile/Tablet Tabs (Hidden on Desktop map view if we want, but let's keep them as controls) */}
                        <div className="flex gap-4 mb-8">
                            {ecosystemTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activeTab === tab.id
                                        ? "bg-navy text-white border-navy"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-navy/50"
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    <span className="font-bold text-sm">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
                            >
                                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white shadow-lg ${activeData.color}`}>
                                    <activeData.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">{activeData.content.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-6">{activeData.content.desc}</p>
                                <ul className="space-y-3 mb-6">
                                    {activeData.content.features.map((feat) => (
                                        <li key={feat} className="flex items-center gap-2 text-sm font-semibold text-navy dark:text-slate-200">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild variant="link" className="p-0 h-auto text-primary font-bold">
                                    <a href={activeData.link} target="_blank" rel="noopener noreferrer">
                                        Explore {activeData.label} <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </Button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Visual (Orbit Map) */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center h-[350px] lg:h-[600px] overflow-hidden">

                        {/* Scale wrapper to fit mobile screens */}
                        <div className="relative scale-[0.6] sm:scale-75 md:scale-100 transition-transform duration-300">
                            {/* Orbits */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-200 dark:border-slate-700 rounded-full opacity-50"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-200 dark:border-slate-700 rounded-full opacity-50"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-slate-200 dark:border-slate-700 rounded-full opacity-50"></div>

                            {/* Central Hub */}
                            <div className="relative z-10 w-24 h-24 bg-navy rounded-full shadow-2xl flex items-center justify-center border-4 border-white dark:border-slate-800 mx-auto">
                                <span className="text-white font-bold text-xl">Ndiara</span>
                            </div>

                            {/* Orbiting Elements (Centered absolutely) */}
                            {/* Inner Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    className="w-full h-full"
                                >
                                    <div className="absolute -top-3 left-1/2 -ml-3 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-xs">
                                        💰
                                    </div>
                                </motion.div>
                            </div>

                            {/* Middle Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none">
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                    className="w-full h-full"
                                >
                                    <div className="absolute top-1/2 -right-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-sm">
                                        🎓
                                    </div>
                                    <div className="absolute top-1/2 -left-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-sm">
                                        🤝
                                    </div>
                                </motion.div>
                            </div>

                            {/* Outer Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                    className="w-full h-full"
                                >
                                    <div className="absolute bottom-10 right-16 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-lg">
                                        📊
                                    </div>
                                    <div className="absolute top-10 left-16 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-lg">
                                        🚀
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
