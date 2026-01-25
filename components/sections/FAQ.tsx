"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Is Ndiara free to join?",
        a: 'Yes! We offer a "Seed" tier that gives you access to the community forum and basic resources completely free. Our premium "Growth" and "Harvest" tiers offer advanced tools, mentorship, and offline course access.',
    },
    {
        q: "Can I access courses offline?",
        a: "Absolutely. We understand internet connectivity can vary. All our premium courses can be downloaded within the mobile app for offline viewing, so you can learn anytime, anywhere.",
    },
    {
        q: "How does the community support work?",
        a: 'Our community is segmented by industry and growth stage. You\'ll be matched with a "Circle" of peers, and gain access to expert mentors who host weekly Q&A sessions and workshops.',
    },
    {
        q: "Is my data secure?",
        a: "Security is our priority. We are fully NDPR compliant and use bank-grade SSL encryption for all data transmission. Your business data is yours alone; we never sell it to third parties.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white dark:bg-[#150b18]">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Everything you need to know about the product and billing.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border transition-all duration-200 ${openIndex === i
                                    ? "bg-white dark:bg-[#2d1b32] border-primary/20 shadow-lg"
                                    : "bg-background-light dark:bg-[#1f1022] border-transparent"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex w-full items-center justify-between p-5 text-left font-medium outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors ${openIndex === i ? "text-primary" : "text-navy dark:text-white"}`}>
                                    {faq.q}
                                </span>
                                <div
                                    className={`rounded-full p-1 transition-all duration-300 ${openIndex === i ? "bg-primary text-white rotate-180" : "bg-white dark:bg-white/5 text-gray-400"
                                        }`}
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
