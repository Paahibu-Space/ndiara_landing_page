import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Mail, ChevronRight } from "lucide-react";

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main className="pt-20">

                {/* Hero Section */}
                <section className="bg-white">
                    <div className="wrap pt-16 pb-16 md:pt-20 lg:pt-28 lg:pb-20">
                        <span className="eyebrow mb-8 uppercase">
                            Help Center
                        </span>
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                            <h1 className="title-xl lg:col-span-7">
                                Frequently Asked Questions
                            </h1>
                            <p className="lead lg:col-span-5 lg:col-start-8 lg:self-end">
                                Everything you need to know about Ndiara&apos;s platform, pricing, and services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section bg-white pt-0 lg:pt-0">
                    <div className="wrap grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-8 lg:col-start-3">
                            <Accordion type="single" collapsible className="flex w-full flex-col gap-3">
                                <AccordionItem value="item-2" className="card px-6 md:px-8">
                                    <AccordionTrigger className="py-6 text-lg font-medium text-navy hover:no-underline">
                                        What is included in the Ndiara ecosystem?
                                    </AccordionTrigger>
                                    <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted">
                                        Ndiara represents a complete suite of business tools. You get access to our E-commerce website builder, Point of Sale (POS) system, Accounting software, HRM for managing employees, and Sales tracking tools. Plus, you join a vibrant community of African female entrepreneurs.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="card px-6 md:px-8">
                                    <AccordionTrigger className="py-6 text-lg font-medium text-navy hover:no-underline">
                                        Can I connect my own domain name?
                                    </AccordionTrigger>
                                    <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted">
                                        Absolutely. Our E-commerce builder allows you to connect a custom domain (e.g., www.yourbusiness.com) to give your online store a professional look. We also provide free subdomains if you&apos;re just starting out.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5" className="card px-6 md:px-8">
                                    <AccordionTrigger className="py-6 text-lg font-medium text-navy hover:no-underline">
                                        Who is eligible for funding support?
                                    </AccordionTrigger>
                                    <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted">
                                        Our funding partners look for active businesses within the Ndiara ecosystem. By using our tools (Sales, Accounts) to manage your business, you automatically build a credit profile that makes you eligible for micro-loans and grants from our partners.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Still have questions? */}
                <section className="section bg-white">
                    <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                        <h2 className="title-section lg:col-span-4">Still have questions?</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
                            <div className="card flex flex-col p-8 md:p-10 group cursor-pointer">
                                <MessageCircle className="mb-8 w-7 h-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                                <h3 className="title-card mb-2">Live Chat</h3>
                                <p className="mb-6 text-muted">Get instant answers from our team.</p>
                                <span className="text-link mt-auto">Start Chat <ChevronRight className="w-4 h-4" aria-hidden="true" /></span>
                            </div>

                            <div className="card flex flex-col p-8 md:p-10 group">
                                <Mail className="mb-8 w-7 h-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                                <h3 className="title-card mb-2">Email Support</h3>
                                <p className="mb-6 text-muted">We usually respond within 24 hours.</p>
                                <a href="mailto:support@ndiara.com" className="text-link mt-auto min-h-11">Send Email <ChevronRight className="w-4 h-4" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
