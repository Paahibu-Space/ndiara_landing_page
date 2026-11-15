import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ActionLink, Breadcrumb, ClosingBand, PageShell, SolutionsRail, SquareList, TextLink, cutBottomRight } from "@/components/pages/kit";
import { solutions } from "@/content/solutions";

const s = solutions.hrm;

export const metadata: Metadata = {
    title: "Ndiara HRM | Ndiara",
    description:
        "Meet Ndiara HRM, a people management platform designed to help African businesses and organizations recruit talent, organize employee information, manage payroll, and build more structured workplaces.",
};

/*
  Ndiara HRM: "a working room". The coolest page of the set: orange only on labels, numerals and squares.
  The hero is the navy field (bottom-right corner cut at 45°) with a meeting-table photograph hanging off its edge.
  Copy: hrm.md, verbatim. The author's "new feature" proposals (Team Development, Workspace) and design notes are left out;
  AI Recruiter is shown with the approved FAQ answer that calls it a planned feature.
*/

const challenges = [
    {
        t: "Recruitment Takes Time",
        d: "Reviewing applications, interviewing candidates, and deciding who is suitable for a role can be demanding, especially without a dedicated recruitment team.",
    },
    {
        t: "Employee Information Gets Scattered",
        d: "Contracts, employee details, attendance records, and other important documents can become difficult to manage when stored in different places.",
    },
    {
        t: "Payroll Requires Careful Attention",
        d: "Calculating salaries, recording deductions, and preparing payments require accuracy and consistency.",
    },
    {
        t: "Workplace Processes Aren't Always Clear",
        d: "Without established policies, templates, and procedures, even routine HR responsibilities can become unnecessarily complicated.",
    },
];

const templates = [
    { t: "Recruitment & Hiring", d: "Job descriptions, interview evaluation forms, offer letters, and recruitment checklists." },
    { t: "Onboarding & Employee Records", d: "Employee information forms, induction plans, onboarding checklists, and document management resources." },
    { t: "Workplace Policies & Procedures", d: "Codes of conduct, leave policies, workplace guidelines, and employment agreement templates." },
    { t: "Performance & Development", d: "Performance review forms, goal-setting resources, employee development plans, and feedback templates." },
    { t: "Everyday HR Administration", d: "Leave requests, attendance records, internal notices, and other essential workplace documents." },
];

const recruiterSteps = [
    { n: "1.", t: "Define the Role", d: "Specify the position, required qualifications, responsibilities, and competencies you're looking for." },
    { n: "2.", t: "Invite Candidates to Interview", d: "Applicants participate in an AI-assisted interview through an interactive chat experience." },
    { n: "3.", t: "Let the Conversation Adapt", d: "The AI asks relevant follow-up questions based on each candidate's responses, exploring their experience and approach in greater depth." },
    { n: "4.", t: "Review Candidate Insights", d: "Access structured interview summaries and candidate profiles to help identify applicants for further consideration." },
];

const why = [
    { t: "Recruitment That Goes Beyond Applications", d: "Explore AI-assisted conversational interviews that help you learn more about candidates before making hiring decisions." },
    { t: "People Management Made More Practical", d: "Keep employee information, records, and administrative responsibilities organized." },
    { t: "Resources You Can Put to Work", d: "Access customizable workplace templates that help you establish policies, procedures, and professional documentation." },
    { t: "Designed With African Businesses in Mind", d: "A people management experience that considers the operating realities and needs of businesses across African markets." },
    { t: "Room to Grow", d: "Whether you're hiring your first employee or managing an expanding workforce, Ndiara supports a more organized approach to people management." },
];

const steps = [
    { n: "1.", t: "Create Your Account", d: "Register your business and set up your organization's profile." },
    { n: "2.", t: "Set Up Your Workplace", d: "Add employee information, organize records, and establish your HR management preferences." },
    { n: "3.", t: "Explore Your Tools", d: "Access employee management, payroll resources, workplace templates, and recruitment features." },
    { n: "4.", t: "Manage With Confidence", d: "Keep track of your people, documents, and everyday HR responsibilities from one place." },
];

