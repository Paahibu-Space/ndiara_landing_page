"use client";

import { useState, useEffect, useId, useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
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
                "fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200",
                isScrolled ? "shadow-[0_6px_20px_-12px_rgba(20,20,40,0.18)]" : "shadow-none"
            )}
        >
            <div className="wrap">
                <div className="flex justify-between items-center h-20">
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
                        <span className="font-display pt-[0.14em] text-[2rem] font-medium leading-none tracking-[0.01em] text-navy">
                            Ndiara
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 h-full">
                        {/* Business Solutions Menu */}
                        <NavDropdown
                            id="business"
                            label="Business Solutions"
                            activeMenu={activeMegaMenu}
                            setActiveMenu={setActiveMegaMenu}
                            panelWidth="w-[min(640px,calc(100vw-40px))]"
                        >
                            <div className="grid grid-cols-3 gap-8 px-8 pt-7 pb-6">
                                <MenuGroup title="Online & Retail">
                                    <MegaMenuItem title="Ndiara E-Commerce" desc="Free Website Builder with Just a Click" href="/solutions/ecommerce" />
                                    <MegaMenuItem title="Ndiara POS" desc="Point of Sale system" href="/solutions/pos" />
                                </MenuGroup>
                                <MenuGroup title="Operations">
                                    <MegaMenuItem title="Ndiara HRM" desc="Human relationships" href="/solutions/hrm" />
                                </MenuGroup>
                                {/* Promo note: text only, no icons */}
                                <div>
                                    <p className="text-muted text-xs font-semibold uppercase tracking-[0.06em] mb-3">New Feature</p>
                                    <p className="text-[15px] font-semibold text-navy leading-snug mb-1">Launch your AI Assistant</p>
                                    <p className="text-muted text-[13px] leading-snug mb-4">
                                        Automate your customer support 24/7.
                                    </p>
                                    <p className="text-sm font-semibold text-navy">Get Early Access</p>
                                    <p className="text-muted text-xs mt-0.5">Spots filling fast</p>
                                </div>
                            </div>
                            {/* Bottom strip */}
                            <div className="bg-band px-8 py-3 flex items-center justify-between gap-6">
                                <p className="text-sm text-muted">
                                    Need help deciding? Check our solution finder.
                                </p>
                                <Link href="/solutions" className="text-link text-sm shrink-0">
                                    View all solutions
                                </Link>
                            </div>
                        </NavDropdown>

                        {/* Learn Menu */}
                        <NavDropdown
                            id="learn"
                            label="Learn"
                            activeMenu={activeMegaMenu}
                            setActiveMenu={setActiveMegaMenu}
                            panelWidth="w-[min(600px,calc(100vw-40px))]"
                        >
                            <div className="grid grid-cols-3 gap-8 px-8 pt-7 pb-7">
                                <MenuGroup title="Education">
                                    <MegaMenuItem title="Ndiara Academy" desc="Courses & Certifications" href="/solutions/academy" />
                                    <MegaMenuItem title="Blog" desc="Latest insights & news" href="/blog" />
                                </MenuGroup>
                                <MenuGroup title="Community">
                                    <MegaMenuItem title="Community" desc="Connect with peers" href="/solutions/community" />
                                    <MegaMenuItem title="Success Stories" desc="Get inspired by others" href="/success-stories" />
                                </MenuGroup>
                                <MenuGroup title="Support">
                                    <MegaMenuItem title="FAQ" desc="Common questions" href="/faq" />
                                    <MegaMenuItem title="Help Center" desc="Guides & Tutorials" href="#" />
                                </MenuGroup>
                            </div>
                        </NavDropdown>

                        <Link href="/blog" className="text-navy font-medium text-[15px] underline decoration-2 underline-offset-[10px] decoration-transparent hover:decoration-primary transition-colors">Resources</Link>
                        <Link href="/about" className="text-navy font-medium text-[15px] underline decoration-2 underline-offset-[10px] decoration-transparent hover:decoration-primary transition-colors">About Us</Link>
                    </nav>



                    {/* Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* <Button variant="cream" className="text-navy font-bold">Log In</Button> */}
                        <Button asChild>
                            <Link href="">
                                Get Started
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center text-navy"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="md:hidden absolute top-full left-0 right-0 h-[calc(100dvh-80px)] bg-white z-40 overflow-y-auto pb-20"
                    >
                        <div className="px-5 py-6 flex flex-col">
                            <div className="flex flex-col">
                                <div className="text-xs font-semibold uppercase tracking-[0.06em] text-primary-ink pb-2">Business Solutions</div>
                                <Link href="/solutions/ecommerce" className="block py-2.5 text-base font-medium text-navy hover:text-primary-ink">Ndiara E-Commerce</Link>
                                <Link href="/solutions/pos" className="block py-2.5 text-base font-medium text-navy hover:text-primary-ink">Ndiara POS</Link>
                                <Link href="/solutions/hrm" className="block py-2.5 text-base font-medium text-navy hover:text-primary-ink">Ndiara HRM</Link>

                                <div className="text-xs font-semibold uppercase tracking-[0.06em] text-primary-ink pb-2 pt-8">Learn</div>
                                <Link href="/solutions/academy" className="block py-2.5 text-base font-medium text-navy hover:text-primary-ink">Academy</Link>
                                <Link href="/solutions/community" className="block py-2.5 text-base font-medium text-navy hover:text-primary-ink">Community</Link>
                                <Link href="/blog" className="block py-2.5 text-base font-medium text-navy hover:text-primary-ink">Blog</Link>
                                <Link href="/faq" className="block py-2.5 text-base font-medium text-navy hover:text-primary-ink">FAQ</Link>
                            </div>
                            <Link href="#" className="mt-6 py-3 text-lg font-semibold text-navy">Pricing</Link>
                            <Link href="/about" className="py-3 text-lg font-semibold text-navy">About Us</Link>

                            <div className="flex flex-col gap-3 mt-8">
                                <Button variant="outline" className="w-full">Log In</Button>
                                <Button asChild className="w-full">
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

