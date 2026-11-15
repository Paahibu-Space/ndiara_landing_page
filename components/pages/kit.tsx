import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { solutionOrder, solutionPath, solutions, type SolutionSlug } from "@/content/solutions";

/*
  Shared parts for the inner pages (solutions, blog, success stories).
  They only reuse the site's own system: .wrap, .section, .band, .title-*, .lead, .eyebrow, .media,
  the navy field with its 45° cut corner and the orange segment of the Ndiara ring (see EcosystemMap).
*/

/* The page frame every inner page shares (same as /about and /faq). */
export function PageShell({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
        </div>
    );
}

type Crumb = { label: string; href?: string };

/* A quiet breadcrumb: plain text links separated by a slash. */
export function Breadcrumb({ items, onDark = false, onOrange = false, className = "" }: { items: Crumb[]; onDark?: boolean; onOrange?: boolean; className?: string }) {
    return (
        <nav aria-label="Breadcrumb" className={className}>
            <ol className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-sm", onDark ? "text-white/80" : onOrange ? "text-navy" : "text-muted")}>
                {items.map((item, i) => (
                    <li key={item.label} className="flex items-center gap-2">
                        {i > 0 && <span aria-hidden="true">/</span>}
                        {item.href ? (
                            <Link
                                href={item.href}
                                className={cn(
                                    "underline decoration-transparent decoration-2 underline-offset-4 transition-colors",
                                    onOrange ? "hover:decoration-navy" : "hover:decoration-primary",
                                    onDark ? "hover:text-white" : "hover:text-navy",
                                )}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span aria-current="page" className={onDark ? "text-white" : "font-medium text-navy"}>
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

/* Ring geometry of the Ndiara mark in a 1000 × 1000 box (same numbers as EcosystemMap). */
const R_IN = 275;
const CUT = 56;

/**
 * One segment of the Ndiara logo ring (its top arch), cut at 45° like the mark.
 * `id` must be unique on the page because it names the SVG mask.
 */
export function RingArc({ id, className = "", style, fill = "var(--primary)" }: { id: string; className?: string; style?: CSSProperties; fill?: string }) {
    const mask = `ring-arc-${id}`;
    return (
        <svg viewBox="160 0 680 300" className={className} style={style} aria-hidden="true" focusable="false">
            <defs>
                <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="1000">
                    <rect width="1000" height="1000" fill="black" />
                    <circle cx="500" cy="500" r="500" fill="white" />
                    <circle cx="500" cy="500" r={R_IN} fill="black" />
                    <line x1="0" y1="0" x2="1000" y2="1000" stroke="black" strokeWidth={CUT} />
                    <line x1="1000" y1="0" x2="0" y2="1000" stroke="black" strokeWidth={CUT} />
                </mask>
            </defs>
            <polygon points="500,500 -10,-10 1010,-10" fill={fill} mask={`url(#${mask})`} />
        </svg>
    );
}

/* 45° cut corners, the cut in the logo ring. */
export const cutTopRight = (size = 88): CSSProperties => ({
    clipPath: `polygon(0 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% 100%, 0 100%)`,
});
export const cutBottomRight = (size = 88): CSSProperties => ({
    clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%)`,
});
export const cutBottomLeft = (size = 72): CSSProperties => ({
    clipPath: `polygon(0 0, 100% 0, 100% 100%, ${size}px 100%, 0 calc(100% - ${size}px))`,
});

/* A 1px hairline (no shadow), only for a layer that sits on top of another one. */
export const hairline = "border border-line";

/**
 * A link label whose trailing icon stays on the line of the last word when the label wraps.
 * Use inside a link with `text-link inline-block` (not the default inline-flex).
 */
export function WrapLabel({ text, external = true }: { text: string; external?: boolean }) {
    const Icon = external ? ArrowUpRight : ArrowRight;
    const i = text.lastIndexOf(" ");
    const head = i >= 0 ? text.slice(0, i + 1) : "";
    const tail = i >= 0 ? text.slice(i + 1) : text;
    return (
        <>
            {head}
            <span className="whitespace-nowrap">
                {tail}
                <Icon className="ml-1.5 inline-block h-4 w-4 align-[-0.2em]" aria-hidden="true" />
            </span>
        </>
    );
}

type Tone = "light" | "navy" | "orange";

/**
 * The site's button, as a link. External links open the live product in a new tab
 * and carry the up-right arrow; internal ones carry the right arrow.
 */
export function ActionLink({
    href,
    children,
    variant = "primary",
    tone = "light",
    className = "",
}: {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
    tone?: Tone;
    className?: string;
}) {
    const external = href.startsWith("http");
    const Icon = external ? ArrowUpRight : ArrowRight;
    const onNavy = tone === "navy";
    const classes = cn(
        "w-full sm:w-auto",
        onNavy && variant === "primary" && "bg-white text-navy hover:bg-band",
        onNavy && variant === "secondary" && "border-white text-white hover:bg-white hover:text-navy",
        className,
    );
    const inner = (
        <>
            {children}
            <Icon className="h-4 w-4" aria-hidden="true" />
        </>
    );
    return (
        <Button asChild variant={variant === "primary" ? "default" : "outline"} className={classes}>
            {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {inner}
                </a>
            ) : (
                <Link href={href}>{inner}</Link>
            )}
        </Button>
    );
}

/* A text link in the site's style (navy, orange underline on hover). */
export function TextLink({ href, children, onDark = false, className = "" }: { href: string; children: ReactNode; onDark?: boolean; className?: string }) {
    const external = href.startsWith("http");
    const Icon = external ? ArrowUpRight : ArrowRight;
    const cls = cn("text-link min-h-11", onDark && "text-white", className);
    const inner = (
        <>
            {children}
            <Icon className="h-4 w-4" aria-hidden="true" />
        </>
    );
    return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
            {inner}
        </a>
    ) : (
        <Link href={href} className={cls}>
            {inner}
        </Link>
    );
}

/* A plain list with small orange squares (the system's only bullet). */
export function SquareList({ items, tone = "light", className = "" }: { items: string[]; tone?: Tone; className?: string }) {
    return (
        <ul className={cn("flex flex-col gap-3", className)}>
            {items.map((item) => (
                <li key={item} className="flex items-baseline gap-3">
                    <span
                        aria-hidden="true"
                        className={cn("size-2 shrink-0 -translate-y-[3px]", tone === "orange" ? "bg-navy" : "bg-primary")}
                    />
                    <span className={cn("font-medium leading-snug", tone === "navy" ? "text-white" : "text-navy")}>{item}</span>
                </li>
            ))}
        </ul>
    );
}

/**
 * The closing band of a page: a full-bleed navy field with its top-right corner cut at 45°,
 * the orange ring segment cropped off its lower edge, the heading on the left and the actions on the right.
 */
export function ClosingBand({
    id,
    eyebrow,
    title,
    children,
    actions,
    afterBand = false,
}: {
    id: string;
    eyebrow?: string;
    title: ReactNode;
    children?: ReactNode;
    actions: ReactNode;
    /** Set when the section above is a light band, so the cut corner shows the same ground. */
    afterBand?: boolean;
}) {
    return (
        <div className={afterBand ? "band" : "bg-white"}>
        <section className="relative overflow-hidden bg-navy" style={cutTopRight(88)} aria-labelledby={`${id}-title`}>
            <RingArc
                id={id}
                className="pointer-events-none absolute -bottom-[2px] right-[-6%] w-[min(560px,70vw)] translate-y-[38%] md:right-[4%]"
            />
            <div className="wrap relative grid grid-cols-1 gap-10 pt-24 pb-40 md:pb-48 lg:grid-cols-12 lg:gap-16 lg:pt-28 lg:pb-44">
                <div className="lg:col-span-7">
                    {eyebrow && <span className="eyebrow mb-6 uppercase text-primary">{eyebrow}</span>}
                    <h2 id={`${id}-title`} className="title-section text-white">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-5 lg:pt-3 [&_p]:text-[1.0625rem] [&_p]:leading-[1.65] [&_p]:text-white/80">
                    {children}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>
                </div>
            </div>
        </section>
        </div>
    );
}

/**
 * Cross-links to the other live solutions, at the foot of each product page.
 * Heading and lines come from the approved product cards.
 */
export function SolutionsRail({ current }: { current?: SolutionSlug }) {
    const others = solutionOrder.filter((s) => s !== current);
    return (
        <section className="section" aria-labelledby="solutions-rail-title">
            <div className="wrap">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-16">
                    <h2 id="solutions-rail-title" className="title-section lg:col-span-6">
                        Find the Right Tools for Your Business.
                    </h2>
                </div>
                <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {others.map((slug) => {
                        const s = solutions[slug];
                        return (
                            <li key={slug}>
                                <Link href={solutionPath(slug)} className="group block">
                                    <span className="block text-sm font-semibold text-primary-ink">{s.name}</span>
                                    <span className="mt-2 block text-xl font-medium leading-snug text-navy underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-primary group-focus-visible:decoration-primary">
                                        {s.heading}
                                    </span>
                                    <span className="mt-3 block text-[15px] leading-relaxed text-muted">{s.summary[0]}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