const faqs = [
    {
        q: "What is Ndiara HRM?",
        a: ["Ndiara HRM is a people management platform designed to help businesses organize employee information, manage HR responsibilities, and access tools for recruitment, payroll, and workplace administration."],
    },
    {
        q: "Is Ndiara HRM only for businesses with large teams?",
        a: ["No. Ndiara HRM is designed to support businesses at different stages, including entrepreneurs hiring their first employees and organizations managing growing teams."],
    },
    {
        q: "How does Ndiara AI Recruiter work?",
        a: ["Ndiara AI Recruiter is a planned AI-assisted recruitment feature that conducts interactive, chat-based interviews. It asks candidates job-related questions and adapts follow-up questions based on their responses. Employers can then review structured candidate information to support their recruitment decisions."],
    },
    {
        q: "Does the AI make the final hiring decision?",
        a: ["No. Ndiara AI Recruiter is designed to support candidate screening and assessment. Final recruitment decisions remain the responsibility of the employer."],
    },
    {
        q: "Can I customize the workplace templates?",
        a: ["Yes. Ndiara Workplace Templates is designed to allow businesses to adapt documents and resources to their organizational needs."],
    },
    {
        q: "Can Ndiara HRM help me manage payroll?",
        a: ["Ndiara HRM includes payroll management capabilities intended to help businesses organize salary information, calculations, deductions, and payment records. Available functionality may vary depending on the product version and supported country."],
    },
    {
        q: "Does Ndiara provide employment law advice?",
        a: ["Ndiara HRM is designed to support workplace administration and documentation. Its resources do not replace professional legal advice, and businesses remain responsible for ensuring that their employment practices meet applicable legal requirements."],
    },
    {
        q: "How is employee and applicant information protected?",
        a: ["Protecting employee and applicant information is an important part of Ndiara HRM's design. Information about available security measures, access controls, and data-handling practices will be provided in the platform's privacy and security documentation."],
    },
];

