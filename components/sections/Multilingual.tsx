"use client";

import { motion } from "framer-motion";
import { Globe, Languages } from "lucide-react";

export function Multilingual() {
    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Background World Map (Abstract) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
                <div className="size-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm text-accent-cream">
                    <Languages className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    Business has no <span className="text-primary">Borders</span>.
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mb-12">
                    Ndiara is available in English, French, and Swahili. Because your ambition shouldn't be limited by language.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {["English", "Français", "Kiswahili"].map((lang, i) => (
                        <motion.div
                            key={lang}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
                        >
                            {lang}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
