"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACADEMY_URL = "https://guubu.ndiara.africa/";

const learningCategories = [
    {
        title: "Marketing & Customer Growth",
        desc: "Learn practical approaches to attracting customers, building relationships, and growing your brand.",
    },
    {
        title: "Financial Management",
        desc: "Strengthen your skills in pricing, budgeting, managing cash flow, and making informed financial decisions.",
    },
    {
        title: "Business Operations & Supply Chains",
        desc: "Discover how experienced entrepreneurs manage suppliers, inventory, production, and daily business operations.",
    },
    {
        title: "Digital Business & E-Commerce",
        desc: "Learn how to use digital tools to reach customers, sell online, and manage your business more effectively.",
    },
];

export function AcademyPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const ySecondary = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section className="py-24 bg-navy overflow-hidden relative">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            {/* Ndiara Academy */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                <div className="w-full lg:w-1/2">
                    <span className="text-accent-cream font-bold tracking-wider text-sm uppercase mb-4 block">
                        NDIARA ACADEMY
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Learn Today. <br /><span className="text-primary">Grow Your Business Tomorrow.</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                        Running a business comes with questions, challenges, and opportunities to learn something new every day.
                    </p>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Ndiara Academy makes practical entrepreneurship education accessible to African women entrepreneurs through courses, masterclasses, and learning resources covering business management, financial literacy, digital skills, marketing, customer relations, and business growth.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8">
                            <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer">
                                Explore Ndiara Academy
                                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col gap-4">
                    <p className="text-white text-lg font-semibold leading-relaxed">
                        At Ndiara, we recognise that women entrepreneurs are not just learners. They are also knowledge holders, innovators, and educators whose experiences offer valuable lessons about what it takes to start, manage, and grow a business.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        {"That's why Ndiara Academy brings together industry experts, professional trainers, and experienced women entrepreneurs who create and deliver courses based on their expertise and real-world business experiences. From managing customers and navigating local markets to building successful brands and growing enterprises, our learning content combines professional knowledge with practical insights into what works for African businesses."}
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        {"Whether you're starting your first business, improving your operations, or preparing to expand, Ndiara Academy gives you access to relevant knowledge, practical skills, and the experiences of women who have walked similar paths."}
                    </p>
                </div>
            </div>

            {/* Featured Masterclasses */}
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 mt-24 pt-24 border-t border-white/10 flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2">
                    <span className="text-accent-cream font-bold tracking-wider text-sm uppercase mb-4 block">
                        FEATURED MASTERCLASSES
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Real Experience. <span className="text-primary">Practical Knowledge.</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                        Learn from experienced African women entrepreneurs, business professionals, and industry experts who share practical lessons, proven approaches, and insights from building and managing businesses.
                    </p>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Explore masterclasses that address the decisions and challenges entrepreneurs face every day, from attracting customers and managing finances to improving operations and expanding into new markets.
                    </p>

                    <h3 className="text-white text-xl font-bold mb-4">Featured Learning Categories</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {learningCategories.map((category) => (
                            <div key={category.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                                <h4 className="text-white font-bold mb-2">{category.title}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">{category.desc}</p>
                            </div>
                        ))}
                    </div>

                    <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8">
                        <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer">
                            Explore Masterclasses
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </a>
                    </Button>
                </div>

                <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center" aria-hidden="true">
                    {/* Card Stack Effect */}
                    <motion.div
                        style={{ y, rotate: -6 }}
                        className="absolute w-[300px] h-[400px] bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl z-0"
                    ></motion.div>
                    <motion.div
                        style={{ y: ySecondary, rotate: 3 }}
                        className="absolute w-[300px] h-[400px] bg-slate-700 rounded-2xl border border-slate-600 shadow-2xl z-10"
                    ></motion.div>
                    {/*
                      Featured masterclass card: neutral placeholder.
                      TODO(content): replace with a real featured masterclass — course title, the instructor's
                      real name, her business or professional background, a short note on what participants
                      will learn, and a real thumbnail/video. Do not use invented instructors or courses.
                    */}
                    <motion.div
                        style={{ y: 0 }}
                        className="relative w-[320px] h-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden z-20"
                    >
                        <div className="w-full h-full bg-slate-200">
                            <div className="w-full h-2/3 bg-gradient-to-br from-primary/40 via-navy/30 to-navy/70 flex items-center justify-center">
                                <PlayCircle className="w-16 h-16 text-white drop-shadow-lg opacity-80" />
                            </div>
                            <div className="p-6 bg-white absolute bottom-0 w-full flex flex-col gap-3">
                                <div className="h-3 w-24 bg-primary/30 rounded"></div>
                                <div className="h-5 w-4/5 bg-slate-200 rounded"></div>
                                <div className="h-4 w-3/5 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
