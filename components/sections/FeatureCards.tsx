"use client";

import { motion } from "framer-motion";
import { Users, Rocket, TrendingUp, ChevronRight } from "lucide-react";

const features = [
    {
        title: "Community-Driven",
        desc: "Build meaningful connections with entrepreneurs, mentors, and people who understand your journey. Share experiences, exchange ideas, and discover opportunities to grow together.",
        icon: Users,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASJdNdDyDxCD6rhuNoa4_ibf7GZoZ5xbJT2CvcXw-MHSlqx2EN_Z-coNOT6FsoD2fZ1st-_GLS0d4_zP2RUYBxGeiVGwLusnoj0M_VmpVdHBxe1-4zKjvINByeGP5O8aw1lrVxLSHCAP6aOx71xw8jY6gseWtyIKgHk1OkA_KdMLxs0FbtyOsZGaXsJHp78P_iVo9mjy25S__gP8mgF6h872N2D4lwBLuTchLAwn-GUl0mUwgVswx8zVrmAlD1QvwxcTzyW17xo-0O",
    },
    {
        title: "Technology That Works With and for You",
        desc: "Spend less time juggling business tasks and more time doing what matters. Access practical digital tools to manage sales, customers, finances, and everyday operations.",
        icon: Rocket,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFY0XyvnlUu0MqnMg5tbt0cQn7_OEGPSTmPfSFaNlbb4xjrI9dpPBnEPXuVK1AYAAHHqGAEXnazYBMVkTuaoGK4bTpzZo_HBxtCBAWTB532QYipTCWsi9ae39xCGB5kpjqabka3NcI4eUzzeGWOpWVRQc0fhWn-A4q5Hjd-dNXMveHh_tUZsY9P92PCWePg75aagN9jmn-rB0fk9eHaDMT4lPE8_ySErgRoFQK85vcqNh8K3vHfH7SVOgNA0kj0Tw2_K2W0kLNr9fd",
    },
    {
        title: "Growth That Lasts",
        desc: "Build the skills, confidence, and business foundations to pursue new opportunities, make informed decisions, and create a business that can thrive over time.",
        icon: TrendingUp,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBDGs27MqdekBiUpQJvImOBk1XsYor1fPU9sP67i1gUWM87Bkrm3WCWEjZF_334JmPSO6AUqerSPEklMkmJTxecmMhxhUuP0yoQgw8_wftUv2B_SCRG0q8nyYGs3UHSp5MSdsg_o0-SENIG9sVpc6lRjiS8Lva1wEY0kUmp1lPcsjGf6_a3rHKlfPYPaonGEB8vNTOZzk8-CSp_nBBj8pacMPlMzRugzu5J9xrgn8A0I0rDqzik5a2x-p97z0TrHWH2C2xyX5nw_D_",
    },
];

export function FeatureCards() {
    return (
        <section className="px-4 md:px-40 flex flex-1 justify-center py-10 md:py-20 bg-white dark:bg-[#2a2018]">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 flex items-center justify-center gap-1">
                        OUR PROMISE
                        <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <h2 className="text-navy dark:text-white tracking-tight text-[32px] md:text-5xl font-extrabold leading-tight px-4 pb-3">
                        Built Around Your Business Journey
                    </h2>
                    <div className="max-w-3xl mx-auto flex flex-col gap-4">
                        <p className="text-slate-600 dark:text-slate-300 text-lg">
                            Every business starts somewhere, and every entrepreneur deserves the tools, knowledge, and connections to move forward.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-lg">
                            Whether you are turning an idea into a business, managing daily operations, or preparing for your next stage of growth, Ndiara is designed to support you along the way.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col gap-4"
                        >
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
                                style={{ backgroundImage: `url("${feature.image}")` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 text-white" aria-hidden="true">
                                    <feature.icon className="w-10 h-10 mb-2 text-primary" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-navy dark:text-white text-xl font-bold leading-normal mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
