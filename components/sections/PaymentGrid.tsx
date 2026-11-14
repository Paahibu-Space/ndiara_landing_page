"use client";

import { motion } from "framer-motion";
import { CreditCard, Smartphone, Globe, ArrowRight } from "lucide-react";

const paymentOptions = [
    {
        title: "Mobile Money",
        tagline: "Familiar. Convenient. Accessible.",
        desc: "Receive payments through mobile money services that customers across African markets use for everyday transactions.",
        icon: Smartphone,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Card Payments",
        tagline: "Give Customers More Ways to Pay.",
        desc: "Accept payments through supported debit and credit cards, making it easier for customers to complete purchases.",
        icon: CreditCard,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "International Payments",
        tagline: "Reach Customers Beyond Borders.",
        desc: "Connect with customers in other markets and receive payments through supported international payment channels.",
        icon: Globe,
        color: "bg-green-100 text-green-600",
    },
];

export function PaymentGrid() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">
                            PAYMENTS &amp; COMMERCE
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white mb-6 leading-tight">
                            Get Paid. <br />
                            <span className="text-primary">From Anywhere.</span>
                        </h2>
                        <div className="flex flex-col gap-4 mb-8">
                            <p className="text-slate-600 dark:text-slate-300 text-lg">
                                Make it easier for customers to pay you, wherever they are.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 text-lg">
                                Whether you are selling to someone in your community, another city, or across borders, Ndiara connects your business with convenient payment options that help you serve more customers and grow your sales.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 text-lg">
                                Accept payments through mobile money, bank cards, and international payment channels, giving your customers more ways to pay and your business more opportunities to sell.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {paymentOptions.map((option) => (
                                <div key={option.title} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4">
                                    <div className={`p-3 rounded-lg shrink-0 ${option.color}`} aria-hidden="true">
                                        <option.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy dark:text-white">{option.title}</h3>
                                        <p className="text-sm font-semibold text-navy dark:text-white mt-1">{option.tagline}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{option.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            {/* TODO(content): link "Explore Payment Options" to the payments page once it exists. */}
                            <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                Explore Payment Options <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Right Visual (Phone Mockup, decorative) */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center relative" aria-hidden="true">
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

                            {/* Screen Content (skeleton only, no sample figures) */}
                            <div className="w-full h-full bg-slate-50 relative pt-12 p-4 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="size-8 bg-gray-200 rounded-full"></div>
                                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm mb-4 flex flex-col gap-2">
                                    <div className="h-3 w-20 bg-gray-100 rounded"></div>
                                    <div className="h-6 w-32 bg-navy/20 rounded"></div>
                                </div>
                                <div className="bg-primary p-4 rounded-xl shadow-lg shadow-primary/20 mb-6 flex flex-col gap-8">
                                    <div className="flex justify-between items-center">
                                        <div className="h-3 w-20 bg-white/40 rounded"></div>
                                        <div className="h-3 w-12 bg-white/40 rounded"></div>
                                    </div>
                                    <div className="h-3 w-24 bg-white/30 rounded"></div>
                                </div>
                                <div className="h-3 w-28 bg-gray-200 rounded mb-3"></div>
                                <div className="space-y-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <div className="flex items-center gap-2">
                                                <div className="size-8 bg-green-100 rounded-full"></div>
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
