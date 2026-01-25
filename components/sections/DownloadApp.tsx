"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export function DownloadApp() {
    return (
        <section className="py-24 bg-white dark:bg-[#150b18] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-background-light dark:bg-[#2d1b32] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

                    {/* Content */}
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white mb-6">
                            Your Business in <br /> <span className="text-primary">Your Pocket.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md">
                            Manage orders, track expenses, and learn on the go. The Ndiara mobile app puts the power of an office in your hand.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="h-14 px-6 bg-navy text-white hover:bg-navy/90 rounded-xl flex items-center gap-3">
                                <Apple className="w-6 h-6" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 uppercase">Download on the</div>
                                    <div className="text-sm font-bold leading-none">App Store</div>
                                </div>
                            </Button>
                            <Button className="h-14 px-6 bg-navy text-white hover:bg-navy/90 rounded-xl flex items-center gap-3">
                                <Smartphone className="w-6 h-6" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 uppercase">Get it on</div>
                                    <div className="text-sm font-bold leading-none">Google Play</div>
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* Phone Visuals */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                        <motion.div
                            initial={{ y: 100, rotate: -10 }}
                            whileInView={{ y: 0, rotate: -6 }}
                            viewport={{ once: true }}
                            className="absolute z-10 w-[260px] h-[520px] bg-navy rounded-[40px] border-[8px] border-slate-900 shadow-2xl"
                        >
                            <div className="w-full h-full bg-slate-800 rounded-[30px] overflow-hidden opacity-90 p-4">
                                {/* Abstract app UI */}
                                <div className="w-full h-8 flex justify-between items-center mb-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                    <div className="w-20 h-4 rounded-full bg-white/10"></div>
                                </div>
                                <div className="w-full h-32 rounded-xl bg-primary/20 mb-4"></div>
                                <div className="space-y-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-full h-16 rounded-xl bg-white/5"></div>)}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, rotate: 10 }}
                            whileInView={{ y: 0, rotate: 6 }}
                            viewport={{ once: true }}
                            className="absolute z-0 left-[60%] w-[260px] h-[520px] bg-white dark:bg-slate-700 rounded-[40px] border-[8px] border-slate-200 dark:border-slate-600 shadow-xl opacity-60"
                        >
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
