"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    ChevronDown,
    Briefcase,
    Store,
    CreditCard,
    Terminal,
    GraduationCap,
    Presentation,
    Bot,
    Medal,
    Users,
    Network,
    HeartHandshake,
    Coins,
    Rocket,
    Zap,
    ArrowRight,
    Menu,
    X,
    Info,
    Calculator,
    TrendingUp,
    BookOpen,
    HelpCircle,
    FileText,
    MessageSquare,
    Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-sm py-2"
                    : "bg-white border-[#f4ede7] py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative size-8 text-primary shrink-0">
                            <Image
                                src="/images/logo.png"
                                alt="Ndiara Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-navy">
                            Ndiara
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {/* Business Solutions Menu */}
                        <div
                            className="group"
                            onMouseEnter={() => setActiveMegaMenu("business")}
                            onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                            <button
                                aria-expanded={activeMegaMenu === "business"}
                                className="flex items-center gap-1 text-primary font-semibold text-sm leading-normal focus:outline-none py-2"
                            >
                                Business Solutions
                                <ChevronDown
                                    className={cn(
                                        "w-4 h-4 transition-transform duration-200",
                                        activeMegaMenu === "business" ? "rotate-180" : ""
                                    )}
                                />
                            </button>

                            <AnimatePresence>
                                {activeMegaMenu === "business" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] pt-4"
                                    >
                                        <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 border-t-[3px] border-navy overflow-hidden">
                                            <div className="grid grid-cols-12 divide-x divide-gray-100">
                                                {/* Col 1 */}
                                                <div className="col-span-3 p-6">
                                                    <h3 className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <Store className="w-4 h-4" />
                                                        Online & Retail
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <MegaMenuItem icon={Store} title="Ndiara E-Commerce" desc="Free Website Builder with Just a Click" href="https://ndiara.shop/" />
                                                        <MegaMenuItem icon={Terminal} title="Ndiara POS" desc="Point of Sale system" href="https://pos.ndiara.africa/" />
                                                    </ul>
                                                </div>
                                                {/* Col 2 */}
                                                <div className="col-span-3 p-6">
                                                    <h3 className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <Briefcase className="w-4 h-4" />
                                                        Operations
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <MegaMenuItem icon={Calculator} title="Ndiara Accounts" desc="Financial management" href="https://accounts.paahibuspace.org" />
                                                        <MegaMenuItem icon={TrendingUp} title="Ndiara Sales" desc="Drive revenue growth" href="https://sales.paahibuspace.org" />
                                                        <MegaMenuItem icon={Users} title="Ndiara HRM" desc="Human relationships" href="https://hrm.ndiara.africa/" />
                                                    </ul>
                                                </div>
                                                {/* Col 3 */}
                                                <div className="col-span-3 p-6">
                                                    <h3 className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <Coins className="w-4 h-4" />
                                                        Finance
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <MegaMenuItem icon={CreditCard} title="Payments" desc="Secure transactions" href="#" />
                                                        <MegaMenuItem icon={Coins} title="Funding" desc="Get capital" href="https://baabuh.paahibuspace.org" />
                                                    </ul>
                                                </div>
                                                {/* Col 4 (Promo) */}
                                                <div className="col-span-3 bg-gradient-to-br from-[#fcfaf8] to-white p-6 relative overflow-hidden flex flex-col justify-between">
                                                    <Rocket className="absolute -top-4 -right-4 w-40 h-40 text-primary opacity-5 rotate-12" />
                                                    <div>
                                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide mb-3">
                                                            <Zap className="w-3 h-3" /> New Feature
                                                        </div>
                                                        <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Launch your AI Assistant</h4>
                                                        <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                                            Automate your customer support 24/7.
                                                        </p>
                                                    </div>
                                                    <div className="bg-primary rounded-xl p-4 text-white shadow-lg shadow-primary/20 cursor-pointer group/card hover:bg-primary/90 transition-colors">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="font-bold text-xs">Get Early Access</span>
                                                            <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                                                        </div>
                                                        <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                                                            <div className="h-full w-2/3 bg-white rounded-full"></div>
                                                        </div>
                                                        <p className="text-[10px] mt-2 opacity-90">Spots filling fast</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Bottom strip */}
                                            <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-100">
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <Info className="w-4 h-4" />
                                                    Need help deciding? Check our solution finder.
                                                </div>
                                                <Link href="#" className="text-xs font-semibold text-navy hover:text-primary transition-colors flex items-center gap-1">
                                                    View all solutions
                                                    <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Learn Menu */}
                        <div
                            className="group"
                            onMouseEnter={() => setActiveMegaMenu("learn")}
                            onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                            <button
                                aria-expanded={activeMegaMenu === "learn"}
                                className="flex items-center gap-1 text-navy hover:text-primary font-medium text-sm leading-normal focus:outline-none py-2 transition-colors"
                            >
                                Learn
                                <ChevronDown
                                    className={cn(
                                        "w-4 h-4 transition-transform duration-200",
                                        activeMegaMenu === "learn" ? "rotate-180" : ""
                                    )}
                                />
                            </button>

                            <AnimatePresence>
                                {activeMegaMenu === "learn" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] pt-4"
                                    >
                                        <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 border-t-[3px] border-navy overflow-hidden">
                                            <div className="grid grid-cols-12 divide-x divide-gray-100">
                                                {/* Col 1 */}
                                                <div className="col-span-4 p-6">
                                                    <h3 className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <GraduationCap className="w-4 h-4" />
                                                        Education
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <MegaMenuItem icon={GraduationCap} title="Ndiara Academy" desc="Courses & Certifications" href="https://guubu.ndiara.africa/" variant="secondary" />
                                                        <MegaMenuItem icon={BookOpen} title="Blog" desc="Latest insights & news" href="#" variant="secondary" />
                                                    </ul>
                                                </div>
                                                {/* Col 2 */}
                                                <div className="col-span-4 p-6">
                                                    <h3 className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <Users className="w-4 h-4" />
                                                        Community
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <MegaMenuItem icon={Network} title="Community" desc="Connect with peers" href="https://nhanga.ndiara.africa/" />
                                                        <MegaMenuItem icon={Lightbulb} title="Success Stories" desc="Get inspired by others" href="#" />
                                                    </ul>
                                                </div>
                                                {/* Col 3 */}
                                                <div className="col-span-4 p-6">
                                                    <h3 className="text-navy text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <HelpCircle className="w-4 h-4" />
                                                        Support
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <MegaMenuItem icon={MessageSquare} title="FAQ" desc="Common questions" href="/faq" variant="secondary" />
                                                        <MegaMenuItem icon={FileText} title="Help Center" desc="Guides & Tutorials" href="#" variant="secondary" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="#" className="text-navy hover:text-primary font-medium text-sm transition-colors">Resources</Link>
                        <Link href="/about" className="text-navy hover:text-primary font-medium text-sm transition-colors">About Us</Link>
                    </nav>



                    {/* Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* <Button variant="cream" className="text-navy font-bold">Log In</Button> */}
                        <Button asChild className="font-bold shadow-lg shadow-primary/20">
                            <Link href="">
                                Get Started
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-navy"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white border-t z-40 overflow-y-auto pb-20"
                    >
                        <div className="p-4 flex flex-col gap-4">
                            <div className="space-y-4">
                                <div className="font-bold text-navy px-2 py-2 border-b">Business Solutions</div>
                                <Link href="https://ndiara.shop/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Ndiara E-Commerce</Link>
                                <Link href="https://pos.ndiara.africa/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Ndiara POS</Link>
                                <Link href="https://accounts.paahibuspace.org" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Ndiara Accounts</Link>
                                <Link href="https://sales.paahibuspace.org" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Ndiara Sales</Link>
                                <Link href="https://hrm.ndiara.africa/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Ndiara HRM</Link>
                                <Link href="https://baabuh.paahibuspace.org" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Payments & Funding</Link>

                                <div className="font-bold text-navy px-2 py-2 border-b pt-4">Learn</div>
                                <Link href="https://guubu.ndiara.africa/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Academy</Link>
                                <Link href="https://nhanga.ndiara.africa/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Community</Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">Blog</Link>
                                <Link href="/faq" className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-sm">FAQ</Link>
                            </div>
                            <Link href="#" className="p-2 font-medium text-navy border-b">Pricing</Link>
                            <Link href="/about" className="p-2 font-medium text-navy border-b">About Us</Link>

                            <div className="flex flex-col gap-3 mt-4">
                                <Button variant="outline" className="w-full justify-center">Log In</Button>
                                <Button asChild className="w-full justify-center">
                                    <Link href="https://accounts.paahibuspace.org" target="_blank" rel="noopener noreferrer">
                                        Get Started
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

function MegaMenuItem({ icon: Icon, title, desc, href, variant = "primary" }: { icon: any, title: string, desc: string, href: string, variant?: "primary" | "secondary" }) {
    const isPrimary = variant === "primary";
    const isExternal = href.startsWith('http');
    return (
        <li>
            <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                    "group flex items-start gap-3 p-2 rounded-lg transition-colors",
                    isPrimary ? "hover:bg-orange-50" : "hover:bg-indigo-50"
                )}>
                <div className={cn(
                    "mt-0.5 p-1.5 rounded-md transition-colors",
                    isPrimary
                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                        : "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white"
                )}>
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-gray-900 font-semibold text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
            </Link>
        </li>
    );
}
