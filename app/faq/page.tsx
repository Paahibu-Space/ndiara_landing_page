"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Mail, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
    return (
        <div className="min-h-screen font-display bg-white dark:bg-background-dark overflow-x-hidden">
            <Header />
            <main className="pt-20">

                {/* Hero Section */}
                <section className="relative py-20 bg-background-light dark:bg-[#150b18] overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            <HelpCircle className="w-4 h-4" />
                            Help Center
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white mb-6"
                        >
                            Frequently Asked Questions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
                        >
                            Everything you need to know about Ndiara's platform, pricing, and services.
                        </motion.p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-2" className="border border-gray-100 dark:border-gray-800 rounded-xl px-6">
                                    <AccordionTrigger className="text-lg font-bold text-navy dark:text-white hover:no-underline py-6">
                                        What is included in the Ndiara ecosystem?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed pb-6 text-base">
                                        Ndiara represents a complete suite of business tools. You get access to our E-commerce website builder, Point of Sale (POS) system, Accounting software, HRM for managing employees, and Sales tracking tools. Plus, you join a vibrant community of African female entrepreneurs.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border border-gray-100 dark:border-gray-800 rounded-xl px-6">
                                    <AccordionTrigger className="text-lg font-bold text-navy dark:text-white hover:no-underline py-6">
                                        Can I connect my own domain name?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed pb-6 text-base">
                                        Absolutely. Our E-commerce builder allows you to connect a custom domain (e.g., www.yourbusiness.com) to give your online store a professional look. We also provide free subdomains if you're just starting out.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5" className="border border-gray-100 dark:border-gray-800 rounded-xl px-6">
                                    <AccordionTrigger className="text-lg font-bold text-navy dark:text-white hover:no-underline py-6">
                                        Who is eligible for funding support?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed pb-6 text-base">
                                        Our funding partners look for active businesses within the Ndiara ecosystem. By using our tools (Sales, Accounts) to manage your business, you automatically build a credit profile that makes you eligible for micro-loans and grants from our partners.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    </div>
                </section>

                {/* Still have questions? */}
                <section className="py-20 bg-background-light dark:bg-[#150b18]">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold text-navy dark:text-white mb-8">Still have questions?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-[#1f1222] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center group cursor-pointer hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-navy dark:text-white mb-2">Live Chat</h3>
                                <p className="text-sm text-slate-500 mb-4">Get instant answers from our team.</p>
                                <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Start Chat <ChevronRight className="w-4 h-4" /></span>
                            </div>

                            <div className="bg-white dark:bg-[#1f1222] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center group cursor-pointer hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-navy dark:text-white mb-2">Email Support</h3>
                                <p className="text-sm text-slate-500 mb-4">We usually respond within 24 hours.</p>
                                <a href="mailto:support@ndiara.com" className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Send Email <ChevronRight className="w-4 h-4" /></a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
