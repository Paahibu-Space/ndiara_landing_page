/*
  Success stories content source.

  Rules (from the approved "Real Stories, Real Growth" guidance in general_landing.md):
  - Only real, verified stories, in the entrepreneur's own published words. Never invent or edit a quotation.
  - Attribute exactly as the source does and link to the source.
  - The entrepreneur is the central character; growth looks different for every entrepreneur.
  - A photograph only when it is a real photograph of her, published with consent.

  The two stories below are quoted verbatim from Paahibu Space's 2024 Annual Report ("MSME Spotlight")
  and its story pages on paahibuspace.org. They are stories from Paahibu Space programmes (WiDEI and WiDiB),
  not claims about Ndiara users.

  To add a story, add one object to `stories`. /success-stories lists it and /success-stories/<slug> renders it.
*/

/* Story themes: the filter labels proposed in the approved copy. */
export type StoryTheme = "Selling Online" | "Business Management" | "Learning" | "Community" | "Growth";

export type StorySource = { label: string; url: string };

export type Story = {
    slug: string;
    name: string;
    role: string;
    business: string;
    /** How the source describes the business, quoted. */
    businessNote?: string;
    /** The programme(s) she names in her own words. */
    programme: string;
    theme: StoryTheme;
    /** A short line from her quotation (the excerpt her published story page uses). */
    pull: string;
    /** Her full published quotation, paragraph by paragraph, verbatim. */
    quote: string[];
    /** Real photograph of her, only with consent. None are available at a usable size yet. */
    portrait?: { src: string; alt: string };
    sources: StorySource[];
};

export const ANNUAL_REPORT_2024 = "https://api.paahibuspace.org/assets/uploads/annual-reports/1767983097-2024-annual-report.pdf";

export const stories: Story[] = [
    {
        slug: "sherifa-fuseini-sheady-enterprise",
        name: "Sherifa Fuseini",
        role: "CEO",
        business: "Sheady Enterprise",
        businessNote: "a Ghanaian beauty brand celebrating African heritage",
        programme: "WiDEI & WiDiB",
        theme: "Business Management",
        pull: "The training completely transformed how I run my business. I learned to manage operations efficiently using digital tools and even started designing my own business flyers, saving costs I used to spend on hiring designers.",
        quote: [
            "Before joining the WiDEI & WiDiB trainings by Paahibu Space, managing Sheady Enterprise was challenging. My business focuses on refining Shea butter into amazing products like body butters, hair oils, and other organic products.",
            "The training completely transformed how I run my business. I learned to manage operations efficiently using digital tools and even started designing my own business flyers, saving costs I used to spend on hiring designers.",
            "Since then, I’ve acquired new customers and significantly improved my business branding, marketing, and operations. Thanks to Paahibu Space and the WiDEI & WiDiB Initiative, Sheady Enterprise is now thriving and reaching more people than ever before.",
        ],
        sources: [
            { label: "Paahibu Space 2024 Annual Report", url: ANNUAL_REPORT_2024 },
            { label: "paahibuspace.org", url: "https://www.paahibuspace.org/stories/sherifa-fuseini-story" },
        ],
    },
    {
        slug: "vivian-ackon-divine-apparel",
        name: "Vivian Ackon",
        role: "CEO",
        business: "Divine Apparel",
        businessNote: "a fashion brand that specializes in quality men's wears",
        programme: "WiDiB & WiDEI",
        theme: "Growth",
        pull: "With Paahibu Space’s support, we branded, including a new logo, and gained digital marketing, storytelling, branding and customer engagement skills which have helped transformed how we connect with clients.",
        quote: [
            "Divine Apparel specializes in quality men's wears. It was borne during my participation in the WiDiB & WiDEI programs. The training helped me to create a business plan that guides our operations. With Paahibu Space’s support, we branded, including a new logo, and gained digital marketing, storytelling, branding and customer engagement skills which have helped transformed how we connect with clients. We’ve since enhanced our online presence and now offer personalized engravings on items like belts, watches, and wallets, adding a special touch for our customers.",
        ],
        sources: [
            { label: "Paahibu Space 2024 Annual Report", url: ANNUAL_REPORT_2024 },
            { label: "paahibuspace.org", url: "https://www.paahibuspace.org/stories/vivian-ackon-story" },
        ],
    },
];

/* The programmes as Paahibu Space's 2024 Annual Report describes them, quoted. */
export const programmes: { name: string; text: string }[] = [
    {
        name: "WiDiB Initiative",
        text: "This 5-week virtual program is designed to structure women-owned MSMEs, social impact initiatives and female freelancers in Africa's business and entrepreneurial sector. It provides small businesses, social impact initiatives and freelancers with knowledge and skills on how to leverage digital tools and support services to address challenges in operations, product/service development, career advancement and team structuring.",
    },
    {
        name: "Women in Digital Economy Initiative - WiDEI",
        text: "WiDEI empowers small businesses and community-led development initiatives owned by rural and marginalized women to build and scale sustainable ventures by enhancing operations, accessing financial resources and knowledge, digital tools and a nurturing inclusive network, creating opportunities for women to participate and contribute actively to the digital economy as equal creators and consumers of technology.",
    },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
