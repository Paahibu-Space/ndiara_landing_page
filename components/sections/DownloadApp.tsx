import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export function DownloadApp() {
    return (
        <section className="section band">
            <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">

                {/* Content */}
                <div className="lg:col-span-6">
                    <span className="eyebrow mb-6">
                        NDIARA ON THE GO
                    </span>
                    <h2 className="title-section mb-8">
                        Your Business in <br /><span>Your Pocket.</span>
                    </h2>
                    <div className="mb-6 flex max-w-xl flex-col gap-4">
                        <p className="lead">
                            {"Your business doesn't stop when you step away from your shop, office, or workspace. Neither should your access to the tools and resources that keep it running."}
                        </p>
                        <p className="lead">
                            With Ndiara on your phone, you can manage sales and orders, track expenses, monitor inventory, access business learning resources, and connect with fellow entrepreneurs wherever you are.
                        </p>
                        <p className="lead">
                            {"Whether you're attending to customers, meeting suppliers, travelling, or working from home, Ndiara helps you stay organised, make informed decisions, and keep your business moving."}
                        </p>
                    </div>
                    <p className="mb-10 max-w-xl text-lg font-semibold text-navy">
                        Your business. Your pace. Ndiara by your side.
                    </p>
                    {/* TODO(content): replace "#" with the real App Store / Google Play listing URLs (or the
                        mobile-accessible platform URL if there is no downloadable app). None exist in code yet. */}
                    <div className="flex flex-wrap gap-3">
                        <Button
                            asChild
                            className="h-12 gap-3 px-5"
                        >
                            <a href="#">
                                <Apple className="w-6 h-6" aria-hidden="true" />
                                <span className="text-left">
                                    <span className="block text-[11px] font-medium uppercase leading-tight tracking-[0.04em] text-white/80">Download on the </span>
                                    <span className="block text-[15px] font-semibold leading-tight">App Store</span>
                                </span>
                            </a>
                        </Button>
                        <Button
                            asChild
                            className="h-12 gap-3 px-5"
                        >
                            <a href="#">
                                <Smartphone className="w-6 h-6" aria-hidden="true" />
                                <span className="text-left">
                                    <span className="block text-[11px] font-medium uppercase leading-tight tracking-[0.04em] text-white/80">Get it on </span>
                                    <span className="block text-[15px] font-semibold leading-tight">Google Play</span>
                                </span>
                            </a>
                        </Button>
                    </div>
                </div>

                {/* App screens, upright, side by side */}
                <div className="flex items-start justify-center gap-4 sm:gap-6 lg:col-span-6">
                    <div className="relative aspect-[352/709] w-[46%] max-w-[240px]">
                        <Image
                            src="/images/pos-mockup.png"
                            alt="Ndiara POS"
                            fill
                            sizes="240px"
                            className="object-contain"
                        />
                    </div>
                    <div className="relative aspect-[352/709] w-[46%] max-w-[240px]">
                        <Image
                            src="/images/ecommerce-dashboard.png"
                            alt="Ndiara Ecommerce Dashboard"
                            fill
                            sizes="240px"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
