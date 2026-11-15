/*
  The live Ndiara solutions, as one typed source for /solutions, the product pages and their cross-links.

  Copy: every string below is quoted verbatim from the client-approved copy document
  (general_landing.md, "7. Everything You Need to Win" product cards and "6. One Ecosystem" areas).
  Accounts, Payments, Funding and "Growth & Opportunities" are not live and are deliberately absent.
*/

export type SolutionSlug = "ecommerce" | "pos" | "hrm" | "academy" | "community";

export type Solution = {
    slug: SolutionSlug;
    /** Product name as the menu and footer show it. */
    name: string;
    /** The live product. Product pages carry the outbound calls to action. */
    liveUrl: string;
    /** Product card heading (general_landing.md, section 7). */
    heading: string;
    /** Product card paragraphs (general_landing.md, section 7). */
    summary: string[];
    /** Product card features (general_landing.md, section 7). */
    features: string[];
    /** Product card CTA label (general_landing.md, section 7). */
    cta: string;
    /** The ecosystem area it belongs to (general_landing.md, section 6). */
    area: { name: string; verbs: string };
    /** One photograph that stands for the product (also its page's lead image). */
    image: { src: string; alt: string; position: string };
    /** Optional different photograph for the /solutions overview, so neighbouring entries never look alike. */
    overviewImage?: { src: string; alt: string; position: string };
};

export const solutions: Record<SolutionSlug, Solution> = {
    ecommerce: {
        slug: "ecommerce",
        name: "Ndiara E-Commerce",
        liveUrl: "https://ndiara.shop/",
        heading: "Take Your Business Online",
        summary: [
            "Make it easier for customers to discover your products and shop from your business.",
            "Create an online storefront, organize your product listings, and manage customer orders from one place.",
        ],
        features: ["Online Store Creation", "Product & Inventory Management", "Order Management"],
        cta: "Explore E-Commerce",
        area: { name: "Commerce", verbs: "Reach & Sell" },
        image: {
            src: "/images/pages/ecommerce-hero-woman-phone.jpg",
            alt: "A woman in a green hijab and glasses steadies her phone on a handheld camera rig during a training session",
            position: "66% 50%",
        },
    },
    pos: {
        slug: "pos",
        name: "Ndiara POS",
        liveUrl: "https://pos.ndiara.africa/",
        heading: "Make Every Sale Count",
        summary: [
            "Keep track of your daily sales and manage transactions with greater ease.",
            "Ndiara POS helps you organise sales records, monitor products, and better understand how your business is performing.",
        ],
        features: ["Sales Tracking", "Inventory Management", "Transaction Records"],
        cta: "Explore Ndiara POS",
        area: { name: "Business Tools", verbs: "Organize & Operate" },
        image: {
            src: "/images/pages/pos-hero-women-phones.jpg",
            alt: "Two women in headwraps lean in together over their mobile phones during a business training session",
            position: "30% 45%",
        },
    },
    hrm: {
        slug: "hrm",
        name: "Ndiara HRM",
        liveUrl: "https://hrm.ndiara.africa/",
        heading: "Manage Your Team With Confidence",
        summary: [
            "As your business grows, managing people becomes just as important as managing products and sales.",
            "Ndiara HRM helps businesses organise employee information and simplify essential human resource processes.",
        ],
        features: ["Employee Records", "Staff Management", "HR Administration"],
        cta: "Explore Ndiara HRM",
        area: { name: "Business Tools", verbs: "Organize & Operate" },
        image: {
            src: "/images/pages/hrm-hero-documents-table.jpg",
            alt: "Colleagues around a meeting table read through bound documents together",
            position: "40% 55%",
        },
    },
    academy: {
        slug: "academy",
        name: "Ndiara Academy",
        liveUrl: "https://guubu.ndiara.africa/",
        heading: "Learn Skills That Move Your Business Forward",
        summary: [
            "Build practical knowledge in entrepreneurship, digital marketing, financial literacy, and business management.",
            "Learn at your own pace and apply new skills to the everyday realities of running a business.",
        ],
        features: ["Entrepreneurship Education", "Digital Business Skills", "Learning Resources"],
        cta: "Explore Ndiara Academy",
        area: { name: "Education", verbs: "Learn & Apply" },
        image: {
            src: "/images/pages/academy-hero-training-hall.jpg",
            alt: "A woman in an orange blazer walks down the aisle of a training hall filled with seated women",
            position: "50% 45%",
        },
        overviewImage: {
            src: "/images/pages/academy-speaker-microphone.jpg",
            alt: "A woman with a microphone speaks to a workshop as seated participants listen",
            position: "50% 50%",
        },
    },
    community: {
        slug: "community",
        name: "Ndiara Community",
        liveUrl: "https://nhanga.ndiara.africa/",
        heading: "You Don't Have to Build Alone.",
        summary: [
            "Connect with other entrepreneurs who understand your journey.",
            "Share experiences, learn from others, exchange ideas, and discover opportunities to collaborate.",
        ],
        features: ["Entrepreneur Networking", "Knowledge Sharing", "Community Connections"],
        cta: "Join the Community",
        area: { name: "Community", verbs: "Connect & Collaborate" },
        image: {
            src: "/images/pages/community-hero-celebration.jpg",
            alt: "A woman in a yellow headwrap presses her hands together with joy as the women around her in a training room smile and clap",
            position: "30% 55%",
        },
    },
};

export const solutionOrder: SolutionSlug[] = ["ecommerce", "pos", "hrm", "academy", "community"];

export const solutionPath = (slug: SolutionSlug) => `/solutions/${slug}`;
