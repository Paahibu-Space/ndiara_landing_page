import Image from "next/image";

/*
  One Ecosystem: two tiers, read top to bottom in the copy order.

  Tier 1, the heart: the page's only solid navy field (its top-right corner cut at 45°, the X in
  the logo ring) carries the headline, the lead and Community; one documentary scene (a Paahibu
  Space facilitator and a member working through a phone together) cuts into the navy's edge.

  Tier 2: the other four areas in one structure and one heading size (Finance | Education,
  Business Tools | Commerce). Only two supporting visuals, set on the diagonal: Finance's photo
  bleeds off the left edge at the top-left, Commerce's segment of the Ndiara ring bleeds off the
  right edge at the bottom-right, with the real Store Link QR tile sitting in its bowl.

  DOM order = visual order = copy order. Placement lives in the `css` string below:
    - below md: one column
    - md / lg: tier 1 as a navy block with the scene stepping into it; tier 2 as two columns,
      the Finance photo above Finance and the ring under Commerce
    - lg: Finance's photo moves into a left rail; xl (≥1280): the ring moves into a right rail
*/

type Area = {
    name: string;
    verbs: string;
    desc: string;
};

const community: Area = {
    name: "Community",
    verbs: "Connect & Collaborate",
    desc: "Find your people. Access a supportive community of fellow entrepreneurs, share experiences, exchange ideas, and discover opportunities to collaborate, innovate, and grow together.",
};
const finance: Area = {
    name: "Finance",
    verbs: "Manage & Grow",
    desc: "Build stronger financial management practices, keep track of business transactions, and access resources and opportunities that help you make informed decisions and transform your business finances.",
};
const education: Area = {
    name: "Education",
    verbs: "Learn & Apply",
    desc: "Access practical business and digital learning resources designed around the realities of entrepreneurship. Build your skills, discover new approaches, and apply what you learn to innovate and grow your business.",
};
const tools: Area = {
    name: "Business Tools",
    verbs: "Organise & Operate",
    desc: "Make everyday business management easier. Access digital tools to manage sales, inventory, customers, finances, and operations, helping you work more efficiently and transform how you run your business.",
};
const commerce: Area = {
    name: "Commerce",
    verbs: "Reach & Sell",
    desc: "Take your business beyond its current reach. Build your online presence, showcase your products, connect with more customers, and access new markets and opportunities to grow your sales.",
};

/* Ring geometry of the Ndiara mark in a 1000 × 1000 box (measured from app/icon.png). */
const R_IN = 275; // inner / outer ≈ 0.55
const CUT = 56; // constant-width diagonal cut

/* The top segment of the ring on its own, cropped to its box (x 160–840, y 0–300). */
function Arch({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="160 0 680 300" className={className} aria-hidden="true" focusable="false">
            <defs>
                <mask id="eco-arch-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="1000">
                    <rect width="1000" height="1000" fill="black" />
                    <circle cx="500" cy="500" r="500" fill="white" />
                    <circle cx="500" cy="500" r={R_IN} fill="black" />
                    <line x1="0" y1="0" x2="1000" y2="1000" stroke="black" strokeWidth={CUT} />
                    <line x1="1000" y1="0" x2="0" y2="1000" stroke="black" strokeWidth={CUT} />
                </mask>
            </defs>
            <polygon points="500,500 -10,-10 1010,-10" fill="var(--primary)" mask="url(#eco-arch-mask)" />
        </svg>
    );
}

/* Teko is condensed and sits tall: the verbs are set larger and tighter than a grotesque would be.
   Community, the heart, gets the poster size on one line; the other four share one size. */
const verbSize = {
    hero: "mt-4 text-[clamp(2.875rem,1.5rem+3.4vw,4.75rem)] leading-[0.95] tracking-[-0.01em]",
    station: "mt-3 text-[clamp(2.25rem,1.45rem+1.9vw,3rem)] leading-[0.95] tracking-[-0.005em]",
} as const;

function Station({
    area,
    dot,
    onNavy = false,
    size = "station",
    className = "",
}: {
    area: Area;
    /** Tailwind bg class for the marker dot. */
    dot: string;
    onNavy?: boolean;
    size?: keyof typeof verbSize;
    className?: string;
}) {
    return (
        <article className={className}>
            <h3 className="flex flex-col">
                <span
                    className={`flex items-center gap-3 font-sans text-[0.9375rem] font-semibold leading-none ${onNavy ? "text-white/75" : "text-navy"}`}
                >
                    <span aria-hidden="true" className={`size-3.5 shrink-0 rounded-full ${dot}`} />
                    {area.name}
                </span>
                <span className="sr-only"> — </span>
                <span className={`font-display font-medium ${verbSize[size]} ${onNavy ? "text-white" : "text-navy"}`}>
                    {area.verbs}
                </span>
            </h3>
            <p className={`mt-4 leading-relaxed ${onNavy ? "text-white/80" : "text-muted"}`}>{area.desc}</p>
        </article>
    );
}

