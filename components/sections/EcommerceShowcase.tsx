"use client";


import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight, Store, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EcommerceShowcase() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">

                    {/* Visual Side (Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
                    >


                        <div className="relative mx-auto h-[600px] w-[300px]">
                            <VideoPlayer />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-10 -left-4 md:left-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                                <Store className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium">Store Status</p>
                                <p className="text-sm font-bold text-navy dark:text-white flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Online & Active
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-wide mb-6">
                            <Smartphone className="w-4 h-4" />
                            Mobile First Management
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6 leading-tight">
                            Run Your Store <br />
                            <span className="text-primary">From Anywhere.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            Don't let logistics tie you down. With the Ndiara mobile dashboard, you have full control of your business in your pocket. Manage products, track sales, and fulfill orders on the go.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Real-time sales analytics and reporting",
                                "Manage inventory and add products instantly",
                                "Share store links and QR codes with customers",
                                "Receive instant order notifications"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-1 text-green-600 dark:text-green-400 shrink-0">
                                        <Check className="w-3 h-3 md:w-4 md:h-4 stroke-[3]" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild className="h-12 px-8 text-base font-bold shadow-lg shadow-primary/25 rounded-full">
                                <a href="https://ecommerce.paahibuspace.org" target="_blank" rel="noopener noreferrer">
                                    Create Free Store
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(videoRef);

    useEffect(() => {
        if (isInView && videoRef.current) {
            videoRef.current.play();
        }
    }, [isInView]);

    return (
        <video
            ref={videoRef}
            src="/images/record.mov"
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
        />
    );
}