type NavDropdownProps = {
    id: string;
    label: string;
    activeMenu: string | null;
    setActiveMenu: (id: string | null) => void;
    panelWidth: string;
    children: ReactNode;
};

/* A quiet dropdown: opens on hover or on click/Enter/Space, closes on Escape, mouse leave or when focus leaves it */
function NavDropdown({ id, label, activeMenu, setActiveMenu, panelWidth, children }: NavDropdownProps) {
    const isOpen = activeMenu === id;
    const panelId = `${useId()}-${id}-menu`;
    // True when a real mouse hover (not a touch tap's emulated hover) opened the panel,
    // so the click that usually follows keeps it open instead of toggling it shut.
    const openedByHover = useRef(false);
    const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

    return (
        <div
            className="h-full flex items-center"
            onMouseEnter={() => {
                if (!canHover()) return;
                if (!isOpen) openedByHover.current = true;
                setActiveMenu(id);
            }}
            onMouseLeave={() => {
                if (!canHover()) return;
                openedByHover.current = false;
                setActiveMenu(null);
            }}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setActiveMenu(null);
            }}
            onKeyDown={(e) => {
                if (e.key === "Escape" && isOpen) {
                    setActiveMenu(null);
                    (e.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus();
                }
            }}
        >
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={isOpen ? panelId : undefined}
                // Click, tap, Enter and Space toggle the panel; the first click after a mouse hover keeps it open
                onClick={() => {
                    if (openedByHover.current) {
                        openedByHover.current = false;
                        return;
                    }
                    setActiveMenu(isOpen ? null : id);
                }}
                className="flex items-center gap-1 text-navy font-medium text-[15px] leading-normal py-2 underline decoration-2 underline-offset-[10px] decoration-transparent hover:decoration-primary aria-expanded:decoration-primary transition-colors"
            >
                {label}
                <ChevronDown
                    className={cn("w-4 h-4 transition-transform duration-200", isOpen ? "rotate-180" : "")}
                    aria-hidden="true"
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.12 }}
                        className={cn("absolute top-full left-1/2 -translate-x-1/2 pt-px", panelWidth)}
                    >
                        <div className="bg-white shadow-[0_10px_24px_-14px_rgba(20,20,40,0.18)]">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function MenuGroup({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div>
            <h3 className="text-muted text-xs font-semibold uppercase tracking-[0.06em] mb-3 font-sans">{title}</h3>
            <ul className="space-y-3">{children}</ul>
        </div>
    );
}

function MegaMenuItem({ title, desc, href }: { title: string; desc: string; href: string }) {
    const isExternal = href.startsWith("http");
    return (
        <li>
            <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group block"
            >
                <span className="block text-navy font-semibold text-sm underline decoration-2 underline-offset-4 decoration-transparent transition-colors group-hover:decoration-primary group-focus-visible:decoration-primary">
                    {title}
                </span>
                <span className="block text-muted text-[13px] mt-0.5 leading-snug">{desc}</span>
            </Link>
        </li>
    );
}
