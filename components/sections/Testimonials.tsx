"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Story card framework.
 * Each card shows: a real photograph, her name, business and location,
 * a short quotation in her own words, and a link to her full story where available.
 * No ratings. Never manufacture testimonials or attribute invented statements.
 */
type EntrepreneurStory = {
    name: string;
    business: string;
    location: string;
    image: string;
    quote: string;
    storyHref?: string;
};

// TODO(content): populate with verified entrepreneur stories (real photo, name, business,
// location, her own words, optional full-story link). Until then, neutral placeholder cards render.
// TODO(content): optional future story filter ("All Stories | Selling Online | Business Management |
// Learning | Community | Growth") was a doc recommendation and is intentionally not built yet.
const stories: EntrepreneurStory[] = [];

export function Testimonials() {
    return (
        <section className="py-24 bg-white dark:bg-[#1f1022] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">
                        OUR ENTREPRENEURS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6">
                        Real Stories, Real <span className="text-primary">Growth</span>.
                    </h2>
                    <div className="max-w-3xl mx-auto flex flex-col gap-4">
                        <p className="text-lg font-semibold text-navy dark:text-white">
                            Behind every business is a woman with a story worth telling.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            From taking the first steps in entrepreneurship to managing everyday challenges and finding new opportunities to grow, African women entrepreneurs are building businesses through determination, creativity, experience, and hard work.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            {"At Ndiara, their journeys matter. Explore the experiences of women entrepreneurs, the challenges they've navigated, the lessons they've learned, and how access to practical tools, knowledge, and meaningful connections supports their businesses."}
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Because growth looks different for every entrepreneur, and every experience has something to teach us.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.length > 0
                        ? stories.map((story, i) => (
                            <motion.div
                                key={story.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background-light dark:bg-[#2d1b32] p-8 rounded-2xl relative flex flex-col"
                            >
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" aria-hidden="true" />
                                <blockquote className="text-navy dark:text-slate-200 text-lg font-medium leading-relaxed mb-8 relative z-10">
                                    {story.quote}
                                </blockquote>
                                <div className="mt-auto flex items-center gap-4">
                                    <div className="size-12 rounded-full overflow-hidden bg-gray-200 ring-2 ring-primary/20 relative shrink-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={story.image} alt={story.name} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy dark:text-white">
                                            {story.storyHref ? (
                                                <a href={story.storyHref} className="hover:text-primary hover:underline">
                                                    {story.name}
                                                </a>
                                            ) : (
                                                story.name
                                            )}
                                        </h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            {story.business}, {story.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                        : [0, 1, 2].map((i) => (
                            // Neutral placeholder card (no invented names, quotes or ratings).
                            <div
                                key={i}
                                aria-hidden="true"
                                className="bg-background-light dark:bg-[#2d1b32] p-8 rounded-2xl relative flex flex-col"
                            >
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                                <div className="flex flex-col gap-3 mb-8">
                                    <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded"></div>
                                    <div className="h-4 w-11/12 bg-slate-200 dark:bg-white/10 rounded"></div>
                                    <div className="h-4 w-3/4 bg-slate-200 dark:bg-white/10 rounded"></div>
                                </div>
                                <div className="mt-auto flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-gray-200 dark:bg-white/10 ring-2 ring-primary/20 shrink-0"></div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-4 w-28 bg-slate-300 dark:bg-white/20 rounded"></div>
                                        <div className="h-3 w-36 bg-slate-200 dark:bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="mt-12 flex justify-center">
                    {/* TODO(content): link to the entrepreneur stories page once it exists. */}
                    <Button asChild className="rounded-full h-12 px-8 text-base font-bold shadow-lg shadow-primary/25">
                        <a href="#">
                            Explore Entrepreneur Stories
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
