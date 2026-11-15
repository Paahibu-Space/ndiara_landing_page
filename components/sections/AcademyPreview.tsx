import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACADEMY_URL = "https://guubu.ndiara.africa/";

const learningCategories = [
    {
        title: "Marketing & Customer Growth",
        desc: "Learn practical approaches to attracting customers, building relationships, and growing your brand.",
    },
    {
        title: "Financial Management",
        desc: "Strengthen your skills in pricing, budgeting, managing cash flow, and making informed financial decisions.",
    },
    {
        title: "Business Operations & Supply Chains",
        desc: "Discover how experienced entrepreneurs manage suppliers, inventory, production, and daily business operations.",
    },
    {
        title: "Digital Business & E-Commerce",
        desc: "Learn how to use digital tools to reach customers, sell online, and manage your business more effectively.",
    },
];

export function AcademyPreview() {
    return (
        <section className="section band">
            {/* Ndiara Academy */}
            <div className="wrap grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-6">
                    <span className="eyebrow mb-6">
                        NDIARA ACADEMY
                    </span>
                    <h2 className="title-section mb-8">
                        Learn Today. <br /><span>Grow Your Business Tomorrow.</span>
                    </h2>
                    <p className="lead mb-4">
                        Running a business comes with questions, challenges, and opportunities to learn something new every day.
                    </p>
                    <p className="lead mb-10">
                        Ndiara Academy makes practical entrepreneurship education accessible to African women entrepreneurs through courses, masterclasses, and learning resources covering business management, financial literacy, digital skills, marketing, customer relations, and business growth.
                    </p>
                    <Button asChild className="w-full sm:w-auto">
                        <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer">
                            Explore Ndiara Academy
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </Button>
                </div>

                <div className="card flex flex-col gap-5 p-8 md:p-10 lg:col-span-5 lg:col-start-8 lg:mt-2">
                    <p className="text-xl font-medium leading-snug text-navy md:text-[22px]">
                        At Ndiara, we recognise that women entrepreneurs are not just learners. They are also knowledge holders, innovators, and educators whose experiences offer valuable lessons about what it takes to start, manage, and grow a business.
                    </p>
                    <p className="leading-relaxed text-muted">
                        {"That's why Ndiara Academy brings together industry experts, professional trainers, and experienced women entrepreneurs who create and deliver courses based on their expertise and real-world business experiences. From managing customers and navigating local markets to building successful brands and growing enterprises, our learning content combines professional knowledge with practical insights into what works for African businesses."}
                    </p>
                    <p className="leading-relaxed text-muted">
                        {"Whether you're starting your first business, improving your operations, or preparing to expand, Ndiara Academy gives you access to relevant knowledge, practical skills, and the experiences of women who have walked similar paths."}
                    </p>
                </div>
            </div>

            {/* Featured Masterclasses */}
            <div className="wrap">
                <div className="mt-24 grid grid-cols-1 items-start gap-12 lg:mt-36 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <span className="eyebrow mb-6">
                            FEATURED MASTERCLASSES
                        </span>
                        <h2 className="title-section mb-8">
                            Real Experience. <span>Practical Knowledge.</span>
                        </h2>
                        <p className="lead mb-4">
                            Learn from experienced African women entrepreneurs, business professionals, and industry experts who share practical lessons, proven approaches, and insights from building and managing businesses.
                        </p>
                        <p className="lead mb-12">
                            Explore masterclasses that address the decisions and challenges entrepreneurs face every day, from attracting customers and managing finances to improving operations and expanding into new markets.
                        </p>

                        <h3 className="title-card mb-6">Featured Learning Categories</h3>
                        <div className="mb-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                            {learningCategories.map((category) => (
                                <div key={category.title}>
                                    <h4 className="mb-2 text-[17px] font-medium leading-snug">{category.title}</h4>
                                    <p className="text-[15px] leading-relaxed text-muted">{category.desc}</p>
                                </div>
                            ))}
                        </div>

                        <Button asChild className="w-full sm:w-auto">
                            <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer">
                                Explore Masterclasses
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </a>
                        </Button>
                    </div>

                    {/*
                      Featured masterclass visual: a real photograph from the client's own library.
                      TODO(content): replace with a real featured masterclass thumbnail/video once one exists
                      (course title, the instructor's real name and background). Do not use invented instructors or courses.
                    */}
                    {/* Client photograph: a WiDEI digital business lesson (paahibuspace.org/widei-program).
                        Cropped to the facilitator and learner; keep the focus left of centre. */}
                    <div className="media aspect-[4/5] w-full lg:col-span-5">
                        <Image
                            src="/images/paahibu/widei-business-profile-lesson.jpg"
                            alt="A facilitator shows women entrepreneurs how to set up a business profile on a phone, with a whiteboard listing business name, location, description, catalogue, category and opening hours"
                            fill
                            sizes="(min-width: 1024px) 440px, 100vw"
                            className="object-cover object-[34%_50%]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
