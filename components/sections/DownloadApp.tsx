"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, X } from "lucide-react";

export function DownloadApp() {
    const [showComingSoon, setShowComingSoon] = useState(false);

    return (
        <section className="py-24 bg-white dark:bg-[#150b18] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-background-light dark:bg-[#2d1b32] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

                    {/* Content */}
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6">
                            Your Business in <br /> <span className="text-primary">Your Pocket.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md">
                            Manage orders, track expenses, and learn on the go. The Ndiara mobile app puts the power of an office in your hand.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={() => setShowComingSoon(true)}
                                className="h-14 px-6 bg-navy text-white hover:bg-navy/90 rounded-xl flex items-center gap-3"
                            >
                                <Apple className="w-6 h-6" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 uppercase">Download on the</div>
                                    <div className="text-sm font-bold leading-none">App Store</div>
                                </div>
                            </Button>
                            <Button
                                onClick={() => setShowComingSoon(true)}
                                className="h-14 px-6 bg-navy text-white hover:bg-navy/90 rounded-xl flex items-center gap-3"
                            >
                                <Smartphone className="w-6 h-6" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium opacity-80 uppercase">Get it on</div>
                                    <div className="text-sm font-bold leading-none">Google Play</div>
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* Phone Visuals */}
                    <div className="w-full md:w-1/2 relative h-[450px] md:h-[500px] flex items-center justify-center">
                        <div className="relative scale-[0.7] md:scale-100 origin-center transition-transform duration-300 w-full h-full flex items-center justify-center">
                            <motion.div
                                initial={{ y: 100, rotate: -10 }}
                                whileInView={{ y: 0, rotate: -6 }}
                                viewport={{ once: true }}
                                className="absolute z-10 w-[260px] h-[520px] left-1/2 -ml-[130px] md:left-auto md:ml-0 md:right-[40%]"
                            >
                                <Image
                                    src="/images/pos-mockup.png"
                                    alt="Ndiara POS"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ y: 100, rotate: 10 }}
                                whileInView={{ y: 0, rotate: 6 }}
                                viewport={{ once: true }}
                                className="absolute z-0 w-[260px] h-[520px] left-1/2 -ml-[80px] md:left-[60%] md:ml-0"
                            >
                                <Image
                                    src="/images/ecommerce-dashboard.png"
                                    alt="Ndiara Ecommerce Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Coming Soon Popup */}
            <AnimatePresence>
                {showComingSoon && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowComingSoon(false)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border border-gray-100 dark:border-gray-800"
                        >
                            <button
                                onClick={() => setShowComingSoon(false)}
                                className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">Coming Soon!</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">
                                The Ndiara mobile app is currently under development. Join our waitlist to be notified when it launches.
                            </p>
                            <Button
                                onClick={() => setShowComingSoon(false)}
                                className="w-full h-12 rounded-xl font-bold"
                            >
                                Got it
                            </Button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
