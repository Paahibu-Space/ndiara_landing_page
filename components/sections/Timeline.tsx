"use client";

import { motion } from "framer-motion";
import { Sprout, TrendingUp, Award } from "lucide-react";

const stages = [
    {
        title: "The Starting Block",
        icon: Sprout,
        desc: "For those just planting the seeds. Validation, basic business modeling, and community support.",
        color: "bg-green-100 text-green-600",
    },
    {
        title: "The Growth Spurt",
        icon: TrendingUp,
        desc: "For businesses seeing traction. Access to funding, advanced tools, and mentorship to scale.",
        color: "bg-primary/10 text-primary",
    },
    {
        title: "The Harvest Season",
        icon: Award,
        desc: "For established empires. Wealth management, expansion strategy, and legacy building.",
        color: "bg-purple-100 text-purple-600",
    },
];

export function Timeline() {
    return (
        <section className="py-20 bg-white dark:bg-[#2a2018]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-4">
                        Growth at Every Stage
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Whether you are just starting or leading an empire, Ndiara has a tailored path for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

                    {stages.map((stage, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`w-24 h-24 rounded-full ${stage.color} flex items-center justify-center mb-6 shadow-sm border-4 border-white dark:border-[#2a2018] relative z-10 transition-transform group-hover:scale-110`}>
                                <stage.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                                {stage.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed px-4">
                                {stage.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
