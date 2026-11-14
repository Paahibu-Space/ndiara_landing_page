"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle, Layers, MessageCircle, Package, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const fragmentedTools = [BookOpen, MessageCircle, Package, Search];

const painPoints = [
    "Manual records and scattered information.",
    "Difficulty tracking sales and inventory.",
    "Limited access to business support and opportunities.",
];

const benefits = [
    "Easier business management.",
    "Better visibility into sales and operations.",
    "Learning, connections, and opportunities.",
];

export function ProblemSolution() {
    return (
        <section className="w-full bg-background-light dark:bg-background-dark py-16 md:py-24">
            <div className="px-4 md:px-20 max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-6 text-center mb-16">
                    <h2 className="text-navy dark:text-white text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                        {"Running a Business Is Hard Enough. Managing It Shouldn't Be."}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        From keeping track of sales to reaching customers and finding the right support, running a business comes with many responsibilities. Ndiara is designed to make everyday business management simpler.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    {/* The Challenge: fragmented tools (neutral, balanced styling) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 flex flex-col border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-full bg-navy/10 dark:bg-white/10 flex items-center justify-center text-navy dark:text-slate-200" aria-hidden="true">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-navy dark:text-slate-200 text-xl font-bold uppercase tracking-wider">
                                THE CHALLENGE
                            </h3>
                        </div>
                        {/* Fragmented tools: each task lives in a separate place */}
                        <div className="w-full bg-navy/5 dark:bg-slate-700 aspect-video rounded-xl mb-6 flex items-center justify-center overflow-hidden" aria-hidden="true">
                            <div className="grid grid-cols-2 gap-4 w-3/5">
                                {fragmentedTools.map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="aspect-[4/3] bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center text-navy/60 dark:text-slate-300"
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h4 className="text-navy dark:text-white text-2xl font-bold mb-3">Too Much to Manage. Too Little Support.</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Keeping sales records in notebooks, tracking customer orders through messages, managing stock manually, and searching for business opportunities across different platforms can take valuable time away from growing your business.
                        </p>
                        <ul className="mt-auto space-y-3">
                            {painPoints.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-navy dark:text-slate-200 text-sm font-bold">
                                    <span className="size-2 shrink-0 rounded-full bg-navy/40 dark:bg-slate-400" aria-hidden="true"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* The Ndiara Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-[#2a2018] rounded-2xl p-6 md:p-8 flex flex-col border border-primary/30 shadow-xl relative overflow-hidden"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary" aria-hidden="true">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-primary text-xl font-bold uppercase tracking-wider">
                                THE NDIARA WAY
                            </h3>
                        </div>
                        <div className="w-full bg-primary/5 dark:bg-primary/10 aspect-video rounded-xl mb-6 flex items-center justify-center overflow-hidden relative" aria-hidden="true">
                            {/* Abstract clean dashboard */}
                            <div className="w-4/5 h-4/5 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
                                <div className="h-8 bg-slate-50 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-600 flex items-center px-3 gap-2">
                                    <div className="size-2 rounded-full bg-slate-300"></div>
                                    <div className="size-2 rounded-full bg-slate-300"></div>
                                    <div className="size-2 rounded-full bg-slate-300"></div>
                                </div>
                                <div className="p-4 flex-1 flex gap-4">
                                    <div className="w-1/3 flex flex-col gap-2">
                                        <div className="h-12 bg-primary/20 rounded w-full"></div>
                                        <div className="h-8 bg-slate-100 dark:bg-slate-600 rounded w-3/4"></div>
                                        <div className="h-8 bg-slate-100 dark:bg-slate-600 rounded w-full"></div>
                                    </div>
                                    <div className="flex-1 bg-slate-50 dark:bg-slate-700 rounded p-2 flex items-end justify-around gap-2">
                                        <div className="w-full bg-primary/40 h-[40%] rounded-t"></div>
                                        <div className="w-full bg-primary/60 h-[60%] rounded-t"></div>
                                        <div className="w-full bg-primary h-[80%] rounded-t"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-navy dark:text-white text-2xl font-bold mb-3">More Clarity. More Control. More Room to Grow.</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Bring essential business tools, learning resources, and entrepreneurial connections closer together. Ndiara helps you organise your operations, understand your business, and access support as you grow.
                        </p>
                        <ul className="mt-auto space-y-3">
                            {benefits.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-navy dark:text-slate-200 text-sm font-bold">
                                    <CheckCircle className="text-primary w-5 h-5 shrink-0" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
                <div className="mt-12 flex justify-center">
                    <Button asChild className="rounded-full h-12 px-8 text-base font-bold shadow-lg shadow-primary/30">
                        <a href="#ecosystem">
                            Discover Ndiara
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