/* A split block: text and one photograph, used for the three capability sections. */
function Capability({
    id,
    eyebrow,
    title,
    paras,
    listTitle,
    list,
    cta,
    image,
    reverse = false,
    band = false,
}: {
    id: string;
    eyebrow: string;
    title: string;
    paras: string[];
    listTitle?: string;
    list?: string[];
    cta: string;
    image: { src: string; alt: string; ratio: string; position: string; sizes: string };
    reverse?: boolean;
    band?: boolean;
}) {
    return (
        <section id={id} className={`section scroll-mt-20 ${band ? "band" : "bg-white"}`} aria-labelledby={`${id}-title`}>
            <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
                <div className={reverse ? "lg:order-2 lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
                    <span className="eyebrow mb-6">{eyebrow}</span>
                    <h2 id={`${id}-title`} className="title-section">
                        {title}
                    </h2>
                    <div className="mt-8 flex flex-col gap-4">
                        {paras.map((p) => (
                            <p key={p} className="lead">
                                {p}
                            </p>
                        ))}
                    </div>
                    {list && (
                        <>
                            <h3 className="title-card mt-10 text-lg">{listTitle}</h3>
                            <SquareList items={list} className="mt-4" />
                        </>
                    )}
                    <TextLink href={s.liveUrl} className="mt-8">
                        {cta}
                    </TextLink>
                </div>
                <div className={`media w-full ${image.ratio} ${reverse ? "lg:order-1 lg:col-span-6" : "lg:col-span-6 lg:col-start-7"}`}>
                    <Image src={image.src} alt={image.alt} fill sizes={image.sizes} className="object-cover" style={{ objectPosition: image.position }} />
                </div>
            </div>
        </section>
    );
}

export default function HrmPage() {
    return (
        <PageShell>
            {/* Hero: navy field, the photograph hangs off its cut edge */}
            <section className="relative bg-white" aria-labelledby="hrm-title">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[calc(100%-140px)] bg-navy lg:h-[calc(100%-160px)]" style={cutBottomRight(96)} />
                <div className="wrap relative grid grid-cols-1 gap-12 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20">
                    <div className="lg:col-span-6 lg:pb-[220px]">
                        <Breadcrumb onDark items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: s.name }]} />
                        <span className="eyebrow mt-12 mb-6 uppercase text-primary">{s.name}</span>
                        <h1 id="hrm-title" className="title-xl max-w-[13ch] text-white">
                            Hire Smarter. Manage Better. Grow Together.
                        </h1>
                        <p className="mt-8 max-w-xl text-[1.25rem] font-medium leading-snug text-white sm:text-[1.375rem]">
                            {"Your people are essential to your business. Managing them shouldn't have to be complicated."}
                        </p>
                        <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.65] text-white/80">
                            Meet Ndiara HRM, a people management platform designed to help African businesses and organizations recruit talent, organize employee information, manage payroll, and build more structured workplaces.
                        </p>
                        <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.65] text-white/80">
                            From your first hire to a growing team, Ndiara brings the tools and resources you need to manage people with greater confidence.
                        </p>
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <ActionLink href={s.liveUrl} tone="navy">
                                Get Started
                            </ActionLink>
                            <ActionLink href="#employee-management" tone="navy" variant="secondary">
                                Explore Features
                            </ActionLink>
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
                        <div className="media aspect-[4/3] w-full lg:aspect-[3/4]">
                            <Image
                                src={s.image.src}
                                alt={s.image.alt}
                                fill
                                preload
                                fetchPriority="high"
                                sizes="(min-width: 1024px) 460px, 100vw"
                                className="object-cover"
                                style={{ objectPosition: s.image.position }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The challenge */}
            <section className="section bg-white" aria-labelledby="hrm-challenge">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <h2 id="hrm-challenge" className="title-section lg:col-span-6">
                            Managing People Comes With Responsibilities. We Help You Handle Them.
                        </h2>
                        <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-3">
                            <p className="lead">
                                Hiring employees is an important step in growing a business. But with every new team member comes more to manage; employment records, contracts, salaries, leave requests, workplace expectations, and day-to-day administration.
                            </p>
                            <p className="lead">
                                Ndiara HRM helps you bring order to these responsibilities so you can spend less time navigating paperwork and more time supporting your people.
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                        {challenges.map((c) => (
                            <article key={c.t}>
                                <span aria-hidden="true" className="mb-5 block size-2.5 bg-primary" />
                                <h3 className="title-card">{c.t}</h3>
                                <p className="mt-3 leading-relaxed text-muted">{c.d}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-16 max-w-3xl text-xl leading-snug text-navy lg:mt-20">
                        <strong className="font-semibold">The Ndiara Advantage:</strong> Practical tools to help you recruit, organize, manage, and support your team in one place.
                    </p>
                </div>
            </section>

            <Capability
                id="employee-management"
                band
                eyebrow="EMPLOYEE MANAGEMENT"
                title="Your Team, Organized in One Place."
                paras={[
                    "Keep the information you need about your employees accessible and organized.",
                    "Ndiara HRM helps you maintain employee profiles, manage important documents, and keep track of your team throughout their employment journey.",
                    "Whether you're welcoming a new employee, updating their information, or managing a transition, you can handle essential records with greater clarity.",
                ]}
                listTitle="Key capabilities"
                list={[
                    "Digital employee profiles and employment records",
                    "Employee document management",
                    "Onboarding and offboarding checklists",
                    "Attendance and leave management",
                    "Employee information updates and record tracking",
                ]}
                cta="Explore Employee Management"
                image={{
                    src: "/images/pages/hrm-employees-desk-help.jpg",
                    alt: "A colleague in a white t-shirt leans over to help a woman in a beige hijab working at a desktop computer",
                    ratio: "aspect-[4/3] lg:aspect-[16/11]",
                    position: "50% 45%",
                    sizes: "(min-width: 1024px) 560px, 100vw",
                }}
            />

            <Capability
                id="payroll"
                reverse
                eyebrow="PAYROLL MANAGEMENT"
                title="Take the Complexity Out of Payday."
                paras={[
                    "Paying your employees accurately and on time is essential to maintaining trust.",
                    "Ndiara HRM helps you organize salary information, manage payroll records, and prepare employee payments through a more structured process.",
                    "Keep important payroll details together, reduce repetitive administrative work, and maintain clearer records of what your team earns.",
                ]}
                listTitle="Key capabilities"
                list={[
                    "Employee salary and compensation records",
                    "Payroll calculations and deductions",
                    "Payslip preparation",
                    "Payroll history and reporting",
                    "Payment records and approval workflows",
                ]}
                cta="Explore Payroll Management"
                image={{
                    src: "/images/pages/hrm-payroll-blazer-phone.jpg",
                    alt: "A professional woman in a plaid blazer holds her phone at a conference table while a man in a white hat writes notes beside her",
                    ratio: "aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]",
                    position: "50% 12%",
                    sizes: "(min-width: 1024px) 560px, 100vw",
                }}
            />

            {/* Workplace templates: type-led, the library as a two-column index */}
            <section className="section band" aria-labelledby="hrm-templates">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-6">
                            <span className="eyebrow mb-6">NDIARA WORKPLACE TEMPLATES</span>
                            <h2 id="hrm-templates" className="title-section">
                                Professional Workplace Documents, Without Starting From Scratch.
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-14">
                            <p className="text-lg font-semibold leading-relaxed text-navy">
                                Need an employment contract, onboarding checklist, leave policy, or performance review form?
                            </p>
                            <p className="lead">
                                Ndiara Workplace Templates helps you create the documents and processes your business needs without having to develop every resource from the beginning.
                            </p>
                        </div>
                    </div>
                    <h3 className="title-card mt-16 lg:mt-20">Find the Right Resource for Your Workplace</h3>
                    <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {templates.map((t) => (
                            <article key={t.t} className="bg-white p-7 md:p-8">
                                <h4 className="text-[17px] font-medium leading-snug text-navy">{t.t}</h4>
                                <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.d}</p>
                            </article>
                        ))}
                        <article className="bg-navy p-7 md:p-8">
                            <h4 className="font-display text-[2rem] font-medium leading-none text-white">Make It Yours.</h4>
                            <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                                {"Select a template, personalize it with your organization's details, and adapt it to your workplace requirements."}
                            </p>
                        </article>
                    </div>
                    <TextLink href={s.liveUrl} className="mt-10">
                        Explore Workplace Templates
                    </TextLink>
                </div>
            </section>

            {/* AI-assisted recruitment */}
            <section className="section bg-white" aria-labelledby="hrm-recruiter">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
                        <div className="lg:col-span-6">
                            <span className="eyebrow mb-6">INTRODUCING NDIARA AI RECRUITER</span>
                            <h2 id="hrm-recruiter" className="title-section">
                                Every Candidate Has a Story. Go Beyond the CV.
                            </h2>
                            <p className="lead mt-8">
                                {"A CV can tell you where someone has worked. It doesn't always tell you how they think, solve problems, or approach the responsibilities of a role."}
                            </p>
                            <p className="lead mt-4">Ndiara AI Recruiter introduces a more interactive way to screen candidates through AI-assisted, conversational interviews.</p>
                        </div>
                        <div className="media aspect-[3/2] w-full lg:col-span-5 lg:col-start-8">
                            <Image
                                src="/images/pages/hrm-recruitment-microphone.jpg"
                                alt="A woman in a blue blazer and hijab answers questions into a microphone at a workshop table"
                                fill
                                sizes="(min-width: 1024px) 460px, 100vw"
                                className="object-cover object-[55%_40%]"
                            />
                        </div>
                    </div>
                    <h3 className="title-card mt-16 lg:mt-20">A More Thoughtful Way to Screen Candidates</h3>
                    <ol className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {recruiterSteps.map((step) => (
                            <li key={step.n}>
                                <span className="block font-display text-[2.5rem] font-medium leading-none text-primary-ink" aria-hidden="true">
                                    {step.n}
                                </span>
                                <h4 className="mt-3 text-[17px] font-medium leading-snug text-navy">
                                    <span className="sr-only">{step.n} </span>
                                    {step.t}
                                </h4>
                                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-16">
                        <h3 className="title-card lg:col-span-5">Less Repetitive Screening. More Informed Hiring.</h3>
                        <div className="lg:col-span-6 lg:col-start-7">
                            <p className="leading-relaxed text-muted">Ndiara AI Recruiter is designed to support your recruitment process, not replace your judgment.</p>
                            <TextLink href={s.liveUrl} className="mt-4">
                                Discover Ndiara AI Recruiter
                            </TextLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Ndiara HRM: plain text on navy */}
            <section className="section bg-navy" aria-labelledby="hrm-why">
                <div className="wrap">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <h2 id="hrm-why" className="title-section text-white lg:col-span-7">
                            Built for the Realities of Managing People in African Businesses.
                        </h2>
                        <div className="flex flex-col gap-4 lg:col-span-5 lg:pt-3">
                            <p className="text-[1.0625rem] leading-[1.65] text-white/80">
                                Not every business has a dedicated HR department. And even when it does, managing people involves more than maintaining employee records.
                            </p>
                            <p className="text-[1.0625rem] leading-[1.65] text-white/80">
                                Ndiara HRM brings together the tools and practical resources businesses need to establish better workplace processes.
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                        {why.map((w) => (
                            <article key={w.t}>
                                <span aria-hidden="true" className="mb-5 block size-2.5 bg-primary" />
                                <h3 className="text-lg font-medium leading-snug text-white">{w.t}</h3>
                                <p className="mt-3 leading-relaxed text-white/80">{w.d}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="section bg-white" aria-labelledby="hrm-start">
                <div className="wrap">
                    <h2 id="hrm-start" className="title-section">
                        Get Started With Ndiara HRM
                    </h2>
                    <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <li key={step.n} className="card p-7 md:p-8">
                                <span className="block font-display text-[2.5rem] font-medium leading-none text-primary-ink" aria-hidden="true">
                                    {step.n}
                                </span>
                                <h3 className="title-card mt-4 text-lg">
                                    <span className="sr-only">{step.n} </span>
                                    {step.t}
                                </h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-12">
                        <ActionLink href={s.liveUrl}>Get Started</ActionLink>
                    </div>
                </div>
            </section>

            {/* FAQ: native disclosure, so every answer is in the page */}
            <section className="section band" aria-labelledby="hrm-faq">
                <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                    <h2 id="hrm-faq" className="title-section lg:col-span-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-3 lg:col-span-8">
                        {faqs.map((f) => (
                            <details key={f.q} className="group bg-white px-6 md:px-8">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-navy [&::-webkit-details-marker]:hidden">
                                    <h3 className="font-sans text-lg font-medium">{f.q}</h3>
                                    <ChevronDown className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                                </summary>
                                <div className="max-w-2xl pb-6 leading-relaxed text-muted">
                                    {f.a.map((p) => (
                                        <p key={p}>{p}</p>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <ClosingBand
                id="hrm-close"
                afterBand
                title="Build a Better Workplace, Starting With the Right Tools."
                actions={
                    <>
                        <ActionLink href={s.liveUrl} tone="navy">
                            Get Started with Ndiara HRM
                        </ActionLink>
                        <ActionLink href="/" tone="navy" variant="secondary">
                            Explore Ndiara
                        </ActionLink>
                    </>
                }
            >
                <p>From finding the right people to managing their everyday needs, Ndiara HRM helps you bring greater structure to how your business works.</p>
                <p>Explore a more practical approach to recruitment, employee management, payroll, and workplace administration.</p>
            </ClosingBand>

            <SolutionsRail current="hrm" />
        </PageShell>
    );
}
