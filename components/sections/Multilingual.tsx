// TODO(content): verify that "60+ Languages" support is genuinely available before launch
// (the doc asks to show this label only if that level of support exists, and to distinguish
// fully localised languages from translation-supported ones).
// TODO(content): wire these options to real language switching (not built yet; no i18n in this app).
const languages = ["English", "Français", "Kiswahili", "60+ Languages"];

export function Multilingual() {
    return (
        <section className="section bg-white">
            <div className="wrap grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
                <div className="lg:col-span-6 lg:row-start-1">
                    <span className="eyebrow mb-6 uppercase">
                        Built with and for Africa
                    </span>
                    <h2 className="title-section">
                        Business Has No <span>Borders</span>.
                    </h2>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:pt-12">
                    <p className="lead">
                        Your language should never stand between you and the opportunities to grow your business.
                    </p>
                    <p className="lead">
                        Ndiara brings business tools, entrepreneurship education, and a community of entrepreneurs closer to women across Africa through multilingual access.
                    </p>
                    <p className="lead">
                        {"Whether you're managing your business, learning a new skill, or connecting with entrepreneurs beyond your country, Ndiara helps you access the resources and opportunities you need in a language you understand."}
                    </p>
                    <p className="text-lg font-semibold leading-relaxed text-navy">
                        Because wherever you are in Africa, your ideas, knowledge, and ambitions deserve room to grow.
                    </p>
                </div>

                <div className="mt-6 lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:self-end">
                    <h3 className="mb-5 font-sans text-sm font-semibold text-muted">
                        Available Languages
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5">
                        {languages.map((lang, i) => (
                            <span key={lang} className="inline-flex items-center gap-2.5 whitespace-nowrap">
                                <span className="tag px-4 text-base font-medium">
                                    {lang}
                                </span>
                                {i < languages.length - 1 && (
                                    <span aria-hidden="true" className="text-line-strong"> | </span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
