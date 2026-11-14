"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";

// TODO(content): verify that "60+ Languages" support is genuinely available before launch
// (the doc asks to show this label only if that level of support exists, and to distinguish
// fully localised languages from translation-supported ones).
// TODO(content): wire these options to real language switching (not built yet; no i18n in this app).
const languages = ["English", "Français", "Kiswahili", "60+ Languages"];

export function Multilingual() {
    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Background World Map (Abstract) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
                <div className="size-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm text-accent-cream" aria-hidden="true">
                    <Languages className="w-8 h-8" />
                </div>
                <span className="text-accent-cream font-bold tracking-wider text-sm uppercase mb-4 block">
                    Built with and for Africa
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    Business Has No <span className="text-primary">Borders</span>.
                </h2>
                <div className="max-w-2xl flex flex-col gap-4 mb-12">
                    <p className="text-lg text-slate-300">
                        Your language should never stand between you and the opportunities to grow your business.
                    </p>
                    <p className="text-lg text-slate-300">
                        Ndiara brings business tools, entrepreneurship education, and a community of entrepreneurs closer to women across Africa through multilingual access.
                    </p>
                    <p className="text-lg text-slate-300">
                        {"Whether you're managing your business, learning a new skill, or connecting with entrepreneurs beyond your country, Ndiara helps you access the resources and opportunities you need in a language you understand."}
                    </p>
                    <p className="text-lg text-white font-semibold">
                        Because wherever you are in Africa, your ideas, knowledge, and ambitions deserve room to grow.
                    </p>
                </div>

                <h3 className="text-accent-cream font-bold tracking-wider text-sm mb-6">
                    Available Languages
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                    {languages.map((lang, i) => (
                        <span key={lang} className="inline-flex items-center gap-3 md:gap-4 whitespace-nowrap">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
                            >
                                {lang}
                            </motion.span>
                            {i < languages.length - 1 && (
                                <span aria-hidden="true" className="text-white/30 font-bold"> | </span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
