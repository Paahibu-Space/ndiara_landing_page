"use client";

import { motion } from "framer-motion";
import { X, Check, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProblemSolution() {
    return (
        <section className="w-full bg-background-light dark:bg-background-dark py-16 md:py-24">
            <div className="px-4 md:px-20 max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-6 text-center mb-16">
                    <h2 className="text-navy dark:text-white text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                        Why settle for chaos?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        See the difference Ndiara makes in your daily operations compared to the status quo.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    {/* Legend: The Struggle */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 flex flex-col border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="text-9xl text-slate-400 font-serif">?</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                                <X className="w-6 h-6" />
                            </div>
                            <h3 className="text-slate-500 dark:text-slate-400 text-xl font-bold uppercase tracking-wider">
                                The Struggle
                            </h3>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700 aspect-video rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                            {/* Abstract messy desk */}
                            <div className="relative w-full h-full p-4 flex flex-wrap content-center justify-center gap-2 opacity-60">
                                <div className="w-20 h-24 bg-slate-300 -rotate-12 rounded shadow-sm"></div>
                                <div className="w-24 h-32 bg-slate-200 rotate-6 rounded shadow-sm"></div>
                                <div className="w-16 h-16 bg-slate-300 rounded-full absolute top-1/2 right-1/4"></div>
                                <div className="w-32 h-20 bg-slate-200 rotate-3 absolute bottom-4 left-10 rounded"></div>
                            </div>
                        </div>
                        <h4 className="text-navy dark:text-slate-200 text-2xl font-bold mb-3">The Old Way</h4>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                            Disconnected tools, endless spreadsheets, and solo struggles. A messy desk of confusion
                            where growth feels impossible.
                        </p>
                        <ul className="mt-auto space-y-3">
                            {["Scattered Data", "Manual Tracking", "Isolated Journey"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                                    <X className="text-red-400 w-5 h-5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legend: The Ndiara Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-[#2a2018] rounded-2xl p-6 md:p-8 flex flex-col border-2 border-primary/20 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle className="w-32 h-32 text-primary" />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="text-primary text-xl font-bold uppercase tracking-wider">
                                The Ndiara Way
                            </h3>
                        </div>
                        <div className="w-full bg-primary/5 dark:bg-primary/10 aspect-video rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
                            {/* Abstract clean dashboard */}
                            <div className="w-4/5 h-4/5 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
                                <div className="h-8 bg-slate-50 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-600 flex items-center px-3 gap-2">
                                    <div className="size-2 rounded-full bg-red-400"></div>
                                    <div className="size-2 rounded-full bg-yellow-400"></div>
                                    <div className="size-2 rounded-full bg-green-400"></div>
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
                        <h4 className="text-navy dark:text-white text-2xl font-bold mb-3">Clear, Scalable Growth</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            One ecosystem. Infinite possibilities. Focus on your business strategy while we handle
                            the organization. A clean dashboard for clarity.
                        </p>
                        <ul className="mt-auto space-y-3">
                            {["Centralized Hub", "Automated Insights", "Thriving Community"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-navy dark:text-slate-200 text-sm font-bold">
                                    <CheckCircle className="text-primary w-5 h-5" /> {item}
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-8 w-full md:w-auto rounded-full h-12 text-base font-bold shadow-lg shadow-primary/30">
                            Switch to Ndiara
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
