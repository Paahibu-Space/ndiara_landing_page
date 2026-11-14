"use client";


import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Smartphone } from "lucide-react";
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
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-wide mb-6">
                            <Smartphone className="w-4 h-4" aria-hidden="true" />
                            BUSINESS MANAGEMENT MADE EASIER
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6 leading-tight">
                            Run Your Business <br />
                            <span className="text-primary">From Anywhere.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            {"Your business doesn't stop when you are away from your shop, office, or workspace."}
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            {"With Ndiara's mobile-friendly business tools, you can stay connected to your operations, manage products, track sales, and keep up with customer orders wherever you are."}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Monitor sales and business performance.",
                                "Add products and manage inventory.",
                                "Share your online store with customers.",
                                "Track customer orders and business activities."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-100 dark:bg-green-900/30 rounded-full p-1 text-green-600 dark:text-green-400 shrink-0" aria-hidden="true">
                                        <Check className="w-3 h-3 md:w-4 md:h-4 stroke-[3]" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild className="h-12 px-8 text-base font-bold shadow-lg shadow-primary/25 rounded-full">
                                <a href="#solutions">
                                    Explore Business Tools
                                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
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
            aria-hidden="true"
            muted
            loop
            playsInline
        />
    );
}
