"use client";

import { motion } from "framer-motion";
import { CreditCard, Smartphone, Globe, ArrowRight } from "lucide-react";

export function PaymentGrid() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">
                            Global Payments
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white mb-6 leading-tight">
                            Get Paid. <br />
                            <span className="text-primary">From Anywhere.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
                            Accept payments from customers globally. Whether it's Mobile Money in Kenya, Bank Cards in Nigeria, or PayPal from the US—we've got you covered.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4">
                                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy dark:text-white">Mobile Money</h4>
                                    <p className="text-xs text-slate-500 mt-1">M-Pesa, MTN, Airtel</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy dark:text-white">Cards</h4>
                                    <p className="text-xs text-slate-500 mt-1">Visa, Mastercard</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy dark:text-white">Global Transfer</h4>
                                    <p className="text-xs text-slate-500 mt-1">SWIFT, Wise</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                View all payment methods <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Visual (Phone Mockup) */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px]"></div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 w-[300px] h-[600px] bg-navy rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden"
                        >
                            {/* Phone Top Bar */}
                            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-20 flex justify-center">
                                <div className="w-32 h-4 bg-black rounded-b-xl"></div>
                            </div>

                            {/* Screen Content */}
                            <div className="w-full h-full bg-slate-50 relative pt-12 p-4 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="size-8 bg-gray-200 rounded-full"></div>
                                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                                    <p className="text-xs text-gray-500 mb-1">Total Balance</p>
                                    <h3 className="text-2xl font-bold text-navy">$12,450.00</h3>
                                </div>
                                <div className="bg-primary text-white p-4 rounded-xl shadow-lg shadow-primary/20 mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold uppercase opacity-80">Ndiara Card</span>
                                        <span className="font-mono">**** 4242</span>
                                    </div>
                                    <div className="mt-8 text-sm">
                                        VALID THRU 12/28
                                    </div>
                                </div>
                                <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Recent Transactions</p>
                                <div className="space-y-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <div className="flex items-center gap-2">
                                                <div className="size-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">Test</div>
                                                <div className="w-20 h-3 bg-gray-100 rounded"></div>
                                            </div>
                                            <div className="w-12 h-3 bg-gray-100 rounded"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
