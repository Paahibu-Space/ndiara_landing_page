"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "How does the community support work?",
        a: 'Our community is segmented by industry and growth stage. You\'ll be matched with a "Circle" of peers, and gain access to expert mentors who host weekly Q&A sessions and workshops.',
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section bg-white">
            <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                    <h2 className="title-section mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="lead">
                        Everything you need to know about the product and billing.
                    </p>
                </div>
                <div className="flex flex-col gap-3 lg:col-span-7">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className="card px-6 md:px-8">
                                <h3>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${i}`}
                                        id={`faq-trigger-${i}`}
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                                    >
                                        <span className="text-lg font-medium text-navy">
                                            {faq.q}
                                        </span>
                                        <span
                                            className={`inline-flex size-9 shrink-0 items-center justify-center text-navy transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                            aria-hidden="true"
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </span>
                                    </button>
                                </h3>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-panel-${i}`}
                                            role="region"
                                            aria-labelledby={`faq-trigger-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="max-w-2xl pb-6 leading-relaxed text-muted">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
