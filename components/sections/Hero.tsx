import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="bg-white">
            <div className="wrap grid grid-cols-1 gap-12 pt-12 pb-20 md:pt-16 lg:grid-cols-12 lg:items-stretch lg:gap-16 lg:pt-20 lg:pb-28">
                {/* Content */}
                <div className="flex flex-col items-start lg:col-span-7 lg:py-6">
                    <h1 className="title-xl max-w-[14ch]">
                        Your Business. Your Ambition. <span>Our Support.</span>
                    </h1>
                    <p className="mt-8 max-w-xl text-[1.25rem] font-medium leading-snug text-navy sm:text-[1.375rem]">
                        Meet Ndiara, your business best friend.
                    </p>
                    <p className="lead mt-4 max-w-xl">
                        From selling online and managing daily operations to learning new skills, accessing opportunities, and connecting with other entrepreneurs, Ndiara brings the tools and support you need to start, manage, and grow your business into one digital ecosystem.
                    </p>
                    <p className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-navy sm:text-[17px]">
                        Built with African women entrepreneurs, for businesses ready to go further.
                    </p>

                    {/* CTAs */}
                    <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <Button asChild className="w-full sm:w-auto">
                            <a href="#ecosystem">
                                Explore Ndiara
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="w-full sm:w-auto">
                            <a href="#get-started">Get Started</a>
                        </Button>
                    </div>
                </div>

                {/* Photograph */}
                <div className="media aspect-[4/3] w-full lg:col-span-5 lg:aspect-auto lg:min-h-[560px]">
                    {/* Client photograph (Paahibu Space GROW Network session, paahibuspace.org/grow-program). */}
                    <Image
                        src="/images/paahibu/grow-women-laughing-over-phones.jpg"
                        alt="A smiling woman in a GROW Network t-shirt compares phones during a training session"
                        fill
                        priority
                        sizes="(min-width: 1024px) 960px, 100vw"
                        className="object-cover object-[38%_40%]"
                    />
                </div>
            </div>
        </section>
    );
}
