import Link from "next/link";
import Image from "next/image";
import { Globe, Mail } from "lucide-react";

const linkClass = "text-muted hover:text-navy underline decoration-transparent hover:decoration-primary decoration-2 underline-offset-4 transition-colors";

export function Footer() {
    return (
        <footer className="band pt-16 pb-10 md:pt-24">
            <div className="wrap">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 mb-20">
                    <div className="col-span-2 md:col-span-5 md:pr-12">
                        <div className="flex items-center gap-2 mb-5">
                            <div className="relative size-8 shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="Ndiara Logo"
                                    fill
                                    sizes="32px"
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-display pt-[0.14em] text-[2rem] font-medium leading-none tracking-[0.01em] text-navy">Ndiara</span>
                        </div>
                        <p className="text-[15px] leading-relaxed text-muted mb-6 max-w-sm">
                            Empowering African women entrepreneurs with the digital tools they need to succeed locally and globally.
                        </p>
                        <div className="flex gap-1">
                            <Link href="#" aria-label="Website" className="-ml-2.5 inline-flex size-11 items-center justify-center text-navy hover:text-primary-ink transition-colors">
                                <Globe className="w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link href="#" aria-label="Email" className="inline-flex size-11 items-center justify-center text-navy hover:text-primary-ink transition-colors">
                                <Mail className="w-5 h-5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
                        <h2 className="font-sans text-sm font-semibold mb-5 text-navy">Solutions</h2>
                        <ul className="space-y-3 text-[15px]">
                            <li><Link className={linkClass} href="/solutions/ecommerce">Ndiara E-Commerce</Link></li>
                            <li><Link className={linkClass} href="/solutions/pos">Ndiara POS</Link></li>
                            <li><Link className={linkClass} href="/solutions/hrm">Ndiara HRM</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="font-sans text-sm font-semibold mb-5 text-navy">Ecosystem</h2>
                        <ul className="space-y-3 text-[15px]">
                            <li><Link className={linkClass} href="/solutions/community">Ndiara Community</Link></li>
                            <li><Link className={linkClass} href="/solutions/academy">Ndiara Academy</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="font-sans text-sm font-semibold mb-5 text-navy">Company</h2>
                        <ul className="space-y-3 text-[15px]">
                            <li><Link className={linkClass} href="/about">About Us</Link></li>
                            <li><Link className={linkClass} href="/faq">FAQ</Link></li>
                            <li><Link className={linkClass} href="#">Careers</Link></li>
                            <li><Link className={linkClass} href="#">Legal</Link></li>
                            <li><Link className={linkClass} href="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 text-sm text-muted">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <p>© 2026 Ndiara. All rights reserved.</p>
                        <span className="hidden md:inline text-line-strong" aria-hidden="true">|</span>
                        <p className="text-sm">
                            Powered by <a href="https://paahibuspace.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline decoration-transparent hover:decoration-primary decoration-2 underline-offset-4 transition-colors">Paahibu Space</a>
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link className={linkClass} href="#">Privacy Policy</Link>
                        <Link className={linkClass} href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
