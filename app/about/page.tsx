"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Target, Users, Globe, Award, Sparkles, Check, ArrowRight, GraduationCap, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="min-h-screen font-display bg-white dark:bg-background-dark overflow-x-hidden">
            <Header />
            <main className="pt-20">

                {/* Hero Section */}
                <section className="relative py-24 bg-navy overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-primary blur-[120px]"></div>
                        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-500 blur-[100px]"></div>
                    </div>
                    <div className="max-w-5xl mx-auto px-4 relative z-10 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold tracking-wide uppercase">Our Mission</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight"
                        >
                            We Equip, Empower, and <br /> <span className="text-primary">Endow.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Paahibu Space is an African tech and entrepreneurship development organization led by young people.
                            We are dedicated to equipping girls and women-led businesses with the competencies to leverage technology
                            and transform their communities.
                        </motion.p>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Innovation Without Compromise</h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                        Whether you’ve been building from the basement or pushing ideas in the office,
                                        there’s a place for you at Ndiara. With a team of African entrepreneurs at the helm,
                                        we’re helping female professionals and founders amplify their ideas without compromise.
                                        Your professional experience doesn’t matter to us—we only see the future.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3">The Digital Gender Gap</h3>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        Africa has the highest proportion of women entrepreneurs in the world, yet they often remain
                                        under-earning. The digital economy is booming, but women face barriers like lack of
                                        technical skills and unequal access to funding. Ndiara serves to bridge this divide.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative z-10 bg-background-light dark:bg-[#150b18] p-8 rounded-xl border border-gray-100 dark:border-gray-800 ">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white dark:bg-[#251b28] p-6 rounded-lg">
                                            <h4 className="text-4xl font-extrabold text-primary mb-2">58%</h4>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Of Africa's self-employed population are women</p>
                                        </div>
                                        <div className="bg-white dark:bg-[#251b28] p-6 rounded-lg">
                                            <h4 className="text-4xl font-extrabold text-navy dark:text-white mb-2">82%</h4>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Of businesses in Ghana's informal sector owned by women</p>
                                        </div>
                                        <div className="bg-white dark:bg-[#251b28] p-6 rounded-lg col-span-2">
                                            <h4 className="text-4xl font-extrabold text-green-500 mb-2">1000+</h4>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Micro-enterprises to be supported across Africa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-10 -right-10 w-full h-full bg-primary/10 rounded-[3rem] -z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 bg-background-light dark:bg-[#150b18]">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy dark:text-white mb-6">Why Choose Ndiara?</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            We understand you have choices. Here is why we stand out as the ideal partner for your entrepreneurial journey.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Empowerment", desc: "Tools and strategies to thrive in the digital realm.", icon: Target },
                            { title: "Tailored Learning", desc: "Diverse courses catering to your unique business needs.", icon: Sparkles },
                            { title: "African Expertise", desc: "Insights developed by experts who know the local landscape.", icon: Globe },
                            { title: "Community", desc: "Connect, share, and collaborate with like-minded peers.", icon: Users },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-[#1f1222] p-8 rounded-2xl  border border-gray-200 dark:border-gray-800"
                            >
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Goals Section */}
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-navy dark:text-white mb-12">Our 5-Year Vision</h2>
                        <div className="space-y-6 text-left bg-white dark:bg-[#1f1222] p-8 sm:p-12 rounded-3xl border border-gray-200 dark:border-gray-800">
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                <span className="font-bold text-primary text-2xl mr-2">1.</span>
                                Reaching over <strong>500,000 users</strong> across multiple African countries.
                            </p>
                            <div className="h-px bg-gray-200 dark:bg-gray-800"></div>
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                <span className="font-bold text-primary text-2xl mr-2">2.</span>
                                Partnering with major educational institutions, NGOs, and government bodies.
                            </p>
                            <div className="h-px bg-gray-100 dark:bg-gray-800"></div>
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                <span className="font-bold text-primary text-2xl mr-2">3.</span>
                                Creating a measurable reduction in the gender gap in the digital economy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 bg-navy relative overflow-hidden text-white text-center">
                    <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.svg')]"></div>

                    <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Unleash Your Potential</h2>
                        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                            Join thousands of African women who are already building the future.
                            Get full access to Ndiara tools today.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            {[
                                {
                                    title: "Sell Online",
                                    description: "Create your online store in minutes.",
                                    icon: Store,
                                    href: "https://ecommerce.paahibuspace.org",
                                    color: "text-primary",
                                    bg: "bg-orange-50",
                                    button_text: "Sign Up",
                                },
                                {
                                    title: "Join Community",
                                    description: "Connect with fellow entrepreneurs.",
                                    icon: Users,
                                    href: "https://community.paahibuspace.org",
                                    color: "text-blue-600",
                                    bg: "bg-blue-50",
                                    button_text: "Join Now",
                                },
                                {
                                    title: "Ndiara Academy",
                                    description: "Master new skills with expert courses.",
                                    icon: GraduationCap,
                                    href: "https://academy.paahibuspace.org",
                                    color: "text-purple-600",
                                    bg: "bg-purple-50",
                                    button_text: "Learn More",
                                }
                            ].map((card, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-6`}>
                                        <card.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed">
                                        {card.description}
                                    </p>
                                    <Button
                                        asChild
                                        className={`w-full rounded-full font-bold h-12 ${i === 0 ? "" : `${card.bg} ${card.color} hover:opacity-80 border-0`}`}
                                        variant={i === 0 ? "default" : "secondary"}
                                    >
                                        <a href={card.href} className="flex items-center justify-center gap-2">
                                            {card.button_text} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