// Full-bleed helpers below lg: cancel the .wrap gutter.
const bleedX = "-mx-5 px-5 md:-mx-8 md:px-8 lg:mx-0 lg:px-0";

/* --gut is the distance from the content edge to the viewport edge, so a visual can bleed off it. */
const css = `
#ecosystem { --gut: 20px; }
.eco-top { display: flex; flex-direction: column; }
.eco-navy { display: none; }
.eco-four { display: flex; flex-direction: column; margin-top: 64px; }
.eco-fin-photo { margin-left: calc(-1 * var(--gut)); width: calc(var(--gut) + 78%); aspect-ratio: 4 / 3; border-top-left-radius: 0; border-bottom-left-radius: 0; }
.eco-fin { margin-top: 28px; }
.eco-edu, .eco-tools, .eco-com { margin-top: 64px; }
.eco-ring { margin-top: 32px; margin-right: calc(-1 * var(--gut)); margin-left: auto; width: calc(var(--gut) + 78%); }
/* the arc box keeps the QR tile inside it: offsets in % of the arc's width (svg is 680 × 300) */
.eco-arc { position: relative; width: var(--aw, 100%); }
.eco-arc svg { display: block; width: 100%; height: auto; }
.eco-arc::after { content: ""; display: block; padding-bottom: max(0px, calc(23% + max(31.25%, 120px) + 16px - 44.1%)); }
.eco-qr { position: absolute; top: 0; left: var(--qx, 33.8%); margin-top: 23%; width: max(25%, 96px); }

/* below lg: Community's navy ends in a 45° step into the scene's top-left corner */
@media (max-width: 1023.98px) {
  .eco-comm { clip-path: polygon(0 0, 100% 0, 100% 100%, var(--l) 100%, var(--l) calc(100% - var(--o)), calc(var(--l) - 40px) calc(100% - var(--o) - 40px), 0 calc(100% - var(--o) - 40px)); }
}
@media (min-width: 768px) and (max-width: 1023.98px) {
  .eco-photo .media { aspect-ratio: 5 / 4; }
  .eco-photo img { object-position: 50% 30%; }
}

@media (min-width: 768px) {
  #ecosystem { --gut: 32px; }
  .eco-four { display: grid; grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1fr); margin-top: 80px; }
  .eco-fin-photo { grid-column: 1; grid-row: 1; width: calc(var(--gut) + 86%); aspect-ratio: 3 / 2; }
  .eco-fin { grid-column: 1; grid-row: 2; margin-top: 32px; }
  .eco-edu { grid-column: 3; grid-row: 2; margin-top: 32px; }
  .eco-tools { grid-column: 1; grid-row: 3; margin-top: 80px; }
  .eco-com { grid-column: 3; grid-row: 3; margin-top: 80px; }
  .eco-ring { grid-column: 3; grid-row: 4; width: calc(var(--gut) + 86%); }
}

/* lg: the scene stands beside the navy; Finance's photo moves into a left rail beside its text */
@media (min-width: 1024px) {
  .eco-top { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); }
  .eco-navy { display: block; grid-column: 1 / 9; grid-row: 1 / 3; }
  .eco-head { grid-column: 1 / 8; grid-row: 1; }
  .eco-comm { grid-column: 1 / 8; grid-row: 2; }
  .eco-photo { grid-column: 8 / 13; grid-row: 1 / 3; align-self: end; margin: 0 0 -96px; }

  .eco-four { grid-template-columns: minmax(0, 1fr) 32px 22rem 56px 22rem; margin-top: 160px; }
  .eco-fin-photo { grid-column: 1; grid-row: 1; width: auto; aspect-ratio: auto; min-height: 240px; }
  .eco-fin { grid-column: 3; grid-row: 1; margin-top: 0; align-self: center; }
  .eco-edu { grid-column: 5; grid-row: 1; margin-top: 0; align-self: center; }
  .eco-tools { grid-column: 3; grid-row: 2; }
  .eco-com { grid-column: 5; grid-row: 2; }
  .eco-ring { grid-column: 5; grid-row: 3; width: calc(var(--gut) + 100%); }
}

@media (min-width: 1200px) {
  #ecosystem { --gut: calc((100vw - 1136px) / 2); }
}

/* xl: a right rail too, so the ring bleeds off the right edge beside Commerce (the diagonal of the logo's X) */
@media (min-width: 1280px) {
  .eco-four { grid-template-columns: minmax(0, 1fr) 40px 22.5rem 72px 22.5rem 40px minmax(0, 1fr); }
  .eco-tools, .eco-com { margin-top: 80px; }
  .eco-ring { grid-column: 7; grid-row: 2; margin: 80px calc(-1 * var(--gut)) 0 0; width: auto; --aw: 130%; --qx: 24%; }
}`;

