"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Store } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-72px)] w-full flex-col justify-center overflow-hidden pt-10 lg:pt-0 bg-background-light">
            {/* Background Decor */}
            <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-navy/5 blur-[100px]"></div>

            <div className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
                {/* Content Left */}
                <div className="flex max-w-2xl flex-col items-start gap-8 py-10 lg:w-1/2 lg:py-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-4"
                    >
                        <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-6xl md:text-7xl">
                            Revolutionizing <br />
                            <span className="text-primary block min-h-[1.1em]">
                                <TypewriterEffect words={["African Business", "Business Growth", "Global Success"]} />
                            </span>
                        </h1>
                        <p className="max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                            Ndiara is <span className="text-primary font-bold">"Your Business Bestfriend"</span>, an innovative educational technology platform empowering African female entrepreneurs with the digital tools they need to succeed locally and globally.
                            Revolutionize your skills, manage your finances, and grow your network in one premium ecosystem.
                        </p>
                        
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-4 flex items-center gap-4 text-sm font-medium text-gray-500"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative size-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
                                    {/* Placeholder avatars since originals are external long URLs, ideally these should be local */}
                                    <div className="absolute inset-0 bg-gray-300" />
                                </div>
                            ))}
                            <div className="flex size-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white text-xs text-navy font-bold">
                                +2k
                            </div>
                        </div>
                        <span>Join 2,000+ entrepreneurs today.</span>
                    </motion.div>
                </div>

                {/* Visual Right */}
                <div className="relative flex flex-1 items-center justify-center py-10 lg:h-full lg:w-1/2 lg:py-0">
                    <div className="relative aspect-square w-full max-w-[600px] lg:scale-110">
                        {/* Main Background Circle */}
                        <div className="absolute inset-0 m-auto size-[80%] rounded-full bg-[#fcfaf8]"></div>

                        {/* Main Character Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute bottom-0 left-1/2 z-10 h-[90%] w-[80%] -translate-x-1/2"
                        >
                            <div
                                className="w-full h-full bg-contain bg-bottom bg-no-repeat"
                                style={{
                                    backgroundImage: "url('/images/hero-woman.png')",
                                    maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to top, black 80%, transparent 100%)",
                                    borderRadius: "50% 50% 0 0"
                                }}
                            />
                        </motion.div>

                        {/* Floating Cards */}
                        {/* Card 1: Revenue */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute left-0 top-[20%] z-20 rounded-2xl bg-white p-4 shadow-xl shadow-gray-200/50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Monthly Revenue</p>
                                    <p className="text-lg font-bold text-navy">+ 24%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Store Status */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute right-0 top-[30%] z-20 rounded-2xl bg-white p-4 shadow-xl shadow-gray-200/50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Store className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Online Store</p>
                                    <div className="mt-1 flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
                                        <div className="size-1.5 rounded-full bg-green-500"></div>
                                        ACTIVE
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Community Message */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-[10%] right-[10%] z-20 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-navy p-4 text-white shadow-xl shadow-navy/20"
                        >
                            <div className="flex items-start gap-3">
                                <div className="relative size-8 rounded-full border-2 border-white/20 overflow-hidden bg-gray-500">
                                    {/* Placeholder for mentor avatar */}
                                </div>
                                <div>
                                    <p className="text-xs font-medium opacity-80">Mentor Sarah</p>
                                    <p className="text-sm font-bold">Great progress! 🚀</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TypewriterEffect({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(String(Math.random() * 350))));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <>
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </>
    );
}
