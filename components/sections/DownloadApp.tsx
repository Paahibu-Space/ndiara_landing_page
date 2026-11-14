"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export function DownloadApp() {
    return (
        <section className="py-24 bg-white dark:bg-[#150b18] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-background-light dark:bg-[#2d1b32] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

                    {/* Content */}
                    <div className="w-full md:w-1/2 relative z-10">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">
                            NDIARA ON THE GO
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6">
                            Your Business in <br /><span className="text-primary">Your Pocket.</span>
                        </h2>
                        <div className="flex flex-col gap-4 mb-6 max-w-md">
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                {"Your business doesn't stop when you step away from your shop, office, or workspace. Neither should your access to the tools and resources that keep it running."}
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                With Ndiara on your phone, you can manage sales and orders, track expenses, monitor inventory, access business learning resources, and connect with fellow entrepreneurs wherever you are.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                {"Whether you're attending to customers, meeting suppliers, travelling, or working from home, Ndiara helps you stay organised, make informed decisions, and keep your business moving."}
                            </p>
                        </div>
                        <p className="text-lg font-bold text-navy dark:text-white mb-8 max-w-md">
                            Your business. Your pace. Ndiara by your side.
                        </p>
                        {/* TODO(content): replace "#" with the real App Store / Google Play listing URLs (or the
                            mobile-accessible platform URL if there is no downloadable app). None exist in code yet. */}
                        <div className="flex flex-wrap gap-4">
                            <Button
                                asChild
                                className="h-14 px-6 bg-navy text-white hover:bg-navy/90 rounded-xl flex items-center gap-3"
                            >
                                <a href="#">
                                    <Apple className="w-6 h-6" aria-hidden="true" />
                                    <span className="text-left">
                                        <span className="block text-[10px] font-medium opacity-80 uppercase">Download on the </span>
                                        <span className="block text-sm font-bold leading-none">App Store</span>
                                    </span>
                                </a>
                            </Button>
                            <Button
                                asChild
                                className="h-14 px-6 bg-navy text-white hover:bg-navy/90 rounded-xl flex items-center gap-3"
                            >
                                <a href="#">
                                    <Smartphone className="w-6 h-6" aria-hidden="true" />
                                    <span className="text-left">
                                        <span className="block text-[10px] font-medium opacity-80 uppercase">Get it on </span>
                                        <span className="block text-sm font-bold leading-none">Google Play</span>
                                    </span>
                                </a>
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

        </section>
    );
}
