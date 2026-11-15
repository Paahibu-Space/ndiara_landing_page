import type { Metadata } from "next";
import { Teko, Ubuntu } from "next/font/google";
import "./globals.css";

// The paahibuspace.org families, shared with the Ndiara product sites.
// Display: Teko, condensed poster face, for h1/h2, short uppercase eyebrows and big numerals only.
const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Text: Ubuntu, for body copy, h3/h4, buttons, nav, cards and every other UI label.
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ndiara - Your Business Best Friend",
  description: "More than just an app—a movement for African women. Manage your finances, access funding, and grow your network in one premium ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The font variables sit on <html> so the :root tokens in globals.css (--font-sans, --font-display) can resolve them.
    <html lang="en" data-scroll-behavior="smooth" className={`${teko.variable} ${ubuntu.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
