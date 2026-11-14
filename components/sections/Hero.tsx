"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
                        className="flex flex-col gap-6"
                    >
                        <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-6xl md:text-7xl">
                            Your Business. Your Ambition. <span className="text-primary">Our Support.</span>
                        </h1>
                        <p className="max-w-xl text-xl font-bold leading-relaxed text-navy sm:text-2xl">
                            Meet Ndiara, your business best friend.
                        </p>
                        <p className="max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                            From selling online and managing daily operations to learning new skills, accessing opportunities, and connecting with other entrepreneurs, Ndiara brings the tools and support you need to start, manage, and grow your business into one digital ecosystem.
                        </p>
                        <p className="max-w-xl text-base font-semibold leading-relaxed text-navy sm:text-lg">
                            Built with African women entrepreneurs, for businesses ready to go further.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
                    >
                        <Button asChild className="h-12 px-8 text-base font-bold shadow-lg shadow-primary/25 rounded-full">
                            <a href="#ecosystem">
                                Explore Ndiara
                                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                            </a>
                        </Button>
                        <Button asChild variant="navy" className="h-12 px-8 text-base font-bold rounded-full">
                            <a href="#get-started">Get Started</a>
                        </Button>
                    </motion.div>
                </div>

                {/* Visual Right */}
                <div className="relative flex flex-1 items-center justify-center py-10 lg:h-full lg:w-1/2 lg:py-0" aria-hidden="true">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
