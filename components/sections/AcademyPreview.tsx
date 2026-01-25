"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AcademyPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-24 bg-navy overflow-hidden relative">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <span className="text-accent-cream font-bold tracking-wider text-sm uppercase mb-4 block">
                        Ndiara Academy
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Learn from the <br /> <span className="text-primary">Best in Africa.</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Access a library of masterclasses taught by successful African women entrepreneurs. From supply chain management to digital marketing, we cover it all.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8">
                            Start Learning
                        </Button>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 h-12 px-8">
                            View Catalog
                        </Button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
                    {/* Card Stack Effect */}
                    <motion.div
                        style={{ y, rotate: -6 }}
                        className="absolute w-[300px] h-[400px] bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl z-0"
                    ></motion.div>
                    <motion.div
                        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]), rotate: 3 }}
                        className="absolute w-[300px] h-[400px] bg-slate-700 rounded-2xl border border-slate-600 shadow-2xl z-10"
                    ></motion.div>
                    <motion.div
                        style={{ y: 0 }}
                        className="relative w-[320px] h-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden z-20 group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                            <PlayCircle className="w-16 h-16 text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                        </div>
                        {/* Placeholder for video thumbnail, ideally use Next/Image with a real asset */}
                        <div className="w-full h-full bg-slate-200">
                            <div className="w-full h-2/3 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, transparent, black), url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800')" }}></div>
                            <div className="p-6 bg-white absolute bottom-0 w-full">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide">Masterclass</span>
                                <h4 className="text-navy font-bold text-lg leading-tight mt-1">Scaling Your Supply Chain</h4>
                                <p className="text-slate-500 text-sm mt-2">with Amina J. / CEO at LogiAfrica</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
