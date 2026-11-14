"use client";

import { motion } from "framer-motion";
import { Users, Coins, GraduationCap, Briefcase, Store } from "lucide-react";

const ecosystemAreas = [
    {
        title: "Community — Connect & Collaborate",
        icon: Users,
        color: "bg-blue-500",
        desc: "Find your people. Access a supportive community of fellow entrepreneurs, share experiences, exchange ideas, and discover opportunities to collaborate, innovate, and grow together.",
    },
    {
        title: "Finance — Manage & Grow",
        icon: Coins,
        color: "bg-green-500",
        desc: "Build stronger financial management practices, keep track of business transactions, and access resources and opportunities that help you make informed decisions and transform your business finances.",
    },
    {
        title: "Education — Learn & Apply",
        icon: GraduationCap,
        color: "bg-primary",
        desc: "Access practical business and digital learning resources designed around the realities of entrepreneurship. Build your skills, discover new approaches, and apply what you learn to innovate and grow your business.",
    },
    {
        title: "Business Tools — Organise & Operate",
        icon: Briefcase,
        color: "bg-navy",
        desc: "Make everyday business management easier. Access digital tools to manage sales, inventory, customers, finances, and operations, helping you work more efficiently and transform how you run your business.",
    },
    {
        title: "Commerce — Reach & Sell",
        icon: Store,
        color: "bg-purple-500",
        desc: "Take your business beyond its current reach. Build your online presence, showcase your products, connect with more customers, and access new markets and opportunities to grow your sales.",
    },
];

export function EcosystemMap() {
    return (
        <section id="ecosystem" className="py-20 bg-background-light dark:bg-background-dark overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6 leading-tight">
                            One Ecosystem. <br />
                            <span className="text-primary">Infinite Possibilities.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                            Access the resources you need, innovate in how you run your business, and transform your entrepreneurial journey. Ndiara brings together the tools, knowledge, connections, and opportunities that help African women entrepreneurs start, manage, and grow their businesses.
                        </p>
                    </div>

                    {/* Right Visual (Orbit Map) */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center h-[350px] lg:h-[600px] overflow-hidden" aria-hidden="true">

                        {/* Scale wrapper to fit mobile screens */}
                        <div className="relative scale-[0.6] sm:scale-75 md:scale-100 transition-transform duration-300">
                            {/* Orbits */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-200 dark:border-slate-700 rounded-full opacity-50"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-200 dark:border-slate-700 rounded-full opacity-50"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-slate-200 dark:border-slate-700 rounded-full opacity-50"></div>

                            {/* Central Hub */}
                            <div className="relative z-10 w-24 h-24 bg-navy rounded-full shadow-2xl flex items-center justify-center border-4 border-white dark:border-slate-800 mx-auto">
                                <span className="text-white font-bold text-xl">Ndiara</span>
                            </div>

                            {/* Orbiting Elements (Centered absolutely) */}
                            {/* Inner Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    className="w-full h-full"
                                >
                                    <div className="absolute -top-3 left-1/2 -ml-3 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-xs">
                                        💰
                                    </div>
                                </motion.div>
                            </div>

                            {/* Middle Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none">
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                    className="w-full h-full"
                                >
                                    <div className="absolute top-1/2 -right-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-sm">
                                        🎓
                                    </div>
                                    <div className="absolute top-1/2 -left-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-sm">
                                        🤝
                                    </div>
                                </motion.div>
                            </div>

                            {/* Outer Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                    className="w-full h-full"
                                >
                                    <div className="absolute bottom-10 right-16 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-lg">
                                        📊
                                    </div>
                                    <div className="absolute top-10 left-16 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center text-lg">
                                        🚀
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ecosystem areas */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {ecosystemAreas.map((area, i) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "md:col-span-2" : ""}`}
                        >
                            <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white shadow-lg ${area.color}`} aria-hidden="true">
                                <area.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{area.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{area.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