export function EcosystemMap() {
    const verb = "font-semibold text-white";

    return (
        <section id="ecosystem" className="relative scroll-mt-20 overflow-x-clip bg-white pb-6 lg:pb-4">
            <style>{css}</style>
            <div className="wrap">
                {/* Tier 1: headline, lead and Community on navy; the scene cuts into the navy's edge */}
                <div className="eco-top lg:gap-x-8">
                    {/* Navy field (lg): bleeds to the left viewport edge; top-right corner cut at 45° */}
                    <div
                        aria-hidden="true"
                        className="eco-navy relative bg-navy before:absolute before:inset-y-0 before:right-full before:w-[50vw] before:bg-navy"
                        style={{ clipPath: "polygon(-50vw 0, calc(100% - 88px) 0, 100% 88px, 100% 100%, -50vw 100%)" }}
                    />

                    <header className={`eco-head relative z-10 bg-navy pt-20 lg:bg-transparent lg:pt-20 lg:pr-6 ${bleedX}`}>
                        <h2 className="font-display text-[clamp(3.25rem,1.4rem+4.8vw,6rem)] font-medium leading-[0.92] tracking-[-0.01em] text-white">
                            One Ecosystem. <br />
                            <span>Infinite Possibilities.</span>
                        </h2>
                        <p className="mt-7 max-w-[34rem] text-[1.0625rem] leading-[1.65] text-white/80 lg:text-[1.1875rem]">
                            <strong className={verb}>Access</strong> the resources you need,{" "}
                            <strong className={verb}>innovate</strong> in how you run your business, and{" "}
                            <strong className={verb}>transform</strong> your entrepreneurial journey. Ndiara brings together the tools, knowledge, connections, and opportunities that help African women entrepreneurs start, manage, and grow their businesses.
                        </p>
                    </header>

                    <Station
                        area={community}
                        dot="bg-primary"
                        onNavy
                        size="hero"
                        className={`eco-comm relative z-10 bg-navy pb-[136px] pt-14 [--l:60px] [--o:96px] -mt-px md:pb-[160px] md:[--l:72px] lg:mt-0 lg:bg-transparent lg:pb-16 lg:pt-16 [&_p]:max-w-[30rem] ${bleedX}`}
                    />

                    {/* The scene: a facilitator and a member working it out together on a phone */}
                    <div className="eco-photo relative z-10 -mr-5 -mt-24 ml-10 md:-mr-8 lg:ml-0 lg:mr-0">
                        <div
                            className="media relative aspect-[4/5] max-lg:rounded-r-none"
                            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 72px 100%, 0 calc(100% - 72px))" }}
                        >
                            <Image
                                src="/images/ecosystem/community-paahibu-facilitator.jpg"
                                alt="A Paahibu Space facilitator in glasses and a white t-shirt works through a phone app with a woman entrepreneur in braids"
                                fill
                                sizes="(min-width: 1200px) 456px, (min-width: 1024px) 380px, 90vw"
                                className="object-cover object-[50%_50%]"
                            />
                        </div>
                    </div>
                </div>

                {/* Tier 2: Finance, Education, Business Tools, Commerce */}
                <div className="eco-four">
                    {/* Finance: a member checking her phone beside her handbag, in monochrome; bleeds off the left edge */}
                    <div className="eco-fin-photo media relative">
                        <Image
                            src="/images/ecosystem/finance-handbag-phone-mono.jpg"
                            alt="A woman at a training desk checks her phone, propped against her black leather handbag"
                            fill
                            sizes="(min-width: 1200px) 300px, (min-width: 768px) 360px, 80vw"
                            className="object-cover object-[50%_62%]"
                        />
                    </div>
                    <Station area={finance} dot="bg-navy" className="eco-fin" />
                    <Station area={education} dot="bg-navy" className="eco-edu" />
                    <Station area={tools} dot="bg-navy" className="eco-tools" />
                    <Station area={commerce} dot="bg-navy" className="eco-com" />

                    {/* Commerce: one segment of the Ndiara ring, bleeding off the right edge, the real Store Link tile in its bowl */}
                    <div className="eco-ring">
                        <div className="eco-arc">
                            <Arch />
                            <div className="eco-qr media bg-white shadow-[0_1px_2px_rgba(20,22,70,0.10),0_14px_28px_-18px_rgba(20,22,70,0.45)]">
                                <Image
                                    src="/images/ecosystem/shop-store-link.jpg"
                                    alt="Ndiara E-commerce Store Link tile with the shop's QR code"
                                    width={256}
                                    height={320}
                                    sizes="128px"
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
