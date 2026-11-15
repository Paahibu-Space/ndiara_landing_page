"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EcommerceShowcase() {
    return (
        <section className="section bg-white">
            <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">

                {/* Visual Side (screen recording of the app) */}
                <div className="flex justify-center lg:col-span-6">
                    <div className="relative h-[520px] w-[260px] sm:h-[600px] sm:w-[300px]">
                        <VideoPlayer />
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 lg:col-start-8">
                    <span className="eyebrow mb-6">
                        BUSINESS MANAGEMENT MADE EASIER
                    </span>
                    <h2 className="title-section mb-8">
                        Run Your Business <br />
                        <span>From Anywhere.</span>
                    </h2>
                    <p className="lead mb-4">
                        {"Your business doesn't stop when you are away from your shop, office, or workspace."}
                    </p>
                    <p className="lead mb-10">
                        {"With Ndiara's mobile-friendly business tools, you can stay connected to your operations, manage products, track sales, and keep up with customer orders wherever you are."}
                    </p>

                    <ul className="mb-10 flex flex-col gap-3">
                        {[
                            "Monitor sales and business performance.",
                            "Add products and manage inventory.",
                            "Share your online store with customers.",
                            "Track customer orders and business activities."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="mt-0.5 w-5 h-5 shrink-0 text-primary-ink stroke-[2.5]" aria-hidden="true" />
                                <span className="font-medium text-navy">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Button asChild className="w-full sm:w-auto">
                        <a href="#solutions">
                            Explore Business Tools
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </Button>
                </div>

            </div>
        </section>
    );
}

function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(videoRef);

    useEffect(() => {
        if (isInView && videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, [isInView]);

    return (
        <video
            ref={videoRef}
            src="/images/record.mov"
            className="w-full h-full object-cover"
            aria-hidden="true"
            muted
            loop
            playsInline
        />
    );
}
