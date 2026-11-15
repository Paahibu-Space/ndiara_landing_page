/*
  Blog content source.

  HOW TO ADD A POST
  Add one object to `posts` below. The /blog index lists it (newest first) and /blog/<slug> renders it
  with the post template; nothing else needs to change. Only publish real, approved articles: no placeholder posts.

  Example (a commented schema, not a post):

  {
      slug: "track-your-daily-sales",               // URL: /blog/track-your-daily-sales (lowercase, hyphens)
      title: "Article title",
      excerpt: "One or two sentences shown on the blog index and used as the page description.",
      date: "2026-12-01",                           // ISO date (YYYY-MM-DD)
      category: "Business & Entrepreneurship",      // one of BlogCategory
      author: { name: "Author's real name", role: "Optional role" },
      cover: { src: "/images/blog/<file>.jpg", alt: "Accurate description of the photograph" }, // optional
      body: [
          { type: "paragraph", text: "Opening paragraph." },
          { type: "heading", text: "A section heading" },
          { type: "list", items: ["First point", "Second point"] },
          { type: "quote", text: "A quotation in the speaker's own words.", cite: "Who said it" },
          { type: "image", src: "/images/blog/<file>.jpg", alt: "Accurate description" },
      ],
  }
*/

/* Categories recommended in the approved Academy copy (edtech.md, "Recommended resource categories"). */
export type BlogCategory =
    | "Business & Entrepreneurship"
    | "Digital Skills & Technology"
    | "Careers & Professional Growth"
    | "People & Workplace"
    | "Finance & Business Growth"
    | "Learner & Entrepreneur Stories"
    | "Guides & Templates";

export type BlogBlock =
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "list"; items: string[] }
    | { type: "quote"; text: string; cite?: string }
    | { type: "image"; src: string; alt: string };

export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    /** ISO date, YYYY-MM-DD */
    date: string;
    category: BlogCategory;
    author?: { name: string; role?: string };
    cover?: { src: string; alt: string };
    body: BlogBlock[];
};

/** Ndiara's own posts. None are published yet. */
export const posts: BlogPost[] = [];

/**
 * Articles published elsewhere by Paahibu Space, listed on /blog with a link to the original.
 * Each entry is copied from its source page as published; nothing is rewritten.
 */
export type ExternalArticle = {
    title: string;
    /** ISO date, as the source shows it */
    date: string;
    /** The source's own category label */
    category: string;
    url: string;
    source: string;
    /** Only the source's own image */
    image?: { src: string; alt: string };
};

export const paahibuArticles: ExternalArticle[] = [
    {
        // https://www.paahibuspace.org/blog (checked 15 Nov 2026): "Entrepreneurship", Jan 9, 2026.
        title: "5 Ways Tech Entrepreneurship is Changing Lives in Rural Areas",
        date: "2026-01-09",
        category: "Entrepreneurship",
        url: "https://www.paahibuspace.org/blog/5-ways-tech-entrepreneurship-is-changing-lives-in-rural-areas",
        source: "paahibuspace.org",
        image: {
            // The article's own cover image (api.paahibuspace.org/assets/uploads/media-uploader/program21717976065.jpg).
            src: "/images/pages/blog-tech-entrepreneurship-cover.jpg",
            alt: "Women work on laptops at shared tables during a Paahibu Space training session",
        },
    },
];

export const sortedPosts = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
