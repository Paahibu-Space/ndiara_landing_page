import { ActionLink, cutTopRight } from "@/components/pages/kit";

const NHANGA = "https://nhanga.ndiara.africa/";

/*
  The honest invitation that closes the stories pages: the orange field with navy text (5:1).
  Copy: community.md, "Section 10: Member Stories", verbatim.
*/
/** `ground` is the colour of the section above, shown in the cut corner. */
export function ShareStory({ ground = "white" }: { ground?: "white" | "band" | "navy" }) {
    return (
        <div className={ground === "band" ? "band" : ground === "navy" ? "bg-navy" : "bg-white"}>
            <section className="relative overflow-hidden bg-primary" style={cutTopRight(88)} aria-labelledby="share-story-title">
                <div className="wrap grid grid-cols-1 gap-10 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
                    <h2
                        id="share-story-title"
                        className="font-display text-[clamp(3.25rem,1.6rem+4.4vw,6rem)] font-medium leading-[0.9] tracking-[-0.01em] text-navy lg:col-span-6"
                    >
                        Every Woman Has a Story.
                    </h2>
                    <div className="flex flex-col gap-4 text-[1.0625rem] leading-[1.65] text-navy lg:col-span-5 lg:col-start-8 lg:pt-3">
                        <p>
                            Some stories are about starting over. Others are about taking a chance, making a difficult decision, learning a new skill or keeping a business going through uncertain times.
                        </p>
                        <p>{"And sometimes, the most useful lessons come from the things that didn't work out."}</p>
                        <p className="font-semibold">Your story might be just what another woman needs to hear.</p>
                        <div className="mt-4">
                            <ActionLink href={NHANGA}>Share Your Story</ActionLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
