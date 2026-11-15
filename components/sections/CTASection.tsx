import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Users, GraduationCap } from "lucide-react";

const ctaOptions = [
    {
        title: "Sell Online",
        tagline: "Your Products Deserve to Be Seen.",
        description: "Take your business online, showcase your products, reach more customers, and make it easier for people to shop from you.",
        icon: Store,
        href: "https://ndiara.shop/",
        button_text: "Start Selling",
    },
    {
        title: "Join Community",
        tagline: "Find Your People in Business.",
        description: "Connect with fellow entrepreneurs, exchange experiences, share ideas, and build relationships that open doors to new opportunities.",
        icon: Users,
        href: "https://nhanga.ndiara.africa/",
        button_text: "Join the Community",
    },
    {
        title: "Ndiara Academy",
        tagline: "Learn From Experience. Grow With Knowledge.",
        description: "Access practical business courses and masterclasses led by industry experts and experienced African women entrepreneurs who share knowledge gained from building and managing businesses.",
        icon: GraduationCap,
        href: "https://guubu.ndiara.africa/",
        button_text: "Explore the Academy",
    }
];

export function CTASection() {
    return (
        <section id="get-started" className="section bg-white scroll-mt-20">
            <div className="wrap">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <span className="eyebrow mb-6">
                            YOUR NEXT STEP STARTS HERE
                        </span>
                        <h2 className="title-section">
                            Your Business Has Places to Go. <br />
                            <span>{"Let's Get You There."}</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-12">
                        <p className="lead">
                            Every business has its own journey, and wherever you are in yours, Ndiara is here to help you move forward.
                        </p>
                        <p className="lead">
                            Access practical business tools, develop new skills, connect with fellow entrepreneurs, and discover opportunities to reach more customers and grow your business.
                        </p>
                        <p className="text-lg font-semibold leading-relaxed text-navy">
                            {"Choose where you'd like to begin. Your business best friend is right here."}
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {ctaOptions.map((card, i) => {
                        const isExternal = card.href.startsWith("http");
                        return (
                            <div
                                key={card.title}
                                className="card flex flex-col p-8 md:p-10"
                            >
                                <card.icon className="mb-8 w-7 h-7 text-primary" strokeWidth={1.75} aria-hidden="true" />
                                <h3 className="title-card mb-2">{card.title}</h3>
                                <p className="mb-3 font-semibold text-navy">{card.tagline}</p>
                                <p className="mb-8 leading-relaxed text-muted">
                                    {card.description}
                                </p>
                                <Button asChild className="mt-auto w-full" variant={i === 0 ? "default" : "outline"}>
                                    <a
                                        href={card.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                    >
                                        {card.button_text} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </a>
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
