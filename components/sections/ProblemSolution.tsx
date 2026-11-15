import { ArrowRight, BookOpen, CheckCircle, Layers, MessageCircle, Package, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const fragmentedTools = [BookOpen, MessageCircle, Package, Search];

const painPoints = [
    "Manual records and scattered information.",
    "Difficulty tracking sales and inventory.",
    "Limited access to business support and opportunities.",
];

const benefits = [
    "Easier business management.",
    "Better visibility into sales and operations.",
    "Learning, connections, and opportunities.",
];

export function ProblemSolution() {
    return (
        <section className="section band">
            <div className="wrap">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                    <h2 className="title-section lg:col-span-7">
                        {"Running a Business Is Hard Enough. Managing It Shouldn't Be."}
                    </h2>
                    <p className="lead lg:col-span-5 lg:col-start-8 lg:pt-3">
                        From keeping track of sales to reaching customers and finding the right support, running a business comes with many responsibilities. Ndiara is designed to make everyday business management simpler.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* The Challenge: fragmented tools */}
                    <div className="card flex flex-col p-8 md:p-12">
                        <div className="mb-10 flex items-center gap-3">
                            <Layers className="w-6 h-6 text-muted" strokeWidth={1.75} aria-hidden="true" />
                            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.06em] text-muted">
                                THE CHALLENGE
                            </h3>
                        </div>
                        {/* Fragmented tools: each task lives in a separate place */}
                        <div className="mb-10 flex h-7 items-center gap-10 text-line-strong" aria-hidden="true">
                            {fragmentedTools.map((Icon, i) => (
                                <Icon key={i} className="w-7 h-7" strokeWidth={1.5} />
                            ))}
                        </div>
                        <h4 className="mb-4 text-2xl font-medium leading-tight tracking-[-0.01em] md:text-[28px]">Too Much to Manage. Too Little Support.</h4>
                        <p className="mb-8 leading-relaxed text-muted">
                            Keeping sales records in notebooks, tracking customer orders through messages, managing stock manually, and searching for business opportunities across different platforms can take valuable time away from growing your business.
                        </p>
                        <ul className="mt-auto flex flex-col gap-3">
                            {painPoints.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-navy">
                                    <span className="size-1.5 shrink-0 rounded-full bg-line-strong" aria-hidden="true"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Ndiara Way */}
                    <div className="card flex flex-col p-8 md:p-12">
                        <div className="mb-10 flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.06em] text-primary-ink">
                                THE NDIARA WAY
                            </h3>
                        </div>
                        {/* The same tools, brought together in one place */}
                        <div className="mb-10 flex h-7 items-center gap-1.5 text-primary" aria-hidden="true">
                            {fragmentedTools.map((Icon, i) => (
                                <Icon key={i} className="w-7 h-7" strokeWidth={1.5} />
                            ))}
                        </div>
                        <h4 className="mb-4 text-2xl font-medium leading-tight tracking-[-0.01em] md:text-[28px]">More Clarity. More Control. More Room to Grow.</h4>
                        <p className="mb-8 leading-relaxed text-muted">
                            Bring essential business tools, learning resources, and entrepreneurial connections closer together. Ndiara helps you organise your operations, understand your business, and access support as you grow.
                        </p>
                        <ul className="mt-auto flex flex-col gap-3">
                            {benefits.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-navy">
                                    <CheckCircle className="w-4 h-4 shrink-0 text-primary-ink" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-12">
                    <Button asChild className="w-full sm:w-auto">
                        <a href="#ecosystem">
                            Discover Ndiara
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
