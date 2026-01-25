"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
    {
        name: "Zainab A.",
        role: "Fashion Designer, Lagos",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN0Kjq1TV0fsADJ7jTGWeAv6ypB6YB2ka3BQxnz2-ra2hEX4XA3DXC5AFdhJ3-sVHpeIZ2mN4HsjSq1sNrJ3k5NRC5pTLhyHGIzmZ0qrZP-xoTj-AMgD3AaTno4ZlH0TLFNjIDYefKhZompgVPYju5M_MUo0JOGD3KGk-MRHbELVxB7ndUVU7Kvu1p0GVbRpEC7mhiNyOlRda0C7eNFEUG5fFmx_DIcJ1h75WbX4NlEmwiNqt7ds3wmGXlrTg8Nd2Lww6u67EVQgaG",
        quote: "Since joining Ndiara, my monthly revenue has tripled. The tools are easy to use, but the community mentorship changed my mindset completely.",
    },
    {
        name: "Sarah K.",
        role: "Agri-Tech Founder, Nairobi",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAFqywPFv589lx2nqM0-smVJ_-a8yTgSD96gJKNN5ELmOFmkGvw7ZdP-aKVqqJpYiEWpOxF2BcKRrR5n93iGJjLugY_ZxH0I7TpYGjUviTryIJaKCveadihuy6rZZCHboIRfGbYfBBOEdTuapLVfp89u3Em6Gei5PYYpDW-s89Zk_5lic2Xwe-2HpfSFA5g5oTHddmIsqwaQ6M4wm48_MiZJyWn0gPQku7C93qL-Tgo9BieHNiV6d4MjgQJauO2IaSUxzOTXavgHra",
        quote: "I found my co-founder through the Ndiara marketplace. It's more than software; it's a launchpad for women who want to build big.",
    },
    {
        name: "Grace M.",
        role: "Retail Owner, Accra",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBDGs27MqdekBiUpQJvImOBk1XsYor1fPU9sP67i1gUWM87Bkrm3WCWEjZF_334JmPSO6AUqerSPEklMkmJTxecmMhxhUuP0yoQgw8_wftUv2B_SCRG0q8nyYGs3UHSp5MSdsg_o0-SENIG9sVpc6lRjiS8Lva1wEY0kUmp1lPcsjGf6_a3rHKlfPYPaonGEB8vNTOZzk8-CSp_nBBj8pacMPlMzRugzu5J9xrgn8A0I0rDqzik5a2x-p97z0TrHWH2C2xyX5nw_D_",
        quote: "The micro-loan feature helped me stock up for the holiday season when traditional banks turned me away. Ndiara believes in us.",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white dark:bg-[#1f1022] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-6">
                        Real Stories, Real <span className="text-primary">Growth</span>.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Join thousands of women who are rewriting the narrative of business in Africa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background-light dark:bg-[#2d1b32] p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-navy dark:text-slate-200 text-lg font-medium leading-relaxed mb-8 relative z-10">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full overflow-hidden bg-gray-200 ring-2 ring-primary/20 relative">
                                    {/* Use unoptimized for these external Google URLs if needed, but Next/Image should handle them if configured or just use img tag for simplicity with external unchecked domains */}
                                    <img src={t.image} alt={t.name} className="object-cover w-full h-full" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy dark:text-white">{t.name}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
