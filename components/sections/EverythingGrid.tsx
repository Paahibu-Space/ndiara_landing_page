"use client";

import { motion } from "framer-motion";
import { Store, Users, Coins, GraduationCap } from "lucide-react";

const features = [
    {
        title: "Ndiara E-Commerce",
        description: "Sell online easily. Create or setup your personal online store with just some few clicks.",
        icon: Store,
        items: ["Sell Online/Website Builder", "Inventory Management", "Sales Analytics"],
        color: "bg-orange-50 text-primary",
    },
    {
        title: "Retail & Operations",
        description: "Streamline your daily operations with integrated tools.",
        icon: Users,
        items: ["Ndiara POS", "Ndiara Accounts", "Ndiara HRM"],
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Finance & Growth",
        description: "Secure funding and manage payments seamlessly.",
        icon: Coins,
        items: ["Business Funding", "Secure Payments", "Ndiara Sales"],
        color: "bg-green-50 text-green-600",
    },
    {
        title: "Academy & Community",
        description: "Learn from experts and connect with peers.",
        icon: GraduationCap,
        items: ["Ndiara Academy", "Ndiara Community", "Mentorship"],
        color: "bg-purple-50 text-purple-600",
    },
];

export function EverythingGrid() {
    return (
        <section className="py-24 bg-white dark:bg-[#1f1022]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6">
                        Everything You Need to <span className="text-primary">Win</span>.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        We've bundled the most powerful business tools into one simple subscription.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background-light dark:bg-[#2d1b32] p-8 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-lg transition-all"
                        >
                            <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-10 line-clamp-2">
                                {feature.description}
                            </p>
                            <ul className="space-y-3">
                                {feature.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
