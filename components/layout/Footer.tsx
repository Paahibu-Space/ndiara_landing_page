import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Leaf } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative size-8 text-primary shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="Ndiara Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-[#181117] dark:text-white">Ndiara</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                            Empowering African women entrepreneurs with the digital tools they need to succeed locally and globally.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Globe className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Solutions</h4>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link className="hover:text-primary transition-colors" href="https://ecommerce.paahibuspace.org" target="_blank" rel="noopener noreferrer">Ndiara E-commerce</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="https://pos.paahibuspace.org" target="_blank" rel="noopener noreferrer">Ndiara POS</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="https://accounts.paahibuspace.org" target="_blank" rel="noopener noreferrer">Ndiara Accounts</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="https://sales.paahibuspace.org" target="_blank" rel="noopener noreferrer">Ndiara Sales</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="https://hrm.paahibuspace.org" target="_blank" rel="noopener noreferrer">Ndiara HRM</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Ecosystem</h4>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link className="hover:text-primary transition-colors" href="https://community.paahibuspace.org" target="_blank" rel="noopener noreferrer">Ndiara Community</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="https://academy.paahibuspace.org" target="_blank" rel="noopener noreferrer">Ndiara Academy</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Payments</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="https://baabuh.paahibuspace.org" target="_blank" rel="noopener noreferrer">Funding</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/faq">FAQ</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Careers</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Legal</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <p>© 2026 Ndiara. All rights reserved.</p>
                        <span className="hidden md:inline text-gray-300 dark:text-gray-700">|</span>
                        <p className="text-xs">
                            Powered by <a href="https://paahibuspace.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy dark:text-white hover:text-primary transition-colors">Paahibu Space</a>
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link className="hover:text-gray-600 dark:hover:text-white" href="#">Privacy Policy</Link>
                        <Link className="hover:text-gray-600 dark:hover:text-white" href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
